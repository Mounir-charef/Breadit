import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/sign-in",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async session({token, session}) {
            if( token ) {
                session.user.id = token.id
                session.user.username = token.username
                session.user.email = token.email
                session.user.image = token.picture
                session.user.name = token.name
                
            }
            return session
        },
        async jwt({token, user}) {
            const dbUser = await db.user.findUnique({
                where: {
                    email: token.email!,
                },
            })
            if(!dbUser) {
                token.id = user.id
                return token
            }

            if (!dbUser.username) {
                await db.user.update({
                    where: {
                        id: dbUser.id,
                    },
                    data: {
                        username: nanoid(10),
                    }
                })
            }

            return {
                id: dbUser.id,
                username: dbUser.username,
                email: dbUser.email,
                name: dbUser.name,
                picture: dbUser.image,
            }

        },

        redirect(){
            return "/"
        }
    }
}

export const getAuthSession = () => getServerSession(authOptions)