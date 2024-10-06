import React from "react";

export default function AboutMe() {
    return (
        <div className="mb-5 flex flex-col items-center gap-5 min-h-screen">
            <h2 className="h2">À propos de moi</h2>
            <div className="flex flex-col items-center justify-center">
                <p className="l16-text-reg">Je suis un étudiant en informatique passionné par le développement full stack.</p>
                <p className="l16-text-reg">Je suis actuellement alternance chez Ozzak et en dernière année d&apos;étude pour le...</p>
            </div>
        </div>
    );
}