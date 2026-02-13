# Estrutura da Landing Page - Dot Com Secrets

## Visão Geral

A landing page segue o formato **Dot Com Secrets** do Russell Brunson, adaptado para vender a solução JAMStack como alternativa superior ao WordPress. A estrutura é composta por **11 seções principais** que guiam o visitante através de uma jornada de vendas completa.

## Formato Dot Com Secrets

O formato Dot Com Secrets é uma estrutura de copywriting comprovada que inclui:
1. Hero Section (Gancho)
2. O Velho Caminho vs O Novo Caminho (Contraste)
3. A Ponte da Epifania (História)
4. Mecanismo Único (Solução)
5. Demonstração Técnica (Prova)
6. O Caminho Completo (Processo)
7. Depoimentos/Prova Social (Credibilidade)
8. A Oferta (Valor)
9. Garantia (Redução de Risco)
10. FAQ (Objeções)
11. A Escolha é Sua (Call to Action Final)

## Arquivos Envolvidos

### 1. Página Principal
**Arquivo:** `src/pages/lp1.astro`
- Rota: `/lp1`
- Função: Busca dados do singleton e renderiza template do tema

### 2. Template do Tema
**Arquivo:** `src/themes/classic/lp1.astro`
- Função: Template visual completo da landing page
- Responsável por toda a renderização HTML/CSS

### 3. Dados (Singleton)
**Arquivo:** `src/content/singletons/lp1.yaml`
- Função: Armazena todo o conteúdo editável
- Formato: YAML com todas as seções

### 4. Editor Admin
**Arquivo:** `src/components/admin/LP1Editor.tsx`
- Função: Interface React para editar conteúdo
- Acessível via: `/admin/pages/lp1`

### 5. Configuração Keystatic
**Arquivo:** `keystatic.config.tsx`
- Função: Define schema do singleton LP1
- Permite edição via `/keystatic`

## Estrutura de Dados (YAML)

### Formato Completo

```yaml
# 1. HERO SECTION
heroBadge: "🚀 A NOVA ERA DO DESENVOLVIMENTO WEB"
heroTitleLine1: "SEU SITE NÃO RANQUEIA NO GOOGLE?"
heroTitleHighlight: "WORDPRESS É O PROBLEMA."
heroTitleLine2: "A Solução JAMstack que o Google AMPLIFICA"
heroSubtitle: "Enquanto sites WordPress travam na página 2 do Google..."
heroCtaText: "QUERO RANQUEAR NO GOOGLE AGORA"
heroCtaUrl: "#oferta"
heroFeatures: "✅ Performance 10x superior | ✅ SEO otimizado | ✅ Custo zero"
heroImage: null

# 2. O VELHO CAMINHO VS O NOVO CAMINHO
oldVsNewTitle: "O Velho Caminho vs. O Novo Caminho"
oldVsNewSubtitle: "Descubra por que 90% dos sites WordPress..."
oldPathTitle: "O Velho Caminho (WordPress)"
oldPathItems:
  - "Sites lentos que o Google penaliza"
  - "Hospedagem cara que come seu lucro"
newPathTitle: "O Novo Caminho JAMstack"
newPathItems:
  - "Sites 10x mais rápidos que o Google premia"
  - "Hospedagem gratuita na Edge (Cloudflare)"

# 3. A PONTE DA EPIFANIA
epiphanyTitle: "O Erro de Anos que me levou ao segredo..."
epiphanyContent: "Eu trabalhei com WordPress por anos..."
epiphanyQuote: "Foi quando descobri o JAMstack..."
epiphanyStats:
  - number: "5+"
    label: "Anos de Experiência"
    icon: "⏱️"
epiphanyImage: null

# 4. MECANISMO ÚNICO
mechanismTitle: "Conheça o Sistema JAMstack"
mechanismItems:
  - number: "01"
    icon: "⚡"
    title: "Astro Framework"
    description: "Framework zero-JS por padrão..."
mechanismFooter: "A tecnologia faz o trabalho duro..."

# 5. DEMONSTRAÇÃO TÉCNICA
demoTitle: "O Trabalho de Dias, Feito em Segundos"
demoDescription: "Veja como nossa stack transforma..."
demoVideoUrl: ""
demoImage: null
demoFeatures:
  - icon: "⚡"
    title: "Velocidade Absurda"
    description: "Sites que levariam dias..."

# 6. O CAMINHO COMPLETO
pathTitle: "Sua Jornada para o Topo do Google"
pathSubtitle: "Vamos construir juntos um site do zero..."
pathSteps:
  - number: "01"
    icon: "⚡"
    title: "Setup Inicial"
    description: "Configure Astro, Cloudflare e Keystatic..."

# 7. DEPOIMENTOS/PROVA SOCIAL
testimonialsTitle: "O Que Nossos Clientes Estão Dizendo"
testimonialsSubtitle: "Resultados reais de quem migrou..."
testimonials:
  - name: "Cliente Satisfeito"
    role: ""
    rating: "★★★★★"
    text: "Meu site WordPress estava na página 3..."

# 8. A OFERTA
offerTitle: "O Que Você Recebe ao Escolher JAMstack"
offerItems:
  - title: "Site JAMstack Completo"
    description: "Astro + Cloudflare + Keystatic configurados..."
offerBadge: "⚡ PERFORMANCE 10X SUPERIOR"
offerPriceTitle: "Comece Agora"
offerPriceSubtitle: "Migre do WordPress para JAMstack"
offerCtaText: "QUERO RANQUEAR NO GOOGLE"
offerCtaUrl: "/contato"

# 9. GARANTIA
guaranteeTitle: "O Risco está 100% nas minhas costas."
guaranteeText: "Teste nossa stack JAMstack..."
guaranteeBadge: "Garantia de Performance"

# 10. FAQ
faqTitle: "Suas dúvidas respondidas"
faqItems:
  - question: "Por que JAMstack é melhor que WordPress para SEO?"
    answer: "JAMstack gera sites estáticos pré-renderizados..."

# 11. A ESCOLHA É SUA
choiceTitle: "A Escolha é Sua"
choiceOption1Title: "Opção 1"
choiceOption1Text: "Continuar com WordPress..."
choiceOption2Title: "Opção 2"
choiceOption2Text: "Migrar para JAMstack..."
choiceCtaText: "QUERO RANQUEAR NO GOOGLE AGORA"
choiceCtaUrl: "/contato"
choiceFooter: "Migração completa do WordPress para JAMstack"
```

## Estrutura Visual (Template Astro)

### 1. Hero Section

**Características:**
- Full-screen (min-h-screen)
- Background com gradiente escuro
- Grid pattern sutil
- Badge no topo
- Título grande com destaque em gradiente
- Subtítulo
- CTA button grande e destacado
- Features listadas

**Classes Tailwind principais:**
- `min-h-screen flex items-center justify-center`
- `bg-gradient-to-b from-black via-black to-[#0a0a0a]`
- `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- `bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent`

### 2. O Velho Caminho vs O Novo Caminho

**Características:**
- Grid de 2 colunas (mobile: 1 coluna)
- Card esquerdo: Velho Caminho (negativo, escuro)
- Card direito: Novo Caminho (positivo, destacado com gradiente)
- Lista de itens com ícones
- Contraste visual forte

**Classes Tailwind principais:**
- `grid md:grid-cols-2 gap-8`
- `bg-[#1a1a1a] border border-slate-800` (velho)
- `bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/50` (novo)

### 3. A Ponte da Epifania

**Características:**
- Grid de 2 colunas (texto + imagem/stats)
- Título grande
- Texto narrativo
- Quote destacado com borda
- Stats com ícones
- Imagem opcional

**Classes Tailwind principais:**
- `grid lg:grid-cols-2 gap-12`
- `border-l-2 border-primary/50` (quote)
- Cards de stats com ícones

### 4. Mecanismo Único

**Características:**
- Grid de 3 colunas (cards)
- Número grande no topo
- Ícone
- Título e descrição
- Hover effects
- Footer com mensagem

**Classes Tailwind principais:**
- `grid md:grid-cols-3 gap-6`
- `hover:-translate-y-2 hover:border-primary/50`
- Números grandes com gradiente

### 5. Demonstração Técnica

**Características:**
- Grid de 2 colunas
- Vídeo ou imagem à esquerda
- Descrição e features à direita
- Player de vídeo ou placeholder
- Cards de features

**Classes Tailwind principais:**
- `grid lg:grid-cols-2 gap-8`
- `aspect-video` (vídeo)
- Cards com ícones

### 6. O Caminho Completo

**Características:**
- Timeline vertical
- Alternância esquerda/direita (desktop)
- Linha vertical conectando
- Cards com número, ícone, título, descrição
- Responsivo (mobile: tudo à esquerda)

**Classes Tailwind principais:**
- `md:grid-cols-[1fr_auto_1fr]` (alternância)
- Linha vertical com gradiente
- Cards hover effects

### 7. Depoimentos

**Características:**
- Grid de 3 colunas (mobile: 1)
- Cards com rating (estrelas)
- Texto do depoimento
- Nome do autor
- Hover effects

**Classes Tailwind principais:**
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Cards com borda e hover

### 8. A Oferta

**Características:**
- Lista de itens da oferta
- Card destacado com badge
- Preço/título
- CTA grande
- Features adicionais
- Bônus (opcional)

**Classes Tailwind principais:**
- Card central com gradiente
- Badge no topo
- CTA com shadow e hover

### 9. Garantia

**Características:**
- Card centralizado
- Ícone de escudo grande
- Título e texto
- Badge de garantia
- Animação sutil

**Classes Tailwind principais:**
- Card central com borda
- Ícone grande com animação
- Texto destacado

### 10. FAQ

**Características:**
- Lista de accordion (details/summary)
- Pergunta clicável
- Resposta expandível
- Hover effects
- Ícone de seta

**Classes Tailwind principais:**
- `details` e `summary` nativos
- `data-[open]:border-primary/50`
- Transições suaves

### 11. A Escolha é Sua

**Características:**
- 2 cards lado a lado
- Opção 1: Negativa (opacidade reduzida)
- Opção 2: Positiva (destaque)
- CTA final grande
- Footer com texto

**Classes Tailwind principais:**
- `grid md:grid-cols-2 gap-6`
- Opção 1: `opacity-60`
- Opção 2: `border-2 border-primary/50`

## Como Replicar

### Passo 1: Criar Estrutura de Arquivos

```
src/
├── pages/
│   └── lp1.astro              # Página principal
├── themes/
│   └── classic/
│       └── lp1.astro          # Template visual
├── content/
│   └── singletons/
│       └── lp1.yaml           # Dados editáveis
└── components/
    └── admin/
        └── LP1Editor.tsx      # Editor React
```

### Passo 2: Criar Singleton no Keystatic

No `keystatic.config.tsx`, adicionar:

```typescript
lp1: singleton({
    label: 'Landing Page 1',
    path: 'src/content/singletons/lp1',
    format: { data: 'yaml' },
    schema: {
        // Hero
        heroBadge: fields.text({ label: 'Badge do Hero' }),
        heroTitleLine1: fields.text({ label: 'Título Hero - Linha 1' }),
        heroTitleHighlight: fields.text({ label: 'Título Hero - Destaque' }),
        // ... todos os campos
    }
})
```

### Passo 3: Criar Página Principal

`src/pages/lp1.astro`:

```astro
---
import { getEntry } from 'astro:content';
import { readSingleton } from '../utils/singleton-utils';

const settings = await getEntry('siteSettings', 'settings');
const activeThemeId = settings?.data.activeTheme || 'classic';
const lp1Data = await readSingleton('lp1', activeThemeId) || {};
const Lp1Template = (await import(`../themes/classic/lp1.astro`)).default;
---

<Lp1Template lp1Data={lp1Data} themeId={activeThemeId} />
```

### Passo 4: Criar Template Visual

`src/themes/classic/lp1.astro`:

```astro
---
import MainLayout from '../../layouts/MainLayout.astro';

interface Props {
    lp1Data: any;
    themeId: string;
}

const { lp1Data, themeId } = Astro.props;
---

<MainLayout title="Título da LP">
    <!-- 1. HERO SECTION -->
    <section class="min-h-screen flex items-center justify-center">
        <!-- Conteúdo hero -->
    </section>
    
    <!-- 2. O VELHO CAMINHO VS O NOVO CAMINHO -->
    <section class="py-20">
        <!-- Conteúdo -->
    </section>
    
    <!-- ... outras seções ... -->
</MainLayout>
```

### Passo 5: Criar Editor Admin (Opcional)

`src/components/admin/LP1Editor.tsx`:

```tsx
export default function LP1Editor({ initialData }: Props) {
    const [data, setData] = useState<LP1Data>(initialData || {});
    
    // Formulários para cada seção
    // Função de save
    // Upload de imagens
    
    return (
        <div>
            {/* Formulários organizados por seção */}
        </div>
    );
}
```

### Passo 6: Criar Arquivo YAML Inicial

`src/content/singletons/lp1.yaml`:

```yaml
# Copiar estrutura completa do exemplo acima
heroBadge: "..."
heroTitleLine1: "..."
# ... todos os campos
```

## Padrões de Design

### Cores
- **Primary**: `#a855f7` (roxo)
- **Secondary**: `#ec4899` (rosa)
- **Background**: `#000000` (preto)
- **Text**: `#ffffff` (branco) / `#a3a3a3` (cinza)

### Tipografia
- **Heading**: Font bold, tamanhos grandes (3xl a 7xl)
- **Body**: Font normal, tamanhos médios (base a xl)
- **Features**: Texto menor, destacado

### Espaçamento
- **Sections**: `py-20 md:py-32` (padding vertical)
- **Container**: `container mx-auto px-6`
- **Gaps**: `gap-4` a `gap-12` dependendo do contexto

### Efeitos
- **Hover**: `hover:scale-105`, `hover:border-primary/50`
- **Shadows**: `shadow-[0_0_40px_rgba(168,85,247,0.4)]`
- **Gradients**: `bg-gradient-to-r from-primary to-secondary`
- **Animations**: `animate-pulse`, `animate-gradient`

## Responsividade

### Breakpoints
- **Mobile**: < 640px (1 coluna, texto menor)
- **Tablet**: 640px - 1024px (2 colunas)
- **Desktop**: > 1024px (3+ colunas, layout completo)

### Classes Responsivas
- `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- `grid md:grid-cols-2 lg:grid-cols-3`
- `flex-col md:flex-row`

## Call to Actions (CTAs)

### Características
- Botões grandes e destacados
- Texto em uppercase
- Ícone de seta
- Hover effects (scale, shadow)
- Cores primárias

### Exemplo
```astro
<a href={lp1Data.heroCtaUrl} class="px-8 py-6 bg-primary text-white font-bold uppercase rounded-xl hover:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
    {lp1Data.heroCtaText}
</a>
```

## Estrutura de Dados TypeScript

### Interface Completa

```typescript
interface LP1Data {
    // Hero
    heroBadge?: string;
    heroTitleLine1?: string;
    heroTitleHighlight?: string;
    heroTitleLine2?: string;
    heroSubtitle?: string;
    heroCtaText?: string;
    heroCtaUrl?: string;
    heroFeatures?: string;
    heroImage?: string | null;
    
    // Velho vs Novo
    oldVsNewTitle?: string;
    oldVsNewSubtitle?: string;
    oldPathTitle?: string;
    oldPathItems?: string[];
    newPathTitle?: string;
    newPathItems?: string[];
    
    // Epifania
    epiphanyTitle?: string;
    epiphanyContent?: string;
    epiphanyQuote?: string;
    epiphanyStats?: Array<{
        number: string;
        label: string;
        icon?: string;
    }>;
    epiphanyImage?: string | null;
    
    // Mecanismo
    mechanismTitle?: string;
    mechanismItems?: Array<{
        number: string;
        icon: string;
        title: string;
        description: string;
    }>;
    mechanismFooter?: string;
    
    // Demo
    demoTitle?: string;
    demoDescription?: string;
    demoVideoUrl?: string;
    demoImage?: string | null;
    demoFeatures?: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    
    // Caminho
    pathTitle?: string;
    pathSubtitle?: string;
    pathSteps?: Array<{
        number: string;
        icon: string;
        title: string;
        description: string;
    }>;
    
    // Depoimentos
    testimonialsTitle?: string;
    testimonialsSubtitle?: string;
    testimonials?: Array<{
        name: string;
        role?: string;
        rating?: string;
        text: string;
        image?: string;
        videoUrl?: string;
    }>;
    
    // Oferta
    offerTitle?: string;
    offerItems?: Array<{
        title: string;
        description: string;
    }>;
    offerBadge?: string;
    offerPriceTitle?: string;
    offerPriceSubtitle?: string;
    offerCtaText?: string;
    offerCtaUrl?: string;
    offerStack?: Array<{
        title: string;
        description: string;
    }>;
    offerBonuses?: Array<{
        title: string;
        description: string;
        icon?: string;
    }>;
    
    // Garantia
    guaranteeTitle?: string;
    guaranteeText?: string;
    guaranteeBadge?: string;
    
    // FAQ
    faqTitle?: string;
    faqItems?: Array<{
        question: string;
        answer: string;
    }>;
    
    // Escolha
    choiceTitle?: string;
    choiceOption1Title?: string;
    choiceOption1Text?: string;
    choiceOption2Title?: string;
    choiceOption2Text?: string;
    choiceCtaText?: string;
    choiceCtaUrl?: string;
    choiceFooter?: string;
}
```

## Checklist de Replicação

- [ ] Criar estrutura de arquivos
- [ ] Configurar singleton no Keystatic
- [ ] Criar página principal (`lp1.astro`)
- [ ] Criar template visual (`themes/classic/lp1.astro`)
- [ ] Implementar todas as 11 seções
- [ ] Criar arquivo YAML com dados iniciais
- [ ] Testar responsividade
- [ ] Adicionar animações e efeitos
- [ ] Criar editor admin (opcional)
- [ ] Testar em diferentes navegadores
- [ ] Otimizar performance
- [ ] Adicionar SEO (meta tags)

## Resumo

A landing page segue uma estrutura comprovada de vendas (Dot Com Secrets) com:
- **11 seções** bem definidas
- **Conteúdo editável** via YAML
- **Template visual** em Astro
- **Design moderno** com Tailwind
- **Totalmente responsivo**
- **Fácil de replicar** seguindo os passos acima

Toda a estrutura está pronta para ser replicada em outro projeto, mantendo a mesma eficácia de conversão.
