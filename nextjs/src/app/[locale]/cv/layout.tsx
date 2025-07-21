import React from "react";

interface CVLayoutProps {
    children: React.ReactNode;
}

const CVLayout: React.FC<CVLayoutProps> = ({ children }) => {
    return <main className="mx-auto w-full max-w-[1400px]">{children}</main>;
};

export default CVLayout;
