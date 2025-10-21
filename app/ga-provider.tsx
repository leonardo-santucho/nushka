// app/ga-provider.tsx
"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { GA_ID, pageview } from "@/lib/gtag"

export default function GAProvider() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_ID) return
    // Armamos la URL con window.* para evitar useSearchParams (y el warning de Suspense)
    const search = typeof window !== "undefined" ? window.location.search : ""
    const url = `${pathname || "/"}${search}`
    pageview(url)
  }, [pathname])

  return null
}
