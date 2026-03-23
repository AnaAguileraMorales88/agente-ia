import { useState } from 'react'
import logo from '../assets/images/Logo.jpeg'

const NAV_LINKS = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#sobre-nosotros', label: 'Sobre nosotros' },
    { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav
                className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
                aria-label="Navegación principal"
            >
                <a
                    href="#inicio"
                    aria-label="Ir al inicio"
                    className="flex items-center"
                >
                    <img
                        src={logo}
                        alt="Logo de la empresa"
                        className="h-20 sm:h-25 md:h-30 lg:h-40 w-auto"
                    />
                </a>

                <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="font-[family-name:var(--font-body)] text-brand-gray hover:text-brand-blue text-sm font-medium transition-colors duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden p-2 text-brand-blue rounded-md focus-visible:outline-2 focus-visible:outline-brand-blue"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                <ul
                    id="mobile-menu"
                    className={`${isOpen ? 'flex' : 'hidden'
                        } md:hidden absolute top-full left-0 right-0 flex-col bg-white shadow-md px-6 py-4 gap-4 list-none m-0 p-0`}
                >
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="font-[family-name:var(--font-body)] text-brand-gray hover:text-brand-blue text-base font-medium transition-colors duration-200 block py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}