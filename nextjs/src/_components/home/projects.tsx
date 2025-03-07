"use client";

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import ProjectCard from "@/_components/elements/projectCard";
import { Project } from "@/_utils/types";

const mockProjects = [
        {
            name: "Refonte du site Ozzak",
            description: "Refonte total du site Ozzak",
            technologies: ["ReactJS", "Next.js", "Symfony", "API Platform"],
            image: "/ozzak-project1.png",
        },
        {
            name: "Actualités cinéma Ozzak",
            description: "Développement de la section actualités avec Twig et Symfony.",
            technologies: ["Symfony", "Twig", "ReactJS"],
            image: "/ozzak-project2.png",
        },
    ];

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [loading, setLoading] = useState(false);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            const result = await response.json();
            if (result && Array.isArray(result.data)) {
                setProjects(result.data);
            } else {
                console.error('Unexpected data format:', result);
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
            setIsLoadingComplete(true);
        }
    }, [token]);

    useEffect(() => {
        const fetchProjet = async () => {
            await fetchProjects();

        }
        fetchProjet();
    }, [fetchProjects]);

    return (
        <section id={"projects"} className="mt-10 w-full pb-10 flex flex-col gap-2">
            <h2 className="font-extrabold text-3xl">Projets</h2>
            <div className="flex flex-col gap-6">
                {mockProjects.map((mockProject, index) => (
                    <ProjectCard key={index} project={mockProject}/>
                ))}
            </div>
        </section>
    );
}

export default Projects;
