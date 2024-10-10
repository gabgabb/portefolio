import Link from 'next/link';
import Image from 'next/image';
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex flex-row items-center justify-between py-5 border-t border-whiteStroke/10 px-4 l-pho:px-4 gap-2 s-pho:px-4 s-pho:flex-col l-pho:flex-col">
                <div className="flex items-center space-x-6">
                    <Link href="https://www.linkedin.com/in/gabriel-filiot-475277209/" target="_blank"
                        rel="noopener noreferrer"><Image src="/linkedin.png" width="40" height="40" alt="linkedin"/></Link>
                    <Link href="https://github.com/gabgabb" target="_blank" rel="noopener noreferrer"><Image src="/github-mark.svg" width="40" height="40" alt="github"/></Link>
                </div>
                <div className="text-center">
                    <span className="l16-text-reg">&copy; 2024 Gabriel Filiot. Tous droits réservés.</span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;