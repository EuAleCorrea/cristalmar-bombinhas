"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { EMPRESA_DATA } from "@/data/empresa";

type BranchType = "bombas" | "cantoGrande";

interface BranchContextType {
  branch: BranchType;
  setBranch: (b: BranchType) => void;
  branchData: typeof EMPRESA_DATA.unidades.bombas;
  getWhatsAppUrl: (customMsg?: string) => string;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const [branch, setBranch] = useState<BranchType>("bombas");

  const branchData = EMPRESA_DATA.unidades[branch];

  const getWhatsAppUrl = (customMsg?: string) => {
    const rawNumber = branchData.whatsappRaw;
    const text = customMsg || `Olá! Acessei o site da Cristalmar Imóveis (${branchData.nome}) e gostaria de mais informações.`;
    return `https://api.whatsapp.com/send?phone=${rawNumber}&text=${encodeURIComponent(text)}`;
  };

  return (
    <BranchContext.Provider value={{ branch, setBranch, branchData, getWhatsAppUrl }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error("useBranch must be used within a BranchProvider");
  }
  return context;
}
