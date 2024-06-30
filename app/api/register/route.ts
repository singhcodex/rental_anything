import client  from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import {NextResponse} from "next/server";

export async function POST(req) {
    await client.connect();

    try {
        const { username, password, fullName, email, phoneNumber, address, userType } = await req.json();

        /*if (!username || !password || !email) {
            return NextResponse.json({ message: 'Missing required fields' },{ status: 400 });
        }*/

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        await User.create({
            username,
            password: passwordHash,
            fullName,
            email,
            phoneNumber,
            address,
            userType,
            createdAt: new Date(),
        });

        return NextResponse.json({ message: 'user register' }, { status: 201 });
    }catch (error){
        return NextResponse.json({message: "An error occurred while register user"}, {status: 500})
    }


}
