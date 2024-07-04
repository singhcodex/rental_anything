import prisma from "../prismaClient";
import {NextRequest, NextResponse} from "next/server";
import bcrypt from "bcryptjs";



export async function POST(req:NextRequest) {

    try {
        const { username, password, fullName, email } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        let user = await prisma.user.create({
            data:{password: hashedPassword,fullName:fullName, email: email,username: username},
        });
        if(user){
            return NextResponse.json({message:'user created', status: 200});
        }else{
            return NextResponse.json({message:'error in user create', status:400});
        }

    }catch (error){
        return NextResponse.json({message:'error in db connect', status:500});
    }
}
