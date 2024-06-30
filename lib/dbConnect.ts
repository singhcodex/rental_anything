import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

export async function dbConnect(){
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        return conn;
    }catch (e){
        throw new Error(e);
    }
}
