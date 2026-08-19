"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Home, 
  Key, 
  Compass, 
  Building2, 
  PhoneCall, 
  PlusCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { EMPRESA_DATA, getWhatsAppLink } from "@/data/empresa";

interface HeaderProps {
  onOpenCallMe?: () => void;
}

export function Header({ onOpenCallMe }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState<"bombas" | "cantoGrande">("bombas");
  const pathname = usePathname();

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Aluguel de Temporada", href: "/locacao" },
    { label: "Imóveis à Venda", href: "/vendas" },
    { label: "Sobre a Cristalmar", href: "/empresa" },
    { label: "Cadastre seu Imóvel", href: "/cadastre" },
    { label: "Contato", href: "/contato" }
  ];

  const currentUnitData = EMPRESA_DATA.unidades[activeUnit];

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Topbar: Informações de Unidades & Contato Rápido */}
      <div className="bg-[#071e3d] text-white text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Seletor de Unidades */}
          <div className="flex items-center gap-2">
            <span className="text-blue-300 flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Nossas Unidades:
            </span>
            <div className="inline-flex rounded-full bg-blue-950/80 p-0.5 border border-blue-800/60">
              <button
                type="button"
                onClick={() => setActiveUnit("bombas")}
                className={`px-2.5 py-0.5 rounded-full transition-all text-xs font-semibold ${
                  activeUnit === "bombas"
                    ? "bg-sky-500 text-white shadow-sm"
                    : "text-blue-200 hover:text-white"
                }`}
              >
                Bombas (Matriz)
              </button>
              <button
                type="button"
                onClick={() => setActiveUnit("cantoGrande")}
                className={`px-2.5 py-0.5 rounded-full transition-all text-xs font-semibold ${
                  activeUnit === "cantoGrande"
                    ? "bg-teal-500 text-white shadow-sm"
                    : "text-blue-200 hover:text-white"
                }`}
              >
                Canto Grande (Filial)
              </button>
            </div>
          </div>

          {/* Dados da unidade selecionada */}
          <div className="hidden md:flex items-center gap-5 text-blue-100">
            <a 
              href={`tel:${currentUnitData.telefoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{currentUnitData.telefone}</span>
            </a>

            <a 
              href={getWhatsAppLink(activeUnit)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              WhatsApp: {currentUnitData.whatsapp}
            </a>

            <button
              type="button"
              onClick={onOpenCallMe}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full font-bold transition-all shadow hover:scale-105 flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              Ligamos pra você
            </button>
          </div>

        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Cristalmar */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-teal-500 to-cyan-400 flex items-center justify-center text-white font-black text-2xl shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-[#071e3d] flex items-center gap-1">
                CRISTALMAR
                <span className="text-xs uppercase bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded-md">
                  Imóveis
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
                Bombinhas / SC &bull; Venda &bull; Temporada
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-sky-50 text-sky-700 font-bold"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/cadastre"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border-2 border-sky-600 text-sky-700 font-bold text-sm hover:bg-sky-50 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              Anunciar Imóvel
            </Link>

            <a
              href={getWhatsAppLink("bombas")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenCallMe}
              className="bg-amber-500 text-slate-950 p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-2xl text-base font-semibold flex items-center justify-between ${
                  pathname === link.href
                    ? "bg-sky-50 text-sky-700 font-bold"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">&rarr;</span>
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/cadastre"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-sky-50 text-sky-700 border border-sky-200 text-center font-bold text-sm flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                Cadastrar meu Imóvel
              </Link>

              <a
                href={getWhatsAppLink(activeUnit)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                WhatsApp Unidade {activeUnit === "bombas" ? "Bombas" : "Canto Grande"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
