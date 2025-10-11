// components/hero.tsx
"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useCallback } from "react"
import Header from "./header"
import heroImg from "@/public/images/portada-pistacho-01.webp" // import estático (optimiza mejor)

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  const wappPhone = "5492615266151"
  const wappMsg = encodeURIComponent("Hola Nushka, quiero hacer un pedido de pistachos. ¿Me ayudan?")
  const wappHref = `https://wa.me/${wappPhone}?text=${wappMsg}`

  const onAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector("#beneficios")
    if (!target) return
    const lenis: any = (window as any)?.lenis
    if (lenis?.scrollTo) { e.preventDefault(); lenis.scrollTo(target, { offset: 0 }); return }
    const loco: any = (window as any)?.locoScroll || (window as any)?.locomotive
    if (loco?.scrollTo) { e.preventDefault(); loco.scrollTo(target, { offset: 0, duration: 800, easing: [0.25, 0, 0.35, 1] }); return }
    e.preventDefault()
    ;(target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <motion.div
        ref={container}
        style={{ y }}
        className="relative h-full isolate"
      >
        {/* Fondo tiny y color base para que nunca se vea gris */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundColor: "#6b675c", // tono madera para evitar flash
            backgroundImage: "url(/images/portada-pistacho-01-tiny.webp)", // ~2–4KB
          }}
          aria-hidden
        />

        {/* Imagen principal, sin blur ni transiciones */}
        <Image
          src={heroImg}          // import estático
          alt="Nuska · Plantación de pistachos"
          fill
          priority
          loading="eager"
          sizes="100vw"
          quality={72}
          className="object-cover"
        />

        {/* Overlay constante */}
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />

        {/* Contenido */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="px-6 md:px-10 lg:px-16 max-w-3xl text-white">
            <span className="mb-3 inline-block text-[11px] tracking-[0.18em] uppercase opacity-90">
              Mendoza · Plantación de Pistachos
            </span>

            <h1 className="font-sans text-5xl md:text-9xl font-bold tracking-tight leading-[1.05] drop-shadow">
              NUSHKA
            </h1>

            <p className="mt-5 text-base md:text-xl leading-relaxed md:leading-8 opacity-95 max-w-2xl">
              En Nushka cultivamos pistachos con prácticas responsables, combinando tradición y tecnología
              para lograr sabor, textura y calidad superiores. ¡Del campo a tu mesa!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#beneficios"
                onClick={onAnchorClick}
                className="inline-flex items-center gap-2 rounded-none bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-neutral-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Descubrir Nuska"
              >
                Descubrir Nuska
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href={wappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700 shadow-sm ring-1 ring-emerald-600/30 transition hover:shadow-md hover:ring-emerald-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="Hacé tu pedido por WhatsApp"
              >
                Hacé tu pedido
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <path d="M19.6 17.3c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.9 1-.2.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.8 3.5 2.3 1 2.3.7 2.7.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" fill="currentColor"/>
                  <path d="M16 3a13 13 0 0 0-11 19.9L4 29l6.3-1.7A13 13 0 1 0 16 3Zm0 24a11 11 0 0 1-5.6-1.5l-.4-.2-3.7 1 1-3.6-.2-.4A11 11 0 1 1 16 27Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
