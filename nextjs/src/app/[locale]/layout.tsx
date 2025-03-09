import "../globals.css";

import React from "react";
import { HeroUIProvider } from "@heroui/system";
import Header from "@/_components/general/header";
import Footer from "@/_components/general/footer";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {getMessages} from "next-intl/server";

export const metadata = {
    title: "Gabriel Filiot - Full Stack Developer Portfolio",
    description:
        "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
    authors: [{ name: "Gabriel Filiot" }],
    keywords: [
        "Gabriel Filiot",
        "Développeur Full Stack",
        "Portfolio",
        "Développement Web",
        "Projets",
        "Compétences",
        "Expérience Professionnelle",
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Next.js",
    ],
    openGraph: {
        title: "Gabriel Filiot - Full Stack Developer Portfolio",
        description:
            "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
        url: "https://gabriaile.dev/",
        type: "website",
        images: ["https://www.gabrielfiliot.com/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        site: "@gabrielfiliot",
        title: "Gabriel Filiot - Full Stack Developer Portfolio",
        description:
            "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
        images: ["https://www.gabrielfiliot.com/twitter-image.jpg"],
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
    const { locale } = await params;
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Gabriel Filiot</title>
            </head>
            <body className="!bg-black text-white font-bogart">
                <NextIntlClientProvider messages={messages}>
                    <HeroUIProvider>
                        <Header />
                        {children}
                        <Footer />
                    </HeroUIProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
