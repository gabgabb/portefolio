import Link from 'next/link'
import React from "react";
import {ArrowRight} from "@/app/icons";

const Header: React.FC = () => {
    return (
        <header
            className="flex flex-row items-center justify-between md:px-16 pt-8 text-white sm:px-4">
            <div className="flex flex-col">
                <h1 className="font-bold text-xl h-5">Gabriel Filiot</h1>
                <h2 className="font-medium text-sm">Full stack developer</h2>
            </div>
            <div className={"flex flex-row gap-4"}>
                <div className="flex flex-row gap-4 text-xl font-bold">
                    <Link href={"https://github.com/gabgabb"}
                          className="button-primary group transition duration-300 flex justify-center items-center weightGrow">
                        Github
                        <ArrowRight/>
                    </Link>
                    <Link href={""}
                          className="button-primary group transition duration-300 flex justify-center items-center weightGrow">
                        CV
                        <ArrowRight/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/gabriel-filiot-475277209/"} target={"_blank"}
                          className="button-primary group transition duration-300 flex justify-center items-center weightGrow">
                        Linkedin
                        <ArrowRight/>
                    </Link>
                </div>
                <div className={"flex flex-row gap-2 s-pho:flex l-pho:flex text-xl font-bold"}>
                    <div className={"cursor-pointer underline underline-offset-4"}>FR</div>
                    <div>•</div>
                    <div className={"cursor-pointer"}>EN</div>
                </div>
            </div>
        </header>
    )
}

export default Header;