import axios from "axios";

interface DecisionRequest {
  businessDetails: BusinessDetails;
  preAssessment: number;
}
const fetchDecision = async (decisionRequest: DecisionRequest) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_PLATFORM_INTEGRATION_URL}/loan-approval-decision`,
      decisionRequest
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return { error: "Unable to fetch balance sheet from Accounting provider" };
  }
};
export { fetchDecision };
