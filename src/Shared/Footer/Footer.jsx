import React from 'react'
import Logo from '../../Components/Logo/Logo'
import { Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-accent text-primary-content p-10">
            <aside>
                <Logo />
                <p className="font-bold">
                    Liberty National Bank Ltd.
                    <br />
                    Providing reliable tech since 2002
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <Twitter />
                    </a>
                    <a>
                        <Youtube />
                    </a>
                    <a>
                        <Facebook />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
