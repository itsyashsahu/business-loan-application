import type { NextApiRequest, NextApiResponse } from "next";

type LoanApprovalResponse = {
  loanStatus: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoanApprovalResponse>
) {
  if (req.method === "POST") {
    const detailsForDecisionEngine = req.body;
    // Dummy Logic to decide the loan approval
    // TODO: The Decision Engine will be integrated here
    const randomValue: boolean = Math.random() <= 0.5;

    res.status(200).json({ loanStatus: randomValue });
  } else {
    res.status(405).end();
  }
}
