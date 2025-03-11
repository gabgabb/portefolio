"use client";

import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";
import { Image } from "@heroui/react";

const Footer: React.FC = () => {
    const locale = useLocale();

    return (
        <footer className="border-t border-stroke px-4">
            <div className="flex flex-col items-start py-8 px-4 gap-4 mx-auto w-full max-w-[1000px]">
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
                <div className="flex flex-wrap items-center justify-center font-extrabold text-2xl text-center gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2 max-sm:text-base max-sm:mx-auto">
                    <span className="whitespace-nowrap">Build with</span>
                    <Link
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/nextJs.png"}
                            alt={"Next.js image"}
                            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
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
                            className="w-[80px] h-[20px] sm:w-[120px] sm:h-[30px]"
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
