import { NextApiRequest, NextApiResponse } from "next";
import emailHandler from '../../src/app/middleware/emailHander'; 

export default async function sendMail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const option = req.body;
            await emailHandler(option);
            res.status(200).json({ message: "Email sent successfully" });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}