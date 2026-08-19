"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroAsymmetric } from "@/components/HeroAsymmetric";
import { SearchCapsule } from "@/components/SearchCapsule";
import { PropertyCardLuxury } from "@/components/PropertyCardLuxury";
import { DualFeatureShowcase } from "@/components/DualFeatureShowcase";
import { BeachGuide } from "@/components/BeachGuide";
import { TestimonialImmersive } from "@/components/TestimonialImmersive";
import { UnitsSection } from "@/components/UnitsSection";
import { NewsletterBox } from "@/components/NewsletterBox";
import { IMOVEIS_DATA } from "@/data/imoveis";
import { useBranch } from "@/context/BranchContext";
import { Sparkles, ArrowRight, Waves } from "lucide-react";

export default function HomePage() {
  const { branch } = useBranch();
  const [filterTag, setFilterTag] = useState<string>("todos");

  // Filtra os imóveis de temporada em destaque com base na filial ativa e tags rápidas
  const destaques = IMOVEIS_DATA.filter((imovel) => {
    if (imovel.finalidade === "venda") return false;

    // Filtro por filial se selecionado
    if (filterTag === "filial") {
      return branch === "cantoGrande" 
        ? imovel.praia === "Canto Grande" 
        : imovel.praia === "Bombas";
    }

    if (filterTag === "frenteMar") {
      return (
        imovel.distanciaMar.toLowerCase().includes("frente") || 
        imovel.distanciaMar.toLowerCase().includes("pé") ||
        imovel.distanciaMar.toLowerCase().includes("50m")
      );
    }

    if (filterTag === "coberturas") {
      return imovel.tipo === "Cobertura";
    }

    if (filterTag === "bombas") return imovel.praia === "Bombas";
    if (filterTag === "cantoGrande") return imovel.praia === "Canto Grande";

    return imovel.destaque;
  });

  return (
    <div className="space-y-4">
      
      {/* 1. Hero Assimétrica Editorial (§5.2) */}
      <HeroAsymmetric />

      {/* 2. Barra de Busca Segmentada em Cápsula (§5.3) */}
      <SearchCapsule />

      {/* 3. Grid de Imóveis em Destaque com Cards Editoriais (§5.4) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              Catálogo de Temporada
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Imóveis Selecionados em Bombinhas
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-medium mt-1">
              Imóveis vistoriados, pé na areia e com suporte presencial em Bombas e Canto Grande.
            </p>
          </div>

          <Link
            href="/locacao"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#1E2638] font-bold text-xs shadow-card border border-slate-200/80 transition-all group shrink-0"
          >
            <span>Ver Todos ({IMOVEIS_DATA.length})</span>
            <ArrowRight className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tags de Filtros Rápidos em Formato Pílula */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setFilterTag("todos")}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
              filterTag === "todos"
                ? "bg-[#1E2638] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            ✨ Todos os Destaques
          </button>

          <button
            type="button"
            onClick={() => setFilterTag("frenteMar")}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
              filterTag === "frenteMar"
                ? "bg-[#0EA5E9] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            🌊 Pé na Areia / Frente Mar
          </button>

          <button
            type="button"
            onClick={() => setFilterTag("coberturas")}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
              filterTag === "coberturas"
                ? "bg-[#5C667E] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            🏰 Coberturas Duplex
          </button>

          <button
            type="button"
            onClick={() => setFilterTag("bombas")}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
              filterTag === "bombas"
                ? "bg-[#3B82F6] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            🏖️ Praia de Bombas
          </button>

          <button
            type="button"
            onClick={() => setFilterTag("cantoGrande")}
            className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
              filterTag === "cantoGrande"
                ? "bg-[#0EA5E9] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            🌅 Canto Grande
          </button>
        </div>

        {/* Grid de Cards Editoriais (§5.4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destaques.slice(0, 6).map((imovel, idx) => (
            <PropertyCardLuxury key={imovel.codigo} imovel={imovel} priority={idx < 3} />
          ))}
        </div>

        {/* Link para catálogo completo */}
        <div className="text-center mt-12">
          <Link
            href="/locacao"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-extrabold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explorar Todos os Imóveis para Aluguel</span>
            <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
          </Link>
        </div>

      </section>

      {/* 4. Bloco Dual Feature (40/60) (§5.5) */}
      <DualFeatureShowcase />

      {/* 5. Guia Visual das Praias de Bombinhas */}
      <BeachGuide />

      {/* 6. Depoimentos Imersivos com Citação em Serif Italic (§5.6) */}
      <TestimonialImmersive />

      {/* 7. Nossas Unidades (Bombas & Canto Grande) */}
      <UnitsSection />

      {/* 8. Newsletter em Velvet Slate (§5.7) */}
      <NewsletterBox />

    </div>
  );
}
