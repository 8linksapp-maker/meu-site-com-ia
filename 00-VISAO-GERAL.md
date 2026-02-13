# Visão Geral do Projeto CNX

## O que é este projeto?

CNX é uma plataforma de construção de sites moderna baseada em **JAMStack** que oferece uma alternativa **mais simples, rápida e fácil** ao WordPress, **sem custos de hospedagem**.

## Proposta de Valor Principal

**"Uma solução mais simples, rápida e fácil do que WordPress, sem custos de hospedagem"**

### Diferenciais Core

1. **Simplicidade**: Interface intuitiva, sem complexidade de servidores
2. **Velocidade**: Sites que carregam em milissegundos, não segundos
3. **Facilidade**: Deploy automático, sem configurações complexas
4. **Zero custos**: Hospedagem gratuita no Cloudflare Pages
5. **Segurança**: Arquitetura sem banco de dados exposto
6. **Manutenção mínima**: Sem atualizações de plugins ou temas que quebram

## Público-Alvo

- **Empresários** que querem sair do WordPress
- **Desenvolvedores** que buscam uma stack moderna
- **Agencias** que precisam entregar sites rápidos para clientes
- **Empreendedores** que querem reduzir custos de hospedagem
- **Pessoas** que já tiveram problemas com WordPress (lentidão, segurança, custos)

## Problema que Resolve

### WordPress é:
- ❌ Lento (PHP + MySQL processando cada requisição)
- ❌ Caro (hospedagem cresce com tráfego)
- ❌ Complexo (plugins, temas, atualizações constantes)
- ❌ Inseguro (muitas superfícies de ataque)
- ❌ Difícil de manter (backups, atualizações, compatibilidade)

### CNX oferece:
- ✅ Rápido (HTML estático pré-gerado + CDN)
- ✅ Grátis (Cloudflare Pages gratuito)
- ✅ Simples (Git + Deploy automático)
- ✅ Seguro (sem banco de dados, sem PHP exposto)
- ✅ Fácil de manter (tudo versionado no Git)

## Stack Tecnológica

- **Framework**: Astro 5.17.1
- **Runtime**: Bun
- **CMS**: Keystatic (CMS headless integrado)
- **Hospedagem**: Cloudflare Pages (gratuito)
- **Estilização**: Tailwind CSS
- **Editor**: TipTap + CodeMirror
- **Formato de conteúdo**: Markdown (Markdoc)

## Estrutura do Projeto

```
cnx/
├── src/
│   ├── content/          # Conteúdo (posts, autores, categorias, temas)
│   ├── components/       # Componentes React/Astro
│   ├── layouts/          # Layouts principais
│   ├── pages/            # Rotas e páginas
│   ├── themes/           # Sistema de temas customizáveis
│   └── utils/            # Utilitários e helpers
├── public/               # Assets estáticos
└── keystatic.config.tsx  # Configuração do CMS
```

## Principais Funcionalidades

1. **Sistema de Temas**: Criar e personalizar temas visualmente
2. **CMS Integrado**: Keystatic para gerenciar conteúdo
3. **Painel Admin**: Dashboard completo similar ao WordPress
4. **Importação WordPress**: Migrar conteúdo do WordPress facilmente
5. **Editor WYSIWYG**: Edição visual de conteúdo
6. **Sistema de Autores**: Gerenciar múltiplos autores
7. **Categorias**: Organização de conteúdo
8. **Media Library**: Biblioteca de mídia integrada
9. **Deploy Automático**: Git push = site atualizado

## Resultado Final

Um site que:
- Carrega instantaneamente (HTML estático + CDN global)
- Não custa nada para hospedar (Cloudflare Pages free tier)
- É fácil de manter (tudo no Git, sem servidores)
- É seguro por padrão (arquitetura JAMStack)
- Escala infinitamente (CDN distribui automaticamente)
