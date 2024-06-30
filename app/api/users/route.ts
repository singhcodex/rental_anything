import User from "@/models/User";

export default async (req, res) => {


    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const { username, passwordHash, fullName, email, phoneNumber, address, userType } = req.body;

                if (!username || !passwordHash || !email || !userType) {
                    return res.status(400).json({ error: 'Missing required fields' });
                }

                const user = new User({
                    username,
                    passwordHash,
                    fullName,
                    email,
                    phoneNumber,
                    address,
                    userType,
                    createdAt: new Date(),
                });

                await user.save();

                res.status(201).json({ success: true, data: user });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        default:
            res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
            break;
    }
};
