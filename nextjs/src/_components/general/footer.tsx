"use client";

import { Image } from "@heroui/react";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    const locale = useLocale();

    return (
        <footer className="border-stroke border-t px-4">
            <div className="mx-auto flex w-full max-w-[1000px] flex-col items-start gap-4 px-4 py-8">
                <div className="flex items-center justify-center gap-3 max-sm:mx-auto">
                    <Link
                        href="https://github.com/gabgabb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/github_white.png"
                            width="40"
                            height="40"
                            alt="github"
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/gabriel-filiot-475277209/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/linkedin.png"
                            width="40"
                            height="40"
                            alt="linkedin"
                        />
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-2xl font-extrabold max-sm:mx-auto max-sm:text-base sm:gap-x-4 sm:gap-y-2">
                    <span className="whitespace-nowrap">Build with</span>
                    <Link
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/nextJs.png"}
                            alt={"Next.js image"}
                            className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]"
                        />
                    </Link>

                    <span className="whitespace-nowrap">and</span>

                    <Link
                        href="https://strapi.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/strapi.png"}
                            alt={"Strapi image"}
                            className="h-[20px] w-[80px] sm:h-[30px] sm:w-[120px]"
                        />
                    </Link>

                    <span className="whitespace-nowrap">with love</span>
                </div>

                <div className="text-center max-sm:mx-auto">
                    <span className="font-medium">
                        &copy;2024 Gabriel Filiot.
                        {locale === "fr"
                            ? " Tous droits réservés."
                            : " All rights reserved."}
                    </span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
