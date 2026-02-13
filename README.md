# Página de Vendas do Curso

Landing page de vendas para curso de criação de sites com IA, seguindo estrutura Dot Com Secrets.

## 🚀 Início Rápido

### Instalação

```bash
# Instalar dependências
npm install
# ou
bun install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
# ou
bun run dev
```

Acesse `http://localhost:4321/curso-vendas` para ver a página.

### Build

```bash
# Build para produção
npm run build
# ou
bun run build
```

## 📁 Estrutura

```
docs/
├── src/
│   ├── pages/
│   │   └── curso-vendas.astro      # Página principal
│   ├── themes/
│   │   └── classic/
│   │       ├── curso-vendas.astro  # Template visual
│   │       └── components/          # Header e Footer
│   ├── layouts/
│   │   └── MainLayout.astro         # Layout base
│   ├── utils/
│   │   └── singleton-utils.ts      # Utilitários
│   ├── content/
│   │   ├── singletons/
│   │   │   ├── settings.yaml       # Configurações
│   │   │   └── classic/
│   │   │       └── curso-vendas.yaml # Conteúdo editável
│   │   └── themes/
│   │       └── classic.yaml         # Tema
│   └── styles/
│       └── global.css               # Estilos globais
├── public/                          # Assets estáticos
├── keystatic.config.tsx             # Configuração CMS
├── astro.config.mjs                 # Configuração Astro
└── package.json
```

## ✏️ Editar Conteúdo

Acesse `/keystatic` no navegador para editar o conteúdo via interface visual.

Ou edite diretamente o arquivo `src/content/singletons/classic/curso-vendas.yaml`.

## 🎨 Tecnologias

- **Astro** - Framework
- **React** - Componentes interativos
- **Tailwind CSS** - Estilização
- **Keystatic** - CMS
- **TypeScript** - Tipagem
