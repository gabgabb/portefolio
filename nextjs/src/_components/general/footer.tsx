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
                <div className="flex items-center justify-center gap-3">
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
                <div className="flex items-center justify-center font-extrabold gap-2 text-2xl max-sm:text-base">
                    <span>Build with</span>
                    <Link
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/nextJs.png"}
                            alt={"Next.js image"}
                            className="w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]"
                        />
                    </Link>
                    <span>and</span>
                    <Link
                        href="https://strapi.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/strapi.png"}
                            alt={"Strapi image"}
                            className="w-[120px] h-[30px] max-sm:w-[80px] max-sm:h-[20px]"
                        />
                    </Link>
                    <span>with love</span>
                </div>
                <div className="text-center">
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
