"use client";

import { Card, Image, Button } from "@heroui/react";
import React from "react";
import Badge from "@/_components/elements/badge";
import { SquareArrowOutUpRight } from "lucide-react";
import { Project } from "@/_utils/types";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card>
            <Image
                alt={project.name}
                className={
                    "object-cover rounded-t-2xl border-stroke border-t-2 border-x-2"
                }
                width={1200}
                height={320}
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.illustrations[0]?.url}`}
            />
            <div className="bg-gray rounded-b-2xl h-max px-12 py-4 border-stroke border-b-2 border-x-2">
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-2xl">{project.name}</span>
                    <div className="flex gap-2">
                        {project.technologies.map((tech) => (
                            <Badge
                                key={tech.id}
                                title={tech.name}
                                image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${tech.logo.url}`}
                            />
                        ))}
                    </div>
                    <Button
                        className="rounded-xl bg-purple hover:bg-purple/90 focus:border-none active:border-none h-14 flex w-[580px] mx-auto items-center mt-4 cursor-pointer"
                        endContent={<SquareArrowOutUpRight color={"#EAF3F6"} />}
                    >
                        <span className="font-extrabold text-lg">
                            Voir plus
                        </span>
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
