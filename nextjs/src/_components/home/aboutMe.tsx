import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="flex flex-col items-center gap-5 md:py-20 sm:py-0 sm:px-10">
            <div className="flex sm:flex-col-reverse items-center justify-center sm:gap-5 gap-20 py-6 s-pho:px-4 l-pho:px-4 font-medium text-left">
                <div className="flex flex-col items-center justify-center gap-6 w-[570px]">
                    <p className="l16-text-reg">Développeur Full Stack français basé à Nantes passionné par la création de solutions innovantes et efficaces. </p>
                    <p className="l16-text-reg">Avec plusieurs années d'expérience dans le développement web, je m'efforce de transformer des idées en réalité grâce à des technologies de pointe.</p>
                </div>
                <Image src={"/image.jpg"} alt={"Image de présentation"} width={217} height={217} className="rounded-full"/>
            </div>
        </section>
    );
}