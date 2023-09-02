// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { fetchBalanceSheet } from "@/utils/accountingSoftware";
import { fetchDecision } from "@/utils/decisionEngine";
import calculatePreAssessment from "@/utils/calculatePreAssessment";

type Data = {
  approvalStatus?: boolean;
  error?: string;
};

interface LoanRequest {
  loanAmount: number;
  businessDetails: BusinessDetails;
  userId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("request.body", req.body);
    const { loanAmount, businessDetails }: LoanRequest = req.body;

    // Get this value form the token
    const userId = "defaultUserId";

    // const loanAmount = 10000; // Replace with the actual loan amount
    // const businessDetails = {
    //   name: "test",
    //   yearEstablished: 2010,
    //   profitOrLoss: 1000,
    // };
    try {
      const sheet = await fetchBalanceSheet(userId);
      if (sheet.error) {
        return res.status(501).json({ error: sheet.error });
      }
      const preAssessment = calculatePreAssessment(sheet, loanAmount);
      const decision = await fetchDecision({
        businessDetails,
        preAssessment,
      });
      res.status(200).json({ approvalStatus: decision });
    } catch (error) {
      console.log(error);
      res.status(501).json({
        error: "Unable to fetch balance sheet from Accounting provider",
      });
    }
  } else {
    res.status(405).end();
  }
}
