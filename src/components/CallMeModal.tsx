"use client";

import React, { useState } from "react";
import { X, PhoneCall, CheckCircle, Send, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/data/empresa";

interface CallMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallMeModal({ isOpen, onClose }: CallMeModalProps) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [unidade, setUnidade] = useState<"bombas" | "cantoGrande">("bombas");
  const [periodo, setPeriodo] = useState("");
  const [sucesso, setSucesso] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepara mensagem de WhatsApp para abrir diretamente com os dados
    const msg = `*Solicitação Ligamos para Você:*\nNome: ${nome}\nTelefone: ${telefone}\nUnidade de preferência: ${unidade === "bombas" ? "Bombas" : "Canto Grande"}\nMelhor horário / Período: ${periodo || "Imediato"}`;
    const url = getWhatsAppLink(unidade, msg);
    
    setSucesso(true);
    setTimeout(() => {
      window.open(url, "_blank");
      onClose();
      setSucesso(false);
      setNome("");
      setTelefone("");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative">
        
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sucesso ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Solicitação Recebida!</h3>
            <p className="text-slate-600 text-sm font-medium">
              Conectando você ao WhatsApp da Cristalmar para atendimento prioritário...
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Ligamos pra Você</h3>
                <p className="text-xs text-slate-500 font-medium">
                  Deixe seu número e um de nossos corretores entrará em contato.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(DDD) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Unidade de Atendimento
                  </label>
                  <select
                    value={unidade}
                    onChange={(e) => setUnidade(e.target.value as "bombas" | "cantoGrande")}
                    className="w-full px-3 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                  >
                    <option value="bombas">Bombas (Matriz)</option>
                    <option value="cantoGrande">Canto Grande (Filial)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Melhor Horário
                  </label>
                  <select
                    value={periodo}
                    onChange={(e) => setPeriodo(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                  >
                    <option value="Imediato">Agora mesmo</option>
                    <option value="Manhã (08h às 12h)">Manhã</option>
                    <option value="Tarde (13h às 18h)">Tarde</option>
                    <option value="Noite">Noite</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Solicitar Ligação Gratuita
              </button>

            </form>
          </>
        )}

      </div>

    </div>
  );
}
