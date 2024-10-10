import Link from 'next/link'
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="flex flex-row items-center justify-between border-b border-whiteStroke px-4 py-5 s-pho:justify-center l-pho:justify-center">
            <div className="flex">
                <h1 className="h1">Gabriel Filiot</h1>
            </div>
            <div className="flex flex-row gap-10 s-pho:hidden l-pho:hidden">
                <Link href="#about" className="button-primary group !text-yellow-50 transition duration-300">
                    À propos
                    <span
                        className="block h-0.5 max-w-0 bg-yellow-50 transition-all duration-500 group-hover:max-w-full"/>
                </Link>
                <Link href="#experiences" className="button-primary group !text-yellow-50 transition duration-300">Expériences
                    <span
                        className="block h-0.5 max-w-0 bg-yellow-50 transition-all duration-500 group-hover:max-w-full"/>
                </Link>
                <Link href="#projects" className="button-primary group !text-yellow-50 transition duration-300">Projets
                    <span
                        className="block h-0.5 max-w-0 bg-yellow-50 transition-all duration-500 group-hover:max-w-full"/>
                </Link>
                <Link href="#contact" className="button-primary group !text-yellow-50 transition duration-300">Contact
                    <span
                        className="block h-0.5 max-w-0 bg-yellow-50 transition-all duration-500 group-hover:max-w-full"/>
                </Link>
            </div>
        </header>
    )
}

export default Header;