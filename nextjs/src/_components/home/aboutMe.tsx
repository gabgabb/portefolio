import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="flex flex-col items-center gap-5 md:py-20 sm:py-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 text-left">
                <div className="flex flex-col items-center justify-center gap-6 w-full">
                    <p className="text-base sm:text-lg md:text-xl text-center md:text-left">Développeur Full Stack français basé à Nantes passionné par la création de solutions innovantes et efficaces. </p>
                    <p className="text-base sm:text-lg md:text-xl text-center md:text-left">Avec plusieurs années d'expérience dans le développement web, je m'efforce de transformer des idées en réalité grâce à des technologies de pointe.</p>
                </div>
                {/* Image */}
                <Image
                    src="/image.jpg"
                    alt="Image de présentation"
                    width={217}
                    height={217}
                    className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-[217px] md:h-[217px]"
                />
            </div>
        </section>
    );
}