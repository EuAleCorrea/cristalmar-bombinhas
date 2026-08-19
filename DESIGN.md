# Sistema de Design & Identidade Visual — Cristalmar Imóveis · Bombinhas SC

Documento de especificação técnica e diretrizes de design para o portal de aluguel de temporada e venda de imóveis da Cristalmar Imóveis. Baseado na referência visual *Contemporary Architectural Luxury* adaptada para o contexto litorâneo de Bombinhas.

> **Como usar este documento:** cada seção é autossuficiente. Desenvolvedores começam pela §4 (tokens) e §5 (componentes). Designers começam pela §1 e §2. A §7 define o mapa de páginas e fluxos de decisão.

---

## 1. 🌌 Atmosfera Visual & Filosofia de Design

- **Conceito Estético:** *Coastal Architectural Luxury* — luxo litorâneo com leveza editorial.
- **Mood / Sensação:** Sofisticado, arejado e confiável. A referência é a elegância de revistas de arquitetura (*Architectural Digest*, *Casa Vogue*) fundida com a clareza funcional de interfaces modernas de booking (Airbnb, Plum Guide).
- **Diferencial local:** As cores e texturas remetem a Bombinhas — água cristalina, areia branca, pedras graníticas e vegetação atlântica. Não é um portal de luxo urbano: é um portal de *luxo à beira-mar*.

### Camadas Visuais

| Camada | Descrição |
|---|---|
| **Canvas / Fundo** | Transição suave: azul-céu translúcido na Hero → base neutra *Icy Porcelain* nas seções de conteúdo |
| **Superfícies Claras** | Cards brancos puros com sombra difusa — leveza e respiro |
| **Superfícies Escuras** | Caixas *Velvet Slate* para destaques, newsletter e filtros ativos |
| **Elementos Flutuantes** | Glassmorphism (vidro fosco) em widgets, badges e navbar |

---

## 2. 🎨 Paleta de Cores & Funções Semânticas

### 2.1 Cores Principais

| Nome | HEX | Função |
|---|---|---|
| **Ocean Sky Blue** | `#3B82F6` / `#4B89DC` | Céu da Hero, gradientes, botões interativos, reflexos de vidro |
| **Crystal Water Teal** *(novo)* | `#0EA5E9` / `#38BDF8` | Accent secundário evocando o mar de Bombinhas; badges de "Pé na Areia", ícone de distância do mar |
| **Deep Velvet Slate** | `#5C667E` / `#4A546D` | Cards de destaque, newsletter, filtros ativos |
| **Midnight Navy** | `#1E2638` / `#111827` | Navbar, títulos de máxima hierarquia, botões escuros |
| **Prestige Amber Gold** | `#F59E0B` / `#FBBF24` | Estrelas de avaliação, selos de exclusividade, badges de destaque |

### 2.2 Cores de Superfície & Neutros

| Nome | HEX | Função |
|---|---|---|
| **Porcelain Canvas** | `#F4F7FC` / `#EEF3FA` | Background geral do body |
| **Pure Surface White** | `#FFFFFF` | Cards de listagem, popovers, botões contrastantes |
| **Muted Slate Body** | `#64748B` / `#7E8B9F` | Textos secundários, specs técnicas, endereços |
| **Subtle Border Stroke** | `#E2E8F0` / `rgba(255,255,255,0.2)` | Bordas de cards, inputs, divisores |
| **Error / Alert Red** *(novo)* | `#EF4444` | Mensagens de erro em formulários, campos obrigatórios vazios |
| **Success Green** *(novo)* | `#22C55E` | Confirmação de envio de formulário, disponibilidade de imóvel |

### 2.3 Efeitos de Vidro (Glassmorphism)

```css
/* Vidro Claro — Badges de avaliação, widgets flutuantes na Hero */
.glass-light {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #FFFFFF;
}

/* Vidro Escuro — Navbar, cards sobre a Hero */
.glass-dark {
  background: rgba(30, 38, 56, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* Vidro Azul — Exclusivo para badge "Pé na Areia" e dist. do mar */
.glass-ocean {
  background: rgba(14, 165, 233, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.35);
  color: #0EA5E9;
}
```

---

## 3. ✍️ Sistema Tipográfico & Hierarquia

Assinatura híbrida: **Sans-Serif geométrica moderna** para estrutura + **Serif editorial** para personalidade e luxo.

### 3.1 Famílias Tipográficas

| Papel | Família (em ordem de preferência) | Uso |
|---|---|---|
| **Primary Sans (Principal)** | **Garet** · Plus Jakarta Sans · Inter | Toda a interface, Logo, H1 (Sans), H2, H3, menus, botões, cards, corpo de texto |
| **Display Serif (Secundária)** | **The Seasons** · Instrument Serif · Playfair Display | Palavras-chave editoriais, termos de luxo nos títulos da Hero, nomes de imóveis premium, citações de depoimentos |
| **Mono / Data** | JetBrains Mono · IBM Plex Mono | Código de imóvel (`#024`, `#164`), dados tabulados, CRECI |

> **Diretriz Mandatória:** Sempre usar **Garet** como a fonte principal do projeto e **The Seasons** como a fonte secundária de luxo.

### 3.2 Escala Tipográfica

| Nível | Família | Desktop | Mobile | Peso | Letter-Spacing | Line-Height |
|---|---|---|---|---|---|---|
| **Hero Sans** | Modern Sans | 56–72px | 36–44px | 800 | `-0.03em` | `1.05` |
| **Hero Serif** | Editorial Serif | 64–80px | 40–52px | 400 italic | `-0.02em` | `1.0` |
| **H2 Seção** | Modern Sans | 32–40px | 24–28px | 700 | `-0.02em` | `1.15` |
| **H3 Card** | Modern Sans | 18–20px | 16–18px | 700 | `-0.01em` | `1.25` |
| **Preço** | Modern Sans / Mono | 18–20px | 16px | 800 | `0` | `1.0` |
| **Corpo** | Modern Sans | 14–16px | 14px | 400–500 | `0` | `1.6` |
| **Label / Badge** | Modern Sans | 11–13px | 11px | 600–700 | `+0.02em` | `1.0` |
| **Código Imóvel** | Mono | 12px | 12px | 500 | `+0.05em` | `1.0` |

---

## 4. 📐 Tokens de Geometria, Espaçamento & Elevação

### 4.1 Border Radius

| Elemento | Valor | Tailwind |
|---|---|---|
| Cards principais & blocos de seção | `2rem` (32px) | `rounded-[2rem]` |
| Fotos / thumbnails de imóveis | `1.25rem` (20px) | `rounded-2xl` |
| Navbar cápsula, botões pill | `9999px` | `rounded-full` |
| Campos de formulário & dropdowns | `0.75rem–1rem` | `rounded-xl` |
| Badge de filial / tag de praia | `9999px` | `rounded-full` |

### 4.2 Espaçamento (Spacing Scale)

```
4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px · 128px
```

- **Gap entre cards no grid:** `24px` (desktop) / `16px` (mobile)
- **Padding interno de card:** `24px` (desktop) / `16px` (mobile)
- **Padding de seção (vertical):** `96px` (desktop) / `48px` (mobile)
- **Max-width do container:** `1280px` com `padding-x: 24px`

### 4.3 Sombras & Elevação

```css
/* Nível 1 — Cards de listagem no grid */
.shadow-card { box-shadow: 0 10px 30px -10px rgba(30, 41, 59, 0.06); }

/* Nível 2 — Hover em cards */
.shadow-card-hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px -10px rgba(30, 41, 59, 0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

/* Nível 3 — Widgets flutuantes na Hero */
.shadow-float { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }

/* Nível 4 — Navbar flutuante */
.shadow-navbar { box-shadow: 0 8px 32px -4px rgba(30, 38, 56, 0.18); }
```

---

## 5. 🧩 Componentes de Interface

### 5.1 Navbar Flutuante em Cápsula

- **Estrutura:** Cápsula `bg-[#1E2638]/90` + `backdrop-blur-md`, `position: fixed`, centralizada, `z-index: 50`.
- **Esquerda:** Logo Cristalmar (versão branca).
- **Centro:** Links de menu — Home · Locação · Venda · Sobre · Contato.
- **Direita:** Seletor de filial (pill toggle) + botão CTA WhatsApp.

**Seletor de Filial (Pill Toggle):**
```
[ Bombas  |  Canto Grande ]
```
- Toggle em pill com `bg-slate-700` na filial ativa.
- Ao trocar, filtra os imóveis exibidos na home por unidade.
- Em mobile: substitui os links de menu por hamburguer; seletor de filial fica no topo do drawer.

**Item de menu ativo:**
```css
.nav-item-active {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  padding: 6px 16px;
}
```

---

### 5.2 Hero Section Assimétrica

**Layout desktop (2 colunas):**

```
┌─────────────────────────────┬──────────────────┐
│  [tag: Bombinhas · SC]      │                  │
│                             │   [foto imóvel   │
│  Aluguel de                 │    em perspectiva│
│  Temporada                  │    vertical]     │
│  Bombinhas                  │                  │
│                             │  ┌─────────────┐ │
│  [parágrafo curto]          │  │Connect via  │ │
│                             │  │  WhatsApp ↗ │ │
│  Ver imóveis ──────────→    │  └─────────────┘ │
│                             │                  │
│  ┌──────────┐  ┌────────┐   │                  │
│  │ 🌊 4.9★  │  │[foto]  │   │                  │
│  │ Reviews  │  │imóvel  │   │                  │
│  └──────────┘  └────────┘   │                  │
└─────────────────────────────┴──────────────────┘
```

**Layout mobile:** coluna única; foto em aspect-ratio `16/9`; widgets flutuantes desaparecem ou ficam abaixo do título.

**Widgets obrigatórios:**
- **Avatar Stack + Rating:** fotos empilhadas de 3–4 hóspedes + `4.9/5 ★` em dourado.
- **Miniatura de imóvel:** card pequeno com foto de detalhe arquitetônico (ex: varanda com vista para o mar).
- **CTA WhatsApp:** botão flutuante com link pré-formatado.

---

### 5.3 Barra de Busca Segmentada

Barra horizontal modular, fundo branco, `rounded-full`, sombra nível 1.

| Célula | Label | Opções |
|---|---|---|
| 1 | **Tipo** | Apartamento · Casa · Sobrado · Cobertura |
| 2 | **Negócio** | Temporada · Venda |
| 3 | **Localização** | Bombas · Centro · Zimbros · Mariscal · Morrinhos · 4 Ilhas · Canto Grande |
| 4 | **Distância do Mar** | Beira-mar · até 200m · 201–500m · +500m |
| 5 | **Dormitórios** | 1 · 2 · 3 · 4 · 5+ |
| 6 | **Ação** | Botão `🔍 Buscar` em `#1E2638` |

Em mobile: barra colapsa em um botão `🔍 Filtrar` que abre um bottom-sheet com os mesmos filtros em formato vertical.

---

### 5.4 Cards de Imóveis

```
┌──────────────────────────────┐
│  [foto 4:3 · rounded-2xl]   │
│  [badge: Pé na Areia 🌊]    │ ← sobreposto, canto sup. esq.
│  [badge: #179]              │ ← canto sup. dir., estilo mono
├──────────────────────────────┤
│  Apto 3 dorms · Bombas    R$ 1.200/noite │
│  Av. Leopoldo Zarling, 1340              │
│  📍 Bombas · 🌊 80m do mar              │
├──────────────────────────────┤
│  🛏 3  🚿 2  📐 90m²  🚗 2  │
│  [Solicitar via WhatsApp ↗]  │
└──────────────────────────────┘
```

**Especificações do footer de ícones:**

| Ícone | Dado | Fonte |
|---|---|---|
| 🛏 | Dormitórios | Campo do cadastro |
| 🚿 | Banheiros | Campo do cadastro |
| 📐 | Área (m²) | Campo do cadastro |
| 🚗 | Vagas de garagem | Campo do cadastro |
| 🌊 | Distância do mar | Campo do cadastro — **obrigatório** para Bombinhas |

**Badge "Pé na Areia":** aparece quando distância ≤ 50m. Usa estilo `.glass-ocean`.

**Botão WhatsApp pré-formatado:**
```
https://wa.me/5547999382548?text=Olá! Tenho interesse no imóvel *#179* (3 dorms · Bombas). Poderia me informar a disponibilidade?
```

---

### 5.5 Bloco Dual Feature (Destaque + Detalhes)

```
┌──────────────────┬──────────────────────────────┐
│  [foto imóvel]   │  Detalhes do Imóvel          │
│  [Velvet Slate]  │  ─────────────────────────   │
│                  │  Localização   Bombas · 80m  │
│  Nome do imóvel  │               do mar         │
│  Descrição curta │  Design int.  Climatizado,   │
│                  │               mobiliado       │
│  1 / 6  ←  →    │  Área ext.    Piscina, churr.│
│  [Ver imóvel ↗] │  Segurança    Portaria 24h   │
└──────────────────┴──────────────────────────────┘
```

- Paginação `1 / N` navega entre imóveis em destaque.
- Botão `"Ver imóvel ↗"` abre a página de detalhe **ou** dispara o WhatsApp.
- Em mobile: coluna única, foto topo, detalhes abaixo.

---

### 5.6 Depoimentos (Immersive Testimonial)

- Foto lateral: praia de Bombinhas ao pôr do sol ou imóvel com iluminação noturna.
- Badge sobreposto: `★ 4.9 · +120 avaliações`.
- Citação em Serif Italic, assinada com nome + cidade de origem do hóspede.
- Navegação por setas para rodar entre depoimentos.

---

### 5.7 CTA de Newsletter / Contato

- `rounded-[2.5rem]`, fundo `#5C667E`, padding generoso.
- Título em Sans Bold + palavra-chave em Serif Italic.
- Campo de e-mail em pill + botão `Quero receber ofertas →`.
- Microcopy abaixo: *"Sem spam. Apenas imóveis disponíveis na temporada."*

---

### 5.8 Botão WhatsApp Flutuante Global *(novo)*

- `position: fixed`, `bottom: 24px`, `right: 24px`, `z-index: 100`.
- Ícone WhatsApp branco em fundo `#25D366`, `border-radius: 50%`, `60px × 60px`.
- Pulse animation sutil (`box-shadow` pulsante em verde) para chamar atenção sem agredir.
- Em desktop: expande ao hover para mostrar `"Fale com a Cristalmar"`.

```css
.whatsapp-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  animation: pulse-green 2.5s infinite;
  z-index: 100;
}

@keyframes pulse-green {
  0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
  50%       { box-shadow: 0 4px 32px rgba(37, 211, 102, 0.7); }
}
```

---

## 6. 📱 Responsividade & Breakpoints

### Breakpoints

| Nome | Largura | Tailwind |
|---|---|---|
| Mobile S | `< 375px` | — |
| Mobile | `375px – 767px` | `sm:` |
| Tablet | `768px – 1023px` | `md:` |
| Desktop | `1024px – 1279px` | `lg:` |
| Wide | `≥ 1280px` | `xl:` |

### Comportamento por Breakpoint

| Elemento | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navbar | Hamburguer + drawer | Hamburguer + drawer | Pill flutuante completa |
| Seletor de filial | No topo do drawer | No topo do drawer | Inline na navbar |
| Hero | Coluna única, foto `16/9` | 2 cols simplificado | 2 cols assimétrico completo |
| Widgets Hero | Ocultos | Avatar stack apenas | Todos visíveis |
| Busca | Bottom-sheet | Inline 2 linhas | Pill horizontal completo |
| Grid de cards | 1 coluna | 2 colunas | 3 colunas |
| Dual Feature | Coluna única | 2 cols | 2 cols com proporção `40/60` |
| FAB WhatsApp | `48×48px`, `bottom: 16px` | `56×56px` | `60×60px` + label no hover |

### Regras Gerais

- **Touch targets mínimos:** `44×44px` (Apple HIG / WCAG 2.5.5).
- **Fontes:** nunca abaixo de `14px` em mobile.
- **Imagens:** usar `srcset` com versões `400w`, `800w`, `1200w`.
- **`prefers-reduced-motion`:** todas as animações devem respeitar esta media query.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. 🗺️ Mapa de Páginas & Fluxos

### 7.1 Estrutura de Páginas

```
/                        → Home
/locacao                 → Listagem de Aluguel de Temporada
/locacao/[id]            → Detalhe do Imóvel (Temporada)
/venda                   → Redirect → cristalmarimoveis.com.br
/sobre                   → Institucional
/contato                 → Formulário + Mapa das 2 filiais
/cadastre                → Formulário de cadastro de imóvel
```

### 7.2 Fluxo Principal do Usuário

```
Home
 └→ Busca / Filtro
     └→ Listagem de resultados
         └→ Card de imóvel
             ├→ Detalhe do imóvel
             │   └→ WhatsApp pré-formatado ✅
             └→ WhatsApp direto do card ✅
```

### 7.3 Fluxo de Seleção de Filial

```
Usuário chega na Home
 └→ Navbar mostra filial padrão: "Bombas"
     └→ Usuário pode trocar para "Canto Grande"
         └→ Grid de imóveis filtra por filial
         └→ Número de telefone na navbar atualiza
         └→ CTA WhatsApp aponta para o número correto
```

---

## 8. 🔲 Estados de Interface *(novo)*

### 8.1 Estado Vazio (Empty State)

Quando a busca não retorna resultados:

```
[ícone de ondas do mar]
Nenhum imóvel encontrado para esses filtros.
Tente ampliar a busca ou fale diretamente com a Cristalmar.
[Falar no WhatsApp ↗]  [Limpar filtros]
```

- Tom: direto e orientado à ação, nunca um "Ops!" genérico.
- Botão WhatsApp como fallback primário — é o canal de conversão real.

### 8.2 Estado de Carregamento (Loading)

- Cards em skeleton loader: retângulo cinza animado (`animate-pulse`) no lugar da foto e das linhas de texto.
- Nunca mostrar spinner global — skeleton mantém o layout estável.

### 8.3 Estados de Formulário

| Estado | Comportamento |
|---|---|
| **Idle** | Borda `#E2E8F0`, label acima |
| **Focus** | Borda `#3B82F6`, `box-shadow: 0 0 0 3px rgba(59,130,246,0.15)` |
| **Erro** | Borda `#EF4444`, mensagem abaixo em vermelho, ícone `⚠` |
| **Sucesso** | Borda `#22C55E`, mensagem "Mensagem enviada!" em verde |

### 8.4 Estados de Card

| Estado | Comportamento |
|---|---|
| **Default** | Sombra nível 1 |
| **Hover** | `translateY(-6px)` + sombra nível 2 + cursor pointer |
| **Indisponível** | Overlay semitransparente `rgba(0,0,0,0.4)` + badge `"Ocupado"` em `#EF4444` |

---

## 9. ♿ Acessibilidade (WCAG 2.1 AA)

- **Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande e ícones.
- **Foco visível:** `outline: 2px solid #3B82F6; outline-offset: 3px` em todos os elementos interativos.
- **Alt text:** todas as fotos de imóveis devem ter alt descritivo (`"Apartamento 3 dormitórios com vista para o mar em Bombas, Bombinhas SC"`).
- **Links de WhatsApp:** incluir `aria-label` com o contexto (`aria-label="Solicitar informações sobre o imóvel 179 via WhatsApp"`).
- **Skip link:** `"Ir para o conteúdo principal"` como primeiro elemento focável.

---

## 10. 🚀 Diretrizes de Aplicação — Cristalmar Bombinhas

| # | Diretriz | Detalhe |
|---|---|---|
| 1 | **Tipografia** | Usar **Instrument Serif** nos nomes de imóveis premium e na Hero. Plus Jakarta Sans para todo o resto. |
| 2 | **Paleta oceânica** | Adicionar **Crystal Water Teal** (`#0EA5E9`) como accent do mar, complementando o *Velvet Slate* e *Midnight Navy*. |
| 3 | **Seletor de filial** | Pill toggle na navbar com atualização de conteúdo e número de WhatsApp sem reload de página. |
| 4 | **Distância do mar** | Campo obrigatório no cadastro. Exibir em todos os cards. Badge "Pé na Areia" para ≤ 50m. |
| 5 | **WhatsApp como CTA primário** | Todo botão de conversão dispara WhatsApp com código do imóvel pré-preenchido. Não usar formulário como primeira opção. |
| 6 | **Domínio único** | `bombasbombinhas.com.br` para temporada. `cristalmarimoveis.com.br` para venda. Redirect 301 cruzado com banner de contexto. |
| 7 | **Mobile-first** | Desenvolver e validar em mobile antes de escalar para desktop. |
| 8 | **Performance** | Fotos em WebP, lazy loading nativo, skeleton loader, Google Fonts com `display=swap`. |
