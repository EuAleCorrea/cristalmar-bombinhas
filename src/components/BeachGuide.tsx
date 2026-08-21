"use client";

import React from "react";
import Link from "next/link";
import { PRAIAS_LIST } from "@/data/imoveis";
import { MapPin, ArrowRight, Waves } from "lucide-react";

export function BeachGuide() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Waves className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Destinos Paradisíacos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Explore as Melhores Praias de <br className="hidden sm:inline" />
            <span className="font-serif-luxury font-normal text-[#0284C7]">
              Bombinhas & Península
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mt-1 font-medium">
            Cada enseada tem seu estilo e atmosfera únicos. Escolha o cenário perfeito para as suas férias.
          </p>
        </div>

        <Link
          href="/locacao"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1E2638] hover:text-[#3B82F6] group shrink-0"
        >
          <span>Ver imóveis em todas as praias</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid de Praias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRAIAS_LIST.map((praia, idx) => (
          <Link
            key={praia.slug}
            href={`/locacao?praia=${encodeURIComponent(praia.nome)}`}
            className={`group relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 ${
              idx === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"
            }`}
          >
            <img
              src={praia.foto}
              alt={praia.nome}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />

            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="flex items-center justify-between">
                <span className="glass-light text-slate-900 text-xs font-black px-3.5 py-1 rounded-full shadow flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  Bombinhas / SC
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5 drop-shadow">
                  {praia.nome}
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm font-medium line-clamp-2 mb-3 max-w-xl drop-shadow">
                  {praia.descricao}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {praia.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
