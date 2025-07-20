"use client";

import { Image } from "@heroui/react";
import { useTranslations } from "next-intl";
import React from "react";

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
    const t = useTranslations("Cards");

    const formatDate = (date: Date | undefined, isMission: boolean) => {
        if (!date) return "N/A";

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ajoute un zéro si nécessaire

        return isMission ? `${month}/${year}` : `${year}`;
    };

    return (
        <div className="flex justify-between border-b border-white/20 pb-4 last:border-none last:pb-0 max-[430px]:flex-col sm:flex-1">
            <div className="flex items-center gap-2">
                <Image
                    alt={"Logo de " + companyName}
                    src={`${logo}`}
                    className="my-auto rounded-full"
                    width={35}
                    height={35}
                />
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                        <span className="h-7 text-[22px] font-bold">
                            {companyName}
                        </span>
                        {isMission && (
                            <p className="max-h-max rounded-md border-2 border-white/70 px-1 py-[0.5px] text-[13px] font-normal">
                                {t("mission")}
                            </p>
                        )}
                    </div>
                    <span className="text-[16px] font-light text-white/80">
                        {jobTitle}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-white max-[430px]:pl-11">
                <span>{formatDate(dateBegin, isMission)}</span>
                <span>-</span>
                <span>{formatDate(dateEnd, isMission)}</span>
            </div>
        </div>
    );
};

export default Experience;
