    import imagen2 from '../assets/images/Imagen2.jpg'

    const BENEFITS = [
    'Cada cliente recibe respuesta en segundos, automáticamente.',
    'El sistema filtra tu embudo y cita de leads serios.',
    'Más obras, más contactos, más clientes rentables.',
    ]

    export default function Scenario() {
    return (
        <section
        id="escenario"
        aria-labelledby="scenario-title"
        className="py-16"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <figure className="flex-1 m-0">
            <img
                src={imagen2}
                alt="Profesional de reformas gestionando clientes automáticamente con IA"
                className="w-full h-auto rounded-2xl object-cover"
            />
            </figure>
            <header className="flex-1 flex flex-col gap-6">
            <h2
                id="scenario-title"
                className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F] leading-tight"
            >
                Imagina este escenario
            </h2>
            <ul className="flex flex-col gap-4 list-none p-0 m-0" role="list">
                {BENEFITS.map((text) => (
                <li key={text} className="flex items-start gap-3">
                    <span aria-hidden="true" className="text-[#2E7D5B] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </span>
                    <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-base">
                    {text}
                    </p>
                </li>
                ))}
            </ul>
            </header>
        </article>
        </section>
    )
    }