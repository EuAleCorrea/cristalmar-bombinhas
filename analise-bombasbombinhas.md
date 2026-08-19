# Análise de Melhorias — bombasbombinhas.com.br

## Diagnóstico Geral

O site é uma imobiliária de temporada (Cristalmar Imóveis) em Bombinhas/SC. Apresenta sinais claros de uma construção da era 2005–2012: tabelas como layout, charset ISO-8859-1, ausência de responsividade e ausência de framework moderno.

---

## Problemas Críticos

### 1. Tecnologia Obsoleta
- **Charset ISO-8859-1** — padrão da era pré-HTML5; deveria ser UTF-8
- **Layout baseado em tabelas HTML** — técnica abandonada há mais de 15 anos
- **Sem responsividade (mobile)** — fatal para um negócio de turismo onde a maioria dos acessos vem de celular
- **Link para Google+** — plataforma descontinuada em 2019

### 2. SEO Precário
- Meta keywords com excesso de termos genéricos e repetidos (técnica penalizada pelo Google desde 2009)
- Canonical apontando para outro domínio (`cristalmarimoveis.com.br`) — confunde o Google sobre qual é o site principal
- Dois domínios ativos para o mesmo negócio (`bombasbombinhas.com.br` e `cristalmarimoveis.com.br`) sem estratégia clara

### 3. UX / Experiência do Usuário
- Listagem de imóveis em tabela sem cards visuais — sem foto em destaque, sem preço visível
- Formulário de busca confuso e visualmente poluído
- Nenhuma hierarquia visual clara (sem contraste entre seções)
- Newsletter em tabela sem design

### 4. Performance e Confiança
- Sem HTTPS visível (deve ser verificado — hoje é requisito mínimo)
- Sem Google Analytics / Tag Manager aparente
- Sem avaliações ou depoimentos de clientes
- Sem mapa ou localização integrados

---

## Melhorias Recomendadas por Prioridade

### Alta Prioridade (impacto imediato em conversão)
| Item | Ação |
|---|---|
| Mobile-first | Reconstruir com layout responsivo (CSS Grid/Flexbox) |
| Cards de imóveis | Substituir tabelas por cards com foto, preço, nº de quartos e CTA |
| WhatsApp CTA | Botão flutuante de WhatsApp em todas as páginas |
| HTTPS | Certificado SSL ativo e redirecionamento forçado |
| Unificar domínios | Escolher um domínio principal e redirecionar o outro (301) |

### Média Prioridade (credibilidade e SEO)
| Item | Ação |
|---|---|
| Atualizar charset | Migrar para UTF-8 |
| Reescrever meta tags | Títulos e descrições únicos por página, sem keyword stuffing |
| Remover Google+ | Substituir por link do YouTube/TikTok se houver conteúdo |
| Depoimentos | Seção com avaliações reais de hóspedes |
| Mapa | Google Maps embed com as duas unidades |

### Baixa Prioridade (polimento)
| Item | Ação |
|---|---|
| Identidade visual | Atualizar logo, paleta de cores e tipografia |
| Fotos de capa | Hero section com fotos profissionais das praias de Bombinhas |
| Blog/conteúdo | Artigos sobre a região para atrair tráfego orgânico |
| Analytics | Instalar Google Analytics 4 e Google Search Console |

---

## Referências Visuais Sugeridas

Sites do mesmo segmento com boa UX para inspiração:
- **Airbnb** — modelo de card de imóvel com foto, preço e avaliação
- **Temporada Livre** — exemplo nacional de imobiliária de temporada moderna
- **OLX Imóveis** — busca filtrada funcional e responsiva

---

## Resumo Executivo

O site precisa de uma **reconstrução**, não de um ajuste cosmético. O problema não é apenas visual — a base tecnológica impede melhorias pontuais efetivas. A prioridade absoluta é **responsividade mobile + cards de imóveis com fotos**, pois são os fatores que mais impactam diretamente a conversão de visitantes em clientes.
