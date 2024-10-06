import React from "react";

export default function AboutMe() {
    return (
        <div className="mb-5 flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold ">À propos de moi</h1>
            <div className="flex flex-col items-center justify-center">
                <p className="text-lg">Je suis un étudiant en informatique passionné par le développement full stack.</p>
                <p className="text-lg">Je suis actuellement alternance chez Ozzak et en dernière année d&apos;étude pour le...</p>
            </div>
        </div>
    );
}