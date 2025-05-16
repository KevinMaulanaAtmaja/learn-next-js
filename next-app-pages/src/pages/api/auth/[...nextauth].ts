import { signIn, signInWithGoogle } from "@/lib/firebase/service";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
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

                const user: any = await signIn({ email });
                if (user) {
                    const passwordConfirme = await compare(password, user.password);
                    if (passwordConfirme) {
                        return user;
                    }
                    return null;
                } else {
                    return null;
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
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
                    // fullname: profile.name,
                    fullname: user.name,
                    email: user.email,
                    image: user.image,
                    role: "member",
                    type: "google",
                };

                await signInWithGoogle(data, (result: { status: boolean; message: string; data: any }) => {
                    if (result.status) {
                        token.fullname = result.data.fullname;
                        token.email = result.data.email;
                        token.image = result.data.image;
                        token.role = result.data.role;
                        token.type = result.data.type;
                    }
                });
            }
            // console.log({ token, account, profile, user });
            return token;
        },

        async session({ session, token }: any) {
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("fullname" in token) {
                session.user.fullname = token.fullname;
            }
            if ("image" in token) {
                session.user.image = token.image;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            // console.log({ session, token });
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
    },
};

export default NextAuth(authOptions);
