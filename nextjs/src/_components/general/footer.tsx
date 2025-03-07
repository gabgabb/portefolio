import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
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
                <div className="flex items-center justify-center font-extrabold gap-2 text-2xl">
                    <span>Build with</span>
                    <Link
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/nextJs.png"}
                            alt={"Next.js image"}
                            width={40}
                            height={40}
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
                            width={120}
                            height={30}
                        />
                    </Link>
                    <span>with love</span>
                </div>
                <div className="text-center">
                    <span className="font-medium">
                        &copy;2024 Gabriel Filiot. Tous droits réservés.
                    </span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
