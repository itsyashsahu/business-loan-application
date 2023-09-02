import type { NextApiRequest, NextApiResponse } from "next";
import dummyData from "../../dummyData/data.json";
import { SheetItem } from "@/interfaces/SheetItem";

interface GetBalanceSheetResponse {
  sheet: SheetItem[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetBalanceSheetResponse>
) {
  if (req.method === "GET") {
    const { userId } = req.query;
    console.log("Balance Sheet Fetched for the User - ", userId);
    // Currently Dummy Data is Passed as Response
    // TODO: The Accounting software will be integrated here
    res.status(200).json(dummyData);
  } else {
    res.status(405).end();
  }
}
