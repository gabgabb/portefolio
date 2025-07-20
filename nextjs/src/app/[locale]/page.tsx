import AboutMe from "@/_components/home/aboutMe";
import { Experiences } from "@/_components/home/experiences";
import Projects from "@/_components/home/projects";
import { Technologies } from "@/_components/home/technologies";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center justify-center max-sm:px-6 sm:px-16 lg:px-0 lg:py-0">
            {/* Dégradé en fond */}
            <div className="absolute top-0 right-0 left-0 z-[-1] h-[480px] bg-linear-to-b from-[#27325a] to-transparent opacity-60" />
            {/* Section À Propos */}
            <AboutMe />
            {/* Section Technologies & Expériences */}
            <div className="flex gap-4 max-sm:flex-col max-sm:justify-center max-sm:gap-8 sm:flex-col sm:justify-center sm:gap-8 lg:flex-row">
                <Technologies />
                <Experiences />
            </div>
            {/* Projets */}
            <Projects />
        </div>
    );
};

export default Home;
