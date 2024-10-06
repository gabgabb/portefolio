import Link from 'next/link'
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="flex flex-row items-center justify-center border-b border-whiteStroke/10 py-5">
            <div className="flex w-[800px] justify-start">
                <h1 className="text-4xl font-bold">Gabriel Filiot</h1>
            </div>
            <div className="flex flex-row gap-10">
                <Link href="/nextjs/public">Accueil</Link>
                <Link href="/projects">Projets</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </header>
    )
}

export default Header;