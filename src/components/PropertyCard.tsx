"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  BedDouble, 
  Car, 
  MapPin, 
  Waves, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Eye,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Imovel } from "@/data/imoveis";
import { getPropertyWhatsAppLink } from "@/data/empresa";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  imovel: Imovel;
  priority?: boolean;
}

export function PropertyCard({ imovel, priority = false }: PropertyCardProps) {
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [imageError, setImageError] = useState(false);

  const isLocacao = imovel.finalidade === "locacao" || imovel.finalidade === "ambos";
  const unit = imovel.praia === "Canto Grande" ? "cantoGrande" : "bombas";
  const whatsappUrl = getPropertyWhatsAppLink(imovel.codigo, imovel.titulo, imovel.praia, unit);

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentPhotoIdx((prev) => (prev > 0 ? prev - 1 : imovel.fotos.length - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentPhotoIdx((prev) => (prev < imovel.fotos.length - 1 ? prev + 1 : 0));
  };

  const displayPhoto = imovel.fotos[currentPhotoIdx] || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      
      {/* Top Media Section with Carousel */}
      <Link 
        href={`/locacao/${imovel.codigo}`}
        className="block relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
      >
        
        {/* Imagem Principal */}
        <img
          src={displayPhoto}
          alt={imovel.titulo}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />

        {/* Gradiente sutil para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* Badges Superiores */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5">
            <span className="bg-sky-900/90 backdrop-blur-md text-sky-100 text-xs font-black px-3 py-1 rounded-full shadow">
              Cód. {imovel.codigo}
            </span>
            {imovel.destaque && (
              <span className="bg-amber-500 text-slate-950 text-xs font-extrabold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Destaque
              </span>
            )}
          </div>

          <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            {imovel.praia}
          </span>
        </div>

        {/* Controles de Navegação da Galeria de Fotos */}
        {imovel.fotos.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevPhoto}
              aria-label="Foto anterior"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNextPhoto}
              aria-label="Próxima foto"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
              {currentPhotoIdx + 1} / {imovel.fotos.length}
            </div>
          </>
        )}

        {/* Distância do Mar na base da foto */}
        <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow">
          <Waves className="w-4 h-4 text-cyan-300" />
          <span>{imovel.distanciaMar}</span>
        </div>

      </Link>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Tipo e Localização */}
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
            {imovel.tipo} &bull; {imovel.praia}
          </div>

          {/* Título do Imóvel */}
          <Link 
            href={`/imovel/${imovel.codigo}`}
            className="block text-lg font-bold text-slate-900 leading-snug hover:text-sky-600 transition-colors line-clamp-2"
          >
            {imovel.titulo}
          </Link>

          {/* Especificações Rápidas */}
          <div className="grid grid-cols-3 gap-2 py-3.5 my-3 border-y border-slate-100 text-slate-600 text-xs font-medium">
            <div className="flex items-center gap-1.5" title="Capacidade máxima de hóspedes">
              <Users className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Até {imovel.hospedesMax} pess.</span>
            </div>
            <div className="flex items-center gap-1.5" title="Dormitórios">
              <BedDouble className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{imovel.dormitorios} quarto(s)</span>
            </div>
            <div className="flex items-center gap-1.5" title="Vagas de Garagem">
              <Car className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{imovel.vagasGaragem} vaga(s)</span>
            </div>
          </div>

          {/* Comodidades em Destaque */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {imovel.comodidades.slice(0, 3).map((comodidade, idx) => (
              <span 
                key={idx}
                className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-lg flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {comodidade}
              </span>
            ))}
            {imovel.comodidades.length > 3 && (
              <span className="text-[11px] text-slate-500 font-semibold px-1 py-0.5">
                +{imovel.comodidades.length - 3} mais
              </span>
            )}
          </div>
        </div>

        {/* Pricing and CTAs */}
        <div className="pt-2">
          
          <div className="flex items-baseline justify-between mb-3.5">
            <div>
              <span className="text-xs text-slate-500 font-medium block">
                {isLocacao ? "Diárias a partir de" : "Valor de Venda"}
              </span>
              <div className="text-xl font-black text-slate-900">
                {isLocacao ? (
                  <>
                    <span className="text-sky-600">{formatCurrency(imovel.precoDiaria)}</span>
                    <span className="text-xs font-medium text-slate-500"> / noite</span>
                  </>
                ) : (
                  <span className="text-emerald-700">{formatCurrency(imovel.precoVenda || 0)}</span>
                )}
              </div>
            </div>

            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
              Disponível
            </span>
          </div>

          {/* Botões de Ação */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/imovel/${imovel.codigo}`}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-slate-600" />
              Ver Fotos
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Consultar
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
