# Informações Adicionais

## Posts Criados no Projeto

### Lista de Posts

1. **adeus-wordpress.mdoc**
   - Título: "Adeus WordPress: Por que o futuro é Serverless?"
   - Foco: Explicar por que JAMStack é o futuro vs WordPress tradicional

2. **o-que-e-jamstack.mdoc**
   - Título: "O que é JAMStack e por que seu site carrega instantaneamente"
   - Foco: Explicar arquitetura JAMStack e benefícios

3. **desempenho-jamstack-rapido-facil-simples.mdoc**
   - Título: "Desempenho JAMStack: Rápido, fácil e simples de usar"
   - Foco: Performance, simplicidade e facilidade de uso

4. **jamstack-vs-wordpress-seguranca.mdoc**
   - Título: "JAMStack vs WordPress: Segurança sem dor de cabeça"
   - Foco: Comparação de segurança entre as duas arquiteturas

5. **jamstack-vs-wordpress-custo.mdoc**
   - Título: "JAMStack vs WordPress: Custo zero vs custos crescentes"
   - Foco: Comparação de custos e economia

6. **jamstack-vs-wordpress-manutencao.mdoc**
   - Título: "JAMStack vs WordPress: Menos manutenção, mais foco em conteúdo"
   - Foco: Comparação de esforço de manutenção

7. **jamstack-vs-wordpress-seo-escala.mdoc**
   - Título: "JAMStack vs WordPress: SEO e escalabilidade infinitas"
   - Foco: SEO e capacidade de escalar

8. **integrar-ia-wordpress-criar-posts.mdoc**
   - Título: "Como integrar IA no WordPress para criar posts automaticamente"
   - Foco: Processo de integração de IA (mostrando complexidade do WordPress)

## Tecnologias Específicas

### Astro
- Versão: 5.17.1
- Uso: Framework principal
- Integrações: React, Keystatic, Tailwind, Markdoc
- Output: Server (Cloudflare adapter)

### Bun
- Uso: Runtime JavaScript
- Vantagem: Mais rápido que Node.js
- Comandos: `bun install`, `bun run dev`, `bun run build`

### Keystatic
- Versão: 5.0.6
- Uso: CMS headless integrado
- Storage: Local (arquivos Git)
- Autenticação: GitHub OAuth
- Formato: Markdoc para posts, YAML para config

### Cloudflare Pages
- Uso: Hospedagem e CDN
- Custo: Gratuito (free tier)
- Limites: 500 builds/mês, 100k requisições/dia
- Features: SSL automático, DDoS protection, WAF

### Tailwind CSS
- Versão: 3.4.17
- Uso: Estilização
- Config: `tailwind.config.mjs`
- Purge: Automático (remove CSS não usado)

## Estrutura de Conteúdo

### Posts (.mdoc)
```
---
title: "Título"
slug: "slug-url"
author: "bruno"
category: "tech"
publishedDate: "2026-02-11"
thumbnail: "URL da imagem"
metaDescription: "Descrição para SEO"
---
Conteúdo em Markdown...
```

### Autores (.yaml)
```yaml
name: "Nome"
slug: "slug"
role: "Cargo"
avatar: "/images/authors/avatar.jpg"
bio: "Biografia"
```

### Categorias (.yaml)
```yaml
name: "Nome"
slug: "slug"
```

### Temas (.yaml)
```yaml
name: "Nome do Tema"
slug: "slug-tema"
primaryColor: "#a855f7"
secondaryColor: "#ec4899"
borderRadius: "8px"
layout: "classic"
headerVariant: "center-logo"
footerVariant: "three-columns"
```

## Comandos Úteis

### Desenvolvimento
```bash
bun install          # Instalar dependências
bun run dev          # Servidor de desenvolvimento
bun run build        # Build de produção
bun run preview      # Preview do build local
```

### Deploy
```bash
bun run build        # Build
wrangler deploy       # Deploy manual (se necessário)
```

### Git
```bash
git add .
git commit -m "Mensagem"
git push              # Deploy automático via Cloudflare
```

## URLs Importantes

- **Site**: `/` (homepage)
- **Blog**: `/blog` (listagem de posts)
- **Admin**: `/admin` (dashboard)
- **Keystatic**: `/keystatic` (CMS)
- **Posts**: `/admin/posts` (gerenciar posts)
- **Temas**: `/admin/themes` (gerenciar temas)
- **Criador de Temas**: `/admin/themes/creator`

## Configurações Importantes

### astro.config.mjs
- Output: server (para Cloudflare)
- Adapter: Cloudflare
- Integrations: React, Keystatic, Tailwind, Markdoc

### keystatic.config.tsx
- Storage: local (Git)
- Collections: posts, authors, categories, themes
- Singletons: settings, homepage, etc.

### wrangler.toml
- Nome do projeto
- Bucket: ./dist
- KV namespaces (se necessário)

## Dependências Principais

### Core
- astro: ^5.17.1
- @keystatic/astro: ^5.0.6
- @keystatic/core: ^0.5.48

### UI
- react: ^19.2.4
- tailwindcss: ^3.4.17
- @tiptap/react: ^3.19.0

### Utils
- gray-matter: ^4.0.3 (frontmatter)
- marked: ^17.0.1 (markdown)
- js-yaml: ^4.1.1 (YAML)

## Características Únicas

1. **Sistema de Temas Visual**
   - Criador de temas com wizard
   - Preview antes de ativar
   - Múltiplos layouts (Classic, Bento, Stellar, Blog AdSense)
   - Variantes de header/footer

2. **CMS Integrado**
   - Keystatic acessível via `/keystatic`
   - Editor WYSIWYG e Markdown
   - Autenticação GitHub
   - Commit automático no Git

3. **Importação WordPress**
   - Upload de XML do WordPress
   - Conversão automática
   - Download de imagens
   - Preservação de estrutura

4. **Deploy Automático**
   - Git push = deploy
   - Cloudflare detecta mudanças
   - Build e deploy em 30-60s
   - Zero configuração manual

## Métricas de Performance

### Objetivos
- TTFB: < 200ms
- LCP: < 1s
- FID: < 50ms
- CLS: 0

### Como Atingir
- HTML estático pré-gerado
- CDN global (Cloudflare)
- CSS purgado (Tailwind)
- Imagens otimizadas
- Lazy loading

## Segurança

### Por que é Seguro
- Sem PHP exposto
- Sem banco de dados acessível
- Arquivos estáticos não executáveis
- CMS local/protegido
- Cloudflare WAF

### Boas Práticas
- Autenticação GitHub OAuth
- Versionamento Git
- Revisão antes de deploy
- Dependências atualizadas

## Escalabilidade

### Limites Práticos
- Free tier: 100k requisições/dia
- Paid tier: Ilimitado ($20/mês)
- CDN: 200+ data centers
- Escala: Milhões de visitas/dia

### Como Escala
- CDN distribui automaticamente
- Sem servidor para sobrecarregar
- Cache na borda (edge)
- Zero configuração adicional

## Suporte e Comunidade

### Documentação
- Astro: https://docs.astro.build
- Keystatic: https://keystatic.com
- Cloudflare: https://developers.cloudflare.com

### Stack
- Astro Discord
- GitHub Issues
- Stack Overflow

## Próximos Passos (Futuro)

### Funcionalidades Planejadas
- [ ] Sistema de comentários
- [ ] Busca de posts
- [ ] Sitemap automático
- [ ] RSS feed
- [ ] Analytics integrado
- [ ] A/B testing de temas
- [ ] Multi-idioma

### Melhorias
- [ ] Otimização de imagens automática
- [ ] PWA (Progressive Web App)
- [ ] Offline support
- [ ] Notificações push

## Resumo Executivo

**CNX é uma plataforma moderna de construção de sites que:**
- Substitui WordPress com vantagens em todos os aspectos
- Oferece zero custos de hospedagem
- Entrega performance extrema (10-30x mais rápido)
- É mais simples de usar e manter
- Escala infinitamente sem custo adicional

**Ideal para:** Qualquer pessoa que quer sair do WordPress ou criar sites modernos, rápidos e gratuitos.
