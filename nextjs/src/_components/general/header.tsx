import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex flex-row justify-center items-center py-5">
            <div className="flex justify-start w-[800px]">
                <h1 className="text-4xl font-bold">Gabriel Filiot</h1>
            </div>
            <div className="flex flex-row gap-10">
                <Link href="/">Accueil</Link>
                <Link href="/projects">Projets</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </header>
    )
}