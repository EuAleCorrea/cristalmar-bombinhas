"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  MapPin, 
  Home, 
  Users, 
  Hash, 
  Waves, 
  ShieldCheck, 
  Calendar,
  CheckCircle
} from "lucide-react";
import { AnimatedStaggeredSelect } from "@/components/ui/animated-staggered-select";

export function HeroSearch() {
  const router = useRouter();
  const [tab, setTab] = useState<"locacao" | "venda">("locacao");
  const [praia, setPraia] = useState("");
  const [tipo, setTipo] = useState("");
  const [hospedes, setHospedes] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (praia) params.set("praia", praia);
    if (tipo) params.set("tipo", tipo);
    if (hospedes) params.set("hospedes", hospedes);
    if (codigo) params.set("codigo", codigo.trim());

    if (tab === "venda") {
      router.push(`/vendas?${params.toString()}`);
    } else {
      router.push(`/locacao?${params.toString()}`);
    }
  };

  return (
    <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950 py-16 px-4">
      
      {/* Background Image com Overlay Escuro e Gradientes */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071e3d] via-[#071e3d]/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/15 via-transparent to-transparent pointer-events-none" />

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        
        {/* Selo de Credibilidade Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-semibold mb-6 shadow-lg">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Mais de 20 anos realizando sonhos em Bombinhas / SC</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-md">
          Encontre o Imóvel Perfeito para <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Suas Férias Inesquecíveis
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto mb-8 drop-shadow">
          Apartamentos frente ao mar, casas completas e coberturas duplex nas melhores praias de Bombinhas com garantia e atendimento humanizado.
        </p>

        {/* Card de Busca Flutuante com Abas */}
        <div className="bg-white/95 backdrop-blur-xl p-4 sm:p-6 rounded-[2.5rem] shadow-2xl border border-white/40 text-left max-w-4xl mx-auto">
          
          {/* Abas Locação / Venda */}
          <div className="flex items-center justify-between gap-2 mb-5 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTab("locacao")}
                className={`px-5 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  tab === "locacao"
                    ? "bg-[#071e3d] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                🏖️ Aluguel de Temporada
              </button>
              <button
                type="button"
                onClick={() => setTab("venda")}
                className={`px-5 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  tab === "venda"
                    ? "bg-[#071e3d] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                🔑 Imóveis à Venda
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Fotos & Disponibilidade Reais</span>
            </div>
          </div>

          {/* Formulário de Busca */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Campo: Praia / Região */}
            <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-3 rounded-2xl border border-slate-200/80">
              <AnimatedStaggeredSelect
                label="Praia / Região"
                icon={MapPin}
                value={praia}
                onChange={setPraia}
                variant="capsule"
                placeholder="Todas as Praias"
                options={[
                  { value: "", label: "Todas as Praias" },
                  { value: "Bombas", label: "Praia de Bombas" },
                  { value: "Canto Grande", label: "Canto Grande (Mar de Dentro/Fora)" },
                  { value: "Mariscal", label: "Praia de Mariscal" },
                  { value: "Bombinhas (Centro)", label: "Bombinhas Centro" },
                  { value: "Quatro Ilhas", label: "Quatro Ilhas" },
                ]}
              />
            </div>

            {/* Campo: Tipo de Imóvel */}
            <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-3 rounded-2xl border border-slate-200/80">
              <AnimatedStaggeredSelect
                label="Tipo do Imóvel"
                icon={Home}
                value={tipo}
                onChange={setTipo}
                variant="capsule"
                placeholder="Todos os Tipos"
                options={[
                  { value: "", label: "Todos os Tipos" },
                  { value: "Apartamento", label: "Apartamento" },
                  { value: "Cobertura", label: "Cobertura Duplex" },
                  { value: "Casa", label: "Casa Térrea / Sobrado" },
                  { value: "Sobrado", label: "Sobrado em Condomínio" },
                ]}
              />
            </div>

            {/* Campo: Hóspedes / Quartos */}
            <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-3 rounded-2xl border border-slate-200/80">
              <AnimatedStaggeredSelect
                label="Hóspedes"
                icon={Users}
                value={hospedes}
                onChange={setHospedes}
                variant="capsule"
                placeholder="Qualquer quantidade"
                options={[
                  { value: "", label: "Qualquer quantidade" },
                  { value: "2", label: "Casal (2 pessoas)" },
                  { value: "4", label: "Família (até 4 pessoas)" },
                  { value: "6", label: "Até 6 pessoas" },
                  { value: "8", label: "Até 8 pessoas" },
                  { value: "10", label: "Mais de 8 pessoas" },
                ]}
              />
            </div>

            {/* Campo: Código ou Botão de Ação */}
            <div className="flex flex-col gap-2">
              <div className="relative bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80">
                <label className="text-[10px] font-extrabold uppercase text-slate-500 flex items-center gap-1 mb-0.5">
                  <Hash className="w-3 h-3 text-sky-600" /> Código do Imóvel
                </label>
                <input
                  type="text"
                  placeholder="Ex: 024, 164, L042"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  className="w-full bg-transparent font-bold text-slate-900 text-xs focus:outline-none uppercase placeholder:normal-case placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                Buscar Imóveis
              </button>
            </div>

          </form>

          {/* Atalhos Rápidos */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-slate-700">Destaques rápidos:</span>
            <button
              type="button"
              onClick={() => { setPraia("Bombas"); setTipo("Cobertura"); }}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-700 font-medium transition-colors"
            >
              🌊 Coberturas em Bombas
            </button>
            <button
              type="button"
              onClick={() => { setPraia("Canto Grande"); }}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-700 font-medium transition-colors"
            >
              🌅 Canto Grande Mar de Dentro
            </button>
            <button
              type="button"
              onClick={() => { setTipo("Casa"); }}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors"
            >
              🏡 Casas Grandes para Família
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
