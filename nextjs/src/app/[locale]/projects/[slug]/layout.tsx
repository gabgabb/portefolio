import React from "react";

interface CVLayoutProps {
    children: React.ReactNode;
}

const ProjectLayout: React.FC<CVLayoutProps> = ({ children }) => {
    return (
        <main className="mx-auto w-full max-w-[1000px]">
            <div className="absolute top-0 right-0 left-0 z-[-1] h-[480px] bg-gradient-to-b from-[#27325a] to-transparent opacity-60" />
            {children}
        </main>
    );
};

export default ProjectLayout;
