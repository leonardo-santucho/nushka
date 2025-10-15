// components/promo.tsx
"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Section() {
  const container = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], // cuando el top del contenedor llega al bottom del viewport → cuando el bottom llega al top
  })

  // Usa números (px). Ajustá magnitud a gusto (10–150 según el efecto deseado).
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80])

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="/images/campo-cosecha.jpg"
            fill
            alt="Abstract spiral circles"
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Natural, auténtico y con origen
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
        NUSHKA nació en Finca La Cristina, un emprendimiento familiar con más de 25 años de historia en Mendoza.
        En nuestras tierras cultivamos viña, olivo y pistacho, combinando tradición, trabajo y pasión por la naturaleza.
        Lo que comenzó como un sueño familiar hoy crece con el propósito de llevar a cada mesa un pedacito de ese esfuerzo mendocino.
      </p>
    </div>
  )
}
