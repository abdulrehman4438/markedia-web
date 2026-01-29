"use client";

import { ThemeProvider } from './theme-provider'
import { NavbarComponent } from './navbar'

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <NavbarComponent />
      {children}
    </ThemeProvider>
  )
}
