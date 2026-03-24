    import erikaImg from '../assets/Images/ErikaIA.png'
    import anaImg from '../assets/Images/Ana.jpg'

    const TEAM = [
    {
        name: 'ERIKA',
        role: 'Director Marketing',
        description:
        'Estratega en marketing digital y publicidad de alto rendimiento. Diseña las campañas y embudos que impulsan a nuestros Agentes IA para generar más prospectos calificados, reducir costos y aumentar conversiones en cualquier sector.',
        image: erikaImg,
        alt: 'Foto de Erika, Directora de Marketing',
    },
    {
        name: 'ANA',
        role: 'Director de Operaciones',
        description:
        'Desarrollador de software especializado en Inteligencia Artificial. Lidera la implementación de nuestros Agentes IA para que empiecen a vender, agendar y atender en tiempo récord, totalmente integrados a tu negocio.',
        image: anaImg,
        alt: 'Foto de Ana, Directora de Operaciones',
    },
    ]

    export default function Team() {
    return (
        <section
        id="equipo"
        aria-labelledby="team-title"
        className="py-16 bg-white"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
            <h2
            id="team-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F]"
            >
            Equipo con trayectoria
            </h2>
            <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-12 list-none p-0 m-0"
            role="list"
            >
            {TEAM.map(({ name, role, description, image, alt }) => (
                <li key={name} className="flex flex-col gap-4">
                <figure className="m-0">
                    <img
                    src={image}
                    alt={alt}
                    className="w-58 h-58 object-cover object-top rounded-2xl mx-auto"

                    />
                </figure>
                <section className="flex flex-col gap-2">
                    <header>
                    <p className="font-[family-name:var(--font-heading)] font-bold text-[#1F3A5F] text-lg text-center">
                        {name}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm text-center">
                        {role}
                    </p>
                    </header>
                    <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm leading-relaxed text-center">
                    {description}
                    </p>
                </section>
                </li>
            ))}
            </ul>
        </article>
        </section>
    )
    }