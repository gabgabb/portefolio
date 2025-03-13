"use client";

import React, { useEffect, useRef } from "react";
import { Image } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

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
            className={`relative flex bg-blue-gray h-max rounded-md px-3 py-2 gap-2 items-center select-none ${deleteText ? "max-sm:cursor-pointer sm:cursor-pointer md:cursor-default" : ""}`}
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
                        className="absolute w-max border border-stroke lg:hidden -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-md shadow-md text-base font-semibold z-10"
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
