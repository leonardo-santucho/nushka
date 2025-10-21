// components/hero.tsx
"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useCallback } from "react"
import Header from "./header"
import heroImg from "@/public/images/portada-pistacho-01.webp"
// 👇 importa el helper para disparar eventos GA4
import { gaEvent } from "@/lib/gtag"

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
      <motion.div ref={container} style={{ y }} className="relative h-full isolate">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundColor: "#6b675c",
            backgroundImage: "url(/images/portada-pistacho-01-tiny.webp)",
          }}
          aria-hidden
        />

        <Image
          src={heroImg}
          alt="Nuska · Plantación de pistachos"
          fill
          priority
          loading="eager"
          sizes="100vw"
          quality={72}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="px-6 md:px-10 lg:px-16 max-w-3xl text-white">
            <span className="mb-3 inline-block text-[11px] tracking-[0.18em] uppercase opacity-90">
              El sabor que nace del esfuerzo familiar
            </span>

            <h1 className="font-sans text-5xl md:text-9xl font-bold tracking-tight leading-[1.05] drop-shadow">
              NUSHKA
            </h1>

            <p className="mt-5 text-base md:text-xl leading-relaxed md:leading-8 opacity-95 max-w-2xl">
              NUSHKA es el resultado de años de trabajo, ilusión y compromiso familiar.
              Desde Mendoza cultivamos y elaboramos pistachos con dedicación, cuidando cada detalle para que en cada paquete llegue un pedacito de nuestra historia y del amor por lo que hacemos.
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
                id="cta-wapp-hero"
                href={wappHref}
                target="_blank"
                rel="noopener noreferrer"
                // 👇 Dispara evento GA4 al click
                onClick={() =>
                  gaEvent("click_whatsapp", {
                    location: "hero",
                    label: "Hace tu pedido",
                    phone: wappPhone,
                    transport_type: "beacon", // ayuda a enviar el hit aunque abra nueva pestaña
                  })
                }
                className="inline-flex items-center gap-2 rounded-none bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700 shadow-sm ring-1 ring-emerald-600/30 transition hover:shadow-md hover:ring-emerald-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="Hacé tu pedido por WhatsApp"
              >
                Hacé tu pedido
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
