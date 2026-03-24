    import ctaImg from '../assets/images/Imagen1.jpg'

    export default function Cta() {
    return (
        <section
        id="contacto"
        aria-labelledby="cta-title"
        className="bg-[#f5f7fa] py-16"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            
            <header className="flex-1 flex flex-col gap-6">
            <h2
                id="cta-title"
                className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] leading-tight"
            >
                Deja de perder oportunidades
            </h2>

            <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-base sm:text-lg">
                Empieza a recibir clientes <strong>realmente interesados</strong> en tus servicios.
            </p>

            <blockquote className="border-l-4 border-[#2E7D5B] pl-4 italic font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm">
                Te mostramos exactamente cómo funcionaría en tu empresa de reformas.
            </blockquote>

            <a
                href="mailto:ia.atencion.digital@gmail.com"
                className="font-[family-name:var(--font-body)] self-start bg-[#2E7D5B] hover:bg-[#256b4d] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7D5B]"
            >
                Agenda tu demo
            </a>
            </header>

            <figure className="flex-1 m-0">
            <img
                src={ctaImg}
                alt="Equipo celebrando el éxito de captar más clientes con inteligencia artificial"
                className="w-full h-auto rounded-2xl object-cover"
            />
            </figure>

        </article>
        </section>
    )
    }