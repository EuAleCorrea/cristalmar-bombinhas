import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "@/components/ClientWrapper";

// Fallback de alta performance para a fonte Sans-Serif Principal (Garet)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary-sans-fallback",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Fallback de alta performance para a fonte Serif Secundária (The Seasons)
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display-serif-fallback",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// Fonte Mono para Códigos e Dados
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-data",
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cristalmar Imóveis — Aluguel de Temporada & Venda em Bombinhas / SC",
  description: "Exclusividade e sofisticação em aluguel de temporada e venda de imóveis em Bombinhas, Bombas, Canto Grande, Mariscal e Quatro Ilhas. Mais de 20 anos de tradição.",
  keywords: [
    "Bombinhas",
    "Bombas",
    "Canto Grande",
    "Mariscal",
    "aluguel de temporada Bombinhas",
    "imóveis em Bombinhas",
    "Cristalmar Imóveis",
    "pé na areia Bombinhas",
    "coberturas Bombas"
  ],
  openGraph: {
    title: "Cristalmar Imóveis — Coastal Architectural Luxury em Bombinhas",
    description: "Imóveis selecionados de alto padrão em Bombas e Canto Grande. Atendimento presencial e suporte completo para suas férias.",
    url: "https://bombasbombinhas.com.br",
    siteName: "Cristalmar Imóveis",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Praia de Bombas - Cristalmar Imóveis"
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body 
        suppressHydrationWarning 
        className="antialiased bg-[#F4F7FC] text-[#1E2638] selection:bg-sky-500 selection:text-white"
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
