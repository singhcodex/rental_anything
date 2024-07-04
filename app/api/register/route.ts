
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import {NextResponse} from "next/server";
import {dbConnect} from "@/lib/dbConnect";

export async function POST(req,res) {
    await dbConnect();
    const { username, password, fullName, email } = await req.json();

    /*if (!username || !password || !email) {
        return NextResponse.json({ message: 'Missing required fields' },{ status: 400 });
    }*/

    /*const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, {status: 400});
    }*/


    const newUser = new User({
        username,
        password,
        fullName,
        email,
    });

    try {
        console.log('entering try block');
        await newUser.save();
        return NextResponse.json({ message: 'user register' }, {status: 201});
    }catch (error){
        console.log({error});
        return NextResponse.json({message: "An error occurred while register user"}, {status: 500})
    }


}
