    const AGENTS = [
    {
        id: 'atencion-cliente',
        title: 'Atención al Cliente Inteligente',
        description: 'Nuestro Agente IA atiende llamadas, responde consultas, filtra clientes y agenda citas automáticamente. También realiza seguimientos para confirmar o reagendar, asegurando que no pierdas ninguna oportunidad.',
        features: [
        'Disponibilidad 24/7.',
        'Se conecta con tus sistemas de clientes y calendario, y gestiona múltiples conversaciones al mismo tiempo sin perder oportunidades.',
        ],
        image: '/src/assets/images/Imagen4.jpg',
        alt: 'Robot azul representando el agente de atención al cliente inteligente',
    },
    {
        id: 'vendedor-whatsapp',
        title: 'IA Vendedor por WhatsApp',
        description: 'Atiende, filtra y convierte conversaciones en clientes automáticamente, con seguimiento y ventas optimizadas desde WhatsApp.',
        features: [
        'Respuesta instantánea y seguimiento automático.',
        'Incluye respuestas y guiones de venta ya optimizados para convertir más clientes.',
        'Aprovecha cada oportunidad de venta sugiriendo extras de forma inteligente.',
        ],
        image: '/src/assets/images/imagen5.jpg',
        alt: 'Robot con iconos de redes sociales representando el agente vendedor por WhatsApp',
    },
    {
        id: 'responde-emails',
        title: 'IA que responde tus emails',
        description: 'Ideal para empresas de reformas que reciben solicitudes y pierden oportunidades por no responder a tiempo.',
        features: [
        'Responde automáticamente a todos los emails entrantes en segundos.',
        'Hace seguimiento automático a clientes que no responden.',
        'Clasifica y prioriza leads interesados.',
        ],
        image: '/src/assets//images/Imagen6.jpg',
        alt: 'Robot con portátil representando el agente que gestiona emails automáticamente',
    },
    {
        id: 'responde-emails-2',
        title: 'IA que responde tus emails',
        description: 'Ideal para empresas de reformas que reciben solicitudes y pierden oportunidades por no responder a tiempo.',
        features: [
        'Responde automáticamente a todos los emails entrantes en segundos.',
        'Hace seguimiento automático a clientes que no responden.',
        'Clasifica y prioriza leads interesados.',
        ],
        image: '/src/assets/images/Imagen7.jpg',
        alt: 'Robot con portátil representando el agente que gestiona emails automáticamente',
    },
    ]

    export default function WhatWeOffer() {
    return (
        <section
        id="que-ofrecemos"
        aria-labelledby="offer-title"
        className="py-16 bg-white"
        >
        <article className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
            <h2
            id="offer-title"
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#1F3A5F]"
            >
            ¿Qué tipos de <strong className="text-[#2E7D5B]">AGENTES IA</strong> podríamos incorporar?
            </h2>

            <ul className="flex flex-col gap-16 list-none p-0 m-0" role="list">
            {AGENTS.map(({ id, title, description, features, image, alt }) => (
                <li
                key={id}
                className="flex flex-col md:flex-row items-start gap-8 border-b border-[#e8edf3] pb-16 last:border-0 last:pb-0"
                >
                <figure className="m-0 shrink-0 w-full md:w-44">
                    <img
                    src={image}
                    alt={alt}
                    className="w-full h-auto rounded-2xl object-cover"
                    />
                </figure>
                <section className="flex flex-col gap-4 flex-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1F3A5F]">
                    {title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm leading-relaxed">
                    {description}
                    </p>
                    <ul className="flex flex-col gap-2 list-none p-0 m-0" role="list">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-[#2E7D5B] mt-0.5 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <p className="font-[family-name:var(--font-body)] text-[#2E2E2E] text-sm">
                            {feature}
                        </p>
                        </li>
                    ))}
                    </ul>
                    <a
                    href="mailto:ia.atencion.digital@gmail.com"
                    className="font-[family-name:var(--font-body)] self-start bg-[#2E7D5B] hover:bg-[#256b4d] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E7D5B] mt-2"
                    >
                    Agendar DEMO
                    <span className="block text-xs font-normal opacity-80">Agentes IA 24/7</span>
                    </a>
                </section>
                </li>
            ))}
            </ul>
        </article>
        </section>
    )
    }