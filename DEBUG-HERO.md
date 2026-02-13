# 🔍 Debug - Hero Duplicado

## ✅ Confirmação: Estamos na pasta `/docs/`

**Arquivo editado:**
```
docs/src/content/singletons/classic/curso-vendas.yaml
```

**Template:**
```
docs/src/themes/classic/curso-vendas.astro
```

**URL:**
```
http://localhost:4321/curso-vendas
```

## 🔧 Soluções para Hero Duplicado

### 1. Limpar Cache do Navegador
- **Chrome/Edge:** `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
- **Firefox:** `Ctrl+F5` (Windows) ou `Cmd+Shift+R` (Mac)
- Ou abrir em aba anônima

### 2. Reiniciar Servidor
```bash
# Parar o servidor (Ctrl+C)
# Depois rodar novamente:
cd docs
bun run dev
```

### 3. Verificar se está na pasta certa
```bash
# Certifique-se de estar em:
cd /Users/mac/Documents/Projects/docs

# E rodar:
bun run dev
```

### 4. Limpar Build
```bash
cd docs
rm -rf .astro dist
bun run dev
```

## 📋 Estrutura Atual do Hero

O hero está estruturado assim:

```
[Badge] 🚀 A NOVA ERA DO DESENVOLVIMENTO WEB

H1:
  - heroTitleLine1: "Você está perdendo R$ 2.400..."
  - heroTitleHighlight: "WORDPRESS ESTÁ COMENDO..." (gradiente)

Subtitle: "Enquanto você paga R$ 200/mês..."

[CTA] QUERO DOMINAR O GOOGLE AGORA
```

**Só há UMA seção HERO no código.**

## 🎯 Se ainda estiver duplicado

Pode ser:
1. Cache do navegador
2. Servidor não recarregou
3. Está vendo outra página (não `/curso-vendas`)

**Verifique:**
- URL: `http://localhost:4321/curso-vendas`
- Pasta: `/docs/` (não `/cnx/`)
