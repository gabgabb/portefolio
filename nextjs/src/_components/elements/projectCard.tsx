"use client";

import Badge from "@/_components/elements/badge";
import { Project } from "@/_utils/types";
import { Button, Card, Image } from "@heroui/react";
import { SquareArrowOutUpRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const t = useTranslations("Cards");

    const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
    const [isVideoExist, setIsVideoExist] = useState<boolean>(false);
    const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

    useEffect(() => {
        setIsTouchDevice(window.innerWidth < 1024);

        if (project.videoPresentation) {
            setIsVideoExist(true);
        }
    }, [project.videoPresentation]);

    useEffect(() => {
        if (isTouchDevice && isVideoVisible && isVideoExist) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // Reset si le composant est démonté
        };
    }, [isVideoVisible, isTouchDevice, isVideoExist]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isTouchDevice && isVideoExist) {
            setVideoPosition({
                x: e.clientX + 15,
                y: e.clientY + 15,
            });
        }
    };

    const handleClick = () => {
        if (isTouchDevice && isVideoExist) {
            setIsVideoVisible(true);
        }
    };

    return (
        <div className="relative">
            <Card>
                {/* IMAGE */}
                <div
                    className="relative"
                    onMouseEnter={() =>
                        !isTouchDevice && setIsVideoVisible(true)
                    }
                    onMouseLeave={() =>
                        !isTouchDevice && setIsVideoVisible(false)
                    }
                    onMouseMove={handleMouseMove}
                    onClick={handleClick}
                >
                    <Image
                        alt={project.name}
                        className="border-stroke rounded-t-2xl border-x-2 border-t-2 object-cover object-top transition-all duration-300 group-hover:opacity-70 max-sm:h-[160px] max-sm:w-[1200px] sm:h-[180px] sm:w-[1200px] md:h-[250px] lg:h-[320px]"
                        src={
                            Array.isArray(project.illustrations) &&
                            project.illustrations.length > 0
                                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.illustrations[0].url}`
                                : "/projet1.png"
                        }
                    />

                    {/* Icône Play visible sur mobile */}
                    {isTouchDevice && isVideoExist && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="rgba(234, 243, 246, 0.7)"
                            viewBox="0 0 24 24"
                            width="50"
                            height="50"
                            className="slow-pulse absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </div>

                {/* CONTENU */}
                <div className="bg-gray border-stroke rounded-b-2xl border-x-2 border-b-2 max-sm:h-fit max-sm:px-6 max-sm:py-3 sm:h-fit sm:px-6 sm:py-3 md:px-12 md:py-4">
                    <div className="flex flex-col gap-1 lg:gap-4">
                        <span className="truncate text-2xl font-bold max-sm:text-xl">
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
                            className="bg-purple hover:bg-purple/90 mt-4 flex cursor-pointer items-center rounded-xl focus:border-none active:border-none max-[400px]:!w-3/4 max-sm:mx-auto max-sm:h-12 max-sm:w-1/2 sm:mx-auto sm:h-12 sm:w-1/2 md:h-14 md:w-full lg:mx-auto lg:w-[580px]"
                            endContent={
                                <SquareArrowOutUpRight color={"#EAF3F6"} />
                            }
                        >
                            <span className="text-lg font-extrabold">
                                {t("seeMore")}
                            </span>
                        </Button>
                    </div>
                </div>
            </Card>

            {/* VIDEO FLOTTANTE */}
            {!isTouchDevice && isVideoVisible && isVideoExist && (
                <div
                    className="pointer-events-none fixed z-50"
                    style={{
                        top: `${videoPosition.y}px`,
                        left: `${videoPosition.x}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <video
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.videoPresentation?.url}`}
                        autoPlay
                        loop
                        muted
                        className="border-stroke h-full max-h-[60rem] w-full max-w-xl rounded-xl border"
                    />
                </div>
            )}

            {isTouchDevice && isVideoVisible && isVideoExist && (
                <div
                    className="bg-opacity-80 fixed inset-0 z-50 flex cursor-pointer items-center justify-center backdrop-blur-md"
                    onClick={() => setIsVideoVisible(false)}
                >
                    <video
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.videoPresentation?.url}`}
                        autoPlay
                        controls
                        muted
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen"
                        className="max-h-full w-full max-w-xl rounded-lg object-contain py-24"
                    />
                    <Button
                        onPress={() => setIsVideoVisible(false)}
                        className="absolute top-8 right-8 cursor-pointer text-2xl text-white max-sm:top-4 max-sm:right-4"
                    >
                        <X size={40} />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
