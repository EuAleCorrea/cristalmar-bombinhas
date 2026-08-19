"use client";

import React, { useState } from "react";
import { MessageCircle, X, ChevronRight, Sparkles, Building2, MapPin } from "lucide-react";
import { EMPRESA_DATA, getWhatsAppLink } from "@/data/empresa";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover Menu quando aberto */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-5 animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header do Popover */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Atendimento Cristalmar</h4>
                <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                  Online no WhatsApp
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-3 font-medium">
            Escolha a unidade mais próxima para falar diretamente com nosso corretor:
          </p>

          {/* Opções de Unidade */}
          <div className="space-y-2">
            
            {/* Opção Matriz Bombas */}
            <a
              href={getWhatsAppLink("bombas", "Olá! Gostaria de atendimento com a unidade de Bombas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200/80 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                    Unidade Bombas (Matriz)
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {EMPRESA_DATA.unidades.bombas.whatsapp}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Opção Filial Canto Grande */}
            <a
              href={getWhatsAppLink("cantoGrande", "Olá! Gostaria de atendimento com a unidade de Canto Grande.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200/80 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                    Unidade Canto Grande (Filial)
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {EMPRESA_DATA.unidades.cantoGrande.whatsapp}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
            </a>

          </div>

          <div className="mt-3 pt-2 text-center text-[10px] text-slate-400 font-medium">
            Atendimento humanizado &bull; Resposta rápida
          </div>

        </div>
      )}

      {/* Botão Flutuante Principal */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir atendimento no WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-bounce" />
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>

    </div>
  );
}
