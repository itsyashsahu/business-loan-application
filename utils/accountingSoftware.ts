import axios from "axios";

const fetchBalanceSheet = async (userId: string) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_PLATFORM_INTEGRATION_URL}/balance-sheet?userId=${userId}`
    );
    return result.data.sheet;
  } catch (error) {
    console.log(error);
    return { error: "Unable to fetch balance sheet from Accounting provider" };
  }
};
export { fetchBalanceSheet };
