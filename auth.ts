import NextAuth, { User } from "next-auth";
import { db } from "./db/drizzle";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/validations";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      authorize: async (credentials) => {
        console.log("authorize", credentials);
        const { email, password } = await signInSchema.parseAsync(credentials);

        if (!email || !password) return null;

        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, email.toString()))
          .limit(1);

        if (user.length === 0) return null;

        const isPasswordValid = await compare(
          password.toString(),
          user[0].password
        );
        if (!isPasswordValid) return null;

        return {
          id: user[0].id,
          email: user[0].email,
          name: user[0].name,
          role: user[0].role,
        } as User;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }

      return token;
    },
    async session({ session }) {
      if (session.user) {
        session.user.id = session.user.id as string;
        session.user.name = session.user.name as string;
      }

      return session;
    },
  },
});
