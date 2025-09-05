# 🎨 Design System - Modern X Spark

## 📘 Versão do Documento

- **Versão:** 1.0
- **Última atualização:** Janeiro 2025
- **Responsável técnico:** Ivan Martins
- **Projeto:** Modern X Spark

---

## 🎯 Visão Geral

O Modern X Spark utiliza um design system moderno e futurista, focado em criar uma experiência visual impactante e profissional. Este documento define todos os elementos visuais fundamentais do projeto.

---

## 🌈 Paleta de Cores

### Cores Principais

| Nome             | Hex       | HSL                 | Uso Principal                                        |
| ---------------- | --------- | ------------------- | ---------------------------------------------------- |
| **Ash**          | `#131313` | `hsl(0, 0%, 7.5%)`  | Cor primária, textos principais, backgrounds escuros |
| **Ghost Pepper** | `#D3FE89` | `hsl(80, 94%, 76%)` | Cor de destaque, CTAs, elementos interativos         |
| **Rebel**        | `#504718` | `hsl(50, 35%, 20%)` | Cor secundária, textos auxiliares                    |
| **Chili**        | `#EB450E` | `hsl(20, 90%, 48%)` | Cor de alerta, elementos de atenção                  |

### Aplicação das Cores

#### 🖤 Ash (#131313)

- **Uso:** Cor principal do projeto
- **Aplicações:**
  - Textos principais
  - Backgrounds escuros
  - Elementos de navegação
  - Logo (parte principal)

#### 🟢 Ghost Pepper (#D3FE89)

- **Uso:** Cor de destaque e energia
- **Aplicações:**
  - Botões de ação (CTAs)
  - Links e elementos interativos
  - Hover states
  - Logo (destaque "X")
  - Elementos de navegação ativos

#### 🟤 Rebel (#504718)

- **Uso:** Cor de apoio e elegância
- **Aplicações:**
  - Textos secundários
  - Elementos de apoio
  - Backgrounds alternativos

#### 🔴 Chili (#EB450E)

- **Uso:** Cor de alerta e urgência
- **Aplicações:**
  - Estados de erro
  - Alertas importantes
  - Elementos de atenção

### Gradientes

```css
/* Gradiente Principal (Hero) */
--gradient-hero: linear-gradient(135deg, hsl(var(--ash)), hsl(var(--rebel)));

/* Gradiente de Destaque */
--gradient-accent: linear-gradient(90deg, hsl(var(--ghost-pepper)), hsl(80 80% 70%));

/* Gradiente de Overlay */
--gradient-overlay: linear-gradient(180deg, transparent, hsl(var(--ash) / 0.8));
```

---

## 📝 Tipografia

### Hierarquia de Fontes

#### 🏆 Títulos (Headers)

- **Família:** Sans-serif futurista
- **Opções recomendadas:**
  - **Primary:** Space Grotesk
  - **Fallbacks:** Orbitron, Eurostile, sans-serif
- **Características:**
  - Moderna e futurista
  - Boa legibilidade
  - Impacto visual

#### 📖 Texto Corrido (Body)

- **Família:** Fonte geométrica limpa
- **Opções recomendadas:**
  - **Primary:** Inter
  - **Fallbacks:** Poppins, Neue Haas, sans-serif
- **Características:**
  - Excelente legibilidade
  - Limpa e moderna
  - Versatilidade em diferentes tamanhos

### Implementação no CSS

```css
/* Configuração atual no projeto */
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Para títulos (a ser implementado) */
.heading-font {
  font-family: "Space Grotesk", "Orbitron", "Eurostile", sans-serif;
}

/* Para textos */
.body-font {
  font-family: "Inter", "Poppins", "Neue Haas", sans-serif;
}
```

### Escala Tipográfica

| Elemento       | Tamanho         | Peso | Uso                |
| -------------- | --------------- | ---- | ------------------ |
| **H1**         | 3.5rem (56px)   | 700  | Títulos principais |
| **H2**         | 2.5rem (40px)   | 600  | Títulos de seção   |
| **H3**         | 2rem (32px)     | 600  | Subtítulos         |
| **H4**         | 1.5rem (24px)   | 500  | Títulos menores    |
| **Body Large** | 1.125rem (18px) | 400  | Texto destacado    |
| **Body**       | 1rem (16px)     | 400  | Texto padrão       |
| **Body Small** | 0.875rem (14px) | 400  | Texto auxiliar     |
| **Caption**    | 0.75rem (12px)  | 400  | Legendas           |

---

## 🎭 Componentes Visuais

### Efeitos e Sombras

```css
/* Brilho (Glow Effect) */
--shadow-glow: 0 0 20px hsl(var(--ghost-pepper) / 0.3);

/* Sombra Elegante */
--shadow-elegant: 0 10px 30px -10px hsl(var(--ash) / 0.2);

/* Glass Effect */
.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
}
```

### Animações

```css
/* Transições Suaves */
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Transições com Bounce */
--transition-bounce: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Animações Personalizadas */
- float: Movimento flutuante (6s)
- fade-in: Aparição suave (0.6s)
- slide-up: Deslizamento para cima (0.6s)
- glow: Efeito de brilho pulsante (2s)
- shine: Efeito de brilho deslizante (3s)
```

---

## 🧩 Componentes do Sistema

### AnimeNavBar

- **Background:** `bg-black/50` com `backdrop-blur-lg`
- **Borda:** `border-white/10`
- **Texto ativo:** `text-white`
- **Texto inativo:** `text-white/70`
- **Mascote:** Personagem kawaii animado com efeitos de partículas

### Botões (CTAs)

- **Primary:** Background `ghost-pepper`, texto `ash`
- **Hover:** `ghost-pepper/90` com `glow-effect`
- **Padding:** `px-6 py-3`
- **Border radius:** `rounded-full`

### Logo

- **Estrutura:** "Modern" + "X" + "Lab"
- **Cor principal:** `ash`
- **Destaque "X":** `ghost-pepper`
- **Fonte:** Bold, 2xl (2rem/32px)

### Hero Section

- **Título principal:** Space Grotesk, cor `ghost-pepper` (#D3FE89)
- **Destaque "X":** Cor `ash` (#131313) com sombra
- **Textos laterais:** Inter, cor `ghost-pepper`, uppercase
- **Background:** Gradiente usando toda a paleta
- **Efeitos visuais:** Orb animado com cores da marca
- **ASCII Art:** Inter, cor `ghost-pepper` com transparência

### Header

- **Logo:** Space Grotesk, "ModernXSpark" com X em `ash`
- **Posição:** Fixo superior esquerdo
- **CTA Button:** Background `ghost-pepper`, texto `ash`
- **AnimeNavBar:** Background `ash/80`, texto `ghost-pepper`
- **Mobile Menu:** Background `ash/90`, borda `ghost-pepper/20`
- **Hover States:** Transições suaves com `ghost-pepper`

---

## 📱 Responsividade

### Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1400px

### Adaptações Mobile

- AnimeNavBar mostra apenas ícones
- Logo e CTA mantêm posição fixa
- Menu fallback para telas muito pequenas (< 640px)

---

## 🔧 Implementação Técnica

### Variáveis CSS (Custom Properties)

```css
:root {
  /* Cores da Marca */
  --ash: 0 0% 7.5%;
  --ghost-pepper: 80 94% 76%;
  --rebel: 50 35% 20%;
  --chili: 20 90% 48%;

  /* Design System */
  --primary: var(--ash);
  --secondary: var(--ghost-pepper);
  --accent: var(--ghost-pepper);
  --destructive: var(--chili);

  /* Efeitos */
  --shadow-glow: 0 0 20px hsl(var(--ghost-pepper) / 0.3);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Configuração Tailwind

```javascript
// tailwind.config.ts
colors: {
  'ash': 'hsl(var(--ash))',
  'ghost-pepper': 'hsl(var(--ghost-pepper))',
  'rebel': 'hsl(var(--rebel))',
  'chili': 'hsl(var(--chili))',
}
```

---

## ✅ Checklist de Consistência

### Para Novos Componentes

- [ ] Usar apenas cores da paleta definida
- [ ] Aplicar tipografia correta (títulos vs texto)
- [ ] Implementar estados hover/active consistentes
- [ ] Seguir padrões de espaçamento
- [ ] Garantir responsividade
- [ ] Aplicar efeitos visuais apropriados

### Para Reviews

- [ ] Cores seguem a paleta estabelecida
- [ ] Fontes estão corretas para cada contexto
- [ ] Animações são suaves e consistentes
- [ ] Componente funciona em todos os breakpoints
- [ ] Acessibilidade foi considerada

---

## 🎯 Status de Implementação

### ✅ Implementado

1. **✅ Space Grotesk implementada** para títulos (font-heading)
2. **✅ Inter implementada** para texto corrido (font-body)
3. **✅ Paleta de cores** definida e aplicada
4. **✅ AnimeNavBar** com design system integrado
5. **✅ Componente de demonstração** (ColorPaletteDemo)
6. **✅ Hero Section** atualizada com paleta de cores e fontes
7. **✅ Header** redesenhado com logo e CTA integrados

### 📋 Como Usar o Design System

#### Aplicando Fontes

```tsx
// Para títulos
<h1 className="font-heading text-4xl font-bold">Título Principal</h1>

// Para texto corrido
<p className="font-body text-base">Texto do parágrafo</p>
```

#### Usando as Cores

```tsx
// Cores de fundo
<div className="bg-ash">Fundo escuro</div>
<div className="bg-ghost-pepper">Fundo de destaque</div>

// Cores de texto
<p className="text-ash">Texto principal</p>
<p className="text-rebel">Texto secundário</p>
```

#### Componente de Demonstração

Para visualizar todo o design system:

```tsx
import {ColorPaletteDemo} from "@/components/ui/color-palette-demo";

// Use em uma página de desenvolvimento ou documentação
<ColorPaletteDemo />;
```

### 🔄 Próximos Passos

1. **Criar componente de Cards** seguindo o design system
2. **Expandir paleta** com variações para estados (disabled, loading)
3. **Documentar padrões de microinterações**
4. **Criar biblioteca de ícones** personalizada
5. **Implementar tema escuro** alternativo

### Testes Necessários

- [ ] Teste de contraste de cores (WCAG)
- [ ] Teste de legibilidade em diferentes dispositivos
- [ ] Validação da hierarquia visual
- [ ] Performance das animações

---

_Este documento é vivo e deve ser atualizado conforme o projeto evolui. Sempre consulte a versão mais recente antes de implementar novos componentes._
