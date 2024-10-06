import Link from 'next/link'
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="flex flex-row items-center justify-center border-b border-whiteStroke/10 py-5">
            <div className="flex w-[900px] justify-start">
                <h1 className="h1">Gabriel Filiot</h1>
            </div>
            <div className="flex flex-row gap-10">
                <Link href="/">
                    <span className="button-primary !text-yellow-50 ">
                        Accueil
                    </span>
                </Link>
                <Link href="/cv" className="button-primary !text-yellow-50">Expériences</Link>
                <Link href="/projects" className="button-primary !text-yellow-50">Projets</Link>
                <Link href="/contact" className="button-primary !text-yellow-50">Contact</Link>
            </div>
        </header>
    )
}

export default Header;