"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Imovel, IMOVEIS_DATA } from "@/data/imoveis";
import { EMPRESA_DATA } from "@/data/empresa";
import { PropertyCardLuxury } from "@/components/PropertyCardLuxury";
import { formatCurrency } from "@/lib/utils";
import { 
  Users, 
  BedDouble, 
  Bath, 
  Car, 
  MapPin, 
  Waves, 
  CheckCircle2, 
  MessageCircle, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Share2, 
  Sparkles, 
  Building2 
} from "lucide-react";

interface PropertyDetailClientProps {
  imovel: Imovel;
}

export function PropertyDetailClient({ imovel }: PropertyDetailClientProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numHospedes, setNumHospedes] = useState("4");

  const isPeNaAreia = 
    imovel.distanciaMar.toLowerCase().includes("frente") || 
    imovel.distanciaMar.toLowerCase().includes("pé") ||
    imovel.distanciaMar.toLowerCase().includes("50m");

  const unit = imovel.praia === "Canto Grande" ? "cantoGrande" : "bombas";
  const branchInfo = EMPRESA_DATA.unidades[unit];

  // Cálculo de diárias se datas informadas
  const diasCalculados = React.useMemo(() => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diff = end.getTime() - start.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days > 0 ? days : 0;
  }, [checkInDate, checkOutDate]);

  const handleWhatsAppReservation = () => {
    let msg = `Olá! Gostaria de consultar a disponibilidade do imóvel *#${imovel.codigo}* (${imovel.titulo}) em *${imovel.praia}*.`;
    if (checkInDate && checkOutDate) {
      msg += `\n📅 Período: de ${checkInDate} até ${checkOutDate} (${diasCalculados} diárias).\n👥 Hóspedes: ${numHospedes} pessoas.`;
    }
    const url = `https://api.whatsapp.com/send?phone=${branchInfo.whatsappRaw}&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const semelhantes = IMOVEIS_DATA.filter(
    (i) => i.codigo !== imovel.codigo && (i.praia === imovel.praia || i.tipo === imovel.tipo)
  ).slice(0, 3);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb e Ações */}
      <div className="flex items-center justify-between gap-4 mb-6 text-xs text-slate-500 font-semibold">
        <div className="flex items-center gap-2">
          <Link href="/locacao" className="hover:text-[#3B82F6] flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Voltar à Listagem
          </Link>
          <span>/</span>
          <span>{imovel.praia}</span>
          <span>/</span>
          <span className="text-[#111827] font-bold font-mono-data">#{imovel.codigo}</span>
        </div>

        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined" && navigator.share) {
              navigator.share({
                title: imovel.titulo,
                text: `Confira este imóvel em Bombinhas: ${imovel.titulo}`,
                url: window.location.href,
              });
            } else if (typeof window !== "undefined") {
              navigator.clipboard.writeText(window.location.href);
              alert("Link do imóvel copiado!");
            }
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm transition-colors cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Compartilhar</span>
        </button>
      </div>

      {/* Header do Imóvel: Badges & Título */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-[#1E2638] text-white text-xs font-mono-data font-bold px-3 py-1 rounded-full shadow-sm">
            CÓD #{imovel.codigo}
          </span>
          <span className="bg-white text-slate-700 text-xs font-bold px-3 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
            {imovel.praia}
          </span>
          {isPeNaAreia && (
            <span className="glass-ocean text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Waves className="w-3.5 h-3.5" />
              Pé na Areia
            </span>
          )}
          {imovel.destaque && (
            <span className="bg-[#F59E0B] text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3" /> Seleção Destaque
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
          {imovel.titulo}
        </h1>
        {imovel.enderecoAprox && (
          <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" /> {imovel.enderecoAprox}
          </p>
        )}
      </div>

      {/* Galeria de Fotos Interativa com Transição Suave */}
      <div className="mb-12">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-xl border border-slate-200/80 mb-3 group">
          
          {/* Camadas de Fotos com Efeito Crossfade Suave */}
          {imovel.fotos.map((foto, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                activePhotoIdx === idx
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
            >
              <img
                src={foto}
                alt={`${imovel.titulo} - Foto ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Gradiente de Contraste Superior e Inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-20" />

          {/* Botão Ver Tela Cheia */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="absolute top-4 right-4 z-30 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow hover:scale-105 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Ver Tela Cheia ({imovel.fotos.length} fotos)</span>
          </button>

          {/* Navegação Anterior / Próximo com Animação */}
          {imovel.fotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : imovel.fotos.length - 1))}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setActivePhotoIdx((prev) => (prev < imovel.fotos.length - 1 ? prev + 1 : 0))}
                aria-label="Próxima foto"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Contador de Fotos */}
          <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md text-white text-xs font-mono-data px-3.5 py-1.5 rounded-full">
            Foto {activePhotoIdx + 1} de {imovel.fotos.length}
          </div>
        </div>

        {/* Thumbnails com Feedback Visual */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {imovel.fotos.map((foto, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActivePhotoIdx(idx)}
              className={`relative w-20 sm:w-28 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 transition-all duration-300 cursor-pointer ${
                activePhotoIdx === idx
                  ? "ring-4 ring-[#3B82F6] scale-95 shadow-md opacity-100"
                  : "opacity-60 hover:opacity-100 hover:scale-[1.02]"
              }`}
            >
              <img src={foto} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Detalhes & Simulador de Reserva */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Coluna Esquerda: Especificações & Comodidades */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Barra de Especificações */}
          <div className="bg-white rounded-[2rem] p-6 border border-slate-200/80 shadow-card grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-slate-50 rounded-2xl">
              <Users className="w-6 h-6 text-[#0EA5E9] mx-auto mb-1.5" />
              <div className="text-xs text-slate-500 font-semibold">Hóspedes</div>
              <div className="text-sm font-black text-[#111827]">Até {imovel.hospedesMax} pess.</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl">
              <BedDouble className="w-6 h-6 text-[#0EA5E9] mx-auto mb-1.5" />
              <div className="text-xs text-slate-500 font-semibold">Dormitórios</div>
              <div className="text-sm font-black text-[#111827]">{imovel.dormitorios} ({imovel.suites} suítes)</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl">
              <Bath className="w-6 h-6 text-[#0EA5E9] mx-auto mb-1.5" />
              <div className="text-xs text-slate-500 font-semibold">Banheiros</div>
              <div className="text-sm font-black text-[#111827]">{imovel.banheiros} banh.</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl">
              <Car className="w-6 h-6 text-[#0EA5E9] mx-auto mb-1.5" />
              <div className="text-xs text-slate-500 font-semibold">Garagem</div>
              <div className="text-sm font-black text-[#111827]">{imovel.vagasGaragem} vaga(s)</div>
            </div>
          </div>

          {/* Comodidades */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-card">
            <h3 className="text-xl font-black text-[#111827] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F59E0B]" />
              Comodidades do Imóvel
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {imovel.comodidades.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 font-semibold text-[#1E2638] text-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Descrição Completa */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-card">
            <h3 className="text-xl font-black text-[#111827] mb-4">
              Descrição & Acomodações
            </h3>
            <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-medium">
              {imovel.descricao}
            </div>
          </div>

        </div>

        {/* Coluna Direita: Box de Orçamento e Reserva WhatsApp */}
        <div>
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border border-slate-200/80 shadow-xl sticky top-24 space-y-6">
            
            <div>
              <span className="text-xs font-semibold text-slate-400 block">
                Valor da Diária de Temporada
              </span>
              <div className="text-3xl font-black text-[#111827] mt-1">
                <span className="text-[#0284C7]">{formatCurrency(imovel.precoDiaria)}</span>
                <span className="text-xs font-medium text-slate-400"> / noite</span>
              </div>
            </div>

            {/* Simulador de Datas */}
            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Check-in</label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Check-out</label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-[#1E2638] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Hóspedes</label>
                <select
                  value={numHospedes}
                  onChange={(e) => setNumHospedes(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-[#1E2638] focus:outline-none cursor-pointer"
                >
                  {[...Array(imovel.hospedesMax)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? "Pessoa" : "Pessoas"}
                    </option>
                  ))}
                </select>
              </div>

              {diasCalculados > 0 && (
                <div className="bg-sky-50 p-3.5 rounded-2xl border border-sky-100 mt-2">
                  <div className="flex justify-between text-slate-600 mb-1">
                    <span>{formatCurrency(imovel.precoDiaria)} x {diasCalculados} noites</span>
                    <span>{formatCurrency(diasCalculados * imovel.precoDiaria)}</span>
                  </div>
                  <div className="flex justify-between font-black text-slate-900 pt-1.5 border-t border-sky-200/60 text-sm">
                    <span>Total Estimado</span>
                    <span className="text-[#0284C7]">{formatCurrency(diasCalculados * imovel.precoDiaria)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA WhatsApp com link formatado */}
            <button
              type="button"
              onClick={handleWhatsAppReservation}
              className="w-full py-4 px-6 rounded-full bg-[#1E2638] hover:bg-[#111827] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Solicitar via WhatsApp ↗</span>
            </button>

            {/* Dados da Filial Responsável */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              <div className="font-bold text-[#111827] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#0EA5E9]" />
                Unidade {branchInfo.nome}
              </div>
              <div className="text-[11px]">{branchInfo.endereco}</div>
              <div className="text-[11px] font-semibold text-slate-600">Fone: {branchInfo.telefone}</div>
            </div>

          </div>
        </div>

      </div>

      {/* Imóveis Semelhantes */}
      {semelhantes.length > 0 && (
        <div className="mt-20 pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-black text-[#111827] mb-8">
            Outros Imóveis em {imovel.praia}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {semelhantes.map((sim) => (
              <PropertyCardLuxury key={sim.codigo} imovel={sim} />
            ))}
          </div>
        </div>
      )}

      {/* Modal Lightbox */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-in fade-in">
          <div className="flex items-center justify-between text-white">
            <span className="font-bold text-sm">
              {imovel.titulo} &bull; Foto {activePhotoIdx + 1} de {imovel.fotos.length}
            </span>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {imovel.fotos.map((f, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                  activePhotoIdx === i
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 pointer-events-none z-0"
                }`}
              >
                <img
                  src={f}
                  alt={`Foto ${i + 1}`}
                  className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            ))}

            {/* Setas de Navegação no Modal */}
            {imovel.fotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : imovel.fotos.length - 1))}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhotoIdx((prev) => (prev < imovel.fotos.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>

          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {imovel.fotos.map((f, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhotoIdx(i)}
                className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 cursor-pointer ${
                  activePhotoIdx === i ? "ring-2 ring-[#38BDF8]" : "opacity-50"
                }`}
              >
                <img src={f} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
