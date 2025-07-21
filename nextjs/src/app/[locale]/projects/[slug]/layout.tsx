import React from "react";

interface CVLayoutProps {
    children: React.ReactNode;
}

const ProjectLayout: React.FC<CVLayoutProps> = ({ children }) => {
    return <main className="mx-auto w-full max-w-[1000px]">{children}</main>;
};

export default ProjectLayout;
