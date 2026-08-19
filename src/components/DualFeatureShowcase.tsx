"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, MapPin, Shield, Trees, Home } from "lucide-react";
import { IMOVEIS_DATA } from "@/data/imoveis";
import { EMPRESA_DATA } from "@/data/empresa";

export function DualFeatureShowcase() {
  const featuredList = IMOVEIS_DATA.filter((i) => i.destaque);
  const [currentIdx, setCurrentIdx] = useState(0);

  const currentImovel = featuredList[currentIdx] || featuredList[0];
  const unit = currentImovel.praia === "Canto Grande" ? "cantoGrande" : "bombas";
  const branchInfo = EMPRESA_DATA.unidades[unit];

  const whatsappText = `Olá! Gostaria de mais informações sobre o imóvel de destaque *#${currentImovel.codigo}* (${currentImovel.titulo}).`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${branchInfo.whatsappRaw}&text=${encodeURIComponent(whatsappText)}`;

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : featuredList.length - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < featuredList.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header da Seção */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          Destaque Exclusivo
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
          Descubra a Excelência em <br className="hidden sm:inline" />
          <span className="font-serif-luxury font-normal text-[#0284C7]">
            Imóveis & Coberturas
          </span>
        </h2>
      </div>

      {/* Grid Dual Feature 40/60 (§5.5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Card Esquerdo Velvet Slate (5 colunas) */}
        <div className="lg:col-span-5 bg-[#5C667E] text-white rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-card">
          
          <div>
            {/* Foto com transição suave crossfade */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-900 shadow-md">
              {featuredList.map((item, idx) => (
                <div
                  key={item.codigo}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    currentIdx === idx
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 pointer-events-none z-0"
                  }`}
                >
                  <img
                    src={item.fotos[0]}
                    alt={item.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono-data">
                    Cód. #{item.codigo}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 transition-all duration-300">
              {currentImovel.titulo}
            </h3>

            <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed mb-6 line-clamp-3 transition-all duration-300">
              {currentImovel.descricao}
            </p>
          </div>

          {/* Rodapé: Paginação 1 / N + Botão Branco + Setas */}
          <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
            <div className="text-xs font-mono-data font-bold text-slate-300">
              {currentIdx + 1} / {featuredList.length}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={`/locacao/${currentImovel.codigo}`}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#1E2638] font-bold text-xs flex items-center gap-1.5 shadow transition-transform hover:scale-105"
              >
                <span>Ver Imóvel</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3B82F6]" />
              </Link>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-white/30 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                  aria-label="Imóvel anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-white/30 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                  aria-label="Próximo imóvel"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Coluna Direita: Detalhes Estruturados do Imóvel (7 colunas) */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 sm:p-10 border border-slate-200/80 shadow-card flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h4 className="text-xl font-bold text-[#111827]">
                Detalhes do Imóvel
              </h4>
              <span className="text-xs font-bold text-[#0EA5E9] bg-sky-50 px-3 py-1 rounded-full">
                {currentImovel.praia}
              </span>
            </div>

            {/* Tabela de Especificações Chave (§5.5) */}
            <div className="space-y-5 text-xs sm:text-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 pb-4 border-b border-slate-100">
                <div className="sm:col-span-4 font-bold text-[#111827] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                  <span>Localização</span>
                </div>
                <div className="sm:col-span-8 text-slate-600 font-medium">
                  {currentImovel.praia} &bull; {currentImovel.distanciaMar}. Próximo a restaurantes e centro comercial.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 pb-4 border-b border-slate-100">
                <div className="sm:col-span-4 font-bold text-[#111827] flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#0EA5E9]" />
                  <span>Design Interior</span>
                </div>
                <div className="sm:col-span-8 text-slate-600 font-medium">
                  {currentImovel.dormitorios} dormitórios ({currentImovel.suites} suítes), ambientes 100% climatizados com ar split, Wi-Fi fibra ótica e cozinha completa.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 pb-4 border-b border-slate-100">
                <div className="sm:col-span-4 font-bold text-[#111827] flex items-center gap-2">
                  <Trees className="w-4 h-4 text-[#0EA5E9]" />
                  <span>Área Exterior</span>
                </div>
                <div className="sm:col-span-8 text-slate-600 font-medium">
                  Sacada ampla com churrasqueira a carvão, {currentImovel.vagasGaragem} vaga(s) de garagem privativa(s) e vista privilegiada.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                <div className="sm:col-span-4 font-bold text-[#111827] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#0EA5E9]" />
                  <span>Segurança</span>
                </div>
                <div className="sm:col-span-8 text-slate-600 font-medium">
                  Edifício monitorado com controle de acesso, portaria e suporte total da Cristalmar durante toda a estadia.
                </div>
              </div>

            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              Vistoriado e administrado por Cristalmar Imóveis
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6] hover:underline"
            >
              <span>Consultar disponibilidade deste imóvel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
