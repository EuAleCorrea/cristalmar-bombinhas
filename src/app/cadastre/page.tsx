"use client";

import React, { useState } from "react";
import { PlusCircle, ShieldCheck, CheckCircle2, Send, Building2, Phone, ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "@/data/empresa";
import { useBranch } from "@/context/BranchContext";
import { AnimatedStaggeredSelect } from "@/components/ui/animated-staggered-select";

export default function CadastreImovelPage() {
  const { branch } = useBranch();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("Apartamento");
  const [praia, setPraia] = useState("Bombas");
  const [finalidade, setFinalidade] = useState("Temporada");
  const [quartos, setQuartos] = useState("2");
  const [detalhes, setDetalhes] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Novo Cadastro de Imóvel (Área do Proprietário):*\nProprietário: ${nome}\nWhatsApp: ${telefone}\nE-mail: ${email}\nTipo: ${tipo}\nPraia: ${praia}\nFinalidade: ${finalidade}\nQuartos: ${quartos}\nDetalhes: ${detalhes || "Não informado"}`;
    const unit = praia === "Canto Grande" ? "cantoGrande" : "bombas";
    const url = getWhatsAppLink(unit, msg);

    setEnviado(true);
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header Editorial */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          Área Exclusiva do Proprietário
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
          Rentabilize seu Imóvel com a <br className="hidden sm:inline" />
          <span className="font-serif-luxury font-normal text-[#0284C7]">
            Cristalmar Bombinhas
          </span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">
          Anuncie seu imóvel para locação de temporada ou venda com total segurança jurídica, vistoria rigorosa e suporte de duas unidades locais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Formulário de Cadastro */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-card">
          
          {enviado ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#111827]">Cadastro Encaminhado!</h3>
              <p className="text-slate-500 text-sm font-medium">
                Conectando você ao WhatsApp do gestor de captação da Cristalmar para envio das fotos e alinhamento de valores.
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
                    placeholder="Ex: Roberto Linhares"
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

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  E-mail para Contato
                </label>
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <AnimatedStaggeredSelect
                    label="Finalidade"
                    value={finalidade}
                    onChange={setFinalidade}
                    placeholder="Temporada"
                    options={[
                      { value: "Temporada", label: "Temporada" },
                      { value: "Venda", label: "Venda" },
                      { value: "Ambos", label: "Ambos" },
                    ]}
                  />
                </div>

                <div>
                  <AnimatedStaggeredSelect
                    label="Tipo do Imóvel"
                    value={tipo}
                    onChange={setTipo}
                    placeholder="Apartamento"
                    options={[
                      { value: "Apartamento", label: "Apartamento" },
                      { value: "Cobertura", label: "Cobertura" },
                      { value: "Casa", label: "Casa" },
                      { value: "Sobrado", label: "Sobrado" },
                    ]}
                  />
                </div>

                <div>
                  <AnimatedStaggeredSelect
                    label="Praia"
                    value={praia}
                    onChange={setPraia}
                    placeholder="Bombas"
                    options={[
                      { value: "Bombas", label: "Bombas" },
                      { value: "Canto Grande", label: "Canto Grande" },
                      { value: "Mariscal", label: "Mariscal" },
                      { value: "Bombinhas (Centro)", label: "Bombinhas Centro" },
                      { value: "Quatro Ilhas", label: "Quatro Ilhas" },
                    ]}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Breve Descrição do Imóvel (Edifício, Vagas, Diferenciais)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Edifício Porto Verano, 3 quartos (1 suíte), climatizado, churrasqueira, 2 vagas..."
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#38BDF8]" />
                <span>Cadastrar Imóvel com a Cristalmar</span>
              </button>

            </form>
          )}

        </div>

        {/* Vantagens para o Proprietário em Velvet Slate */}
        <div className="lg:col-span-5 bg-[#5C667E] text-white rounded-[2.5rem] p-6 sm:p-8 shadow-card space-y-6">
          <h3 className="text-xl font-bold">Por que confiar na Cristalmar?</h3>
          
          <div className="space-y-4 text-xs font-medium text-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Vistoria fotográfica detalhada e inventário completo em cada check-in/out.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Contratos auditados pelo CRECI-SC 4215-J com garantia de recebimento e caução.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Divulgação no novo portal exclusivo e atendimento direto nas lojas de Bombas e Canto Grande.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Equipe própria para suporte a manutenções preventivas e higienização.</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/15">
            <div className="text-xs text-slate-300 font-bold mb-2">Prefere falar agora?</div>
            <a 
              href={getWhatsAppLink("bombas", "Olá! Sou proprietário e gostaria de conversar sobre a locação/venda do meu imóvel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#38BDF8] hover:text-white font-bold text-xs"
            >
              <span>WhatsApp do Gestor de Captação</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
