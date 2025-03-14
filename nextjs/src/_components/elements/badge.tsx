"use client";

import { Button, Image } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface BadgeProps {
    image?: string;
    title: string;
    deleteText?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ image, title, deleteText = false }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        setIsTouchDevice(window.innerWidth < 1024);

        const handleClickOutside = (event: MouseEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return isTouchDevice && deleteText ? (
        <div className="relative">
            <Button
                ref={buttonRef}
                className="bg-blue-gray relative flex h-max items-center gap-2 rounded-md px-3 py-2 select-none focus:outline-none"
                onPress={() => {
                    setIsActive((prev) => !prev);
                }}
            >
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
            </Button>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="border-stroke absolute top-[-40px] left-1/2 z-50 w-max -translate-x-1/2 rounded-md border bg-gray-800 px-3 py-1 text-base font-semibold text-white shadow-md"
                    >
                        {title}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    ) : (
        <div className="bg-blue-gray relative flex h-max items-center gap-2 rounded-md px-3 py-2 select-none">
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
