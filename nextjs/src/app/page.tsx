import React from "react";
import AboutMe from "@/_components/home/aboutMe";
import Projects from "@/_components/home/projects";
import { Experiences } from "@/_components/home/experiences";
import { Technologies } from "@/_components/home/technologies";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto w-full max-w-[1000px]">
            {/* Dégradé en fond */}
            <div className="bg-gradient-to-b from-[#27325a] to-transparent absolute left-0 right-0 top-0 h-[480px] opacity-60 z-[-1]" />
            {/* Section À Propos */}
            <AboutMe />
            {/* Section Technologies & Expériences */}
            <div className="flex gap-4">
                <Technologies />
                <Experiences />
            </div>
            {/* Projets */}
            <Projects />
        </div>
    );
};

export default Home;
