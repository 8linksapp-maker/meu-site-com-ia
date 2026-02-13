# Arquitetura e Tecnologias

## Arquitetura JAMStack

### O que é JAMStack?

**JAM** = **J**avaScript + **A**PIs + **M**arkup

- **JavaScript**: Interatividade no cliente
- **APIs**: Funcionalidades dinâmicas via APIs
- **Markup**: HTML pré-renderizado (estático)

### Como funciona?

1. **Build Time**: Todo o conteúdo é transformado em HTML estático
2. **Deploy**: Arquivos estáticos são enviados para CDN (Cloudflare)
3. **Request**: Usuário recebe HTML pronto, sem processamento no servidor

### Vantagens da Arquitetura

- **Performance**: HTML já está pronto, só precisa ser baixado
- **Segurança**: Não há servidor processando, não há banco de dados exposto
- **Escalabilidade**: CDN distribui automaticamente
- **Custo**: Hospedagem de arquivos estáticos é gratuita

## Stack Tecnológica Detalhada

### Framework: Astro 5.17.1

**Por que Astro?**
- Framework moderno focado em performance
- Suporta múltiplos frameworks (React, Vue, etc.)
- Zero JavaScript por padrão (adiciona apenas quando necessário)
- Build otimizado para sites estáticos
- Integração nativa com Cloudflare

**Configuração:**
```javascript
// astro.config.mjs
export default defineConfig({
    output: 'server',
    adapter: cloudflare(),
    integrations: [
        react(),
        keystatic(),
        tailwind(),
        markdoc()
    ]
});
```

### Runtime: Bun

**Por que Bun?**
- Runtime JavaScript extremamente rápido
- Substitui Node.js com melhor performance
- Compatível com npm/package.json
- Build mais rápido que Node.js

### CMS: Keystatic

**O que é Keystatic?**
- CMS headless que vive no código
- Interface visual para editar conteúdo
- Conteúdo salvo como arquivos (Markdown/YAML)
- Não precisa de banco de dados
- Integração nativa com Git

**Como funciona:**
1. Acessa `/keystatic` no site
2. Login com GitHub (autenticação segura)
3. Edita conteúdo visualmente
4. Salva = commit no Git
5. Deploy automático via Cloudflare

**Configuração:**
- Storage: Local (arquivos no repositório)
- Formato: Markdown (Markdoc) para posts
- Formato: YAML para configurações
- Imagens: Armazenadas em `public/images/`

### Hospedagem: Cloudflare Pages

**Por que Cloudflare Pages?**
- **Gratuito** para projetos pessoais/comerciais
- Deploy automático via Git
- CDN global (200+ data centers)
- SSL automático
- Sem limites de largura de banda
- Build otimizado

**Configuração:**
```toml
# wrangler.toml
name = "ai-site-builder"
compatibility_date = "2024-09-23"

[site]
bucket = "./dist"
```

### Estilização: Tailwind CSS

**Por que Tailwind?**
- Utility-first CSS
- Build otimizado (remove CSS não usado)
- Design system consistente
- Fácil customização
- Integração com Astro

### Editor: TipTap + CodeMirror

**TipTap:**
- Editor WYSIWYG moderno
- Baseado em ProseMirror
- Extensível com plugins
- Suporta Markdown

**CodeMirror:**
- Editor de código
- Syntax highlighting
- Usado para edição de código/configurações

### Formato de Conteúdo: Markdoc

**Markdoc:**
- Markdown estendido
- Suporta componentes customizados
- Validação de schema
- Renderização segura

## Fluxo de Dados

### 1. Criação de Conteúdo

```
Usuário → Keystatic UI → Salva arquivo .mdoc → Git Commit → Cloudflare Build → Deploy
```

### 2. Visualização de Conteúdo

```
Usuário → Cloudflare CDN → HTML estático → Navegador
```

### 3. Edição de Tema

```
Admin → Theme Creator → Salva YAML → Ativa tema → Build → Deploy
```

## Estrutura de Arquivos

### Conteúdo
```
src/content/
├── posts/           # Posts do blog (.mdoc)
├── authors/         # Autores (.yaml)
├── categories/      # Categorias (.yaml)
├── themes/          # Temas customizados (.yaml)
└── singletons/      # Configurações únicas (.yaml)
```

### Componentes
```
src/components/
├── admin/           # Componentes do painel admin
├── cms/             # Componentes do CMS
└── ThemeSwitcher.astro
```

### Temas
```
src/themes/
├── classic/         # Tema clássico
├── bento/           # Tema estilo Apple
├── stellar/         # Tema minimalista sci-fi
├── blog-adsense/    # Tema para blog
└── headers/         # Variantes de header
```

## Comparação com WordPress

| Aspecto | WordPress | CNX (JAMStack) |
|---------|-----------|----------------|
| **Processamento** | PHP + MySQL a cada request | HTML pré-gerado |
| **Hospedagem** | Servidor dedicado (pago) | Cloudflare Pages (grátis) |
| **Banco de Dados** | MySQL necessário | Arquivos (Git) |
| **Deploy** | FTP/SSH manual | Git push automático |
| **Segurança** | Múltiplas superfícies de ataque | Arquitetura segura por padrão |
| **Performance** | Depende do servidor | CDN global |
| **Escalabilidade** | Precisa upgrade de servidor | Escala automaticamente |
| **Custo** | Cresce com tráfego | Zero (free tier) |

## Vantagens Técnicas

1. **Build Time Rendering**: Todo processamento acontece no build, não no request
2. **Edge Distribution**: Conteúdo distribuído globalmente via CDN
3. **Versionamento Nativo**: Todo conteúdo versionado no Git
4. **Zero Dependencies Runtime**: Não precisa de servidor rodando
5. **Type Safety**: TypeScript em todo o projeto
6. **Modern Tooling**: Astro, Bun, Tailwind - stack moderna
