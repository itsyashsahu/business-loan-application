import type { NextApiRequest, NextApiResponse } from "next";
import dummyData from "../../dummyData/data.json";
import { SheetItem } from "@/interfaces/SheetItem";

interface GetBalanceSheetResponse {
  sheet?: SheetItem[];
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetBalanceSheetResponse>
) {
  if (req.method === "GET") {
    const { userId, provider } = req.query as {
      userId: string;
      provider: string;
    };
    if (!(userId && (provider === "MYOB" || provider === "xero"))) {
      return res.status(400).json({ error: "Invalid request" });
    }
    // Currently Dummy Data is Passed as Response
    // TODO: The Accounting software will be integrated here
    res.status(200).json(dummyData);
  } else {
    res.status(405).end();
  }
}
