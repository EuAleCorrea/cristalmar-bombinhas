"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BedDouble, 
  Bath, 
  Car, 
  MapPin, 
  Waves, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from "lucide-react";
import { Imovel } from "@/data/imoveis";
import { EMPRESA_DATA } from "@/data/empresa";
import { formatCurrency } from "@/lib/utils";
import { useBranch } from "@/context/BranchContext";

interface PropertyCardLuxuryProps {
  imovel: Imovel;
  priority?: boolean;
}

export function PropertyCardLuxury({ imovel, priority = false }: PropertyCardLuxuryProps) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const { branch } = useBranch();

  const isPeNaAreia = 
    imovel.distanciaMar.toLowerCase().includes("frente") || 
    imovel.distanciaMar.toLowerCase().includes("pé") ||
    imovel.distanciaMar.toLowerCase().includes("50m");

  const isLocacao = imovel.finalidade === "locacao" || imovel.finalidade === "ambos";
  const propertyBranch = imovel.praia === "Canto Grande" ? "cantoGrande" : "bombas";
  const branchInfo = EMPRESA_DATA.unidades[propertyBranch];

  // Link pré-formatado de WhatsApp conforme §5.4
  const whatsappText = `Olá! Tenho interesse no imóvel *#${imovel.codigo}* (${imovel.dormitorios} dorms · ${imovel.praia}). Poderia me informar a disponibilidade?`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${branchInfo.whatsappRaw}&text=${encodeURIComponent(whatsappText)}`;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoIdx((prev) => (prev > 0 ? prev - 1 : imovel.fotos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoIdx((prev) => (prev < imovel.fotos.length - 1 ? prev + 1 : 0));
  };

  const currentPhoto = imovel.fotos[photoIdx] || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group bg-white rounded-[2rem] p-4 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* 1. Imagem do Imóvel com Aspect Ratio 4:3, Transição Suave e Link Direto para Detalhamento */}
      <Link 
        href={`/locacao/${imovel.codigo}`}
        className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 mb-4 cursor-pointer group/img"
      >
        {imovel.fotos.map((foto, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              photoIdx === idx
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          >
            <img
              src={foto}
              alt={imovel.titulo}
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
              loading={priority && idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20" />

        {/* Badge Superior Esquerdo: Pé na Areia (§5.4) */}
        {isPeNaAreia && (
          <div className="absolute top-3 left-3 z-30 glass-ocean px-3 py-1 rounded-full text-[11px] font-bold shadow-sm flex items-center gap-1.5 backdrop-blur-md">
            <Waves className="w-3.5 h-3.5" />
            <span>Pé na Areia</span>
          </div>
        )}

        {/* Badge Superior Direito: Código Mono (§5.4) */}
        <div className="absolute top-3 right-3 z-30 glass-dark px-2.5 py-0.5 rounded-full text-white font-mono-data text-xs font-bold shadow-sm">
          #{imovel.codigo}
        </div>

        {/* Navegação de Fotos no Hover com Animação */}
        {imovel.fotos.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima foto"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2.5 right-2.5 z-30 bg-black/60 text-white text-[10px] font-mono-data px-2 py-0.5 rounded-full backdrop-blur-sm">
              {photoIdx + 1}/{imovel.fotos.length}
            </div>
          </>
        )}
      </Link>

      {/* 2. Conteúdo e Informações do Imóvel */}
      <div className="flex-1 flex flex-col justify-between px-1">
        
        <div>
          {/* Título & Preço Alinhados (§5.4) */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <Link 
              href={`/locacao/${imovel.codigo}`}
              className="font-bold text-[#111827] text-base hover:text-[#3B82F6] transition-colors line-clamp-1 flex-1"
            >
              {imovel.titulo}
            </Link>

            <div className="text-right shrink-0">
              <span className="font-extrabold text-[#111827] text-base">
                {isLocacao ? formatCurrency(imovel.precoDiaria) : formatCurrency(imovel.precoVenda || 0)}
              </span>
              {isLocacao && <span className="text-[10px] text-slate-400 font-medium block -mt-1">/noite</span>}
            </div>
          </div>

          {/* Endereço & Distância do Mar (§5.4) */}
          <div className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
              {imovel.praia}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-slate-600">
              <Waves className="w-3.5 h-3.5 text-[#0EA5E9]" />
              {imovel.distanciaMar}
            </span>
          </div>

          {/* Footer de Ícones de Especificações (§5.4) */}
          <div className="grid grid-cols-4 gap-1 py-2.5 border-t border-slate-100 text-slate-600 text-xs font-semibold">
            <div className="flex items-center gap-1" title="Dormitórios">
              <BedDouble className="w-3.5 h-3.5 text-slate-400" />
              <span>{imovel.dormitorios}</span>
            </div>
            <div className="flex items-center gap-1" title="Banheiros">
              <Bath className="w-3.5 h-3.5 text-slate-400" />
              <span>{imovel.banheiros}</span>
            </div>
            <div className="flex items-center gap-1" title="Vagas de Garagem">
              <Car className="w-3.5 h-3.5 text-slate-400" />
              <span>{imovel.vagasGaragem}</span>
            </div>
            <div className="flex items-center gap-1" title="Capacidade Máxima">
              <span className="text-[11px] text-slate-400">Até</span>
              <span>{imovel.hospedesMax}p</span>
            </div>
          </div>
        </div>

        {/* 3. Botão de Ação Direta para WhatsApp (§5.4) */}
        <div className="pt-3 mt-2 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={`/locacao/${imovel.codigo}`}
            className="flex-1 py-2.5 px-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1E2638] text-xs font-bold text-center transition-colors"
          >
            Ver Detalhes
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
          </a>
        </div>

      </div>

    </div>
  );
}
