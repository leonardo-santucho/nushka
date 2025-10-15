// components/featured.tsx
import Image from "next/image"

export default function Featured() {

  const wappPhone = "5492615266151"
  const wappMsg = encodeURIComponent("Hola Nushka, necesito mas información. ¿Me ayudan?")
  const wappHref = `https://wa.me/${wappPhone}?text=${wappMsg}`

  return (
    <section
      id="beneficios"
      className="scroll-mt-[180px] lg:scroll-mt-[10px] flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0"
    >
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <Image
          src="/images/pistacho-frasco.jpg"
          alt="Frasco con pistachos naturales"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 tracking-wide text-sm text-neutral-600">
          Un proyecto que crece con raíces mendocinas
        </h3>

        <p className="text-2xl lg:text-4xl mb-8 leading-snug text-neutral-900">
          En Finca La Cristina seguimos plantando y haciendo crecer nuestros pistachos con la ilusión de verlos dar fruto.
          Mientras tanto, trabajamos con productores de confianza para ofrecer pistachos de calidad, reflejo del mismo compromiso y dedicación familiar.
          Comercializamos de forma mayorista y minorista, compartiendo paso a paso el crecimiento de este proyecto mendocino.        
        </p>

        <a
          href={wappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit inline-flex items-center gap-2 rounded"
          aria-label="Chatear por WhatsApp"
        >
          MAS INFO
          {/* opcional: ícono */}
          {/* <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M..."/></svg> */}
        </a>
      </div>
    </section>
  )
}
