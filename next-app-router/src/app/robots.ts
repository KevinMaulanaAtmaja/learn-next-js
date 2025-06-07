import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/login/", "/register/"],
            crawlDelay: 10,
        },
        sitemap: "https://learn-nextjs-routes-kma.vercel.app/sitemap.xml",
        host: "https://learn-nextjs-routes-kma.vercel.app/",
    };
}
