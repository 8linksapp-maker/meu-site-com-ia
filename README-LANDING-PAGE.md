# 🚀 Landing Page de Vendas - Plataforma CNX

## 📋 Sobre Este Projeto

Este é o projeto **standalone** da landing page de vendas da plataforma CNX.

**Por que separado?**
- ✅ Deploy mais fácil (sem depender do CMS principal)
- ✅ Projeto limpo e focado apenas na landing page
- ✅ Não interfere no desenvolvimento do CMS em `/cnx/`
- ✅ Pode ser deployado independentemente

## 🎯 Propósito

Landing page de vendas focada em **DOR** (WordPress vs JAMstack), seguindo estrutura **Dot Com Secrets**.

**Foco:**
- 💔 DOR: WordPress está comendo seu lucro
- 💰 DESEJO: Domine o Google com JAMstack
- ⚡ SOLUÇÃO: Sistema JAMstack de Ranqueamento Máximo

## 📁 Estrutura

```
docs/
├── src/
│   ├── pages/
│   │   └── curso-vendas.astro      # Página principal (/curso-vendas)
│   ├── themes/
│   │   └── classic/
│   │       └── curso-vendas.astro  # Template visual completo
│   ├── content/
│   │   └── singletons/
│   │       └── classic/
│   │           └── curso-vendas.yaml  # ⭐ Conteúdo editável
│   └── ...
└── ...
```

## 🎨 Copy Atualizada

### Hero (Foco em DOR):
```
"Você está perdendo R$ 2.400 por ano em hospedagem WordPress 
enquanto seu site fica preso na página 2 do Google?"

WORDPRESS ESTÁ COMENDO SEU LUCRO E SABOTANDO SEU SEO

Enquanto você paga R$ 200/mês em WordPress, seus concorrentes 
dominam o Google com hospedagem GRÁTIS e sites 10x mais rápidos.
```

## 🚀 Como Usar

### Desenvolvimento:
```bash
cd docs
bun install
bun run dev
```

Acesse: `http://localhost:4321/curso-vendas`

### Editar Conteúdo:
Edite diretamente: `src/content/singletons/classic/curso-vendas.yaml`

### Deploy:
```bash
bun run build
```

Deploy no Cloudflare Pages (gratuito).

## 📝 Seções da Landing Page

1. ✅ **Hero** - Foco em DOR (atualizado)
2. ✅ **Velho vs Novo** - WordPress vs JAMstack (atualizado)
3. ✅ **Epifania** - História de transformação (atualizado)
4. ✅ **Mecanismo** - Sistema JAMstack (atualizado)
5. ⏳ **Demo** - (a atualizar)
6. ⏳ **Caminho** - (a atualizar)
7. ✅ **Depoimentos** - (atualizado)
8. ✅ **Oferta** - (atualizado)
9. ✅ **Garantia** - (atualizado)
10. ✅ **FAQ** - (atualizado)
11. ✅ **Escolha** - (atualizado)

## 🎯 Próximos Passos

1. Continuar editando seções restantes
2. Testar a landing page
3. Fazer deploy quando pronto

---

**Nota:** Este projeto é independente do `/cnx/` (CMS principal). Use este para a landing page de vendas.
