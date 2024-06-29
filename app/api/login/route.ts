
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import client from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(req, res) {
    await client.connect();

    const { email, password } = await req.json();

    if (!email || !password) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 400 });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordMatch) {
        return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 400 });
    }

    const token = jwt.sign(
        { userId: user._id, email: user.email, userType: user.userType },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return new Response(JSON.stringify({ success: true, token }), { status: 200 });
}
