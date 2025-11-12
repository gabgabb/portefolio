import "../globals.css";

import BackgroundGradient from "@/_components/elements/backgroundGradient";
import ClientLayout from "@/_components/general/clientLayout";
import { routing } from "@/i18n/routing";
import { HeroUIProvider } from "@heroui/system";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "Metadata",
    });

    return {
        title: t("title"),
        description: t("description"),
        keywords: t("keywords"),
        authors: [{ name: "Gabriel Filiot" }],
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: "https://gabrielfiliot.dev/",
            type: "website",
            images: ["https://gabrielfiliot.dev/og-image.jpg"],
        },
        twitter: {
            card: "summary_large_image",
            site: "@gabrielfiliot",
            title: t("title"),
            description: t("description"),
            images: ["https://gabrielfiliot.dev/twitter-image.jpg"],
        },
    };
}

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
                        <BackgroundGradient />
                        <div className="relative z-10">
                            <ClientLayout>{children}</ClientLayout>
                        </div>
                    </HeroUIProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
