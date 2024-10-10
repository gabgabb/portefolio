import "./globals.css";
import {ToastContainer} from "react-toastify";
import React from "react";
import Header from "@/_components/general/header";
import Footer from "@/_components/general/footer";

export const metadata = {
    title: "Gabriel Filiot - Full Stack Developer Portfolio",
    description: "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
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

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="fr">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <title></title>
            </head>
            <body className="bg-black">
                <Header/>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                />
                {children}
                <Footer/>
            </body>
        </html>
    );
}

export default RootLayout;
