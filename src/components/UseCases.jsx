    const STEPS = [
    {
        time: '22:30 – WhatsApp',
        description: 'Cliente escribe fuera de horario — el agente responde al instante y agenda.',
    },
    {
        time: '10 consultas al día',
        description: 'Solo llegan al calendario los leads que realmente quieren contratar.',
    },
    {
        time: 'Lead sin respuesta',
        description: 'El sistema hace seguimiento automático, tú te enteras si hay interés.',
    },
    {
        time: 'Tú en obra todo el día',
        description: 'Tu negocio capta lo que tú no has podido atender, sin parar.',
    },
    ]

    export default function UseCases() {
    return (
        <section
        id="casos"
        aria-labelledby="usecases-title"
        className="bg-[#f5f7fa] py-16"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
            <h2
            id="usecases-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F]"
            >
            Casos de uso reales
            </h2>
            <ol className="flex flex-col gap-6 list-none p-0 m-0" role="list">
            {STEPS.map(({ time, description }, index) => (
                <li key={time} className="flex items-start gap-5">
                <span
                    aria-hidden="true"
                    className="shrink-0 w-9 h-9 rounded-full bg-[#1F3A5F] text-white flex items-center justify-center font-[family-name:var(--font-heading)] font-bold text-sm"
                >
                    {index + 1}
                </span>
                <aside className="flex flex-col gap-1">
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-[#1F3A5F] text-sm">
                    {time}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm">
                    {description}
                    </p>
                </aside>
                </li>
            ))}
            </ol>
        </article>
        </section>
    )
    }