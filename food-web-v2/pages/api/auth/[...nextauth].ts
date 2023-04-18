import prisma from "@/lib/prismaclient"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "jsmith@gmailc.om" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as unknown as {
                    email: string,
                    password: string
                }
                console.log({ email, password })
                const dbuser = await prisma.user.findFirst({
                    where: {
                        email: email
                    }
                })

                console.log({ dbuser })
                if (!dbuser || dbuser?.password !== password) {
                    throw Error("Incorrect Credentials")
                    return null
                } else {
                    return {
                        id: dbuser.id,
                        email: dbuser.email,
                        image: null,
                        role: dbuser.role
                    }
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                // @ts-ignore
                token.role = user.role
            }
            return token
        },
        async session({ session, token, user }) {
            // console.log(session, token, user)
            // console.log('userin session', session);
            // session.user.role = user.role;
            if (token) {
                // @ts-ignore
                session.user.role = token.role
            }
            return session;
        },
    }
}

export default NextAuth(authOptions)