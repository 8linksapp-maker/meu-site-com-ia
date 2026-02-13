# Como Funciona - Fluxo Completo

## Visão Geral do Fluxo

```
Criação → Edição → Versionamento → Build → Deploy → CDN → Usuário
```

## 1. Criação de Conteúdo

### Opção A: Via Keystatic CMS

1. **Acesso**: Vai para `/keystatic` no site
2. **Login**: Autentica com GitHub OAuth
3. **Navegação**: Escolhe "Posts" → "Create new"
4. **Edição**: 
   - Preenche título, slug, categoria, autor
   - Escreve conteúdo no editor WYSIWYG ou Markdown
   - Adiciona thumbnail e meta description
5. **Salvamento**: Clica em "Save"
6. **Commit Automático**: Sistema faz commit no Git
7. **Arquivo Criado**: `src/content/posts/nome-do-post.mdoc`

### Opção B: Via Painel Admin

1. **Acesso**: Vai para `/admin/posts`
2. **Criação**: Clica em "Novo Post"
3. **Edição**: Mesmo processo do Keystatic
4. **Salvamento**: Salva via API
5. **Arquivo Criado**: Mesmo resultado

### Opção C: Direto no Git

1. **Clone**: Clona repositório
2. **Criação**: Cria arquivo `.mdoc` manualmente
3. **Commit**: `git add`, `git commit`, `git push`
4. **Resultado**: Mesmo que as outras opções

## 2. Estrutura de um Post

### Arquivo `.mdoc`

```markdown
---
title: "Título do Post"
slug: "titulo-do-post"
author: "bruno"
category: "tech"
publishedDate: "2026-02-11"
thumbnail: "/images/posts/thumbnail.jpg"
metaDescription: "Descrição para SEO"
---
Conteúdo do post em Markdown...
```

### Processamento

1. **Leitura**: Astro lê arquivo `.mdoc`
2. **Parsing**: Separa frontmatter de conteúdo
3. **Validação**: Verifica schema (título, slug, etc.)
4. **Renderização**: Converte Markdown para HTML
5. **Build**: Gera página estática

## 3. Sistema de Temas

### Criação de Tema

1. **Acesso**: `/admin/themes/creator`
2. **Formulário**: Preenche:
   - Nome do tema
   - Layout (Classic, Bento, Stellar, etc.)
   - Cores (primária e secundária)
   - Border radius
   - Variantes de header/footer
3. **Geração**: Sistema cria arquivo YAML
4. **Salvamento**: `src/content/themes/nome-tema.yaml`

### Estrutura de Tema

```yaml
name: "Meu Tema"
slug: "meu-tema"
primaryColor: "#a855f7"
secondaryColor: "#ec4899"
borderRadius: "8px"
layout: "classic"
headerVariant: "center-logo"
footerVariant: "three-columns"
```

### Ativação

1. **Seleção**: Escolhe tema em `/admin/themes`
2. **Ativação**: Clica em "Ativar"
3. **Atualização**: Sistema atualiza `settings.yaml`
4. **Build**: Próximo build usa novo tema
5. **Deploy**: Site atualiza automaticamente

### Renderização

1. **Leitura**: Astro lê `settings.yaml`
2. **Tema Ativo**: Identifica tema ativo
3. **Carregamento**: Carrega componentes do tema
4. **Aplicação**: Aplica cores e estilos
5. **Renderização**: Gera HTML com tema aplicado

## 4. Build Process

### O que acontece no build?

1. **Leitura de Conteúdo**:
   - Lê todos os posts de `src/content/posts/`
   - Lê configurações de `src/content/singletons/`
   - Lê temas de `src/content/themes/`
   - Lê autores e categorias

2. **Processamento**:
   - Converte Markdown para HTML
   - Aplica temas
   - Gera páginas estáticas
   - Otimiza imagens
   - Minifica CSS/JS

3. **Geração**:
   - Cria arquivos HTML em `dist/`
   - Copia assets para `dist/`
   - Gera sitemap (futuro)
   - Gera RSS feed (futuro)

4. **Otimização**:
   - Remove CSS não usado
   - Minifica JavaScript
   - Comprime imagens
   - Adiciona preload tags

### Comando

```bash
bun run build
```

**Resultado**: Pasta `dist/` com site estático pronto.

## 5. Deploy Automático

### Configuração Inicial

1. **Repositório**: Cria repositório no GitHub
2. **Cloudflare Pages**: Conecta repositório
3. **Build Settings**:
   - Build command: `bun run build`
   - Output directory: `dist`
   - Node version: 18+
4. **Variáveis**: Configura variáveis de ambiente (se necessário)

### Fluxo de Deploy

1. **Trigger**: 
   - Push no Git OU
   - Salvamento no Keystatic (faz commit automático)

2. **Detecção**: Cloudflare detecta mudança no repositório

3. **Build**: 
   - Instala dependências (`bun install`)
   - Executa build (`bun run build`)
   - Gera arquivos estáticos

4. **Deploy**:
   - Upload de arquivos para Cloudflare
   - Distribuição para CDN global
   - Invalidação de cache

5. **Resultado**: Site atualizado em 30-60 segundos

### Rollback

1. **Problema**: Algo quebrou no deploy
2. **Solução**: Volta commit anterior no Git
3. **Deploy**: Cloudflare faz novo build
4. **Resultado**: Site volta ao estado anterior

## 6. CDN e Distribuição

### Cloudflare CDN

1. **Upload**: Arquivos enviados para Cloudflare
2. **Distribuição**: Replicados para 200+ data centers
3. **Cache**: Cacheado na borda (edge)
4. **Entrega**: Usuário recebe do servidor mais próximo

### Benefícios

- **Latência baixa**: < 50ms para maioria dos usuários
- **Alta disponibilidade**: 99.99% uptime
- **Escalabilidade**: Suporta milhões de requisições
- **Custo zero**: Free tier generoso

## 7. Requisição do Usuário

### Fluxo Completo

1. **Usuário**: Digita URL ou clica em link
2. **DNS**: Resolve para Cloudflare
3. **CDN**: Cloudflare identifica servidor mais próximo
4. **Cache**: Verifica se tem HTML em cache
5. **Entrega**: 
   - Se cacheado: Entrega imediatamente (< 50ms)
   - Se não: Busca do origin (ainda rápido, < 200ms)
6. **Navegador**: Recebe HTML estático
7. **Renderização**: Navegador renderiza página

### Performance

- **TTFB**: < 200ms (Time to First Byte)
- **LCP**: < 1s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: 0 (Cumulative Layout Shift)

## 8. Edição de Conteúdo Existente

### Processo

1. **Acesso**: Vai para `/keystatic` ou `/admin/posts`
2. **Seleção**: Escolhe post para editar
3. **Edição**: Modifica conteúdo
4. **Salvamento**: Salva alterações
5. **Commit**: Sistema faz commit (ou manual via Git)
6. **Build**: Cloudflare faz novo build
7. **Deploy**: Site atualiza com novo conteúdo

### Versionamento

- **Histórico**: Git guarda todas as versões
- **Comparação**: Pode ver diferenças entre versões
- **Rollback**: Pode voltar para versão anterior
- **Colaboração**: Múltiplas pessoas podem editar

## 9. Sistema de Autores e Categorias

### Autores

1. **Criação**: `/admin/authors` → "Novo Autor"
2. **Preenchimento**: Nome, slug, cargo, avatar, bio
3. **Salvamento**: Arquivo YAML em `src/content/authors/`
4. **Uso**: Seleciona autor ao criar post

### Categorias

1. **Criação**: `/admin/categories` → "Nova Categoria"
2. **Preenchimento**: Nome e slug
3. **Salvamento**: Arquivo YAML em `src/content/categories/`
4. **Uso**: Seleciona categoria ao criar post

## 10. Importação WordPress

### Processo

1. **Exportação**: Exporta XML do WordPress
2. **Upload**: Faz upload em `/admin/import/wordpress`
3. **Processamento**: Sistema:
   - Lê XML
   - Extrai posts, páginas, autores, categorias
   - Baixa imagens
   - Converte HTML para Markdown
   - Cria arquivos `.mdoc` e `.yaml`
4. **Salvamento**: Salva em estrutura do CNX
5. **Resultado**: Conteúdo migrado e pronto para usar

## 11. Personalização de Páginas

### Homepage

1. **Acesso**: `/admin/pages` → "Homepage"
2. **Edição**: Edita seções:
   - Hero (título, subtítulo, CTA)
   - Features (lista de benefícios)
   - Testimonials (depoimentos)
   - CTA final
3. **Salvamento**: Salva em `src/content/singletons/home.yaml`
4. **Renderização**: Astro lê e renderiza na homepage

### Páginas Estáticas

- **Sobre**: `/admin/pages/sobre`
- **Contato**: `/admin/pages/contato`
- **Landing Pages**: `/admin/pages/lp1`

Mesmo processo: edita → salva → build → deploy.

## 12. Monitoramento e Logs

### Cloudflare Analytics

- **Visitas**: Número de visitantes
- **Requisições**: Requisições por dia
- **Bandwidth**: Largura de banda usada
- **Erros**: Erros 4xx/5xx
- **Performance**: Tempo de resposta

### Git Logs

- **Commits**: Histórico de mudanças
- **Autores**: Quem fez cada mudança
- **Datas**: Quando cada mudança foi feita
- **Mensagens**: Descrição de cada mudança

## Resumo do Fluxo Completo

```
1. Criação → 2. Edição → 3. Versionamento (Git) → 
4. Build (Astro) → 5. Deploy (Cloudflare) → 
6. CDN (Distribuição) → 7. Usuário (HTML estático)
```

**Tempo total**: 30-60 segundos do salvamento até estar no ar.

**Custo**: Zero (free tier Cloudflare).

**Complexidade**: Mínima (tudo automático).
