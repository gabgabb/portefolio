"use client";

import { Project } from "@/_utils/types";
import { Button, Image } from "@heroui/react";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Badge from "@/_components/elements/badge";

const ProjectDetail = () => {
    const { slug } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const locale = useLocale();
    const router = useRouter();
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    const t = useTranslations("Projects");

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[slug][$eq]=${slug}&locale=${locale}&pLevel`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    },
                );

                const data = await res.json();

                if (data.data.length > 0) {
                    setProject(data.data[0]); // Récupère le premier projet correspondant au slug
                } else {
                    setProject(null); // Définit null si aucun projet n'est trouvé
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération du projet",
                    error,
                );
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProject();
        }
    }, [locale, slug, token]);

    console.log(project);

    useEffect(() => {
        if (!loading && project === null) {
            toast.error(t("notFound"));

            router.push("/");
        }
    }, [project, loading, router, t]);

    if (loading) {
        return <p className="mt-10 text-center">Chargement...</p>;
    }

    if (!project) {
        return null; // Retourne `null` pour ne rien afficher après le toast
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Button
                href="/"
                as="a"
                className="absolute top-4 left-4 flex items-center gap-2 text-white"
            >
                <X size={24} />
                Retour
            </Button>

            <h1 className="text-center text-4xl font-bold">{project.name}</h1>

            <div className="mt-6 flex flex-col items-center">
                <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.illustrations[0]?.url}`}
                    alt={project.name}
                    className="w-full max-w-3xl rounded-lg border border-gray-700"
                />
            </div>

            <div className="mt-6 text-center text-lg">
                {project.shortDescription}
            </div>

            {project.videoPresentation && (
                <div className="mt-6 flex justify-center">
                    <video
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.videoPresentation.url}`}
                        controls
                        className="w-full max-w-2xl rounded-lg border border-gray-700"
                    />
                </div>
            )}

            <div className="mt-6 flex flex-wrap justify-center gap-4">
                {project.technologies.map((tech, index) => (
                    <Badge
                        key={index}
                        title={tech.name}
                        image={tech.logo.url}
                        deleteText
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;
