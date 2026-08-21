"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBranch } from "@/context/BranchContext";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Phone, 
  MapPin, 
  MessageCircle 
} from "lucide-react";

export function FloatingNavbar() {
  const pathname = usePathname();
  const { branch, setBranch, branchData, getWhatsAppUrl } = useBranch();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Locação", href: "/locacao" },
    { label: "Venda", href: "/vendas" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
    { label: "Cadastre", href: "/cadastre" },
  ];

  return (
    <>
      {/* Floating Capsule Header Container */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Main Floating Capsule */}
          <nav className="w-full glass-dark rounded-full shadow-navbar px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 border border-white/15">
            
            {/* Logo Cristalmar */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#0EA5E9] flex items-center justify-center text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
                C
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
                  CRISTALMAR <span className="text-[10px] uppercase font-bold text-[#38BDF8] tracking-widest">Bombinhas</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-300">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-white/15 text-white font-bold shadow-sm"
                        : "hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right: Pill Toggle Filial [ Bombas | Canto Grande ] + CTA */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              
              {/* Seletor de Filial (Pill Toggle) */}
              <div className="inline-flex rounded-full bg-slate-900/90 p-1 border border-white/10 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setBranch("bombas")}
                  className={`px-3 py-1 rounded-full transition-all duration-200 ${
                    branch === "bombas"
                      ? "bg-[#3B82F6] text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Bombas
                </button>
                <button
                  type="button"
                  onClick={() => setBranch("cantoGrande")}
                  className={`px-3 py-1 rounded-full transition-all duration-200 ${
                    branch === "cantoGrande"
                      ? "bg-[#0EA5E9] text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Canto Grande
                </button>
              </div>

              {/* Botão CTA WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-100 text-[#1E2638] font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <span>Fale Conosco</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3B82F6]" />
              </a>

            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Cristalmar"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md sm:hidden"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="p-1.5 rounded-full text-white hover:bg-white/10 transition-colors"
                aria-label="Menu principal"
              >
                {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="fixed top-20 left-4 right-4 bg-[#1E2638] rounded-[2rem] p-6 text-white border border-white/15 shadow-2xl space-y-5 animate-in slide-in-from-top-4 duration-300">
            
            {/* Seletor de Filial no topo do Drawer */}
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" /> Selecione a Filial de Atendimento:
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-white/10 text-xs font-bold text-center">
                <button
                  type="button"
                  onClick={() => setBranch("bombas")}
                  className={`py-2 rounded-xl transition-all ${
                    branch === "bombas"
                      ? "bg-[#3B82F6] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Matriz Bombas
                </button>
                <button
                  type="button"
                  onClick={() => setBranch("cantoGrande")}
                  className={`py-2 rounded-xl transition-all ${
                    branch === "cantoGrande"
                      ? "bg-[#0EA5E9] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Filial Canto Grande
                </button>
              </div>
            </div>

            {/* Links do Menu */}
            <div className="space-y-1 pt-2 border-t border-white/10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                    pathname === link.href
                      ? "bg-white/15 text-white font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-slate-500 text-xs">&rarr;</span>
                </Link>
              ))}
            </div>

            {/* Info de Contato da Filial Ativa */}
            <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Telefone: {branchData.telefone}</span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp {branchData.nome}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
