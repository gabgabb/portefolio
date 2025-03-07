import "./globals.css";
import React from "react";
import Header from "@/_components/general/header";
import Footer from "@/_components/general/footer";
import {HeroUIProvider} from "@heroui/system";

export const metadata = {
    title: "Gabriel Filiot - Full Stack Developer Portfolio",
    description: "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
    authors: [{name: "Gabriel Filiot"}],
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
        "Next.js"
    ],
    openGraph: {
        title: "Gabriel Filiot - Full Stack Developer Portfolio",
        description: "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
        url: "https://gabriaile.dev/",
        type: "website",
        images: ["https://www.gabrielfiliot.com/og-image.jpg"]
    },
    twitter: {
        card: "summary_large_image",
        site: "@gabrielfiliot",
        title: "Gabriel Filiot - Full Stack Developer Portfolio",
        description: "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
        images: ["https://www.gabrielfiliot.com/twitter-image.jpg"]
    }
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <html lang="fr">
        <head>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Gabriel Filiot</title>
        </head>
        <body className="!bg-black text-white font-bogart">
            <HeroUIProvider>
                <Header/>
                {children}
                <Footer/>
            </HeroUIProvider>
        </body>
        </html>
    );
}

export default RootLayout;
