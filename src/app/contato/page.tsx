"use client";

import React, { useState } from "react";
import { UnitsSection } from "@/components/UnitsSection";
import { EMPRESA_DATA, getWhatsAppLink } from "@/data/empresa";
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export default function ContatoPage() {
  const { branch, setBranch } = useBranch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [unidade, setUnidade] = useState<"bombas" | "cantoGrande">(branch);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Mensagem de Contato pelo Site:*\nNome: ${nome}\nWhatsApp: ${telefone}\nE-mail: ${email}\nUnidade: ${unidade === "bombas" ? "Bombas (Matriz)" : "Canto Grande (Filial)"}\nMensagem: ${mensagem}`;
    const url = getWhatsAppLink(unidade, msg);
    setEnviado(true);
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Editorial */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          Atendimento & Suporte
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
          Fale com a <br className="hidden sm:inline" />
          <span className="font-serif-luxury font-normal text-[#0284C7]">
            Cristalmar Imóveis
          </span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">
          Dúvidas sobre reservas de temporada, compra de imóveis ou suporte para proprietários.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        
        {/* Formulário de Contato */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-card">
          <h3 className="text-2xl font-extrabold text-[#111827] mb-6">
            Envie sua Mensagem
          </h3>

          {enviado ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-[#111827]">Mensagem Encaminhada!</h4>
              <p className="text-slate-500 text-sm font-medium">
                Conectando você diretamente ao corretor responsável no WhatsApp...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(47) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Unidade de Atendimento
                  </label>
                  <select
                    value={unidade}
                    onChange={(e) => {
                      const val = e.target.value as "bombas" | "cantoGrande";
                      setUnidade(val);
                      setBranch(val);
                    }}
                    className="w-full px-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none cursor-pointer"
                  >
                    <option value="bombas">Bombas (Matriz)</option>
                    <option value="cantoGrande">Canto Grande (Filial)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Como podemos ajudar? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escreva sua dúvida, código de imóvel ou datas pretendidas..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#38BDF8]" />
                <span>Enviar Mensagem para o WhatsApp</span>
              </button>
            </form>
          )}
        </div>

        {/* Card Lateral de Contatos em Velvet Slate */}
        <div className="lg:col-span-4 bg-[#1E2638] text-white rounded-[2.5rem] p-6 sm:p-8 shadow-card space-y-6">
          <h3 className="text-xl font-bold">Canais Oficiais</h3>

          <div className="space-y-4 text-xs">
            <div>
              <div className="text-slate-400 font-bold mb-1">E-mail:</div>
              <a href={`mailto:${EMPRESA_DATA.email}`} className="font-bold text-[#38BDF8] hover:underline">
                {EMPRESA_DATA.email}
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-slate-400 font-bold mb-1">WhatsApp Bombas:</div>
              <a 
                href={getWhatsAppLink("bombas")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors font-bold text-sm block"
              >
                {EMPRESA_DATA.unidades.bombas.whatsapp}
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-slate-400 font-bold mb-1">WhatsApp Canto Grande:</div>
              <a 
                href={getWhatsAppLink("cantoGrande")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors font-bold text-sm block"
              >
                {EMPRESA_DATA.unidades.cantoGrande.whatsapp}
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-slate-300">
              <div className="font-bold text-white mb-1">Horário de Funcionamento:</div>
              <div>Segunda a Sábado: 08:00 às 19:00</div>
              <div>Plantão de Atendimento aos Domingos</div>
            </div>
          </div>
        </div>

      </div>

      {/* Seção das Unidades */}
      <UnitsSection />

    </div>
  );
}
