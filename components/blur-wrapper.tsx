"use client"

import { useNavbar } from "@/contexts/navbar-context"
import type { ReactNode } from "react"

interface BlurWrapperProps {
  children: ReactNode
}

export function BlurWrapper({ children }: BlurWrapperProps) {
  const { isOpen } = useNavbar()

  return (
    <div 
      className={`transition-all duration-300 ${
        isOpen ? "blur-sm" : "blur-0"
      }`}
    >
      {children}
    </div>
  )
}
