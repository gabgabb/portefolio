import Link from 'next/link';
import Image from 'next/image';
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex flex-row items-center justify-center py-5">
                <div className="mr-40 flex items-center space-x-6">
                    <Link href="https://www.linkedin.com/in/gabriel-filiot-475277209/" target="_blank"
                        rel="noopener noreferrer"><Image src="/linkedin.png" width="40" height="40" alt="linkedin"/></Link>
                    <Link href="https://github.com/gabgabb" target="_blank" rel="noopener noreferrer"><Image src="/github-mark.svg" width="40" height="40" alt="github"/></Link>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Gabriel Filiot. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;