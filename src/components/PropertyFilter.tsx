"use client";

import React from "react";
import { Filter, SlidersHorizontal, RotateCcw, Search, MapPin, Home, Users, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

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
            <select
              value={filters.ordenacao}
              onChange={(e) => handleChange("ordenacao", e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="padrao">Em Destaque</option>
              <option value="preco_asc">Menor Preço da Diária</option>
              <option value="preco_desc">Maior Preço da Diária</option>
              <option value="hospedes_desc">Mais Hóspedes</option>
            </select>
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
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Praia / Bairro
          </label>
          <select
            value={filters.praia}
            onChange={(e) => handleChange("praia", e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            <option value="">Todas as Praias</option>
            <option value="Bombas">Praia de Bombas</option>
            <option value="Canto Grande">Canto Grande</option>
            <option value="Mariscal">Mariscal</option>
            <option value="Bombinhas (Centro)">Bombinhas Centro</option>
            <option value="Quatro Ilhas">Quatro Ilhas</option>
          </select>
        </div>

        {/* Campo Tipo */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Tipo de Imóvel
          </label>
          <select
            value={filters.tipo}
            onChange={(e) => handleChange("tipo", e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            <option value="">Todos os Tipos</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Cobertura">Cobertura</option>
            <option value="Casa">Casa</option>
            <option value="Sobrado">Sobrado</option>
          </select>
        </div>

        {/* Campo Hóspedes Mínimos */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Capacidade de Hóspedes
          </label>
          <select
            value={filters.hospedes}
            onChange={(e) => handleChange("hospedes", e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            <option value="">Qualquer quantidade</option>
            <option value="2">2+ Hóspedes</option>
            <option value="4">4+ Hóspedes</option>
            <option value="6">6+ Hóspedes</option>
            <option value="8">8+ Hóspedes</option>
            <option value="10">10+ Hóspedes</option>
          </select>
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
