"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyCardLuxury } from "@/components/PropertyCardLuxury";
import { IMOVEIS_DATA, Imovel } from "@/data/imoveis";
import { useBranch } from "@/context/BranchContext";
import { 
  Sparkles, 
  RotateCcw, 
  MessageCircle, 
  Waves, 
  Filter, 
  MapPin, 
  Home, 
  Search,
  SlidersHorizontal,
  ArrowUpRight
} from "lucide-react";

function LocacaoListContent() {
  const searchParams = useSearchParams();
  const { branch, getWhatsAppUrl } = useBranch();

  const [busca, setBusca] = useState(searchParams.get("codigo") || searchParams.get("q") || "");
  const [praia, setPraia] = useState(searchParams.get("praia") || "");
  const [tipo, setTipo] = useState(searchParams.get("tipo") || "");
  const [dormitorios, setDormitorios] = useState(searchParams.get("dormitorios") || "");
  const [distancia, setDistancia] = useState(searchParams.get("distancia") || "");
  const [somentePeNaAreia, setSomentePeNaAreia] = useState(false);
  const [ordenacao, setOrdenacao] = useState<"padrao" | "preco_asc" | "preco_desc" | "dorms_desc">("padrao");

  // Filtragem dos Imóveis
  const filteredImoveis = useMemo(() => {
    return IMOVEIS_DATA.filter((imovel) => {
      if (imovel.finalidade === "venda") return false;

      // Busca por código, título ou descrição
      if (busca) {
        const q = busca.toLowerCase().trim();
        const mCode = imovel.codigo.toLowerCase().includes(q);
        const mTitle = imovel.titulo.toLowerCase().includes(q);
        const mDesc = imovel.descricao.toLowerCase().includes(q);
        if (!mCode && !mTitle && !mDesc) return false;
      }

      // Praia
      if (praia && imovel.praia !== praia) return false;

      // Tipo
      if (tipo && imovel.tipo !== tipo) return false;

      // Dormitórios
      if (dormitorios && imovel.dormitorios < parseInt(dormitorios, 10)) return false;

      // Distância do mar
      if (distancia === "beira-mar" || somentePeNaAreia) {
        const isNear = 
          imovel.distanciaMar.toLowerCase().includes("frente") || 
          imovel.distanciaMar.toLowerCase().includes("pé") ||
          imovel.distanciaMar.toLowerCase().includes("50m");
        if (!isNear) return false;
      } else if (distancia === "200m") {
        const isUpTo200 = 
          imovel.distanciaMar.toLowerCase().includes("frente") ||
          imovel.distanciaMar.toLowerCase().includes("50m") ||
          imovel.distanciaMar.toLowerCase().includes("80m") ||
          imovel.distanciaMar.toLowerCase().includes("100m") ||
          imovel.distanciaMar.toLowerCase().includes("150m") ||
          imovel.distanciaMar.toLowerCase().includes("180m") ||
          imovel.distanciaMar.toLowerCase().includes("200m");
        if (!isUpTo200) return false;
      }

      return true;
    }).sort((a, b) => {
      if (ordenacao === "preco_asc") return a.precoDiaria - b.precoDiaria;
      if (ordenacao === "preco_desc") return b.precoDiaria - a.precoDiaria;
      if (ordenacao === "dorms_desc") return b.dormitorios - a.dormitorios;
      return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0);
    });
  }, [busca, praia, tipo, dormitorios, distancia, somentePeNaAreia, ordenacao]);

  const handleReset = () => {
    setBusca("");
    setPraia("");
    setTipo("");
    setDormitorios("");
    setDistancia("");
    setSomentePeNaAreia(false);
    setOrdenacao("padrao");
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Editorial da Página */}
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          Aluguel de Temporada &bull; Bombinhas SC
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
          Catálogo de Imóveis para <br className="hidden sm:inline" />
          <span className="font-serif-luxury font-normal text-[#0284C7]">
            Suas Férias no Litoral
          </span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base font-medium mt-2 max-w-2xl">
          Filtre por praia, distância do mar e número de dormitórios. Reservas diretas e seguras com corretores credenciados.
        </p>
      </div>

      {/* Barra de Filtros em Formato Cápsula */}
      <div className="bg-white rounded-[2rem] p-6 border border-slate-200/80 shadow-card mb-10">
        
        {/* Linha 1: Campos Principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pb-5 border-b border-slate-100">
          
          {/* Busca por código/palavra */}
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1">
              Código ou Edifício
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Ex: 024, Porto Verano..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Praia */}
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1">
              Praia / Bairro
            </label>
            <select
              value={praia}
              onChange={(e) => setPraia(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] cursor-pointer"
            >
              <option value="">Todas as Praias</option>
              <option value="Bombas">Bombas</option>
              <option value="Canto Grande">Canto Grande</option>
              <option value="Mariscal">Mariscal</option>
              <option value="Bombinhas (Centro)">Bombinhas Centro</option>
              <option value="Quatro Ilhas">Quatro Ilhas</option>
            </select>
          </div>

          {/* Tipo */}
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1">
              Tipo
            </label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] cursor-pointer"
            >
              <option value="">Todos os Tipos</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Cobertura">Cobertura</option>
              <option value="Casa">Casa</option>
              <option value="Sobrado">Sobrado</option>
            </select>
          </div>

          {/* Dormitórios */}
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1">
              Dormitórios
            </label>
            <select
              value={dormitorios}
              onChange={(e) => setDormitorios(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] cursor-pointer"
            >
              <option value="">Todos</option>
              <option value="1">1+ Dormitório</option>
              <option value="2">2+ Dormitórios</option>
              <option value="3">3+ Dormitórios</option>
              <option value="4">4+ Dormitórios</option>
            </select>
          </div>

          {/* Ordenação */}
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-400 mb-1">
              Ordenar Por
            </label>
            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value as any)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] cursor-pointer"
            >
              <option value="padrao">Em Destaque</option>
              <option value="preco_asc">Menor Preço</option>
              <option value="preco_desc">Maior Preço</option>
              <option value="dorms_desc">Mais Quartos</option>
            </select>
          </div>

        </div>

        {/* Linha 2: Tags Rápidas & Reset */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-400">Atalhos:</span>
            <button
              type="button"
              onClick={() => setSomentePeNaAreia(!somentePeNaAreia)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                somentePeNaAreia
                  ? "bg-[#0EA5E9] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              🌊 Pé na Areia
            </button>

            <button
              type="button"
              onClick={() => setTipo("Cobertura")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                tipo === "Cobertura"
                  ? "bg-[#5C667E] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              🏰 Coberturas
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500">
              <strong className="text-[#1E2638] font-black">{filteredImoveis.length}</strong> imóveis encontrados
            </span>

            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar</span>
            </button>
          </div>

        </div>

      </div>

      {/* Grid de Imóveis ou Empty State Humanizado (§8.1) */}
      {filteredImoveis.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImoveis.map((imovel, idx) => (
            <PropertyCardLuxury key={imovel.codigo} imovel={imovel} priority={idx < 6} />
          ))}
        </div>
      ) : (
        /* Empty State conforme DESIGN.md §8.1 */
        <div className="bg-white rounded-[2.5rem] p-10 sm:p-14 text-center border border-slate-200/80 shadow-card max-w-lg mx-auto my-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-sky-50 text-[#0EA5E9] flex items-center justify-center mx-auto">
            <Waves className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-extrabold text-[#111827]">
            Nenhum imóvel encontrado para esses filtros.
          </h3>

          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            Tente ampliar a busca ou fale diretamente com um de nossos corretores para verificar opções exclusivas em carteira.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <a
              href={getWhatsAppUrl("Olá! Não encontrei o imóvel no filtro do site e gostaria de ajuda para encontrar uma acomodação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default function LocacaoPage() {
  return (
    <Suspense fallback={
      <div className="pt-36 pb-20 text-center text-slate-500 font-bold">
        Carregando imóveis de temporada...
      </div>
    }>
      <LocacaoListContent />
    </Suspense>
  );
}
