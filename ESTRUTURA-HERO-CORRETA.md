# 🎯 Estrutura Correta da Primeira Dobra (Hero)

## 📐 Ordem de Aparição (de cima para baixo):

```
┌─────────────────────────────────────────┐
│                                         │
│  [Badge] 🚀 A NOVA ERA DO...           │ ← Pequeno, no topo
│                                         │
│  "Você está perdendo R$ 2.400 por ano │ ← H1 (branco, grande)
│   em hospedagem WordPress enquanto     │
│   seu site fica preso na página 2 do   │
│   Google?"                              │
│                                         │
│  WORDPRESS ESTÁ COMENDO SEU LUCRO      │ ← H2 (gradiente roxo/rosa, maior)
│  E SABOTANDO SEU SEO                   │
│                                         │
│  Enquanto você paga R$ 200/mês em      │ ← Subtitle (cinza, médio)
│  WordPress, seus concorrentes dominam  │
│  o Google com hospedagem GRÁTIS...     │
│                                         │
│  [QUERO DOMINAR O GOOGLE AGORA]        │ ← CTA (botão roxo)
│                                         │
│  ✅ Performance 10x superior | ...     │ ← Features (pequeno)
│                                         │
└─────────────────────────────────────────┘
```

## 📋 Hierarquia Visual:

1. **Badge** (pequeno, topo)
   - Texto: "🚀 A NOVA ERA DO DESENVOLVIMENTO WEB"
   - Estilo: Badge arredondado, borda roxa

2. **H1 - Pergunta Principal** (primeiro, branco, grande)
   - Texto: "Você está perdendo R$ 2.400 por ano..."
   - Cor: Branco (#ffffff)
   - Tamanho: 2xl a 6xl (responsivo)

3. **H2 - Destaque** (segundo, gradiente, maior)
   - Texto: "WORDPRESS ESTÁ COMENDO SEU LUCRO..."
   - Cor: Gradiente roxo → rosa
   - Tamanho: 3xl a 7xl (maior que H1)

4. **Subtitle** (terceiro, cinza, médio)
   - Texto: "Enquanto você paga R$ 200/mês..."
   - Cor: Cinza (#a3a3a3)
   - Tamanho: base a 2xl

5. **CTA** (botão roxo, destaque)
   - Texto: "QUERO DOMINAR O GOOGLE AGORA"
   - Estilo: Botão grande, roxo, com sombra

6. **Features** (pequeno, abaixo do botão)
   - Texto: "✅ Performance 10x superior..."
   - Cor: Cinza escuro

## ✅ Ordem Correta no Código:

```astro
1. Badge
2. H1 (heroTitleLine1) ← PRIMEIRO
3. H2 (heroTitleHighlight) ← SEGUNDO
4. Subtitle
5. CTA
6. Features
```

## ⚠️ Problema Atual:

Se você está vendo "WORDPRESS ESTÁ COMENDO..." primeiro, pode ser:
- Cache do navegador
- H1 não está renderizando
- CSS está invertendo a ordem

## 🔧 Solução:

1. Limpar cache: `Cmd+Shift+R`
2. Verificar se H1 está aparecendo
3. Reiniciar servidor: `bun run dev`
