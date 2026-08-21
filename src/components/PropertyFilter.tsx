"use client";

import React from "react";
import { Filter, SlidersHorizontal, RotateCcw, Search, MapPin, Home, Users, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { AnimatedStaggeredSelect } from "@/components/ui/animated-staggered-select";

export interface FilterState {
  busca: string;
  praia: string;
  tipo: string;
  dormitorios: string;
  hospedes: string;
  precoMax: number;
  frenteMar: boolean;
  comPiscina: boolean;
  aceitaPet: boolean;
  arCondicionado: boolean;
  ordenacao: "padrao" | "preco_asc" | "preco_desc" | "hospedes_desc";
}

interface PropertyFilterProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  totalResults: number;
  onReset: () => void;
}

export function PropertyFilter({ filters, onChange, totalResults, onReset }: PropertyFilterProps) {
  const handleChange = (key: keyof FilterState, value: any) => {
    onChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-200/80 shadow-md mb-8">
      
      {/* Header dos Filtros */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Filtros de Busca</h3>
            <p className="text-xs text-slate-500 font-medium">
              Encontrados <span className="font-bold text-sky-600">{totalResults}</span> imóveis disponíveis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Ordenação */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
            <span>Ordenar:</span>
            <AnimatedStaggeredSelect
              value={filters.ordenacao}
              onChange={(val) => handleChange("ordenacao", val)}
              variant="minimal"
              placeholder="Em Destaque"
              options={[
                { value: "padrao", label: "Em Destaque" },
                { value: "preco_asc", label: "Menor Preço" },
                { value: "preco_desc", label: "Maior Preço" },
                { value: "hospedes_desc", label: "Mais Hóspedes" },
              ]}
            />
          </div>

          {/* Limpar Filtros */}
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-bold text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1 px-2.5 py-1.5 rounded-xl hover:bg-red-50"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Limpar
          </button>
        </div>
      </div>

      {/* Grid de Campos de Filtro */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        {/* Campo Busca Livre / Código */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Buscar por Código ou Nome
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Ex: 024, Porto Verano..."
              value={filters.busca}
              onChange={(e) => handleChange("busca", e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Campo Praia */}
        <div>
          <AnimatedStaggeredSelect
            label="Praia / Bairro"
            value={filters.praia}
            onChange={(val) => handleChange("praia", val)}
            variant="filter"
            placeholder="Todas as Praias"
            options={[
              { value: "", label: "Todas as Praias" },
              { value: "Bombas", label: "Praia de Bombas" },
              { value: "Canto Grande", label: "Canto Grande" },
              { value: "Mariscal", label: "Mariscal" },
              { value: "Bombinhas (Centro)", label: "Bombinhas Centro" },
              { value: "Quatro Ilhas", label: "Quatro Ilhas" },
            ]}
          />
        </div>

        {/* Campo Tipo */}
        <div>
          <AnimatedStaggeredSelect
            label="Tipo de Imóvel"
            value={filters.tipo}
            onChange={(val) => handleChange("tipo", val)}
            variant="filter"
            placeholder="Todos os Tipos"
            options={[
              { value: "", label: "Todos os Tipos" },
              { value: "Apartamento", label: "Apartamento" },
              { value: "Cobertura", label: "Cobertura" },
              { value: "Casa", label: "Casa" },
              { value: "Sobrado", label: "Sobrado" },
            ]}
          />
        </div>

        {/* Campo Hóspedes Mínimos */}
        <div>
          <AnimatedStaggeredSelect
            label="Capacidade de Hóspedes"
            value={filters.hospedes}
            onChange={(val) => handleChange("hospedes", val)}
            variant="filter"
            placeholder="Qualquer quantidade"
            options={[
              { value: "", label: "Qualquer quantidade" },
              { value: "2", label: "2+ Hóspedes" },
              { value: "4", label: "4+ Hóspedes" },
              { value: "6", label: "6+ Hóspedes" },
              { value: "8", label: "8+ Hóspedes" },
              { value: "10", label: "10+ Hóspedes" },
            ]}
          />
        </div>

      </div>

      {/* Comodidades e Tags em Chips */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500 mr-2">Filtros Rápidos:</span>
        
        <button
          type="button"
          onClick={() => handleChange("frenteMar", !filters.frenteMar)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filters.frenteMar
              ? "bg-sky-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          🌊 Frente ao Mar / Pé na Areia
        </button>

        <button
          type="button"
          onClick={() => handleChange("arCondicionado", !filters.arCondicionado)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filters.arCondicionado
              ? "bg-sky-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          ❄️ Com Ar-condicionado
        </button>

        <button
          type="button"
          onClick={() => handleChange("comPiscina", !filters.comPiscina)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filters.comPiscina
              ? "bg-sky-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          🏊 Com Piscina
        </button>

        <button
          type="button"
          onClick={() => handleChange("aceitaPet", !filters.aceitaPet)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filters.aceitaPet
              ? "bg-sky-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          🐾 Aceita Pets
        </button>
      </div>

    </div>
  );
}
