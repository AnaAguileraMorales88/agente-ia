    const PROBLEMS = [
    {
        title: 'Leads sin respuesta',
        description: 'Llegan consultas, pero nadie responde a tiempo.',
    },
    {
        title: 'Clientes poco serios',
        description: 'Solo comparan precios y desaparecen.',
    },
    {
        title: 'Sin tiempo',
        description: 'Estás en obra. No puedes filtrar ni hacer seguimiento.',
    },
    ]

    export default function Problem() {
    return (
        <section
        id="problema"
        aria-labelledby="problem-title"
        className="bg-[#f5f7fa] py-16"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <header className="flex-1 flex flex-col gap-8">
            <h2
                id="problem-title"
                className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F] leading-tight"
            >
                El problema que te está costando dinero
            </h2>
            <ul className="flex flex-col gap-4 list-none p-0 m-0" role="list">
                {PROBLEMS.map(({ title, description }) => (
                <li
                    key={title}
                    className="bg-white rounded-xl p-5 shadow-sm border border-[#e8edf3]"
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
                src="/src/assets/images/Imagen2.jpg"
                alt="Constructor desbordado gestionando múltiples consultas sin sistema automatizado"
                className="w-full h-auto rounded-2xl object-cover"
            />
            </figure>
        </article>
        </section>
    )
    }