import CredentialsProvider from "next-auth/providers/credentials";

import { compare } from "bcrypt";
import prisma from "../../../../prisma";

const authOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/login" },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        // console.log({ credentials });

        /* GET User details */
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.username,
          },
        });
        // console.log(user);

        if (user) {
          console.log("USER FOUND");
          const passwordCorrect = compare(credentials.password, user.password);

          console.log(passwordCorrect); // True or False

          if (passwordCorrect) {
            return {
              id: user.id,
              name: user.username,
              email: user.email,
            };
          }
        }

        console.log("USER NOT FOUND");
        return null;
      },
    }),
  ],
};

export default authOptions;
