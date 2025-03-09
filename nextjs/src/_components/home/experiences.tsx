"use client";

import React, { useEffect, useState } from "react";
import Experience from "@/_components/elements/experience";
import { ExperienceType } from "@/_utils/types";

export const Experiences: React.FC = () => {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/experiences?pLevel&sort=dateBegin:desc`,
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
    }, [token]);

    if (!experiences.length) return <p>Chargement...</p>;

    return (
        <div className="flex flex-col gap-2 flex-1">
            <h2 className="font-extrabold text-3xl">Expériences</h2>
            <div className="h-[220px] flex-col rounded-xl bg-gray border border-stroke p-4 flex flex-wrap gap-2">
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
