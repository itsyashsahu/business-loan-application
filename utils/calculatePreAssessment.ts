import SheetItem from "@/interfaces/SheetItem";

export default function calculatePreAssessment(
  sheet: SheetItem[],
  loanAmount: number
): number {
  
  const currentDate = new Date();

  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setMonth(currentDate.getMonth() - 11);

  const last12MonthsData = sheet.filter((item) => {
    const itemDate = new Date(item.year, item.month - 1);
    return itemDate >= twelveMonthsAgo && itemDate <= currentDate;
  });

  const totalAssetValue = last12MonthsData.reduce(
    (acc, item) => acc + item.assetsValue,
    0
  );
  const averageAssetValue = totalAssetValue / last12MonthsData.length;

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
