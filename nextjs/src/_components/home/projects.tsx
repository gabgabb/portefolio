"use client";

import {useEffect, useState} from 'react';
import ProjectCard from '@/_components/elements/projectCard';

export default function projects() {
    const [projects, setProjects] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [loading, setLoading] = useState(false);

    const token = process.env.STRAPI_TOKEN;

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const response = await fetch(process.env.STRAPI_URL + 'projects?populate=*', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                const result = await response.json();
                console.log(result);
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
        };

        fetchProjects();
    }, []);

    const handleLoadMore = () => {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3);
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-left mb-5">Mes projets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.slice(0, visibleProjects).map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
            {visibleProjects < projects.length && (
                <div className="flex justify-center mt-4">
                    <Button onClick={handleLoadMore} disabled={loading}>
                        {loading ? 'Chargement...' : 'Voir plus'}
                    </Button>
                </div>
            )}
        </div>
    )
}