import { IMOVEIS_DATA } from "@/data/imoveis";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  return IMOVEIS_DATA.map((imovel) => ({
    codigo: imovel.codigo,
  }));
}

interface PropertyPageProps {
  params: Promise<{
    codigo: string;
  }>;
}

export default async function ImovelRedirectPage({ params }: PropertyPageProps) {
  const { codigo } = await params;
  redirect(`/locacao/${codigo}`);
}
