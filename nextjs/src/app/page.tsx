import AboutMe from "@/_components/home/aboutMe";
import Projects from "@/_components/home/projects";
import Contact from "@/_components/home/contact";
import React from "react";
import {Experiences} from "@/_components/home/experiences";

const Home: React.FC = () => {    return (
    <>
        <AboutMe/>
        <Experiences/>
        <Projects/>
        <Contact/>
    </>
);
}

export default Home;
