import { IMOVEIS_DATA } from "@/data/imoveis";
import { notFound } from "next/navigation";
import { PropertyDetailClient } from "./PropertyDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return IMOVEIS_DATA.map((imovel) => ({
    id: imovel.codigo,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const { id } = await params;
  const imovel = IMOVEIS_DATA.find((i) => i.codigo.toLowerCase() === id.toLowerCase());

  if (!imovel) {
    return {
      title: "Imóvel não encontrado | Cristalmar Imóveis Bombinhas",
    };
  }

  return {
    title: `${imovel.titulo} (Cód. #${imovel.codigo}) | Cristalmar Bombinhas`,
    description: `${imovel.tipo} para aluguel de temporada em ${imovel.praia}, Bombinhas/SC. ${imovel.dormitorios} dorms, até ${imovel.hospedesMax} pessoas. ${imovel.distanciaMar}.`,
  };
}

export default async function LocacaoDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const imovel = IMOVEIS_DATA.find((i) => i.codigo.toLowerCase() === id.toLowerCase());

  if (!imovel) {
    notFound();
  }

  return <PropertyDetailClient imovel={imovel} />;
}
