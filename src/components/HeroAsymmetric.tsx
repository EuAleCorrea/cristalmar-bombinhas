"use client";

import React from "react";
import Link from "next/link";
import { Star, ArrowRight, ArrowUpRight, MapPin, Waves, ShieldCheck } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export function HeroAsymmetric() {
  const { branchData, getWhatsAppUrl } = useBranch();

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Assimétrico de 2 Colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Coluna Esquerda (7 colunas no desktop) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Badge de Localização */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-bold text-[#1E2638]">
            <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
            <span>Bombinhas &bull; Santa Catarina</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-slate-400 font-medium">Temporada & Venda</span>
          </div>

          {/* Título Massivo Híbrido: Sans + Serif Editorial (§3.2) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111827] leading-[1.05]">
            Aluguel de <br />
            <span className="font-serif-luxury font-normal text-[#0284C7] drop-shadow-sm">
              Temporada
            </span> <br />
            em Bombinhas
          </h1>

          {/* Subtítulo Editorial */}
          <p className="text-slate-600 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
            Encontrar o refúgio perfeito à beira-mar ou o melhor investimento em Bombinhas é sobre viver momentos únicos. Coberturas duplex frente ao mar, casas completas e apartamentos de alto padrão.
          </p>

          {/* Link Longo com Seta Alongada (§5.2) */}
          <div className="pt-1">
            <Link
              href="/locacao"
              className="inline-flex items-center gap-3 text-sm sm:text-base font-extrabold text-[#1E2638] hover:text-[#3B82F6] transition-colors group"
            >
              <span>Ver imóveis selecionados</span>
              <span className="font-mono text-slate-400 group-hover:text-[#3B82F6] group-hover:translate-x-2 transition-all">
                ──────────→
              </span>
            </Link>
          </div>

          {/* Widgets Flutuantes Inferiores (§5.2) */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            
            {/* Widget 1: Avatar Stack + Avaliação 4.9★ */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all flex items-center gap-3.5">
              <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Hóspede"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Hóspede"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  alt="Hóspede"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-sm font-black text-[#111827]">4.9</span>
                  <div className="flex text-[#F59E0B]">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  </div>
                  <span className="text-xs text-slate-500 font-semibold">(120+ reviews)</span>
                </div>
                <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-0.5 whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Hóspedes Verificados</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Miniatura de Imóvel com Link */}
            <Link
              href="/locacao/024"
              className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100 shadow-sm">
                <img
                  src="https://www.bombasbombinhas.com.br/fotos/024.jpg"
                  alt="Porto Verano"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-black text-[#111827] group-hover:text-[#3B82F6] transition-colors truncate flex items-center gap-1">
                  <span>Porto Verano</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#3B82F6] transition-colors shrink-0" />
                </div>
                <div className="text-xs font-bold text-[#0EA5E9] flex items-center gap-1 mt-0.5">
                  <Waves className="w-3 h-3 shrink-0" />
                  <span>Pé na Areia &bull; #024</span>
                </div>
              </div>
            </Link>

          </div>

        </div>

        {/* Coluna Direita: Imagem Vertical Escultural com Card Flutuante (5 colunas) */}
        <div className="lg:col-span-5 relative">
          
          <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 group">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
              alt="Mansão de Luxo em Bombinhas"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating Action Capsule no Rodapé da Foto (§5.2) */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-3.5 rounded-2xl glass-dark shadow-float">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Atendimento Imediato</div>
                  <div className="text-[10px] text-slate-300 font-medium">Corretores em {branchData.nome}</div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de consultar imóveis de temporada em Bombinhas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-md"
                aria-label="Conectar via WhatsApp"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
