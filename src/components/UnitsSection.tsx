"use client";

import React from "react";
import { MapPin, Phone, MessageCircle, Navigation, Clock, Building2, ArrowUpRight } from "lucide-react";
import { EMPRESA_DATA, getWhatsAppLink } from "@/data/empresa";

export function UnitsSection() {
  const { bombas, cantoGrande } = EMPRESA_DATA.unidades;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Building2 className="w-3.5 h-3.5 text-[#0EA5E9]" />
          Atendimento Presencial
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
          Nossas Unidades em <br className="hidden sm:inline" />
          <span className="font-serif-luxury font-normal text-[#0284C7]">
            Bombinhas / SC
          </span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">
          Estamos presentes nos dois principais polos da península para oferecer suporte ágil e atendimento no seu check-in.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Unidade Bombas (Matriz) */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full">
                  Unidade Matriz
                </span>
                <h3 className="text-2xl font-extrabold text-[#111827] mt-2">
                  {bombas.nome}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#3B82F6] flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 mb-8 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111827]">{bombas.endereco}</div>
                  <div>{bombas.bairro} &bull; {bombas.cidade} &bull; CEP: {bombas.cep}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <a href={`tel:${bombas.telefoneRaw}`} className="font-bold text-slate-800 hover:text-[#3B82F6]">
                  {bombas.telefone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <a 
                  href={getWhatsAppLink("bombas")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-emerald-700 hover:underline"
                >
                  WhatsApp: {bombas.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{bombas.horario}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
            <a
              href={getWhatsAppLink("bombas")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Chamar no WhatsApp</span>
            </a>
            <a
              href={bombas.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1E2638] font-bold text-xs flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#3B82F6]" />
              <span>Ver no Google Maps</span>
            </a>
          </div>
        </div>

        {/* Unidade Canto Grande (Filial) */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
                  Unidade Filial
                </span>
                <h3 className="text-2xl font-extrabold text-[#111827] mt-2">
                  {cantoGrande.nome}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0EA5E9] flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 mb-8 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111827]">{cantoGrande.endereco}</div>
                  <div>{cantoGrande.bairro} &bull; {cantoGrande.cidade} &bull; CEP: {cantoGrande.cep}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <a href={`tel:${cantoGrande.telefoneRaw}`} className="font-bold text-slate-800 hover:text-[#0EA5E9]">
                  {cantoGrande.telefone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <a 
                  href={getWhatsAppLink("cantoGrande")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-emerald-700 hover:underline"
                >
                  WhatsApp: {cantoGrande.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{cantoGrande.horario}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
            <a
              href={getWhatsAppLink("cantoGrande")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Chamar no WhatsApp</span>
            </a>
            <a
              href={cantoGrande.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1E2638] font-bold text-xs flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#0EA5E9]" />
              <span>Ver no Google Maps</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
