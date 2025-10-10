// components/featured.tsx
import Image from "next/image"

export default function Featured() {
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
          El poder natural del pistacho
        </h3>

        <p className="text-2xl lg:text-4xl mb-8 leading-snug text-neutral-900">
          Pequeños, pero poderosos. Los pistachos son una fuente natural de proteínas, antioxidantes y grasas saludables 
          que ayudan a cuidar el corazón y mejorar la energía diaria. Su equilibrio perfecto entre sabor y nutrición 
          los convierte en el snack ideal y en un ingrediente versátil para una vida más sana y consciente.
        </p>

        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit">
          APRENDE MAS
        </button>
      </div>
    </section>
  )
}
