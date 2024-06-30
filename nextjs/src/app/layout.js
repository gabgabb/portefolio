import { Inter } from "next/font/google";
import "./globals.css";
import {ToastContainer} from "react-toastify";

export const metadata = {
  title: "Gabriel Filiot - Full Stack Developer Portfolio",
  description: "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
  author: "Gabriel Filiot",
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
    image: "https://www.gabrielfiliot.com/og-image.jpg"
  },
  twitter: {
    card: "summary_large_image",
    site: "@gabrielfiliot",
    title: "Gabriel Filiot - Full Stack Developer Portfolio",
    description: "Découvrez le portfolio de Gabriel Filiot, développeur full stack. Explorez ses projets, compétences et expériences professionnelles.",
    image: "https://www.gabrielfiliot.com/twitter-image.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
      <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} />
        {children}
      </body>
      </html>
  );
}
