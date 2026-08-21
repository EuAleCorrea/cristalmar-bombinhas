"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  Building2,
  Instagram,
  Facebook,
  ArrowUpRight
} from "lucide-react";
import { EMPRESA_DATA, getWhatsAppLink } from "@/data/empresa";
import { PRAIAS_LIST } from "@/data/imoveis";

export function Footer() {
  const { bombas, cantoGrande } = EMPRESA_DATA.unidades;

  return (
    <footer className="bg-[#1E2638] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#0EA5E9] flex items-center justify-center text-white font-black text-sm shadow-md">
                C
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                CRISTALMAR <span className="text-xs uppercase font-bold text-[#38BDF8] tracking-wider">Bombinhas</span>
              </span>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
              Especialistas em locação de temporada e assessoria imobiliária em Bombinhas, Bombas, Canto Grande e Mariscal. Mais de 20 anos proporcionando estadias inesquecíveis e negócios seguros.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[#F59E0B] text-xs font-bold font-mono-data">
                <ShieldCheck className="w-3.5 h-3.5" />
                {EMPRESA_DATA.creci}
              </span>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={EMPRESA_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Cristalmar"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#3B82F6] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={EMPRESA_DATA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Cristalmar"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#3B82F6] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-semibold">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/locacao" className="hover:text-white transition-colors">Aluguel Temporada</Link>
              </li>
              <li>
                <Link href="/vendas" className="hover:text-white transition-colors">Imóveis à Venda</Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">Sobre a Empresa</Link>
              </li>
              <li>
                <Link href="/cadastre" className="hover:text-white transition-colors">Cadastre seu Imóvel</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">Contato & Filiais</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Praias */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8] mb-4">
              Praias
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-semibold">
              {PRAIAS_LIST.map((praia) => (
                <li key={praia.slug}>
                  <Link 
                    href={`/locacao?praia=${encodeURIComponent(praia.nome)}`}
                    className="hover:text-white transition-colors"
                  >
                    {praia.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Unidades */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8] mb-4">
              Unidades Físicas
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              
              <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                <div className="font-bold text-white text-xs mb-0.5">Matriz Bombas:</div>
                <div className="text-[11px] text-slate-400">{bombas.endereco}</div>
                <div className="text-[11px] font-semibold text-slate-300 mt-1">{bombas.telefone}</div>
                <a 
                  href={getWhatsAppLink("bombas")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-bold text-[11px] block mt-1"
                >
                  WhatsApp Bombas &rarr;
                </a>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                <div className="font-bold text-white text-xs mb-0.5">Filial Canto Grande:</div>
                <div className="text-[11px] text-slate-400">{cantoGrande.endereco}</div>
                <div className="text-[11px] font-semibold text-slate-300 mt-1">{cantoGrande.telefone}</div>
                <a 
                  href={getWhatsAppLink("cantoGrande")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-bold text-[11px] block mt-1"
                >
                  WhatsApp Canto Grande &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Cristalmar Imóveis. CRECI-SC 4215-J.
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Bombinhas &bull; Santa Catarina &bull; Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
