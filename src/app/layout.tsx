import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ilman Aulya - Portfolio",
  description: "Personal portfolio of Ilman Aulya, a tech-savvy Sales Professional with a background in Informatics Engineering.",
  openGraph: {
    title: "Ilman Aulya - Portfolio",
    description: "Informatics Engineering Graduate & Award-Winning Sales Professional.",
    url: "https://ilmanaulya.com", // Placeholder
    siteName: "Ilman Aulya Portfolio",
    locale: "en_US",
    type: "website",
  },
}

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
