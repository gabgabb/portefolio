import Image from "next/image";
import Header from "@/_components/general/header";
import Footer from "@/_components/general/footer";
import AboutMe from "@/_components/home/aboutMe";
import Projects from "@/_components/home/projects";
import Contact from "@/_components/home/contact";

export default function Home() {
  return (
      <div>
        <Header/>
        <main className="container mx-auto py-12">
            <AboutMe/>
            <Projects/>
            <Contact/>
        </main>
        <Footer/>
      </div>
  );
}
