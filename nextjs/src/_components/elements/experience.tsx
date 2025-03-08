"use client";

import React from "react";
import { Image } from "@heroui/react";

interface ExperienceProps {
    key?: number;
    logo?: string;
    companyName?: string;
    jobTitle?: string;
    dateBegin?: Date;
    dateEnd?: Date;
    isMission: boolean;
}

const Experience: React.FC<ExperienceProps> = ({
    logo,
    companyName,
    jobTitle,
    dateBegin,
    dateEnd,
    isMission,
}) => {
    const formatDate = (date: Date | undefined, isMission: boolean) => {
        if (!date) return "N/A";

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ajoute un zéro si nécessaire

        return isMission ? `${month}/${year}` : `${year}`;
    };

    return (
        <div className="flex flex-1 justify-between">
            <div className="flex gap-2 items-center">
                <Image
                    alt={"Logo de " + companyName}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo}`}
                    className="rounded-full my-auto"
                    width={35}
                    height={35}
                />
                <div className="flex flex-col justify-center">
                    <div className="flex gap-2 items-center">
                        <span className="font-bold text-[22px] h-7">
                            {companyName}
                        </span>
                        {isMission && (
                            <p className="border-2 border-white/70 rounded-md text-[13px] max-h-max px-1 py-[0.5px] font-normal">
                                Mission
                            </p>
                        )}
                    </div>
                    <span className="font-light text-[16px] text-white/80">
                        {jobTitle}
                    </span>
                </div>
            </div>
            <div className="flex gap-1 font-medium text-sm text-white items-center">
                <span>{formatDate(dateBegin, isMission)}</span>
                <span>-</span>
                <span>{formatDate(dateEnd, isMission)}</span>
            </div>
        </div>
    );
};

export default Experience;
