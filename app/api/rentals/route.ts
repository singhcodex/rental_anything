import client from "@/lib/dbConnect";
import Rental from "@/models/Rental";

export default async (req, res) => {
    await client.connect();

    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const { vehicleId, renterId, startDate, endDate, totalCost, status } = req.body;

                if (!vehicleId || !renterId || !startDate || !endDate || !totalCost || !status) {
                    return res.status(400).json({ error: 'Missing required fields' });
                }

                const rental = new Rental({
                    vehicleId,
                    renterId,
                    startDate,
                    endDate,
                    totalCost,
                    status,
                    createdAt: new Date(),
                });

                await rental.save();

                res.status(201).json({ success: true, data: rental });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        default:
            res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
            break;
    }
};
