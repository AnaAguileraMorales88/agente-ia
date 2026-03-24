    const REASONS = [
    {
        title: 'Sector reformas',
        description: 'Entendemos tus tiempos, ciclos de negocio y alta competencia.',
    },
    {
        title: 'Sistemas prácticos',
        description: 'Simple, enfocado en resultados reales, nada de complicaciones.',
    },
    {
        title: 'IA especializada',
        description: 'Herramientas que trabajan específicamente en este sector.',
    },
    ]

    export default function WhyUs() {
    return (
        <section
        id="sobre-nosotros"
        aria-labelledby="whyus-title"
        className="py-16"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <header className="flex-1 flex flex-col gap-8">
            <h2
                id="whyus-title"
                className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F] leading-tight"
            >
                Por qué confiar en nosotros
            </h2>
            <ul className="flex flex-col gap-4 list-none p-0 m-0" role="list">
                {REASONS.map(({ title, description }) => (
                <li
                    key={title}
                    className="bg-[#f5f7fa] rounded-xl p-5 border border-[#e8edf3]"
                >
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-[#1F3A5F] mb-1">
                    {title}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm">
                    {description}
                    </p>
                </li>
                ))}
            </ul>
            </header>
            <figure className="flex-1 m-0">
            <img
                src="/src/assets/images/imagen2.jpg"
                alt="Equipo especializado en inteligencia artificial para el sector reformas"
                className="w-full h-auto rounded-2xl object-cover"
            />
            </figure>
        </article>
        </section>
    )
    }