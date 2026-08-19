export const EMPRESA_DATA = {
  nome: "Cristalmar Imóveis",
  razaoSocial: "Cristalmar Imóveis & Turismo Ltda",
  creci: "CRECI-SC 4215-J",
  email: "atendimento@cristalmarimoveis.com.br",
  sitePrincipal: "https://bombasbombinhas.com.br",
  siteSecundario: "https://cristalmarimoveis.com.br",
  instagram: "https://www.instagram.com/cristalmarimoveis/",
  facebook: "https://www.facebook.com/CristalmarImoveis/",
  
  unidades: {
    bombas: {
      nome: "Matriz Bombas",
      endereco: "Av. Leopoldo Zarling, 1340 - Sala 03",
      bairro: "Bombas",
      cidade: "Bombinhas / SC",
      cep: "88215-000",
      telefone: "(47) 3363-5474",
      telefoneRaw: "4733635474",
      whatsapp: "(47) 99938-2548",
      whatsappRaw: "5547999382548",
      horario: "Segunda a Sábado das 08h às 19h | Domingos de Plantão",
      googleMapsUrl: "https://maps.google.com/?q=Av.+Leopoldo+Zarling,+1340+-+Bombas,+Bombinhas+-+SC"
    },
    cantoGrande: {
      nome: "Filial Canto Grande",
      endereco: "Rua Cajueiro, 2788, esq. com Rua Inajá - Sala 02",
      bairro: "Canto Grande",
      cidade: "Bombinhas / SC",
      cep: "88215-000",
      telefone: "(47) 3393-4302",
      telefoneRaw: "4733934302",
      whatsapp: "(47) 99957-9729",
      whatsappRaw: "5547999579729",
      horario: "Segunda a Sábado das 08h às 19h | Domingos de Plantão",
      googleMapsUrl: "https://maps.google.com/?q=Rua+Cajueiro,+2788+-+Canto+Grande,+Bombinhas+-+SC"
    }
  },

  diferenciais: [
    {
      titulo: "Mais de 20 Anos de Tradição",
      descricao: "Pioneirismo, segurança jurídica e excelência em atendimento no litoral de Santa Catarina."
    },
    {
      titulo: "Duas Unidades Físicas Estratégicas",
      descricao: "Atendimento presencial no check-in e check-out em Bombas e Canto Grande."
    },
    {
      titulo: "Imóveis 100% Vistoriados",
      descricao: "Garantia de que você encontrará o imóvel exatamente conforme anunciado, limpo e pronto para receber."
    },
    {
      titulo: "Suporte Total Durante a Estadia",
      descricao: "Equipe de plantão para atender qualquer necessidade do hóspede com agilidade via WhatsApp."
    }
  ],

  depoimentos: [
    {
      nome: "Carlos Eduardo Mendes",
      cidade: "Curitiba / PR",
      texto: "Alugamos a cobertura com a Cristalmar pelo terceiro ano consecutivo. O imóvel estava impecável, o check-in foi rápido na unidade de Bombas e a vista é indescritível. Nota 10!",
      estrelas: 5,
      imovel: "Cobertura Duplex 024"
    },
    {
      nome: "Mariana S. Fagundes",
      cidade: "Porto Alegre / RS",
      texto: "Atendimento exemplar da equipe de Canto Grande! Nos indicaram uma casa perfeita para a família toda e com fácil acesso às duas praias. Recomendo de olhos fechados.",
      estrelas: 5,
      imovel: "Casa 164 em Bombas"
    },
    {
      nome: "Roberto Linhares",
      cidade: "São Paulo / SP",
      texto: "Transparência e seriedade. Sou proprietário e confio a gestão do meu apartamento em Bombinhas à Cristalmar há mais de 8 anos. Retorno garantido e zero dor de cabeça.",
      estrelas: 5,
      imovel: "Proprietário de Imóvel"
    }
  ]
};

export function getWhatsAppLink(unidade: 'bombas' | 'cantoGrande' | 'geral' = 'bombas', mensagem: string = ''): string {
  const number = unidade === 'cantoGrande' 
    ? EMPRESA_DATA.unidades.cantoGrande.whatsappRaw 
    : EMPRESA_DATA.unidades.bombas.whatsappRaw;
  
  const defaultText = mensagem || "Olá! Acessei o novo site da Cristalmar Imóveis e gostaria de tirar algumas dúvidas sobre locação de temporada em Bombinhas.";
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(defaultText)}`;
}

export function getPropertyWhatsAppLink(codigo: string, titulo: string, praia: string, unidade: 'bombas' | 'cantoGrande' = 'bombas'): string {
  const msg = `Olá! Tenho interesse no imóvel *Código ${codigo}* (${titulo}) localizado em *${praia}*. Poderia me informar a disponibilidade e valores para o meu período?`;
  return getWhatsAppLink(unidade, msg);
}
