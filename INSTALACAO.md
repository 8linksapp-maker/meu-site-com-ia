# 🚀 Instalação e Configuração

## Pré-requisitos

- Node.js 18+ ou Bun
- npm, yarn, pnpm ou bun

## Passo a Passo

### 1. Instalar Dependências

```bash
# Com npm
npm install

# Com bun (recomendado - mais rápido)
bun install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
# Com npm
npm run dev

# Com bun
bun run dev
```

### 3. Acessar a Página

Abra seu navegador em: **http://localhost:4321/curso-vendas**

### 4. Editar Conteúdo (Opcional)

Para editar o conteúdo via interface visual:

1. Acesse: **http://localhost:4321/keystatic**
2. Faça login com GitHub (primeira vez)
3. Edite o singleton "Página de Vendas do Curso"

Ou edite diretamente o arquivo:
`src/content/singletons/classic/curso-vendas.yaml`

## 📁 Estrutura de Arquivos

```
docs/
├── src/
│   ├── pages/
│   │   └── curso-vendas.astro      # ✅ Página principal
│   ├── themes/
│   │   └── classic/
│   │       ├── curso-vendas.astro  # ✅ Template visual (11 seções)
│   │       └── components/         # ✅ Header e Footer
│   ├── layouts/
│   │   └── MainLayout.astro         # ✅ Layout base
│   ├── utils/
│   │   └── singleton-utils.ts      # ✅ Utilitários
│   ├── content/
│   │   ├── singletons/
│   │   │   ├── settings.yaml       # ✅ Configurações
│   │   │   └── classic/
│   │   │       └── curso-vendas.yaml # ✅ Conteúdo editável
│   │   └── themes/
│   │       └── classic.yaml         # ✅ Tema
│   └── styles/
│       └── global.css               # ✅ Estilos
├── public/
│   └── favicon.svg                  # ✅ Favicon
├── keystatic.config.tsx              # ✅ Configuração CMS
├── astro.config.mjs                  # ✅ Configuração Astro
├── package.json                      # ✅ Dependências
└── README.md                         # ✅ Documentação
```

## ✅ Checklist de Verificação

- [x] Estrutura de diretórios criada
- [x] Arquivos de configuração criados
- [x] Página principal criada
- [x] Template visual criado (11 seções)
- [x] Conteúdo YAML inicial preenchido
- [x] Header e Footer básicos
- [x] Layout principal
- [x] Utilitários de singleton
- [x] Keystatic configurado
- [x] README com instruções

## 🐛 Solução de Problemas

### Erro: "Cannot find module"
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port already in use"
```bash
# Usar outra porta
npm run dev -- --port 4322
```

### Erro ao acessar /keystatic
- Certifique-se de que o Keystatic está configurado no `astro.config.mjs`
- Verifique se o `keystatic.config.tsx` está na raiz do projeto

## 📝 Próximos Passos

1. Personalizar conteúdo em `curso-vendas.yaml`
2. Adicionar imagens em `public/images/general/`
3. Configurar domínio (quando fizer deploy)
4. Fazer deploy no Cloudflare Pages
