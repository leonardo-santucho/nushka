// app/layout.tsx
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics as VercelAnalytics } from "@vercel/analytics/next"
import Script from "next/script"                 // IMPORTANTE
import { Suspense } from "react"                 // 👈
import "./globals.css"
import GAProvider from "@/app/ga-provider"
import { GA_ID } from "@/lib/gtag"

export const metadata: Metadata = {
  title: "Nushka",
  description: "Creado por Nushka",
  generator: "Nushka",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false, anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans">
        {/* Envolvemos en Suspense por seguridad */}
        <Suspense fallback={null}>
          <GAProvider />
        </Suspense>

        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
