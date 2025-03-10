"use client";

import React from "react";
import { Image } from "@heroui/react";

interface BadgeProps {
    key?: number;
    image?: string;
    title?: string;
    deleteText?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ image, title, deleteText = false }) => {
    return (
        <div className="flex bg-blue-gray h-max rounded-md px-3 py-2 gap-2 items-center select-all">
            <Image
                alt={"Badge de " + { title }}
                width={30}
                height={30}
                src={image}
                className="w-6 h-6 object-contain"
            />
            <span
                className={`font-semibold text-lg p-0 ${deleteText ? "max-sm:hidden sm:hidden lg:block" : ""}`}
            >
                {title}
            </span>
        </div>
    );
};

export default Badge;
