export interface Imovel {
  codigo: string;
  titulo: string;
  tipo: 'Apartamento' | 'Casa' | 'Sobrado' | 'Cobertura';
  finalidade: 'locacao' | 'venda' | 'ambos';
  praia: 'Bombas' | 'Canto Grande' | 'Mariscal' | 'Bombinhas (Centro)' | 'Quatro Ilhas' | 'Zimbros';
  enderecoAprox?: string;
  distanciaMar: string;
  destaque?: boolean;
  precoDiaria: number; // R$
  precoVenda?: number; // R$
  hospedesMax: number;
  dormitorios: number;
  suites: number;
  banheiros: number;
  vagasGaragem: number;
  fotos: string[];
  descricao: string;
  comodidades: string[];
  regras?: string[];
}

export const IMOVEIS_DATA: Imovel[] = [
  {
    codigo: "024",
    titulo: "Cobertura Duplex Frente ao Mar - Ed. Porto Verano",
    tipo: "Cobertura",
    finalidade: "locacao",
    praia: "Bombas",
    enderecoAprox: "Av. Leopoldo Zarling, 2285 - Bombas, Bombinhas/SC",
    distanciaMar: "Frente ao Mar / Pé na Areia",
    destaque: true,
    precoDiaria: 1350,
    hospedesMax: 7,
    dormitorios: 3,
    suites: 3,
    banheiros: 4,
    vagasGaragem: 3,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/024.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%284%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%285%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%286%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%287%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%288%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%289%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%2810%29.jpg"
    ],
    descricao: "Exclusiva Cobertura Duplex em condomínio frente ao mar na deslumbrante Praia de Bombas.\n\nPavimento Inferior:\n- Ampla sala de estar com sofá retrátil, Smart TV e ar-condicionado\n- Cozinha planejada com geladeira duplex e utensílios completos\n- 3 Suítes com cama de casal, armários planejados e ar-condicionado split\n\nPavimento Superior:\n- Terraço privativo panorâmico com ampla banheira SPA/hidromassagem e vista cinematográfica da orla\n- Espaço gourmet com churrasqueira a carvão, bancada de apoio e ar-condicionado\n- Área de serviço com máquina de lavar roupas\n- 3 Vagas de garagem privativas.",
    comodidades: [
      "Frente ao Mar",
      "SPA / Hidromassagem Privativa",
      "Churrasqueira a Carvão",
      "Ar-condicionado em todos os cômodos",
      "Wi-Fi Fibra Ótica Alta Velocidade",
      "3 Vagas de Garagem Privativas",
      "3 Suítes Climatizadas",
      "Máquina de Lavar Roupas",
      "Elevador no Edifício"
    ],
    regras: [
      "Check-in a partir das 14h / Check-out até 10h",
      "Não é permitido fumar no interior do imóvel",
      "Não permite animais de estimação (Regra do condomínio)",
      "Respeitar a lei do silêncio após as 22h"
    ]
  },
  {
    codigo: "164",
    titulo: "Casa Ampla 4 Dormitórios com Quintal - Bombas",
    tipo: "Casa",
    finalidade: "locacao",
    praia: "Bombas",
    enderecoAprox: "Rua Tiriba - Bombas, Bombinhas/SC",
    distanciaMar: "A 180m da Praia",
    destaque: true,
    precoDiaria: 890,
    hospedesMax: 10,
    dormitorios: 4,
    suites: 1,
    banheiros: 3,
    vagasGaragem: 3,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/164%20%287%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/164%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/164%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/164%20%284%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/164%20%285%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/164%20%286%29.jpg"
    ],
    descricao: "Excelente casa independente, perfeita para grandes famílias ou grupos de amigos que buscam conforto e espaço privativo em Bombas.\n\nPossui 4 dormitórios confortáveis com ar-condicionado, varanda arejada com rede de descanso, quiosque com churrasqueira e amplo pátio murado e seguro para até 3 carros.",
    comodidades: [
      "Ar-condicionado nos quartos",
      "Wi-Fi Fibra Ótica",
      "Quiosque com Churrasqueira",
      "Pátio Fechado e Seguro",
      "Aceita Pets de Pequeno Porte",
      "3 Vagas de Garagem",
      "Cozinha Completa com Micro-ondas",
      "Máquina de Lavar Roupas"
    ],
    regras: [
      "Permitido Pet de pequeno porte com taxa de higienização",
      "Capacidade máxima para até 10 pessoas",
      "Taxa única de limpeza inclusa no contrato"
    ]
  },
  {
    codigo: "L042",
    titulo: "Apartamento Vista Mar - Canto Grande (Mar de Fora)",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Canto Grande",
    enderecoAprox: "Rua Cajueiro - Canto Grande, Bombinhas/SC",
    distanciaMar: "A 60m do Mar",
    destaque: true,
    precoDiaria: 540,
    hospedesMax: 6,
    dormitorios: 2,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/L042%20%281%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L042%20%288%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L042%20%2811%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L042%20%2813%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L042%20%2818%29.jpg"
    ],
    descricao: "Lindo apartamento a poucos passos das águas cristalinas de Canto Grande. Sacada com churrasqueira privativa e vista lateral para o mar. Ambientes integrados, mobília completa e ar-condicionado nos dormitórios.",
    comodidades: [
      "A 60m da Praia",
      "Sacada com Churrasqueira",
      "Ar-condicionado Split",
      "Wi-Fi Fibra Ótica",
      "1 Vaga de Garagem Coberta",
      "Próximo a Mercados e Peixarias"
    ]
  },
  {
    codigo: "L087",
    titulo: "Apartamento Moderno 2 Dormitórios - Canto Grande",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Canto Grande",
    enderecoAprox: "Rua Inajá - Canto Grande, Bombinhas/SC",
    distanciaMar: "A 120m do Mar de Dentro e Mar de Fora",
    destaque: false,
    precoDiaria: 460,
    hospedesMax: 5,
    dormitorios: 2,
    suites: 0,
    banheiros: 1,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/L087.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L087%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L087%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L087%20%284%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L087%20%285%29.jpg"
    ],
    descricao: "Localização estratégica entre o Mar de Dentro (águas calmas ideais para esportes náuticos) e o Mar de Fora (ondas e surfe). Imóvel bem arejado, equipado com ar-condicionado, Wi-Fi e sacada com churrasqueira.",
    comodidades: [
      "Ar-condicionado",
      "Wi-Fi",
      "Churrasqueira na Sacada",
      "Garagem Privativa",
      "Cozinha Equipada"
    ]
  },
  {
    codigo: "216",
    titulo: "Apartamento Aconchegante 2 Dorms - Bombas",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Bombas",
    enderecoAprox: "Av. Leopoldo Zarling - Bombas, Bombinhas/SC",
    distanciaMar: "A 100m da Praia",
    destaque: true,
    precoDiaria: 490,
    hospedesMax: 6,
    dormitorios: 2,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/216.jpg",
      "https://www.bombasbombinhas.com.br/fotos/216%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/216%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/216%20%284%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/216%20%285%29.jpg"
    ],
    descricao: "Apartamento completo para suas férias em Bombas. Localizado próximo a restaurantes, farmácias, supermercados e a poucos metros do calçadão da praia.",
    comodidades: [
      "Ar-condicionado",
      "Wi-Fi Fibra",
      "Churrasqueira Privativa",
      "Garagem Fechada",
      "Cozinha Equipada"
    ]
  },
  {
    codigo: "237A",
    titulo: "Apartamento Climatizado com Sacada Gourmet - Bombas",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Bombas",
    distanciaMar: "A 150m da Praia de Bombas",
    destaque: false,
    precoDiaria: 470,
    hospedesMax: 6,
    dormitorios: 2,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/237A.jpg",
      "https://www.bombasbombinhas.com.br/fotos/237A%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/237A%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/237A%20%284%29.jpg"
    ],
    descricao: "Imóvel impecável com sacada gourmet fechada em reiki com churrasqueira, móveis sob medida, suíte aconchegante e excelente iluminação natural.",
    comodidades: [
      "Sacada Gourmet com Reiki",
      "Ar-condicionado",
      "Churrasqueira",
      "Wi-Fi",
      "1 Vaga de Garagem"
    ]
  },
  {
    codigo: "023",
    titulo: "Apartamento Alto Padrão 2 Dorms - Bombas",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Bombas",
    distanciaMar: "A 80m da Praia",
    destaque: true,
    precoDiaria: 560,
    hospedesMax: 6,
    dormitorios: 2,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/023%20%281%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/023%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/023%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/023%20%284%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/023%20%285%29.jpg"
    ],
    descricao: "Excelente apartamento em edifício moderno com elevador, a menos de 80 metros da praia de Bombas. Mobiliado com requinte, TV smart, ar-condicionado em todos os ambientes e sacada com churrasqueira.",
    comodidades: [
      "A 80m do Mar",
      "Edifício com Elevador",
      "Ar-condicionado em Todos Ambientes",
      "Churrasqueira",
      "Wi-Fi Fibra",
      "Garagem Privativa"
    ]
  },
  {
    codigo: "174B",
    titulo: "Apartamento 3 Dormitórios com Piscina no Condomínio",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Bombas",
    distanciaMar: "A 200m da Praia",
    destaque: true,
    precoDiaria: 780,
    hospedesMax: 8,
    dormitorios: 3,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 2,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/174B.jpg",
      "https://www.bombasbombinhas.com.br/fotos/174B%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/174B%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/174B%20%284%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/174B%20%285%29.jpg"
    ],
    descricao: "Condomínio residencial com piscina adulto e infantil, área verde e portaria. Apartamento amplo de 3 quartos com sala de jantar e estar, sacada com churrasqueira e 2 vagas de garagem.",
    comodidades: [
      "Piscina no Condomínio",
      "3 Dormitórios Climatizados",
      "2 Vagas de Garagem",
      "Churrasqueira na Sacada",
      "Wi-Fi",
      "Portaria e Segurança"
    ]
  },
  {
    codigo: "068B",
    titulo: "Sobrado Espaçoso em Condomínio Fechado - Bombas",
    tipo: "Sobrado",
    finalidade: "locacao",
    praia: "Bombas",
    distanciaMar: "A 250m da Praia",
    destaque: false,
    precoDiaria: 510,
    hospedesMax: 6,
    dormitorios: 2,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/068B.jpg",
      "https://www.bombasbombinhas.com.br/fotos/068B%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/068B%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/068B%20%284%29.jpg"
    ],
    descricao: "Sobrado de 2 pavimentos em local calmo e seguro. Sala de estar com cozinha integrada, lavabo, área de churrasqueira privativa e quartos confortáveis com ar-condicionado no andar superior.",
    comodidades: [
      "Sobrado Independente",
      "Churrasqueira Privativa",
      "Ar-condicionado",
      "Garagem Fechada",
      "Wi-Fi"
    ]
  },
  {
    codigo: "025A",
    titulo: "Apartamento Frente ao Mar com Vista Panorâmica",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Bombas",
    distanciaMar: "Frente ao Mar / Pé na Areia",
    destaque: true,
    precoDiaria: 920,
    hospedesMax: 7,
    dormitorios: 3,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 2,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/025A%20%281%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/025%20%281%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/025%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/025%20%284%29.jpg"
    ],
    descricao: "Acorde com o som das ondas e uma vista frontal inesquecível da Praia de Bombas. Sacada ampla com churrasqueira de frente para o mar, sala em 2 ambientes e suíte master com vista panorâmica.",
    comodidades: [
      "Frente Mar Pé na Areia",
      "Vista Panorâmica da Praia",
      "Sacada com Churrasqueira",
      "Ar-condicionado",
      "2 Vagas de Garagem",
      "Wi-Fi Fibra Ótica"
    ]
  },
  {
    codigo: "231",
    titulo: "Apartamento Familiar 3 Dormitórios - Mariscal",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Mariscal",
    distanciaMar: "A 100m da Praia de Mariscal",
    destaque: true,
    precoDiaria: 740,
    hospedesMax: 8,
    dormitorios: 3,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 2,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/231.jpg",
      "https://www.bombasbombinhas.com.br/fotos/231%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/231%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/231%20%284%29.jpg"
    ],
    descricao: "Localizado na valorizada praia de Mariscal, famosa por sua faixa de areia branca e águas limpas. Edifício tranquilo, ideal para relaxar com a família.",
    comodidades: [
      "A 100m de Mariscal",
      "3 Dormitórios Climatizados",
      "Churrasqueira Privativa",
      "2 Vagas de Garagem",
      "Wi-Fi"
    ]
  },
  {
    codigo: "L011",
    titulo: "Apartamento Frente Mar com Sacada Envidraçada - Canto Grande",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Canto Grande",
    distanciaMar: "Frente ao Mar",
    destaque: true,
    precoDiaria: 820,
    hospedesMax: 6,
    dormitorios: 2,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/L011.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L011%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L011%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/L011%20%284%29.jpg"
    ],
    descricao: "Viva a experiência de se hospedar de frente para o Mar de Canto Grande. Sacada envidraçada com churrasqueira, decoração contemporânea e acesso direto à praia.",
    comodidades: [
      "Frente ao Mar",
      "Sacada Envidraçada com Churrasqueira",
      "Ar-condicionado",
      "Wi-Fi Fibra",
      "Vaga de Garagem Coberta"
    ]
  },
  {
    codigo: "074",
    titulo: "Cobertura com Vista Mar e Amplo Terraço - Bombas",
    tipo: "Cobertura",
    finalidade: "locacao",
    praia: "Bombas",
    distanciaMar: "A 90m da Praia",
    destaque: true,
    precoDiaria: 1150,
    hospedesMax: 8,
    dormitorios: 3,
    suites: 2,
    banheiros: 3,
    vagasGaragem: 2,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/074.jpg",
      "https://www.bombasbombinhas.com.br/fotos/074%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/074%20%283%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/074%20%284%29.jpg"
    ],
    descricao: "Cobertura elegante com amplo terraço privativo, churrasqueira gourmet, espreguiçadeiras e linda vista do mar de Bombas. Acabamento de primeira linha e suítes climatizadas.",
    comodidades: [
      "Terraço com Vista Mar",
      "Churrasqueira Gourmet",
      "2 Suítes Climatizadas",
      "Wi-Fi Fibra Ótica",
      "2 Vagas de Garagem Privativas",
      "Elevador no Prédio"
    ]
  },
  {
    codigo: "037",
    titulo: "Apartamento 3 Quartos a Poucos Passos da Praia - Bombas",
    tipo: "Apartamento",
    finalidade: "locacao",
    praia: "Bombas",
    distanciaMar: "A 50m da Praia",
    destaque: false,
    precoDiaria: 680,
    hospedesMax: 7,
    dormitorios: 3,
    suites: 1,
    banheiros: 2,
    vagasGaragem: 1,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/037.jpg",
      "https://www.bombasbombinhas.com.br/fotos/016.jpg",
      "https://www.bombasbombinhas.com.br/fotos/016%20%282%29.jpg"
    ],
    descricao: "Conforto e praticidade a apenas 50 metros da praia de Bombas. Dispensa uso de carro para ir ao mar ou aos principais restaurantes e supermercados.",
    comodidades: [
      "A 50m do Mar",
      "Ar-condicionado",
      "Churrasqueira",
      "Wi-Fi",
      "Garagem Privativa"
    ]
  },
  // Imóveis para Venda
  {
    codigo: "V-101",
    titulo: "Apartamento Alto Padrão Mobiliado - Frente Mar em Bombas",
    tipo: "Apartamento",
    finalidade: "venda",
    praia: "Bombas",
    enderecoAprox: "Av. Leopoldo Zarling - Bombas",
    distanciaMar: "Frente ao Mar / Pé na Areia",
    destaque: true,
    precoDiaria: 0,
    precoVenda: 1850000,
    hospedesMax: 8,
    dormitorios: 3,
    suites: 3,
    banheiros: 4,
    vagasGaragem: 2,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/024.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%284%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/024%20%288%29.jpg"
    ],
    descricao: "Oportunidade única de investimento na praia mais valorizada de Santa Catarina. Apartamento 100% mobiliado e decorado, alto retorno de rentabilidade comprovada para locação de temporada.",
    comodidades: [
      "Frente Mar Pé na Areia",
      "3 Suítes Plenas",
      "Mobiliado e Decorado",
      "2 Vagas de Garagem",
      "Excelente Rentabilidade de Temporada"
    ]
  },
  {
    codigo: "V-205",
    titulo: "Cobertura Exclusiva com Vista Panorâmica - Canto Grande",
    tipo: "Cobertura",
    finalidade: "venda",
    praia: "Canto Grande",
    enderecoAprox: "Rua Cajueiro - Canto Grande",
    distanciaMar: "A 80m do Mar",
    destaque: true,
    precoDiaria: 0,
    precoVenda: 2390000,
    hospedesMax: 10,
    dormitorios: 4,
    suites: 2,
    banheiros: 3,
    vagasGaragem: 3,
    fotos: [
      "https://www.bombasbombinhas.com.br/fotos/074.jpg",
      "https://www.bombasbombinhas.com.br/fotos/074%20%282%29.jpg",
      "https://www.bombasbombinhas.com.br/fotos/074%20%283%29.jpg"
    ],
    descricao: "Cobertura duplex cinematográfica com spa privativo, churrasqueira gourmet, vista aberta para o mar e 3 vagas de garagem em localização nobre.",
    comodidades: [
      "SPA Privativo com Vista Mar",
      "Churrasqueira Gourmet",
      "3 Vagas de Garagem",
      "Acabamento em Porcelanato e Gesso",
      "Alta Liquidez e Valorização"
    ]
  }
];

export const PRAIAS_LIST = [
  {
    nome: "Bombas",
    slug: "bombas",
    descricao: "Praia com excelente infraestrutura, calçadão iluminado, mar limpo com ondas suaves e vida gastronômica agitada.",
    foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Familiar", "Calçadão", "Restaurantes", "Ciclovia"]
  },
  {
    nome: "Canto Grande",
    slug: "canto-grande",
    descricao: "O charme do Mar de Dentro (águas calmas e pôr do sol espetacular) e Mar de Fora (natureza preservada e ondas).",
    foto: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    tags: ["Pôr do Sol", "Passeios de Barco", "Frutos do Mar", "Trilhas"]
  },
  {
    nome: "Mariscal",
    slug: "mariscal",
    descricao: "Ampla faixa de areia branca, vegetação de restinga e águas cristalinas com certificação ambiental internacional.",
    foto: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Bandeira Azul", "Areia Branca", "Surfe", "Tranquilidade"]
  },
  {
    nome: "Bombinhas (Centro)",
    slug: "bombinhas-centro",
    descricao: "Coração da cidade com comércio vibrante, águas calmas como uma piscina natural e passeios de mergulho.",
    foto: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mergulho", "Piscina Natural", "Shopping & Lojas", "Vida Noturna"]
  },
  {
    nome: "Quatro Ilhas",
    slug: "quatro-ilhas",
    descricao: "Uma das praias mais famosas da região, com vista privilegiada para as ilhas da Reserva Biológica do Arvoredo.",
    foto: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    tags: ["Reserva Ecológica", "Vista Panorâmica", "Surfe", "Natureza"]
  }
];
