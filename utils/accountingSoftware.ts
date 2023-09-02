import axios from "axios";

const fetchBalanceSheet = async (userId: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_PLATFORM_INTEGRATION_URL}/balance-sheet?userId=${userId}`;
    const result = await axios.get(url);
    console.log("🚀 ~ fetchBalanceSheet ~ url:", url);
    return result.data.sheet;
  } catch (error) {
    console.log(error);
    return { error: "Unable to fetch balance sheet from Accounting provider" };
  }
};
export { fetchBalanceSheet };
