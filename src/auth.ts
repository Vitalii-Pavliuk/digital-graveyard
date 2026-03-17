import GitHub from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";


export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export async function getSession() {
  return await getServerSession(authOptions);
}