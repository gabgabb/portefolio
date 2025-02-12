import AboutMe from "@/_components/home/aboutMe";
import Projects from "@/_components/home/projects";
import React from "react";
import {Experiences} from "@/_components/home/experiences";
import {Technologies} from "@/_components/home/technologies";

const Home: React.FC = () => {
    return (
        <>
            <div
                className="bg-gradient-to-b from-[#27325a] to-transparent absolute block box-border left-0 right-0 top-0 h-[480px] opacity-60 z-[-1]"></div>
            <AboutMe/>
            <div className="flex justify-center gap-24">
                <Technologies/>
                <Experiences/>
            </div>
            <Projects/>
        </>
    );
}

export default Home;
