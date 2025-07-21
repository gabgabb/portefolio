"use client";

import ProjectCard from "@/_components/elements/projectCard";
import ProjectsSkeletons from "@/_components/elements/skeletons/projectsSkeletons";
import { Project } from "@/_utils/types";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    const t = useTranslations("Cards");
    const locale = useLocale();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?pLevel&locale=${locale}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    },
                );

                const json = await res.json();
                if (json.data) {
                    setProjects(json.data);
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

    if (!projects.length) return <ProjectsSkeletons />;

    return (
        <section
            id={"projects"}
            className="mt-10 flex w-full flex-col gap-2 pb-10"
        >
            <h2 className="text-3xl font-extrabold">{t("projects")}</h2>
            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
