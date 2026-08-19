"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

export function WhatsAppFab() {
  const { branchData, getWhatsAppUrl } = useBranch();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a Cristalmar via WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-green p-3.5 sm:p-4"
      >
        {/* Ícone WhatsApp */}
        <MessageCircle className="w-7 h-7 shrink-0 text-white drop-shadow-sm" />

        {/* Texto Expansível no Desktop */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-white group-hover:pl-2.5 flex items-center gap-1">
          <span>WhatsApp &bull; {branchData.nome}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </a>
    </div>
  );
}
