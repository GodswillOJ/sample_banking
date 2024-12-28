import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "transactions.json");

  if (req.method === "GET") {
    if (fs.existsSync(filePath)) {
      const transactions = JSON.parse(fs.readFileSync(filePath, "utf8"));
      res.status(200).json(transactions); // Return transactions
    } else {
      res.status(404).json({ message: "Transactions file not found" });
    }
  } else if (req.method === "POST") {
    const newTransaction = req.body; // Transaction data sent in the request body

    if (!newTransaction) {
      return res.status(400).json({ message: "Transaction data is required" });
    }

    if (fs.existsSync(filePath)) {
      // Read the current transactions
      const transactions = JSON.parse(fs.readFileSync(filePath, "utf8"));
      // Append the new transaction
      transactions.push(newTransaction);

      // Save the updated transactions
      fs.writeFileSync(filePath, JSON.stringify(transactions, null, 2));

      return res.status(201).json({ message: "Transaction added successfully" });
    } else {
      // If the file doesn't exist, create it with the new transaction
      fs.writeFileSync(filePath, JSON.stringify([newTransaction], null, 2));
      return res.status(201).json({ message: "Transaction added successfully" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
