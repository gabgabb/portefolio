"use client";

import { Image } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface BadgeProps {
    image?: string;
    title: string;
    deleteText?: boolean;
    isActive: boolean;
    onClick: () => void;
    onClose: () => void;
}

const Badge: React.FC<BadgeProps> = ({
    image,
    title,
    deleteText = false,
    isActive,
    onClick,
    onClose,
}) => {
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                badgeRef.current &&
                !badgeRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive, onClose]);

    return (
        <div
            ref={badgeRef}
            className={`bg-blue-gray relative flex h-max items-center gap-2 rounded-md px-3 py-2 select-none ${deleteText ? "max-sm:cursor-pointer sm:cursor-pointer md:cursor-default" : ""}`}
            onClick={onClick}
        >
            {/* Tooltip animé (du centre vers l'extérieur) */}
            <AnimatePresence>
                {isActive && deleteText && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="border-stroke absolute -top-10 left-1/2 z-10 w-max -translate-x-1/2 transform rounded-md border bg-gray-800 px-3 py-1 text-base font-semibold text-white shadow-md lg:hidden"
                    >
                        {title}
                    </motion.div>
                )}
            </AnimatePresence>

            <Image
                alt={`Badge de ${title}`}
                width={30}
                height={30}
                src={image}
                className="h-6 w-6 object-contain"
            />
            <span
                className={`p-0 text-lg font-semibold ${deleteText ? "max-sm:hidden sm:hidden lg:block" : ""}`}
            >
                {title}
            </span>
        </div>
    );
};

export default Badge;
