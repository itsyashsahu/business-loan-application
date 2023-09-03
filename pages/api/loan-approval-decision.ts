import type { NextApiRequest, NextApiResponse } from "next";

type LoanApprovalResponse = {
  loanStatus?: boolean;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoanApprovalResponse>
) {
  if (req.method === "POST") {
    const { businessDetails, preAssessment } = req.body as {
      preAssessment: number;
      businessDetails: {
        name: string;
        yearEstablished: number;
        profitOrLoss: number;
      };
    };
    if (!(businessDetails && preAssessment)) {
      return res.status(501).json({ error: "Invalid request" });
    }

    // Dummy Logic to decide the loan approval
    // TODO: The Decision Engine will be integrated here
    // simulation of the Decision Engine
    const randomValue: boolean = Math.random() <= 0.5;

    res.status(200).json({ loanStatus: randomValue });
  } else {
    res.status(405).end();
  }
}
