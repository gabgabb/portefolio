"use client";

import { Button } from "@heroui/react";
import { Menu, MoveUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeaderProps {
    onOpenDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDrawer }) => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const t = useTranslations("Header");

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Fonction pour changer de langue
    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            // Remplace l'ancien code de langue dans l'URL par le nouveau
            const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPath);
        }
    };

    return (
        <header className="flex flex-row items-center justify-between pt-8 text-white max-sm:px-8 sm:px-8 md:px-12 lg:px-24">
            <Link href={`/${locale}`} className="weightGrow flex flex-col">
                <h1 className="h-5 text-xl font-bold">Gabriel Filiot</h1>
                <h2 className="text-sm font-medium">{t("jobs")}</h2>
            </Link>
            <div
                className={
                    "flex flex-row gap-4 max-[350px]:ml-auto max-md:gap-2"
                }
            >
                <div className="flex flex-row gap-4 text-xl font-bold max-md:hidden">
                    <Link
                        href={`/${locale}/cv`}
                        className="button-primary group weightGrow flex items-center justify-center transition duration-300"
                    >
                        {t("cv")}
                    </Link>
                    <Link
                        href={"https://github.com/gabgabb"}
                        target={"_blank"}
                        className="button-primary group weightGrow flex items-center justify-center transition duration-300"
                    >
                        Github
                        <MoveUpRight size={18} color="#EAF3F6" />
                    </Link>
                    <Link
                        href={
                            "https://www.linkedin.com/in/gabriel-filiot-475277209/"
                        }
                        target={"_blank"}
                        className="button-primary group weightGrow flex items-center justify-center transition duration-300"
                    >
                        Linkedin
                        <MoveUpRight size={18} color="#EAF3F6" />
                    </Link>
                </div>
                <div
                    className={
                        "flex flex-row items-center text-xl font-bold max-[350px]:hidden"
                    }
                >
                    <Button
                        onPress={() => switchLocale("fr")}
                        className={`cursor-pointer px-2 ${
                            locale === "fr"
                                ? "font-extrabold underline underline-offset-4"
                                : "weightGrow font-medium"
                        }`}
                    >
                        FR
                    </Button>
                    <div>•</div>
                    <Button
                        onPress={() => switchLocale("en")}
                        className={`cursor-pointer px-2 ${
                            locale === "en"
                                ? "font-extrabold underline underline-offset-4"
                                : "weightGrow font-normal"
                        }`}
                    >
                        EN
                    </Button>
                </div>
                {mounted && (
                    <Button
                        onPress={onOpenDrawer}
                        className="hidden max-md:block"
                        isIconOnly
                        aria-label="Menu"
                        startContent={<Menu size={32} />}
                    />
                )}
            </div>
        </header>
    );
};

export default Header;
