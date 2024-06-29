import client from "@/lib/dbConnect";
import Payment from "@/models/Payment";
export default async (req, res) => {
    await client.connect();

    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const { rentalId, amount, paymentMethod, status } = req.body;

                if (!rentalId || !amount || !paymentMethod || !status) {
                    return res.status(400).json({ error: 'Missing required fields' });
                }

                const payment = new Payment({
                    rentalId,
                    amount,
                    paymentDate: new Date(),
                    paymentMethod,
                    status,
                });

                await payment.save();

                res.status(201).json({ success: true, data: payment });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        default:
            res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
            break;
    }
};
