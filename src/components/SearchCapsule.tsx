"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, Key, Waves, BedDouble, SlidersHorizontal, X } from "lucide-react";
import { AnimatedStaggeredSelect } from "@/components/ui/animated-staggered-select";

export function SearchCapsule() {
  const router = useRouter();
  const [tipo, setTipo] = useState("");
  const [negocio, setNegocio] = useState("temporada");
  const [localizacao, setLocalizacao] = useState("");
  const [distanciaMar, setDistanciaMar] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [mobileModalOpen, setMobileModalOpen] = useState(false);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (tipo) params.set("tipo", tipo);
    if (localizacao) params.set("praia", localizacao);
    if (distanciaMar) params.set("distancia", distanciaMar);
    if (dormitorios) params.set("dormitorios", dormitorios);

    setMobileModalOpen(false);
    if (negocio === "venda") {
      router.push(`/vendas?${params.toString()}`);
    } else {
      router.push(`/locacao?${params.toString()}`);
    }
  };

  const tipoOptions = [
    { value: "", label: "Todos os Tipos" },
    { value: "Apartamento", label: "Apartamento" },
    { value: "Cobertura", label: "Cobertura" },
    { value: "Casa", label: "Casa" },
    { value: "Sobrado", label: "Sobrado" },
  ];

  const negocioOptions = [
    { value: "temporada", label: "Temporada" },
    { value: "venda", label: "Venda" },
  ];

  const praiaOptions = [
    { value: "", label: "Todas as Praias" },
    { value: "Bombas", label: "Bombas" },
    { value: "Canto Grande", label: "Canto Grande" },
    { value: "Mariscal", label: "Mariscal" },
    { value: "Bombinhas (Centro)", label: "Bombinhas Centro" },
    { value: "Quatro Ilhas", label: "4 Ilhas" },
    { value: "Zimbros", label: "Zimbros" },
  ];

  const distanciaOptions = [
    { value: "", label: "Qualquer distância" },
    { value: "beira-mar", label: "Pé na Areia (até 50m)" },
    { value: "200m", label: "Até 200m" },
    { value: "500m", label: "201m a 500m" },
  ];

  const dormsOptions = [
    { value: "", label: "Todos" },
    { value: "1", label: "1+" },
    { value: "2", label: "2+" },
    { value: "3", label: "3+" },
    { value: "4", label: "4+" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 sm:-mt-8 mb-16 relative z-30">
      
      {/* Desktop Segmented Capsule Bar (§5.3) */}
      <div className="hidden lg:block bg-white rounded-full p-2.5 shadow-card border border-slate-200/80">
        <form onSubmit={handleSearch} className="grid grid-cols-12 items-center gap-1">
          
          {/* Célula 1: Tipo */}
          <div className="col-span-2 px-4 py-2 border-r border-slate-100 hover:bg-slate-50 rounded-full transition-colors">
            <AnimatedStaggeredSelect
              label="Tipo do Imóvel"
              value={tipo}
              onChange={setTipo}
              options={tipoOptions}
              placeholder="Todos os Tipos"
              variant="capsule"
            />
          </div>

          {/* Célula 2: Negócio */}
          <div className="col-span-2 px-4 py-2 border-r border-slate-100 hover:bg-slate-50 rounded-full transition-colors">
            <AnimatedStaggeredSelect
              label="Finalidade"
              value={negocio}
              onChange={setNegocio}
              options={negocioOptions}
              placeholder="Temporada"
              variant="capsule"
            />
          </div>

          {/* Célula 3: Localização */}
          <div className="col-span-3 px-4 py-2 border-r border-slate-100 hover:bg-slate-50 rounded-full transition-colors">
            <AnimatedStaggeredSelect
              label="Praia / Bairro"
              value={localizacao}
              onChange={setLocalizacao}
              options={praiaOptions}
              placeholder="Todas as Praias"
              variant="capsule"
            />
          </div>

          {/* Célula 4: Distância do Mar */}
          <div className="col-span-2 px-4 py-2 border-r border-slate-100 hover:bg-slate-50 rounded-full transition-colors">
            <AnimatedStaggeredSelect
              label="Distância do Mar"
              value={distanciaMar}
              onChange={setDistanciaMar}
              options={distanciaOptions}
              placeholder="Qualquer distância"
              variant="capsule"
            />
          </div>

          {/* Célula 5: Dormitórios */}
          <div className="col-span-1 px-3 py-2 hover:bg-slate-50 rounded-full transition-colors">
            <AnimatedStaggeredSelect
              label="Dorms"
              value={dormitorios}
              onChange={setDormitorios}
              options={dormsOptions}
              placeholder="Todos"
              variant="capsule"
            />
          </div>

          {/* Célula 6: Botão de Busca */}
          <div className="col-span-2 pl-2">
            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#38BDF8]" />
              <span>Buscar</span>
            </button>
          </div>

        </form>
      </div>

      {/* Mobile Trigger Button (§5.3) */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileModalOpen(true)}
          className="w-full py-4 px-6 bg-white rounded-full shadow-card border border-slate-200 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#3B82F6]">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-[#1E2638]">Filtrar Imóveis</div>
              <div className="text-[11px] text-slate-500 font-medium">Praia, tipo, distância do mar...</div>
            </div>
          </div>
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Mobile Bottom-Sheet Modal */}
      {mobileModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 sm:p-4 lg:hidden animate-in fade-in">
          <div className="bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] w-full max-w-lg p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-black text-[#1E2638] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#3B82F6]" />
                Filtros de Busca
              </h3>
              <button
                type="button"
                onClick={() => setMobileModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Finalidade</label>
                <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setNegocio("temporada")}
                    className={`py-2 rounded-xl text-xs font-bold ${
                      negocio === "temporada" ? "bg-white text-[#1E2638] shadow" : "text-slate-500"
                    }`}
                  >
                    Temporada
                  </button>
                  <button
                    type="button"
                    onClick={() => setNegocio("venda")}
                    className={`py-2 rounded-xl text-xs font-bold ${
                      negocio === "venda" ? "bg-white text-[#1E2638] shadow" : "text-slate-500"
                    }`}
                  >
                    Venda
                  </button>
                </div>
              </div>

              <div>
                <AnimatedStaggeredSelect
                  label="Praia / Região"
                  value={localizacao}
                  onChange={setLocalizacao}
                  options={praiaOptions}
                  placeholder="Todas as Praias"
                />
              </div>

              <div>
                <AnimatedStaggeredSelect
                  label="Tipo de Imóvel"
                  value={tipo}
                  onChange={setTipo}
                  options={tipoOptions}
                  placeholder="Todos os Tipos"
                />
              </div>

              <div>
                <AnimatedStaggeredSelect
                  label="Distância do Mar"
                  value={distanciaMar}
                  onChange={setDistanciaMar}
                  options={distanciaOptions}
                  placeholder="Qualquer distância"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSearch()}
              className="w-full py-4 rounded-2xl bg-[#1E2638] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Search className="w-4 h-4 text-[#38BDF8]" />
              <span>Ver Resultados</span>
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
