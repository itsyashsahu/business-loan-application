// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { fetchBalanceSheet } from "@/utils/accountingSoftware";
import { fetchDecision } from "@/utils/decisionEngine";
import calculatePreAssessment from "@/utils/calculatePreAssessment";

type Data = {
  approvalStatus?: boolean;
  error?: string;
  preAssessment?: number;
};

interface LoanRequest {
  loanAmount: number;
  userId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("request.body", req.body);
    const { loanAmount }: LoanRequest = req.body;
    if (!(loanAmount && loanAmount > 0)) {
      return res.status(501).json({ error: "Invalid Request" });
    }
    // Get this value form the token
    const userId = "defaultUserId";
    // get the preferred accounting provider of the user from database
    const provider = "MYOB";

    // These Business details will be fetched from the Database / Accounting provider
    const businessDetails = {
      name: "test",
      yearEstablished: 2010,
      profitOrLoss: 1000,
    };
    try {
      const sheet = await fetchBalanceSheet(userId, provider);
      if (sheet.error) {
        return res.status(501).json({ error: sheet.error });
      }
      const preAssessment = calculatePreAssessment(sheet, loanAmount);

      const decision = await fetchDecision({
        businessDetails,
        preAssessment,
      });

      res.status(200).json({ approvalStatus: decision, preAssessment });
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
