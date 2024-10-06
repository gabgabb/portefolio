"use client";

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Button } from "@nextui-org/react";
import ProjectCard from "@/_components/elements/projectCard";
import {Project} from "@/_utils/types";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [loading, setLoading] = useState(false);

    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=technologies.type,technologies.logo`, {
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
        }
    }, [token]);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const handleLoadMore = useCallback(() => {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3);
    }, []);

    const visibleProjectsMemo = useMemo(() => {
        return projects.slice(0, visibleProjects);
    }, [projects, visibleProjects]);

    return (
        <div>
            <h1 className="mb-5 text-left text-4xl font-bold">Mes projets</h1>
            <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-4">
                {visibleProjectsMemo.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            {visibleProjects < projects.length && (
                <div className="mt-4 flex justify-center">
                    <Button onClick={handleLoadMore} disabled={loading}>
                        {loading ? 'Chargement...' : 'Voir plus'}
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Projects;