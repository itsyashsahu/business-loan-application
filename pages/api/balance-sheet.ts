// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SheetItem from "@/interfaces/SheetItem";
import { fetchBalanceSheet } from "@/utils/accountingSoftware";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  balanceSheet?: {
    sheet: SheetItem[];
  };
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const { userId, provider } = req.query as {
        userId: string;
        provider: string;
      };
      if (!(userId && (provider === "MYOB" || provider === "xero"))) {
        return res.status(400).json({ error: "Invalid request" });
      }
      const result = await fetchBalanceSheet(userId, provider);
      if (result.error) {
        return res.status(501).json({ error: result.error });
      }
      res.status(200).json({ balanceSheet: result });
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
