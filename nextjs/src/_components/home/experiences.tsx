"use client";

import Experience from "@/_components/elements/experience";
import ExperiencesSkeleton from "@/_components/elements/skeletons/experiencesSkeleton";
import { ExperienceType } from "@/_utils/types";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export const Experiences: React.FC = () => {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    const locale = useLocale();
    const t = useTranslations("Cards");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/experiences?pLevel&sort=dateBegin:desc&locale=${locale}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    },
                );

                const json = await res.json();
                if (json.data) {
                    setExperiences(json.data);
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données :",
                    error,
                );
            }
        };
        fetchData();
    }, [locale, token]);

    if (!experiences.length) return <ExperiencesSkeleton />;

    return (
        <div className="flex flex-1 flex-col gap-2">
            <h2 className="text-3xl font-extrabold">{t("experience")}</h2>
            <div className="bg-gray border-stroke flex h-fit flex-col flex-wrap gap-3 rounded-xl border p-4 md:min-h-[250px]">
                {experiences.map((exp) => (
                    <Experience
                        key={exp.id}
                        companyName={exp.company?.name || "N/A"}
                        logo={exp.company?.logo?.url || "/placeholder.png"}
                        jobTitle={exp.job}
                        dateBegin={new Date(exp.dateBegin)}
                        dateEnd={new Date(exp.dateEnd)}
                        isMission={exp.isMission}
                    />
                ))}
            </div>
        </div>
    );
};
