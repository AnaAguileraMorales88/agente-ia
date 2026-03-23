    const FAQS = [
    {
        question: '"No entiendo nada de IA"',
        answer: 'No necesitas entenderlo. Nosotros lo configuramos todo.',
    },
    {
        question: '"No tengo tiempo"',
        answer: 'Existe precisamente para quitarte carga, no añadirla.',
        bold: 'quitarte carga',
    },
    {
        question: '"¿Y si no funciona?"',
        answer: 'Adaptamos el sistema a tu cliente y proceso real de ventas.',
    },
    ]

    export default function Faq() {
    return (
        <section
        id="dudas"
        aria-labelledby="faq-title"
        className="py-16"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
            <h2
            id="faq-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F]"
            >
            Tus dudas, resueltas
            </h2>
            <section className="flex flex-col md:flex-row items-start gap-10">
            <figure className="flex-1 m-0">
                <img
                src="/src/assets/images/Imagen2.jpg"
                alt="Persona dando la mano a un robot, representando la colaboración con IA"
                className="w-full h-auto rounded-2xl object-cover"
                />
            </figure>
            <ul className="flex-1 flex flex-col gap-4 list-none p-0 m-0" role="list">
                {FAQS.map(({ question, answer, bold }) => (
                <li
                    key={question}
                    className="bg-[#f5f7fa] rounded-xl p-5 border border-[#e8edf3] flex flex-col gap-2"
                >
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-[#1F3A5F]">
                    {question}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm">
                    {bold
                        ? answer.split(bold).map((part, i, arr) =>
                            i < arr.length - 1
                            ? <span key={i}>{part}<strong>{bold}</strong></span>
                            : part
                        )
                        : answer}
                    </p>
                </li>
                ))}
            </ul>
            </section>
        </article>
        </section>
    )
    }