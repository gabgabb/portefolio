"use client";

import { Button } from "@heroui/react";
import { MoveUpRight, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
                className={`bg-opacity-50 fixed inset-0 z-40 backdrop-blur-md transition-opacity duration-300 ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
                onClick={onClose}
            />

            {/* Drawer qui slide de la droite */}
            <div
                className={`fixed top-0 right-0 z-50 flex h-full w-[300px] flex-col bg-gray-900 p-6 text-white shadow-lg transition-transform duration-300 max-[400px]:w-full min-[400px]:rounded-tl-2xl min-[400px]:rounded-bl-xl ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Bouton de fermeture */}
                <Button
                    className="self-end text-3xl text-white bg-transparent"
                    onPress={onClose}
                >
                    <X size={30} />
                </Button>

                {/* Liens de navigation */}
                <nav className="flex flex-col-reverse justify-start gap-10 text-lg font-bold">
                    <div className="flex flex-col gap-4">
                        <Link
                            href={`/${locale}`}
                            className="text-xl"
                            onClick={onClose}
                        >
                            {t("home")}
                        </Link>
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
                            className="flex items-center gap-2 text-xl"
                        >
                            Github
                            <MoveUpRight size={18} color="#EAF3F6" />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/gabriel-filiot-475277209/"
                            }
                            target={"_blank"}
                            className="flex items-center gap-2 text-xl"
                        >
                            Linkedin
                            <MoveUpRight size={18} color="#EAF3F6" />
                        </Link>
                    </div>
                    {/* Switch de langue */}
                    <div className="flex gap-1 text-xl underline-offset-4 min-[350px]:hidden">
                        <Button
                            onPress={() => switchLocale("fr")}
                            className={`cursor-pointer pr-2 pl-0 ${locale === "fr" ? "font-extrabold underline" : "font-medium"}`}
                        >
                            FR
                        </Button>
                        <span>•</span>
                        <Button
                            onPress={() => switchLocale("en")}
                            className={`cursor-pointer px-2 ${locale === "en" ? "font-extrabold underline" : "font-medium"}`}
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
