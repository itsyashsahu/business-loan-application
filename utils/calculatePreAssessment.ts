import SheetItem from "@/interfaces/SheetItem";

export default function calculatePreAssessment(
  sheet: SheetItem[],
  loanAmount: number
): number {
  const currentDate = new Date();

  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setMonth(currentDate.getMonth() - 11); // getMonth return as per zero based indexing

  const last12MonthsData = sheet.filter((item) => {
    const itemDate = new Date(item.year, item.month - 1);
    return itemDate >= twelveMonthsAgo && itemDate <= currentDate;
  });

  const totalAssetValue = last12MonthsData.reduce(
    (acc, item) => acc + item.assetsValue,
    0
  );
  let averageAssetValue = totalAssetValue / last12MonthsData.length;
  // since both can be zero the result will be nan so considering the averageAssetValue to be zero in that case
  if (isNaN(averageAssetValue)) {
    averageAssetValue = 0;
  }

  let totalPnL = last12MonthsData.reduce(
    (acc, item) => acc + item.profitOrLoss,
    0
  );

  if (averageAssetValue > loanAmount) {
    return 100;
  } else if (totalPnL > 0) {
    return 60;
  } else {
    return 20;
  }
}
