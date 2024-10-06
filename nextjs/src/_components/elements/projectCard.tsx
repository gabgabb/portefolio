import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useMemo } from "react";
import {Project} from "@/_utils/types";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    project 
}) => {
    const { name, shortDescription, technologies, illustrations, createdAt } = project.attributes;
    const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    const imageUrl = useMemo(() => {
        return illustrations?.data?.[0]?.attributes?.formats?.medium?.url;
    }, [illustrations]);

    const hasTechnologies = useMemo(() => {
        return Array.isArray(technologies?.data) && technologies.data.length > 0;
    }, [technologies]);

    const formattedDate = useMemo(() => {
        return new Date(createdAt).toLocaleDateString();
    }, [createdAt]);

    const projectShortDescription = useMemo(() => {
        return shortDescription || "Description non disponible";
    }, [shortDescription]);

    return (
        <Card className="py-4">
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <small className="text-default-500">{formattedDate}</small>
                <h4 className="text-large font-bold">{name}</h4>
                <p className="text-default-500">{projectShortDescription}</p>
                {hasTechnologies && (
                    <div className="flex flex-wrap">
                        {technologies.data.map((tech) => {
                            const logoUrl = tech.attributes.logo.data?.attributes?.url;
                            return (
                                <span key={tech.id} className="mr-2 mt-2 flex items-center rounded bg-gray-200 px-2 py-1 text-sm">
                                    {logoUrl && (
                                        <img src={`${strapiBaseUrl}${logoUrl}`} alt={tech.attributes.name} className="mr-2 size-6" />
                                    )}
                                    {tech.attributes.name}
                                </span>
                            );
                        })}
                    </div>
                )}
            </CardHeader>
            {imageUrl && (
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt={name}
                        className="rounded-xl object-cover"
                        src={imageUrl}
                        width={270}
                    />
                </CardBody>
            )}
        </Card>
    );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
