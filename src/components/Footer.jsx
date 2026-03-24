import logoWhite from '../assets/images/Logo blanco.jpeg'

const SOCIAL_LINKS = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61579573666134',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/reformas.rentables/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/erika-schmitz-/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: 'Email',
        href: 'mailto:ia.atencion.digital@gmail.com',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer className="bg-[#1F3A5F] py-12">
            <section className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
                <a href="#inicio" aria-label="Volver al inicio">
                    <img
                        src={logoWhite}
                        alt="Logo de la empresa"
                        className="h-30 w-auto"
                    />
                </a>

                <p className="font-[family-name:var(--font-heading)] text-white text-center text-xl md:text-xl font-semibold max-w-lg leading-snug">
                    El futuro de tu negocio empieza por seguirnos hoy.
                </p>

                <section aria-label="Redes sociales">
                    <ul className="flex items-center gap-6 list-none p-0 m-0" role="list">
                        {SOCIAL_LINKS.map(({ label, href, icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    aria-label={label}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="text-white hover:text-[#2E7D5B] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <hr className="w-full border-white/20" />

                <p className="font-[family-name:var(--font-body)] text-white/60 text-sm text-center">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </section>
        </footer>
    )
}