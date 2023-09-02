import SheetItem from "@/interfaces/SheetItem";

export default function calculatePreAssessment(
  sheet: SheetItem[],
  loanAmount: number
): number {
  // Get the data for the last 12 months
  const last12MonthsData = sheet.slice(0, 12);

  const totalAssetValue = last12MonthsData.reduce(
    (acc, item) => acc + item.assetsValue,
    0
  );
  const averageAssetValue = totalAssetValue / last12MonthsData.length;

  const hasMadeProfit = last12MonthsData.some((item) => item.profitOrLoss > 0);

  if (hasMadeProfit) {
    return 60;
  } else if (averageAssetValue > loanAmount) {
    return 100;
  } else {
    return 20;
  }
}
