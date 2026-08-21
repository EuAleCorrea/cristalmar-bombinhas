"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEnviado(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="bg-[#5C667E] text-white rounded-[2.5rem] p-8 sm:p-14 text-center shadow-card relative overflow-hidden">
        
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto relative z-10 space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider mb-2">
            Oportunidades Exclusivas
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Receba as Melhores Ofertas de <br />
            <span className="font-serif-luxury font-normal text-[#38BDF8]">
              Temporada & Venda
            </span>
          </h3>

          <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-md mx-auto">
            Cadastre seu e-mail para receber em primeira mão as coberturas e casas disponíveis para o Réveillon e alta temporada.
          </p>

          {enviado ? (
            <div className="py-4 bg-white/15 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 max-w-md mx-auto">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Obrigado! Seu e-mail foi cadastrado com sucesso.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto pt-2">
              <div className="relative w-full">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-5 pr-4 py-3.5 rounded-full bg-white/15 border border-white/25 text-white placeholder:text-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#1E2638] font-extrabold text-xs shrink-0 flex items-center justify-center gap-2 shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Quero receber</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-300 font-medium">
            Sem spam. Apenas imóveis selecionados e disponíveis em Bombinhas.
          </p>

        </div>

      </div>

    </section>
  );
}
