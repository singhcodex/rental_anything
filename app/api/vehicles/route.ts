import Vehicle from "@/models/Vehicle";
export default async (req, res) => {

    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const { ownerId, type, make, model, year, color, licensePlate, vin, locationId, pricePerDay, status, description } = req.body;

                if (!ownerId || !type || !make || !model || !year || !locationId || !pricePerDay || !status) {
                    return res.status(400).json({ error: 'Missing required fields' });
                }

                const vehicle = new Vehicle({
                    ownerId,
                    type,
                    make,
                    model,
                    year,
                    color,
                    licensePlate,
                    vin,
                    locationId,
                    pricePerDay,
                    status,
                    description,
                    createdAt: new Date(),
                });

                await vehicle.save();

                res.status(201).json({ success: true, data: vehicle });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        default:
            res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
            break;
    }
};
