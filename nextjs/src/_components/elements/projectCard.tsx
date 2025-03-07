"use client";

import {Card, Image, Button} from "@heroui/react";
import React from "react";
import {Project} from "@/_utils/types";
import Badge from "@/_components/elements/badge";
import {ArrowSquare} from "@/app/icons";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({
    project 
}) => {
    return (
        <Card>
            <Image
                alt={'project'}
                className={'object-cover rounded-t-2xl border-stroke border-t-2 border-x-2'}
                width={1200}
                height={320}
                src={"/projet1.png"}
            />
            <div className="bg-gray rounded-b-2xl h-max px-12 py-4 border-stroke border-b-2 border-x-2">
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-2xl">{project.name}</span>
                    <div className="flex gap-2">
                        <Badge title={"ReactJS"} image={"/react.png"} />
                        <Badge title={"ReactJS"} image={"/react.png"} />
                        <Badge title={"ReactJS"} image={"/react.png"} />
                    </div>
                    <Button className="rounded-xl bg-purple h-14 flex w-[580px] mx-auto items-center mt-4" endContent={<ArrowSquare/>}>
                        <span className="font-extrabold text-lg">Voir plus</span>
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
