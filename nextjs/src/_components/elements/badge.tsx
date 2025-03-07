"use client";

import React from "react";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/react";

interface BadgeProps {
    key?: number;
    image?: string;
    title?: string;
}

const Badge: React.FC<BadgeProps> = ({ image, title }) => {
    return (
        <Chip
            className="flex bg-blue-gray h-max rounded-md p-2 gap-2"
            startContent={
                <Image alt={"Badge image"} width={25} height={25} src={image} />
            }
            variant="faded"
        >
            <span className="font-semibold">{title}</span>
        </Chip>
    );
};

export default Badge;
