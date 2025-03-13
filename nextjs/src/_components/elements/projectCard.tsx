"use client";

import { Card, Image, Button } from "@heroui/react";
import React, { useState, useEffect } from "react";
import Badge from "@/_components/elements/badge";
import { SquareArrowOutUpRight, X } from "lucide-react";
import { Project } from "@/_utils/types";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const t = useTranslations("Cards");

    const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
    const [isVideoExist, setIsVideoExist] = useState<boolean>(false);
    const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

    const [activeBadge, setActiveBadge] = useState<number | null>(null);

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
                        className="object-cover object-top rounded-t-2xl border-stroke border-t-2 border-x-2 max-sm:w-[1200px] sm:w-[1200px] lg:h-[320px] sm:h-[180px] md:h-[250px] max-sm:h-[160px] transition-all duration-300 group-hover:opacity-70"
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
                            className="slow-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </div>

                {/* CONTENU */}
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
                                    isActive={activeBadge === tech.id}
                                    onClick={() =>
                                        setActiveBadge((prev) =>
                                            prev === tech.id ? null : tech.id,
                                        )
                                    }
                                    onClose={() => setActiveBadge(null)}
                                />
                            ))}
                        </div>
                        <Button
                            className="rounded-xl bg-purple hover:bg-purple/90 focus:border-none active:border-none md:h-14 sm:h-12 max-sm:h-12 sm:w-1/2 max-sm:w-1/2 max-[400px]:!w-3/4 sm:mx-auto max-sm:mx-auto flex lg:w-[580px] md:w-full lg:mx-auto items-center mt-4 cursor-pointer"
                            endContent={
                                <SquareArrowOutUpRight color={"#EAF3F6"} />
                            }
                        >
                            <span className="font-extrabold text-lg">
                                {t("seeMore")}
                            </span>
                        </Button>
                    </div>
                </div>
            </Card>

            {/* VIDEO FLOTTANTE */}
            {!isTouchDevice && isVideoVisible && isVideoExist && (
                <div
                    className="fixed z-50 pointer-events-none"
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
                        className="w-full max-h-[60rem] max-w-xl h-full rounded-xl border border-stroke"
                    />
                </div>
            )}

            {isTouchDevice && isVideoVisible && isVideoExist && (
                <div
                    className="fixed inset-0 bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer"
                    onClick={() => setIsVideoVisible(false)}
                >
                    <video
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.videoPresentation?.url}`}
                        autoPlay
                        controls
                        muted
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen"
                        className="w-full max-h-full max-w-xl rounded-lg object-contain py-24"
                    />
                    <Button
                        onPress={() => setIsVideoVisible(false)}
                        className="absolute top-8 right-8 max-sm:top-4 max-sm:right-4 text-white text-2xl cursor-pointer"
                    >
                        <X size={40} />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
