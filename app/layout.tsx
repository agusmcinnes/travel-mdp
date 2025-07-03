import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NavbarProvider } from "@/contexts/navbar-context"
import { BlurWrapper } from "@/components/blur-wrapper"
import { Loader } from "@/components/loader"
import { WhatsAppButton } from "@/components/whatsapp-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Travel Mar del Plata - Tu Agencia de Viajes de Confianza",
  description:
    "Descubre el mundo con Travel Mar del Plata. Paquetes únicos, experiencias inolvidables y el mejor servicio personalizado para tus vacaciones soñadas.",}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Loader />
        <NavbarProvider>
          <Navigation />
          <BlurWrapper>
            {children}
            <Footer />
          </BlurWrapper>
          <WhatsAppButton />
        </NavbarProvider>
      </body>
    </html>
  )
}
