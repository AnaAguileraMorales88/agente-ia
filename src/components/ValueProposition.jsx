    const FEATURES = [
    {
        title: 'Respuesta automática',
        description: 'Cada lead recibe atención al instante, 24/7.',
    },
    {
        title: 'Calificación inteligente',
        description: 'Filtra entre curiosos y clientes reales.',
    },
    {
        title: 'Agenda automática',
        description: 'Citas directamente en tu calendario.',
    },
    {
        title: 'Seguimiento sin esfuerzo',
        description: 'El agente persigue lo que tú no tienes tiempo de seguir.',
    },
    ]

    export default function ValueProposition() {
    return (
        <section
        id="servicios"
        aria-labelledby="value-title"
        className="bg-[#f5f7fa] py-16"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
            <header className="flex flex-col gap-2">
            <h2
                id="value-title"
                className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F]"
            >
                Nuestra Propuesta Única de Valor
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#2E2E2E]">
                <strong>Reformas ilimitadas:</strong> implementamos Agentes IA especializados en tu sector.
            </p>
            </header>
            <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0 m-0"
            role="list"
            >
            {FEATURES.map(({ title, description }) => (
                <li
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#e8edf3] flex flex-col gap-2"
                >
                <p className="font-[family-name:var(--font-heading)] font-semibold text-[#1F3A5F]">
                    {title}
                </p>
                <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm">
                    {description}
                </p>
                </li>
            ))}
            </ul>
        </article>
        </section>
    )
    }