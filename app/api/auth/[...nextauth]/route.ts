import NextAuth from "next-auth";
const bcrypt = require('bcrypt');
import authOptions from "./authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };