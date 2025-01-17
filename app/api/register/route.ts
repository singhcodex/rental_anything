import { connectToDb } from "@/lib/db";
import prisma from "@/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { username, email, password } = await req.json();

    if (!username || !password || !email) {
      return NextResponse.json(
        { message: "invalid data request" },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDb();

    const userExist = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userExist) {
      return NextResponse.json({
        message: `User with this email ${email} already exist`,
        status: 400,
      });
    }
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "user not created", status: 400 });
    }
    return NextResponse.json({
      message: "User Created Successfull",
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
