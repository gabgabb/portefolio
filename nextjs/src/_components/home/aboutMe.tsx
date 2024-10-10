import React from "react";
import Marquee from "react-fast-marquee";

export default function AboutMe() {
    return (
        <section id={"about"} className="flex flex-col items-center gap-5">
            <Marquee speed={200} className="h-28 bg-whiteAlpha-100 uppercase">
                <h1 className="h1 mr-12">full stack</h1>
                <h1 className="h1 mr-12">Php</h1>
                <h1 className="h1 mr-12">react</h1>
                <h1 className="h1 mr-12">JS</h1>
                <h1 className="h1 mr-12">POSTGRES</h1>
                <h1 className="h1">NEXT</h1>
            </Marquee>
            <div className="flex flex-col items-center justify-center gap-3 py-6 s-pho:px-4 l-pho:px-4">
                <h2 className="h2">À propos de moi</h2>
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="l16-text-reg">Je suis un étudiant en informatique passionné par le développement full stack.</p>
                    <p className="l16-text-reg">Je suis actuellement alternance chez Ozzak et en dernière année d&apos;étude pour le...</p>
                </div>
            </div>
            <Marquee direction={"right"} speed={200} className="flex h-36 gap-2 bg-whiteAlpha-100 uppercase">
                <h1 className="h1 mr-12">full stack</h1>
                <h1 className="h1 mr-12">Php</h1>
                <h1 className="h1 mr-12">react</h1>
                <h1 className="h1 mr-12">JS</h1>
                <h1 className="h1 mr-12">POSTGRES</h1>
                <h1 className="h1">NEXT</h1>
            </Marquee>
        </section>
    );
}