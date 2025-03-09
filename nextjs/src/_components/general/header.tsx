"use client";

import Link from "next/link";
import React from "react";
import { MoveUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";

const Header: React.FC = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const t = useTranslations("Header");

    // Fonction pour changer de langue
    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            // Remplace l'ancien code de langue dans l'URL par le nouveau
            const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPath);
        }
    };

    return (
        <header className="flex flex-row items-center justify-between md:px-16 pt-8 text-white sm:px-4">
            <Link href={"/"} className="flex flex-col weightGrow">
                <h1 className="font-bold text-xl h-5">Gabriel Filiot</h1>
                <h2 className="font-medium text-sm">{t("jobs")}</h2>
            </Link>
            <div className={"flex flex-row gap-4"}>
                <div className="flex flex-row gap-4 text-xl font-bold">
                    <Link
                        href={`/${locale}/cv`}
                        className="button-primary group transition duration-300 flex justify-center items-center weightGrow"
                    >
                        {t("cv")}
                    </Link>
                    <Link
                        href={"https://github.com/gabgabb"}
                        target={"_blank"}
                        className="button-primary group transition duration-300 flex justify-center items-center weightGrow"
                    >
                        Github
                        <MoveUpRight size={18} color="#EAF3F6" />
                    </Link>
                    <Link
                        href={
                            "https://www.linkedin.com/in/gabriel-filiot-475277209/"
                        }
                        target={"_blank"}
                        className="button-primary group transition duration-300 flex justify-center items-center weightGrow"
                    >
                        Linkedin
                        <MoveUpRight size={18} color="#EAF3F6" />
                    </Link>
                </div>
                <div
                    className={
                        "flex flex-row gap-1 text-xl font-bold items-center"
                    }
                >
                    <Button
                        onPress={() => switchLocale("fr")}
                        className={`cursor-pointer px-2 ${
                            locale === "fr"
                                ? "font-extrabold underline underline-offset-4"
                                : "font-normal"
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
                                : "font-normal"
                        }`}
                    >
                        EN
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
