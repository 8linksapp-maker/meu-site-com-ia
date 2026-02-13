# Deploy e Custos

## Processo de Deploy

### Setup Inicial (Uma Vez)

#### 1. Criar Repositório Git

```bash
# Inicializar repositório
git init
git add .
git commit -m "Initial commit"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

#### 2. Configurar Cloudflare Pages

1. Acessa [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vai em **Pages** → **Create a project**
3. Conecta repositório GitHub
4. Configurações:
   - **Framework preset**: Astro
   - **Build command**: `bun run build` (ou `npm run build`)
   - **Build output directory**: `dist`
   - **Node version**: 18 ou superior
5. Clica em **Save and Deploy**

#### 3. Configurar Domínio (Opcional)

1. Em **Custom domains** → **Set up a custom domain**
2. Adiciona domínio
3. Cloudflare configura DNS automaticamente
4. SSL é automático e gratuito

**Tempo total:** 5-10 minutos

### Deploy Automático

Após setup inicial, deploy é **100% automático**:

1. **Edição**: Edita conteúdo no Keystatic ou admin
2. **Commit**: Sistema faz commit no Git (ou você faz manualmente)
3. **Push**: Push para GitHub
4. **Build**: Cloudflare detecta e faz build automaticamente
5. **Deploy**: Site atualizado em 30-60 segundos

**Zero intervenção manual necessária.**

## Custos Detalhados

### Cloudflare Pages (Free Tier)

**Incluído gratuitamente:**
- ✅ 500 builds/mês
- ✅ 100.000 requisições/dia
- ✅ Largura de banda ilimitada
- ✅ SSL automático
- ✅ CDN global (200+ data centers)
- ✅ DDoS protection
- ✅ WAF (Web Application Firewall)

**Limites:**
- Builds: 500/mês (suficiente para maioria)
- Requisições: 100.000/dia (suficiente para sites médios)

**Para sites maiores:**
- Paid tier: $20/mês (builds ilimitados, requisições ilimitados)
- Ainda muito mais barato que hospedagem WordPress

### Domínio

**Custo:**
- .com: R$ 30-50/ano
- .com.br: R$ 40-60/ano
- Outros: Variam

**Onde comprar:**
- Registro.br (Brasil)
- Namecheap
- Google Domains
- Cloudflare Registrar (recomendado, sem margem)

**Mesmo custo do WordPress** (domínio é igual)

### Outros Custos

**Desenvolvimento:**
- Zero (código aberto)
- Sem licenças
- Sem assinaturas

**Manutenção:**
- Zero (tudo automático)
- Sem backups pagos (Git é backup)
- Sem suporte pago necessário

**Total Anual:**
- **R$ 30-50/ano** (apenas domínio)
- **Zero custos recorrentes**

## Comparação de Custos

### WordPress - Custos Anuais

**Hospedagem:**
- Compartilhada básica: R$ 240-360/ano
- Compartilhada avançada: R$ 600-1200/ano
- VPS: R$ 1200-6000/ano

**Extras:**
- Plugins premium: R$ 100-400/ano
- Temas premium: R$ 100-400/ano
- SSL (alguns casos): R$ 50-100/ano
- Backup: R$ 240-600/ano

**Total:** R$ 730-8060/ano

### CNX - Custos Anuais

**Hospedagem:**
- Cloudflare Pages: **R$ 0/ano** (free tier)

**Domínio:**
- .com: R$ 30-50/ano

**Extras:**
- Tudo incluído: R$ 0/ano

**Total:** R$ 30-50/ano

**Economia:** R$ 700-8010/ano (96-99% de economia)

## Escalabilidade de Custos

### WordPress

**Crescimento de tráfego:**
- 1.000 visitas/dia: R$ 20-50/mês
- 10.000 visitas/dia: R$ 100-300/mês
- 100.000 visitas/dia: R$ 500-1000/mês

**Custo cresce linearmente com tráfego.**

### CNX

**Crescimento de tráfego:**
- 1.000 visitas/dia: R$ 0/mês (free tier)
- 10.000 visitas/dia: R$ 0/mês (free tier)
- 100.000 visitas/dia: R$ 0/mês (free tier)
- 1.000.000 visitas/dia: R$ 0/mês (free tier) ou $20/mês (paid)

**Custo não cresce até limites muito altos.**

## ROI (Return on Investment)

### WordPress

**Investimento inicial:**
- Setup: 2-4 horas
- Configuração: 1-2 horas
- **Total:** 3-6 horas

**Custos recorrentes:**
- R$ 60-670/mês
- R$ 720-8040/ano

**ROI:** Negativo (custos constantes)

### CNX

**Investimento inicial:**
- Setup: 10-30 minutos
- Configuração: 5-10 minutos
- **Total:** 15-40 minutos

**Custos recorrentes:**
- R$ 0/mês (hospedagem)
- R$ 30-50/ano (domínio)

**ROI:** Positivo (economia imediata)

## Casos de Uso por Custo

### Site Pequeno (1.000 visitas/dia)

**WordPress:**
- Hospedagem: R$ 20-30/mês
- **Anual:** R$ 240-360

**CNX:**
- Hospedagem: R$ 0/mês
- **Anual:** R$ 30-50 (domínio)

**Economia:** R$ 210-330/ano (87-92%)

### Site Médio (10.000 visitas/dia)

**WordPress:**
- Hospedagem: R$ 100-200/mês
- **Anual:** R$ 1200-2400

**CNX:**
- Hospedagem: R$ 0/mês
- **Anual:** R$ 30-50 (domínio)

**Economia:** R$ 1170-2370/ano (97-98%)

### Site Grande (100.000 visitas/dia)

**WordPress:**
- Hospedagem: R$ 500-1000/mês
- **Anual:** R$ 6000-12000

**CNX:**
- Hospedagem: R$ 0/mês (free) ou $20/mês (paid)
- **Anual:** R$ 30-50 (domínio) ou R$ 1200 (paid)

**Economia:** R$ 4800-10800/ano (80-90%)

## Resumo de Custos

### CNX

✅ **Hospedagem:** Gratuita (Cloudflare Pages free tier)  
✅ **Domínio:** R$ 30-50/ano (mesmo do WordPress)  
✅ **SSL:** Gratuito (automático)  
✅ **CDN:** Gratuito (incluído)  
✅ **Backup:** Gratuito (Git)  
✅ **Segurança:** Gratuito (Cloudflare WAF)  

**Total:** R$ 30-50/ano

### WordPress

❌ **Hospedagem:** R$ 240-12000/ano  
❌ **Domínio:** R$ 30-50/ano  
❌ **SSL:** R$ 0-100/ano (depende)  
❌ **CDN:** R$ 0-500/ano (opcional)  
❌ **Backup:** R$ 0-600/ano  
❌ **Segurança:** R$ 0-300/ano (plugins)  

**Total:** R$ 270-12750/ano

**Economia com CNX:** 96-99% de redução de custos.

## Conclusão

CNX oferece:
- **Zero custos de hospedagem** (free tier generoso)
- **Escalabilidade sem custo adicional** (até limites altos)
- **Setup rápido** (minutos vs horas)
- **ROI positivo** (economia imediata)

Para a maioria dos sites, CNX é **gratuito para sempre** (apenas domínio necessário).
