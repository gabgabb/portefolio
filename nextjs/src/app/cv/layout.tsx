import React from "react";
import Header from "@/_components/general/header";
import Footer from "@/_components/general/footer";

interface CVLayoutProps {
    children: React.ReactNode;
}

const CVLayout: React.FC<CVLayoutProps> = ({children}) => {
    return (
        <main className="mx-auto w-full max-w-[1400px]">
            <div
                className="bg-gradient-to-b from-[#27325a] to-transparent absolute left-0 right-0 top-0 h-[480px] opacity-60 z-[-1]"/>
            {children}
        </main>
    );
}

export default CVLayout;
