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
            className="flex bg-blue-gray h-max rounded-md px-3 py-2 gap-2"
            startContent={
                <Image
                    alt={"Badge de " + { title }}
                    width={30}
                    height={30}
                    src={image}
                    className="w-6 h-6 object-contain"
                />
            }
            variant="faded"
        >
            <span className="font-semibold text-lg">{title}</span>
        </Chip>
    );
};

export default Badge;
