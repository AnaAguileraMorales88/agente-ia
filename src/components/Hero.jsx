    import heroImg from '../assets/images/Imagen1.jpg'

    export default function Hero() {
    return (
        <section
        id="inicio"
        aria-labelledby="hero-title"
        className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10"
        >
        <article className="flex-1 flex flex-col gap-6">
            <h1
            id="hero-title"
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F3A5F] leading-tight"
            >
            Consigue más obras sin perder tiempo
            </h1>

            <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-base sm:text-lg leading-relaxed">
            Agentes IA que responden, filtran y agendan clientes por ti{' '}
            <strong>24/7</strong> — solo hablas con leads listos para cerrar.
            </p>

            <a
            href="mailto:ia.atencion.digital@gmail.com"
            className="font-[family-name:var(--font-body)] self-start bg-[#2E7D5B] hover:bg-[#256b4d] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7D5B]"
            >
            Agenda tu demo
            </a>
        </article>

        <figure className="flex-1 m-0">
            <img
            src={heroImg}
            alt="Profesional de la construcción revisando planos con tecnología de agentes IA"
            className="w-full h-auto rounded-2xl object-cover"
            />
        </figure>
        </section>
    )
    }