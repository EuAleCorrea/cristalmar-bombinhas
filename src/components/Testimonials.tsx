"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { EMPRESA_DATA } from "@/data/empresa";

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorações de Fundo */}
      <div className="absolute -left-20 top-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            Experiências Reais
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-slate-300 text-base mt-2 font-medium">
            A satisfação dos nossos hóspedes e proprietários é o nosso maior orgulho.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EMPRESA_DATA.depoimentos.map((dep, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-7 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(dep.estrelas)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-slate-200 text-sm leading-relaxed font-medium mb-6">
                  &ldquo;{dep.texto}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{dep.nome}</div>
                  <div className="text-xs text-slate-400">{dep.cidade}</div>
                </div>
                <span className="text-[11px] font-bold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-full border border-sky-800/60">
                  {dep.imovel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
