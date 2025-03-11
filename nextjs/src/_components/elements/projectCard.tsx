"use client";

import { Card, Image, Button } from "@heroui/react";
import React from "react";
import Badge from "@/_components/elements/badge";
import { SquareArrowOutUpRight } from "lucide-react";
import { Project } from "@/_utils/types";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const t = useTranslations("Cards");

    return (
        <Card>
            <Image
                alt={project.name}
                className="object-cover object-top rounded-t-2xl border-stroke border-t-2 border-x-2 max-sm:w-[1200px] sm:w-[1200px] lg:h-[320px] sm:h-[180px] md:h-[250px] max-sm:h-[160px]"
                src={
                    Array.isArray(project.illustrations) &&
                    project.illustrations.length > 0
                        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.illustrations[0].url}`
                        : "/projet1.png"
                }
            />
            <div className="bg-gray rounded-b-2xl max-sm:h-fit sm:h-fit md:px-12 md:py-4 sm:px-6 sm:py-3 max-sm:px-6 max-sm:py-3 border-stroke border-b-2 border-x-2">
                <div className="flex flex-col lg:gap-4 gap-1">
                    <span className="font-bold text-2xl max-sm:text-xl max-sm:truncate">
                        {project.name}
                    </span>
                    <div className="flex gap-2">
                        {project.technologies.map((tech) => (
                            <Badge
                                key={tech.id}
                                title={tech.name}
                                image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${tech.logo.url}`}
                                deleteText
                            />
                        ))}
                    </div>
                    <Button
                        className="rounded-xl bg-purple hover:bg-purple/90 focus:border-none active:border-none md:h-14 sm:h-12 max-sm:h-12 sm:w-1/2 max-sm:w-1/2 max-[400px]:!w-3/4 sm:mx-auto max-sm:mx-auto flex lg:w-[580px] md:w-full lg:mx-auto items-center mt-4 cursor-pointer"
                        endContent={<SquareArrowOutUpRight color={"#EAF3F6"} />}
                    >
                        <span className="font-extrabold text-lg">
                            {t("seeMore")}
                        </span>
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
