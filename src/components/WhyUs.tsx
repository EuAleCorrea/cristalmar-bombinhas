"use client";

import React from "react";
import { 
  ShieldCheck, 
  Building, 
  BadgeCheck, 
  Headphones, 
  HeartHandshake
} from "lucide-react";
import { EMPRESA_DATA } from "@/data/empresa";

export function WhyUs() {
  const iconMap = [
    <BadgeCheck key="0" className="w-6 h-6 text-[#0EA5E9]" />,
    <Building key="1" className="w-6 h-6 text-[#3B82F6]" />,
    <ShieldCheck key="2" className="w-6 h-6 text-emerald-500" />,
    <Headphones key="3" className="w-6 h-6 text-[#F59E0B]" />
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#3B82F6]" />
            Diferenciais de Excelência
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Sua Tranquilidade em <br className="hidden sm:inline" />
            <span className="font-serif-luxury font-normal text-[#0284C7]">
              Primeiro Lugar
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">
            Alugar um imóvel para as férias exige confiança e suporte presencial.
          </p>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EMPRESA_DATA.diferenciais.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F4F7FC] p-8 rounded-[2rem] border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
                  {iconMap[idx]}
                </div>
                <h3 className="text-base font-extrabold text-[#111827] mb-2">
                  {item.titulo}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {item.descricao}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-[#0EA5E9]">
                <span>Padrão Cristalmar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Faixa de Estatísticas de Alto Luxo */}
        <div className="mt-16 bg-[#1E2638] rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-xl relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center px-3 sm:px-4 lg:border-r lg:border-white/10">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-1">
                +20 <span className="text-xl sm:text-2xl font-bold text-[#38BDF8]">Anos</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">Tradição & Solidez</div>
              <div className="text-[11px] text-slate-400 font-medium">Em Bombinhas desde 2004</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center px-3 sm:px-4 lg:border-r lg:border-white/10">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-1">
                2 <span className="text-xl sm:text-2xl font-bold text-[#38BDF8]">Lojas</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">Sedes Físicas Próprias</div>
              <div className="text-[11px] text-slate-400 font-medium">Bombas & Canto Grande</div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center px-3 sm:px-4 lg:border-r lg:border-white/10">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-1">
                +15k
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">Hóspedes & Famílias</div>
              <div className="text-[11px] text-slate-400 font-medium">Atendidas com excelência</div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center px-3 sm:px-4">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-emerald-400 mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">Imóveis Auditados</div>
              <div className="text-[11px] text-slate-400 font-medium">Vistoria e suporte presencial</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
