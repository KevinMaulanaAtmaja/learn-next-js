// types.d.ts (di root atau di /types)
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            fullname?: string | null;
            role?: string | null;
        };
    }

    interface JWT {
        fullname?: string | null;
        role?: string | null;
    }
}
