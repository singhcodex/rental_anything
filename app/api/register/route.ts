
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import {NextResponse} from "next/server";
import {dbConnect} from "@/lib/dbConnect";
import {createUser} from "@/app/queries/users";

export async function POST(req) {
    const conn = await dbConnect();
    console.log(conn);
    const { username, password, fullName, email, phoneNumber, address, userType } = await req.json();

    /*if (!username || !password || !email) {
        return NextResponse.json({ message: 'Missing required fields' },{ status: 400 });
    }*/

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, {status: 400});
    }

    ///const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
        username,
        password,
        fullName,
        email,
        phoneNumber,
        address,
        userType,
        createdAt: new Date(),
    };
    try {
        await createUser(newUser);

        return NextResponse.json({ message: 'user register' }, {status: 201});
    }catch (error){
        return NextResponse.json({message: "An error occurred while register user"}, {status: 500})
    }


}
