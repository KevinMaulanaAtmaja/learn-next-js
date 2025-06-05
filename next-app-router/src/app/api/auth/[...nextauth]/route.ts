import { login, loginWithGoogle } from "@/lib/firebase/service";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user: any = await login({ email });

                if (user) {
                    const confirmPasswod = await bcrypt.compare(password, user.password);
                    if (confirmPasswod) {
                        return user;
                    }
                    return null;
                } else {
                    return null;
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.OAUTH_GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials") {
                token.fullname = user.fullname;
                token.email = user.email;
                token.role = user.role;
            }
            if (account?.provider === "google") {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    image: user.image,
                    role: "member",
                    type: "google",
                };
                await loginWithGoogle(data, (result: { status: boolean; data: any }) => {
                    if (result.status) {
                        token.fullname = result.data.fullname;
                        token.email = result.data.email;
                        token.image = result.data.image;
                        token.role = result.data.role;
                        token.type = result.data.type;
                    }
                });
            }
            return token;
        },
        async session({ session, token }: any) {
            if ("fullname" in token) {
                session.user.fullname = token.fullname;
            }
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            return session;
        },
    },

    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
