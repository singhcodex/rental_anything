import client  from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import {NextResponse} from "next/server";

export async function POST(req, res) {
    await client.connect();

    const { username, password, fullName, email, phoneNumber, address, userType } = await req.json();

    if (!username || !password || !email || !userType) {
        return NextResponse.json({ error: 'Missing required fields' },{ status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

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

    await user.create();

    return NextResponse.json({ success: true, data: user }, { status: 201 });
}
