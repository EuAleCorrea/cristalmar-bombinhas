"use client";

import React from "react";
import Link from "next/link";
import { EMPRESA_DATA } from "@/data/empresa";
import { UnitsSection } from "@/components/UnitsSection";
import { WhyUs } from "@/components/WhyUs";
import { TestimonialImmersive } from "@/components/TestimonialImmersive";
import { NewsletterBox } from "@/components/NewsletterBox";
import { Building2, ShieldCheck, HeartHandshake, Award, ArrowRight, ArrowUpRight } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export default function SobrePage() {
  const { getWhatsAppUrl } = useBranch();

  return (
    <div className="space-y-4 pt-28">
      
      {/* Hero Institucional Sofisticado */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="bg-[#1E2638] text-white rounded-[2.5rem] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2 border border-white/15">
              <Building2 className="w-3.5 h-3.5" />
              Nossa Trajetória &bull; Desde 2004
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Mais de Duas Décadas Criando <br />
              <span className="font-serif-luxury font-normal text-[#38BDF8]">
                Memórias Inesquecíveis
              </span> <br />
              no Litoral Catarinense
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              A <strong>Cristalmar Imóveis</strong> é a referência em locação de temporada e assessoria imobiliária de alto padrão em Bombinhas, com duas unidades físicas em Bombas e Canto Grande.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Editorial & História */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-50 text-[#0EA5E9] text-xs font-bold">
              Tradição e Hospitalidade
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Excelência, Segurança e Cuidado com a Sua Família
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Com mais de 20 anos no mercado de Bombinhas, a Cristalmar construiu sua reputação baseada na transparência, no respeito ao cliente e na curadoria rigorosa de cada imóvel cadastrado.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Nossa equipe de corretores e recepcionistas está sempre pronta para oferecer um atendimento acolhedor e ágil, garantindo que suas férias em Bombas, Canto Grande ou Mariscal sejam livres de preocupações.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe da Cristalmar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <span>Falar com Nossa Equipe</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Praia de Bombinhas - Cristalmar Imóveis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Pilares Institucionais em Velvet Slate */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-card">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-[#111827] text-base mb-2">Curadoria Exclusiva</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Imóveis vistoriados um a um para garantir climatização, limpeza e conforto de alto nível.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-card">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-[#111827] text-base mb-2">Registro CRECI-SC</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Operações 100% legalizadas e seguras sob o registro oficial CRECI-SC 4215-J.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-card">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-[#111827] text-base mb-2">Presença Local</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Duas sedes físicas para check-in com chaves em mãos e suporte durante toda a estadia.
            </p>
          </div>
        </div>

      </section>

      {/* Diferenciais, Depoimentos e Unidades */}
      <WhyUs />
      <TestimonialImmersive />
      <UnitsSection />
      <NewsletterBox />

    </div>
  );
}
