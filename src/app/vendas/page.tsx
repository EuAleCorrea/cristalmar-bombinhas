"use client";

import React, { useState, useMemo } from "react";
import { PropertyCardLuxury } from "@/components/PropertyCardLuxury";
import { IMOVEIS_DATA } from "@/data/imoveis";
import { Sparkles, Key, Building2, TrendingUp, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "@/data/empresa";
import { useBranch } from "@/context/BranchContext";

export default function VendasPage() {
  const { branch, getWhatsAppUrl } = useBranch();
  const [selectedPraia, setSelectedPraia] = useState("");

  const vendas = useMemo(() => {
    return IMOVEIS_DATA.filter((i) => {
      if (i.finalidade !== "venda" && i.finalidade !== "ambos") return false;
      if (selectedPraia && i.praia !== selectedPraia) return false;
      return true;
    });
  }, [selectedPraia]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Editorial */}
      <div className="mb-12 text-left">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Key className="w-3.5 h-3.5 text-[#0EA5E9]" />
          Investimento Imobiliário &bull; Bombinhas SC
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
          Imóveis Selecionados para <br className="hidden sm:inline" />
          <span className="font-serif-luxury font-normal text-[#0284C7]">
            Aquisição & Rentabilidade
          </span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium max-w-3xl">
          Invista em uma das penínsulas de maior valorização imobiliária do Brasil com a assessoria experiente da Cristalmar.
        </p>
      </div>

      {/* Cards de Vantagens do Investidor */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-card flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-[#111827] text-base mb-1">Alta Valorização</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Bombinhas é uma península exclusiva com limite territorial e constante valorização patrimonial.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-card flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-[#111827] text-base mb-1">Renda Passiva em Temporada</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              A Cristalmar assume a gestão total de locação do seu imóvel com alta taxa de ocupação.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-card flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-[#111827] text-base mb-1">Segurança Jurídica</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Mais de 20 anos avaliando matrículas, escrituras e contratos com total idoneidade.
            </p>
          </div>
        </div>
      </div>

      {/* Filtros em Formato Pílula */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => setSelectedPraia("")}
          className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
            selectedPraia === "" ? "bg-[#1E2638] text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          Todos os Imóveis à Venda
        </button>
        <button
          type="button"
          onClick={() => setSelectedPraia("Bombas")}
          className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
            selectedPraia === "Bombas" ? "bg-[#3B82F6] text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          Praia de Bombas
        </button>
        <button
          type="button"
          onClick={() => setSelectedPraia("Canto Grande")}
          className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
            selectedPraia === "Canto Grande" ? "bg-[#0EA5E9] text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          Canto Grande
        </button>
      </div>

      {/* Grid de Imóveis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {vendas.map((imovel) => (
          <PropertyCardLuxury key={imovel.codigo} imovel={imovel} priority />
        ))}
      </div>

      {/* CTA Consultoria Off-Market em Velvet Slate */}
      <div className="mt-16 bg-[#5C667E] text-white p-8 sm:p-14 rounded-[2.5rem] shadow-card text-center max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold">
          Procura um Imóvel Específico para Compra?
        </h3>
        <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium">
          Temos opções em carteira off-market e lançamentos frente mar em Bombinhas. Converse com nosso corretor de investimentos.
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppLink("bombas", "Olá! Gostaria de consultar oportunidades de investimento imobiliário à venda em Bombinhas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#1E2638] font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <span>Falar com Especialista em Vendas</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#3B82F6]" />
          </a>
        </div>
      </div>

    </div>
  );
}
