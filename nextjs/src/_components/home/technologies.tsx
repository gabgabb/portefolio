"use client";

import React, { useEffect, useState } from "react";
import Badge from "@/_components/elements/badge";
import { Technology } from "@/_utils/types";

export const Technologies: React.FC = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/technologies?pLevel`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    },
                );

                const json = await res.json();
                if (json.data) {
                    setTechnologies(json.data);
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

    if (!technologies.length) return <p>Chargement...</p>;

    return (
        <div className="flex flex-col gap-2 w-[55%]">
            <h2 className="font-extrabold text-3xl">Technologies</h2>
            <div className="h-[220px] rounded-xl bg-gray border border-stroke p-4">
                <div className="h-max flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech.id}
                            image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${tech.logo.url}`}
                            title={tech.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
