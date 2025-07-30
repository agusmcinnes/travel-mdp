"use client"

import { Shield, Users, Award, CreditCard } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description:
        "Viaja con total tranquilidad. Todos nuestros paquetes incluyen seguros completos y asistencia 24/7.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada viaje es único. Nuestro equipo diseña experiencias a medida según tus gustos y preferencias.",
    },
    {
      icon: Award,
      title: "10 Años de Experiencia",
      description: "Somos líderes en turismo. Miles de viajeros han confiado en nosotros para sus mejores vacaciones.",
    },
    {
      icon: CreditCard,
      title: "Reservá y paga en Cuotas",
      description: "Financia tu viaje soñado. Ofrecemos múltiples opciones de pago y planes de cuotas con una pequeña reserva.",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-travel-blue rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-travel-gold rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-travel-blue mb-4">
            ¿Por qué elegir Travel Mar del Plata?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos más que una agencia de viajes, somos tus compañeros de aventura
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-r from-travel-blue to-travel-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <advantage.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-travel-gold/20 rounded-full mx-auto animate-ping group-hover:animate-none"></div>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-travel-blue mb-4 group-hover:text-travel-gold transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
