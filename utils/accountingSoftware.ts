import axios from "axios";

const fetchBalanceSheet = async (userId: string, provider: "MYOB" | "xero") => {
  try {
    const url = `${process.env.PLATFORM_INTEGRATION_URL}/api/balance-sheet?userId=${userId}&provider=${provider}`;
    console.log("🚀 ~ fetchBalanceSheet ~ url:", url);
    const result = await axios.get(url);
    return result.data.sheet;
  } catch (error) {
    console.log(error);
    return { error: "Unable to fetch balance sheet from Accounting provider" };
  }
};
export { fetchBalanceSheet };
