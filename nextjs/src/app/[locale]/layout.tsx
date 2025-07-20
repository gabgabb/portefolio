import "../globals.css";

import ClientLayout from "@/_components/general/clientLayout";
import { routing } from "@/i18n/routing";
import { HeroUIProvider } from "@heroui/system";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";

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
            <body className="font-bogart bg-black! text-white">
                <NextIntlClientProvider>
                    <HeroUIProvider>
                        <ToastContainer
                            position={"top-right"}
                            draggable
                            theme={"dark"}
                        />
                        <ClientLayout>{children}</ClientLayout>
                    </HeroUIProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
