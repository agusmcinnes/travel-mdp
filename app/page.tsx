import { Hero } from "@/components/hero"
import { Advantages } from "@/components/advantages"
import { AboutUs } from "@/components/about-us"
import { Packages } from "@/components/packages"
import { Contact } from "@/components/contact"
import { Hotels } from "@/components/hotels"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <Advantages />
      <AboutUs />
      <Packages />
      <Hotels />
      <Contact />
    </main>
  )
}
