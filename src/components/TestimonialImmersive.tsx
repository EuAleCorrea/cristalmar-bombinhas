"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { EMPRESA_DATA } from "@/data/empresa";

export function TestimonialImmersive() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const depoimentos = EMPRESA_DATA.depoimentos;
  const current = depoimentos[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : depoimentos.length - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < depoimentos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-12 border border-slate-200/80 shadow-card">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Fotografia Cenográfica com Badge Sobreposto (§5.6) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
                alt="Pôr do sol em Bombinhas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badge Sobreposto na Foto */}
              <div className="absolute bottom-4 left-4 glass-dark px-3.5 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span>4.9 &bull; +120 avaliações</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Citação em Serif Italic e Assinatura (§5.6) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Citação Editorial em The Seasons / Serif */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury text-[#111827] leading-relaxed font-normal">
                &ldquo;{current.texto}&rdquo;
              </blockquote>
            </div>

            {/* Assinatura do Cliente */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-extrabold text-[#111827] text-sm">{current.nome}</div>
                <div className="text-xs text-slate-500 font-medium">{current.cidade}</div>
              </div>

              <span className="text-[11px] font-bold text-[#0EA5E9] bg-sky-50 px-3 py-1 rounded-full">
                {current.imovel}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
