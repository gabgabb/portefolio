"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "@/_components/elements/projectCard";
import { Project } from "@/_utils/types";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?pLevel`,
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
    }, [token]);

    if (!projects.length) return <p>Chargement...</p>;

    return (
        <section
            id={"projects"}
            className="mt-10 w-full pb-10 flex flex-col gap-2"
        >
            <h2 className="font-extrabold text-3xl">Projets</h2>
            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
