# Funcionalidades Principais

## 1. Sistema de Temas Customizáveis

### O que é?
Sistema completo de criação e personalização de temas visuais, similar ao WordPress, mas mais poderoso.

### Funcionalidades

#### Criador de Temas (Wizard)
- Interface visual para criar temas
- Seleção de layout (Classic, Bento, Stellar, Blog AdSense)
- Escolha de cores (primária e secundária)
- Configuração de bordas (0px a 9999px)
- Seleção de variantes de header e footer
- Preview em tempo real

#### Layouts Disponíveis
1. **Classic**: Layout tradicional de blog
2. **Bento**: Grid estilo Apple (cards organizados)
3. **Stellar**: Minimalista sci-fi (futurista)
4. **Blog AdSense**: Otimizado para monetização

#### Variantes de Header
- **Minimal**: Header simples e limpo
- **Center Logo**: Logo centralizado
- **CTA Right**: Com botão de ação à direita

#### Variantes de Footer
- **Minimal**: Footer básico
- **Three Columns**: Três colunas de links
- **With CTA**: Com call-to-action

#### Personalização
- Cores customizáveis (hex)
- Border radius configurável
- Screenshots de preview
- Ativação com um clique

### Como Funciona
1. Acessa `/admin/themes/creator`
2. Preenche formulário visual
3. Sistema gera arquivo YAML do tema
4. Salva em `src/content/themes/`
5. Ativação via botão
6. Site atualiza automaticamente

## 2. CMS Integrado (Keystatic)

### O que é?
Sistema de gerenciamento de conteúdo headless integrado, acessível via `/keystatic`.

### Funcionalidades

#### Gerenciamento de Posts
- Editor WYSIWYG (TipTap)
- Editor Markdown (CodeMirror)
- Campos: título, slug, autor, categoria, data
- Thumbnail e meta description
- Imagem para redes sociais (Open Graph)
- Preview antes de publicar

#### Gerenciamento de Autores
- Nome, slug, cargo
- Avatar (upload de imagem)
- Bio (texto longo)

#### Gerenciamento de Categorias
- Nome e slug
- Relacionamento com posts

#### Biblioteca de Mídia
- Upload de imagens
- Organização por pastas
- Preview de imagens
- Uso em posts e páginas

#### Autenticação
- Login via GitHub OAuth
- Seguro (sem senhas fracas)
- Controle de acesso

### Formato de Dados
- **Posts**: `.mdoc` (Markdoc)
- **Configurações**: `.yaml`
- **Imagens**: `public/images/`

## 3. Painel Administrativo

### Dashboard Principal
- **Estatísticas**: Posts, autores, categorias, temas
- **Posts recentes**: Lista dos últimos posts
- **Ações rápidas**: Criar post, tema, etc.
- **Links diretos**: Para Keystatic e visualização

### Módulos do Admin

#### Posts (`/admin/posts`)
- Lista de todos os posts
- Filtros por categoria/autor
- Status (publicado/rascunho)
- Ações: editar, deletar, visualizar

#### Autores (`/admin/authors`)
- Lista de autores
- Edição de perfil
- Estatísticas de posts por autor

#### Categorias (`/admin/categories`)
- Lista de categorias
- Contagem de posts por categoria
- Edição rápida

#### Temas (`/admin/themes`)
- Lista de temas disponíveis
- Preview de cada tema
- Ativação com um clique
- Criador de temas integrado

#### Mídia (`/admin/media`)
- Biblioteca de imagens
- Upload via drag & drop
- Organização por pastas
- Preview e informações

#### Configurações (`/admin/pages`)
- Edição de páginas estáticas
- Homepage, Sobre, Contato
- Landing pages
- Editor visual para cada seção

### Design do Admin
- Interface moderna (inspirada em Linear/Vercel)
- Dark mode nativo
- Navegação intuitiva
- Feedback visual claro

## 4. Editor de Conteúdo

### Tipos de Editor

#### WYSIWYG (TipTap)
- Editor visual rico
- Formatação: negrito, itálico, links
- Listas (ordenadas e não ordenadas)
- Tabelas
- Imagens
- YouTube embeds
- Code blocks

#### Markdown (CodeMirror)
- Editor de código
- Syntax highlighting
- Preview lado a lado
- Suporte a Markdoc

### Funcionalidades do Editor
- Auto-save (draft)
- Preview antes de publicar
- Validação de campos
- SEO helper (meta description)
- Upload de imagens inline

## 5. Importação WordPress

### O que faz?
Migra conteúdo do WordPress para CNX automaticamente.

### Processo
1. Exporta XML do WordPress
2. Faz upload do arquivo XML
3. Sistema processa:
   - Posts
   - Páginas
   - Autores
   - Categorias
   - Imagens (download automático)
4. Converte para formato Markdoc
5. Salva em `src/content/posts/`

### Funcionalidades
- Preserva estrutura de conteúdo
- Converte HTML para Markdown
- Baixa imagens automaticamente
- Cria autores e categorias
- Mantém datas de publicação

## 6. Sistema de Páginas Estáticas

### Tipos de Páginas

#### Homepage
- Hero section customizável
- Features/benefícios
- Testimonials
- CTA sections
- Editor visual por seção

#### Páginas Institucionais
- Sobre
- Contato
- Política de privacidade
- Termos de uso

#### Landing Pages
- LP1 (exemplo de landing page)
- Estrutura customizável
- Seções modulares
- Editor visual

### Editor de Páginas
- Interface visual por seção
- Campos específicos por tipo
- Preview em tempo real
- Validação de dados

## 7. Sistema de Blog

### Funcionalidades
- Listagem de posts (`/blog`)
- Paginação automática
- Filtros por categoria/autor
- Busca (futuro)
- Posts relacionados
- Compartilhamento social

### Página de Post
- Layout responsivo
- Navegação (anterior/próximo)
- Autor e data
- Categorias
- Comentários (futuro)

## 8. Deploy Automático

### Fluxo
1. **Edição**: Usuário edita no Keystatic ou admin
2. **Commit**: Sistema faz commit no Git
3. **Push**: Push automático para repositório
4. **Build**: Cloudflare detecta mudança
5. **Deploy**: Build e deploy automáticos
6. **CDN**: Distribuição global instantânea

### Vantagens
- Zero configuração manual
- Deploy em segundos
- Rollback fácil (Git)
- Histórico completo

## 9. Sistema de Preview

### Preview de Temas
- Visualização antes de ativar
- URL: `/preview/[theme-id]`
- Não afeta site em produção
- Teste seguro de temas

### Preview de Posts
- Visualização antes de publicar
- URL temporária
- Não aparece em listagens
- Publicação controlada

## 10. Responsividade

### Mobile-First
- Todos os componentes responsivos
- Design adaptativo
- Touch-friendly
- Performance otimizada para mobile

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 11. SEO Nativo

### Funcionalidades
- Meta descriptions
- Open Graph tags
- Structured data (futuro)
- Sitemap automático (futuro)
- URLs amigáveis (slugs)
- Performance otimizada (Core Web Vitals)

### Otimizações
- HTML semântico
- Imagens otimizadas
- Lazy loading
- Preload de recursos críticos

## 12. Performance

### Otimizações Automáticas
- HTML minificado
- CSS purgado (Tailwind)
- JavaScript otimizado (Astro)
- Imagens otimizadas
- CDN global (Cloudflare)

### Métricas
- LCP: < 1s
- FID: < 100ms
- CLS: 0
- TTFB: < 200ms

## Resumo das Funcionalidades

✅ **Sistema de Temas**: Criar e personalizar temas visualmente  
✅ **CMS Integrado**: Keystatic para gerenciar conteúdo  
✅ **Painel Admin**: Dashboard completo  
✅ **Editor WYSIWYG**: Edição visual rica  
✅ **Importação WordPress**: Migração automática  
✅ **Páginas Estáticas**: Homepage, Sobre, Contato, LPs  
✅ **Sistema de Blog**: Listagem, categorias, autores  
✅ **Deploy Automático**: Git push = site atualizado  
✅ **Preview**: Testar antes de publicar  
✅ **Responsividade**: Mobile-first  
✅ **SEO**: Otimizado por padrão  
✅ **Performance**: Extremamente rápido  

Tudo isso **sem custos de hospedagem** e **mais simples que WordPress**.
