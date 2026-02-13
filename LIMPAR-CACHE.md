# 🔄 Como Limpar Cache e Ver as Mudanças

## ⚠️ Problema: Frases antigas ainda aparecem

As frases "APRENDA A CRIAR SITES COM IA" e "Sem código, sem custos, em minutos" **NÃO estão mais no código**, mas podem aparecer por cache.

## ✅ Soluções (tente nesta ordem):

### 1. Hard Refresh no Navegador
- **Mac**:** `Cmd + Shift + R`
- **Windows/Linux**: `Ctrl + Shift + R`
- Ou `Ctrl + F5`

### 2. Limpar Cache do Navegador
- **Chrome/Edge**: 
  - `Cmd + Shift + Delete` (Mac) ou `Ctrl + Shift + Delete` (Windows)
  - Selecione "Imagens e arquivos em cache"
  - Clique em "Limpar dados"

### 3. Abrir em Aba Anônima
- **Chrome**: `Cmd + Shift + N` (Mac) ou `Ctrl + Shift + N` (Windows)
- **Firefox**: `Cmd + Shift + P` (Mac) ou `Ctrl + Shift + P` (Windows)
- Acesse: `http://localhost:4321/curso-vendas`

### 4. Reiniciar Servidor
```bash
cd /Users/mac/Documents/Projects/docs

# Parar servidor (Ctrl+C no terminal)

# Limpar build cache
rm -rf .astro dist

# Reiniciar
bun run dev
```

### 5. Verificar se está na pasta certa
```bash
# Certifique-se de estar em:
cd /Users/mac/Documents/Projects/docs

# E não em:
# cd /Users/mac/Documents/Projects/cnx
```

## 📋 O que DEVE aparecer na primeira dobra:

1. ✅ Badge: "🚀 A NOVA ERA DO DESENVOLVIMENTO WEB"
2. ✅ H1: "Você está perdendo R$ 2.400 por ano..."
3. ✅ Subtitle: "Enquanto você paga R$ 200/mês..."
4. ✅ CTA: "QUERO DOMINAR O GOOGLE AGORA"
5. ✅ Features: "✅ Performance 10x superior..."

## ❌ O que NÃO deve aparecer:

- ❌ "APRENDA A CRIAR SITES COM IA"
- ❌ "Sem código, sem custos, em minutos"
- ❌ "WORDPRESS ESTÁ COMENDO SEU LUCRO..."

## 🔍 Verificação Final:

Após limpar cache, a primeira dobra deve mostrar **APENAS**:
- Badge
- Pergunta (H1)
- Subtitle
- CTA
- Features

**Nada mais!**
