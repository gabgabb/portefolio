import AboutMe from "@/_components/home/aboutMe";
import Projects from "@/_components/home/projects";
import Contact from "@/_components/home/contact";
import React from "react";

const Home: React.FC = () => {    return (
    <div>
        <main className="container mx-auto py-12">
            <AboutMe/>
            <Projects/>
            <Contact/>
        </main>
    </div>
);
}

export default Home;
