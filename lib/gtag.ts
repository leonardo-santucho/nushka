// lib/gtag.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""

// En GA4 se recomienda controlar el page_view manualmente (send_page_view: false en el init)
export const pageview = (url: string) => {
  if (!GA_ID || typeof window === "undefined") return
  window.gtag?.("event", "page_view", {
    page_location: url,
    page_path: url,
  })
}

export const gaEvent = (action: string, params: Record<string, any> = {}) => {
  if (!GA_ID || typeof window === "undefined") return
  window.gtag?.("event", action, params)
}

// Tipado mínimo global para TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
