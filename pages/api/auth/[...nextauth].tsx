import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GitHubProvider({
      clientId: "ee046971ed66df99f9c3",
      clientSecret: "1308ea75a146c1416e2774e0f66aacade8ee497d",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};
