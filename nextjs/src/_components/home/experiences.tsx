import React from "react";
import Experience from "@/_components/elements/experience";

export const Experiences: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <h2 className="font-extrabold text-3xl">Expériences</h2>
            <div className="h-[220px] flex-col rounded-xl bg-gray border border-stroke p-4 flex flex-wrap gap-2">
                {[...Array(3)].map((_, index) => (
                    <Experience
                        key={index}
                        companyName={"Ozzak"}
                        logo={"/ozzak-logo.png"}
                        jobTitle={"Fullstack developer"}
                        dateBegin={new Date()}
                        dateEnd={new Date()}
                        isMission={index % 2 === 0}
                    />
                ))}
            </div>
        </div>
    );
};
