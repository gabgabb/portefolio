"use client";

import Badge from "@/_components/elements/badge";
import { Technology } from "@/_utils/types";
import React, { useEffect, useState } from "react";

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
        <div className="flex flex-col gap-2 lg:w-[55%]">
            <h2 className="text-3xl font-extrabold">Technologies</h2>
            <div className="bg-gray border-stroke rounded-xl border p-4 max-sm:max-h-[180px] max-sm:min-h-[250px] max-sm:overflow-y-auto md:min-h-[250px]">
                <div className="flex h-fit flex-wrap gap-2">
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
