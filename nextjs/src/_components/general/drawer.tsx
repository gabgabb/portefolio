"use client";

import React, { useEffect } from "react";
import { MoveUpRight, X } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CustomDrawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Header");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPath);
        }
    };

    return (
        <>
            {/* Flou en arrière-plan */}
            <div
                className={`fixed inset-0 bg-opacity-50 backdrop-blur-md transition-opacity duration-300 z-40 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={onClose}
            />

            {/* Drawer qui slide de la droite */}
            <div
                className={`fixed top-0 right-0 min-[400px]:rounded-bl-xl min-[400px]:rounded-tl-2xl h-full w-[300px] max-[400px]:w-full bg-gray-900 text-white shadow-lg z-50 flex flex-col p-6 transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Bouton de fermeture */}
                <Button
                    className="self-end text-white text-3xl"
                    onPress={onClose}
                >
                    <X size={30} />
                </Button>

                {/* Liens de navigation */}
                <nav className="flex flex-col-reverse justify-start gap-10 text-lg font-bold">
                    <div className="flex flex-col gap-4">
                        <Link
                            href={`/${locale}/cv`}
                            className="text-xl"
                            onClick={onClose}
                        >
                            {t("cv")}
                        </Link>
                        <Link
                            href={"https://github.com/gabgabb"}
                            target={"_blank"}
                            className="flex items-center text-xl gap-2"
                        >
                            Github
                            <MoveUpRight size={18} color="#EAF3F6" />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/gabriel-filiot-475277209/"
                            }
                            target={"_blank"}
                            className="flex items-center text-xl gap-2"
                        >
                            Linkedin
                            <MoveUpRight size={18} color="#EAF3F6" />
                        </Link>
                    </div>
                    {/* Switch de langue */}
                    <div className="flex gap-1 min-[350px]:hidden text-xl underline-offset-4">
                        <Button
                            onPress={() => switchLocale("fr")}
                            className={`cursor-pointer pl-0 pr-2 ${locale === "fr" ? "underline font-extrabold" : "font-medium"}`}
                        >
                            FR
                        </Button>
                        <span>•</span>
                        <Button
                            onPress={() => switchLocale("en")}
                            className={`cursor-pointer px-2 ${locale === "en" ? "underline font-extrabold" : "font-medium"}`}
                        >
                            EN
                        </Button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default CustomDrawer;
