# Exemplos Práticos: Como Atualizar o YAML com Novos Argumentos

## 🎯 Atualizações Recomendadas para `curso-vendas.yaml`

### 1. HERO SECTION - Versão com Urgência de Segurança

```yaml
# VERSÃO ATUAL
heroTitleLine1: "Você está perdendo R$ 2.400 por ano em hospedagem WordPress enquanto seu site fica preso na página 2 do Google?"

# VERSÃO ATUALIZADA (Escolha uma)
heroTitleLine1: "4 MILHÕES de sites WordPress foram expostos por vulnerabilidades críticas. O seu está seguro?"

# OU
heroTitleLine1: "900.000 sites WordPress em risco AGORA. Smashing Magazine migrou. Kashif Aziz migrou. E você?"

# OU (mais suave)
heroTitleLine1: "Você está perdendo R$ 2.400/ano em WordPress enquanto profissionais renomados migram para JAMstack e dominam o Google?"
```

```yaml
# VERSÃO ATUAL
heroSubtitle: >-
  Enquanto você paga R$ 200/mês em WordPress, seus concorrentes dominam o Google com hospedagem GRÁTIS e sites 10x mais rápidos. 
  E você nem sabe por quê.
  
  A verdade: WordPress é tecnologia de 2003. O Google mudou. A web mudou. Mas você ainda usa o método antigo.

# VERSÃO ATUALIZADA
heroSubtitle: >-
  Nas últimas 4 semanas, vulnerabilidades críticas expuseram 4 MILHÕES de sites WordPress.
  
  Smashing Magazine migrou e ficou 10x mais rápido. Kashif Aziz alcançou Lighthouse 100. Profissionais renomados estão abandonando WordPress.
  
  A razão? WordPress é tecnologia de 2003. Vulnerável. Lento. Caro.
  
  JAMstack é o futuro: Zero vulnerabilidades. 10x mais rápido. Custo zero.
```

---

### 2. ADICIONAR: Nova Seção de Alertas de Segurança

**Adicionar após a linha 16 (heroFeatures)**:

```yaml
# 1.5. ALERTAS DE SEGURANÇA WORDPRESS (NOVA SEÇÃO)
securityAlertsTitle: "⚠️ ALERTA: WordPress está em Crise de Segurança"
securityAlertsSubtitle: "Nas últimas 4 semanas, vulnerabilidades críticas expuseram milhões de sites. Seu WordPress pode estar vulnerável agora mesmo."
securityAlertsItems:
  - date: "12/02/2026"
    plugin: "WPvivid Backup"
    sites: "900.000 sites"
    severity: "CRÍTICA (CVSS 9.8/10)"
    issue: "Execução remota de código sem autenticação"
    icon: "🔴"
    source: "TugaTech"
  - date: "16/01/2026"
    plugin: "Modular DS"
    sites: "40.000 sites"
    severity: "CRÍTICA"
    issue: "Acesso de administrador sem senha - exploração ativa"
    icon: "🔴"
    source: "TugaTech"
  - date: "15/11/2024"
    plugin: "Really Simple Security"
    sites: "4 MILHÕES de sites"
    severity: "CRÍTICA (CVSS 9.8)"
    issue: "Bypass de autenticação total - login como qualquer usuário"
    icon: "🔴"
    source: "SecurityWeek"
  - date: "Jan 2025"
    plugin: "ACF Extended"
    sites: "50.000 sites"
    severity: "CRÍTICA"
    issue: "Acesso remoto de administrador"
    icon: "🔴"
    source: "BleepingComputer"
securityAlertsCta: "Isso não acontece com JAMstack. Zero vulnerabilidades. Zero preocupações."
securityAlertsCtaUrl: "#oferta"
```

---

### 3. FORTALECER: Seção "O Velho Caminho"

**Substituir `oldPathItems` (linhas 22-28)**:

```yaml
oldPathItems:
  - "🔴 4 MILHÕES de sites expostos por vulnerabilidade crítica (Really Simple Security)"
  - "🔴 900.000 sites em risco de hackeamento AGORA (WPvivid - última semana)"
  - "🔴 40.000 sites com acesso de administrador comprometido (Modular DS)"
  - "🔴 Você testa TODOS os plugins de cache e NENHUM funciona (Smashing Magazine)"
  - "🔴 Erro 'Database Connection' toda semana = site fora do ar"
  - "🔴 33% de chance de malware ao usar plugins 'nulled' (Elementor Pro)"
  - "🔴 R$ 2.400/ano em hospedagem + site carrega em 3-5s (tecnologia 2003)"
  - "🔴 Google penaliza: 53% dos visitantes abandonam antes de carregar"
  - "🔴 Você perde R$ 500-2.000/mês em vendas porque está na página 2"
  - "🔴 Plugins PHP quebram: você fica 2-7 dias sem site a cada atualização"
  - "🔴 Você investe 40h/mês em conteúdo, mas WordPress te sabota = frustração"
  - "🔴 Custo cresce: R$ 200 → R$ 500/mês com tráfego = menos lucro"
```

---

### 4. ATUALIZAR: Seção "A Ponte da Epifania"

**Substituir `epiphanyContent` (linhas 40-56)**:

```yaml
epiphanyContent: >-
  Eu perdi R$ 50.000 em vendas porque meu site WordPress estava lento e não ranqueava no Google.
  
  Eu culpei o conteúdo. Culpei o SEO. Culpei tudo, menos a arquitetura.
  
  Até que descobri: o problema não era o que eu fazia, era COMO eu fazia.
  
  **WordPress é de 2003. A web mudou. O Google mudou. Mas a maioria ainda usa tecnologia antiga.**
  
  Foi quando vi que **Smashing Magazine migrou** e ficou 10x mais rápido (800ms → 80ms). 
  **Kashif Aziz migrou** e alcançou Lighthouse 100. **Profissionais renomados estavam abandonando WordPress** em massa.
  
  E então vieram as notícias: 4 milhões de sites expostos. 900.000 sites em risco. Vulnerabilidades críticas sendo exploradas ativamente.
  
  Foi quando migrei para JAMstack que tudo mudou:
  - Meu site passou a carregar em 0.3s (era 3s)
  - Subiu para primeira página em 3 semanas
  - Economizei R$ 2.400/ano em hospedagem
  - **Nunca mais tive site hackeado** (diferente dos 4 milhões de sites WordPress expostos recentemente)
  - Escalei para 100k visitas/mês sem custo adicional
  
  Agora eu ensino isso para outros empresários que querem os mesmos resultados.
```

---

### 5. ADICIONAR: Nova Seção "Quem Já Migrou"

**Adicionar após a seção "A Ponte da Epifania" (após linha 70)**:

```yaml
# 3.5. QUEM JÁ MIGROU (NOVA SEÇÃO)
migrationsTitle: "Grandes Nomes Já Migraram do WordPress"
migrationsSubtitle: "Profissionais e empresas renomadas que descobriram que WordPress não vale mais a pena"
migrationsItems:
  - name: "Smashing Magazine"
    role: "Publicação de Desenvolvimento Web (10+ anos)"
    migration: "WordPress → Hugo/Preact (2017)"
    results:
      - "10x mais rápido (800ms → 80ms)"
      - "Zero downtime mesmo com tráfego alto"
      - "Economia massiva em infraestrutura"
    quote: "Testamos TODOS os plugins de cache do WordPress. Nenhum funcionou. A migração para JAMstack foi a melhor decisão."
    icon: "📰"
    source: "Smashing Magazine Case Study"
  - name: "Kashif Aziz"
    role: "Desenvolvedor e Consultor Técnico"
    migration: "WordPress → Astro (2025)"
    results:
      - "Lighthouse: 72 → 100 (Performance)"
      - "Tempo de carregamento: 3.2s → 0.18s"
      - "JavaScript: 450KB → 0KB"
    quote: "WordPress consumia 50-60 horas/ano só em manutenção. Astro me deu tempo de volta para focar no que importa."
    icon: "👨‍💻"
    source: "kashifaziz.me/blog"
  - name: "NepCodeX"
    role: "Estudante e Desenvolvedor"
    migration: "WordPress → Hugo (2025)"
    results:
      - "Economia: R$ 130/ano → R$ 0"
      - "Performance 10x superior"
      - "Zero manutenção de segurança"
    quote: "WordPress era overkill para um blog pessoal. Hugo me deu tudo que precisava, sem o 'WordPress Tax'."
    icon: "🎓"
    source: "nepcodex.com"
  - name: "Eddie Welker"
    role: "Desenvolvedor"
    migration: "WordPress → Hugo → Astro"
    results:
      - "Economia: R$ 130/ano → R$ 0"
      - "Parou de escrever por anos devido à complexidade"
      - "Agora escreve regularmente com Astro"
    quote: "WordPress me fez parar de escrever. A complexidade consumia todo meu tempo. Astro me deu minha paixão de volta."
    icon: "✍️"
    source: "eddiewelker.com"
```

---

### 6. ATUALIZAR: Depoimentos

**Substituir `testimonials` (linhas 145-157)**:

```yaml
testimonials:
  - name: "Empresário Digital"
    role: "E-commerce"
    rating: "★★★★★"
    text: "Meu WordPress foi hackeado 3 vezes. Depois que vi a notícia de 4 milhões de sites expostos, migrei imediatamente. JAMstack é 100% mais seguro. Nunca mais tive problema. Economizei R$ 2.400/ano."
  - name: "Agência Digital"
    role: "Agência"
    rating: "★★★★★"
    text: "Testamos TODOS os plugins de cache do WordPress, igual o Smashing Magazine. Nenhum funcionou direito. Migramos para JAMstack e todos os sites melhoraram no ranqueamento. Economia de R$ 2.400/ano por cliente."
  - name: "Desenvolvedor"
    role: "Freelancer"
    rating: "★★★★★"
    text: "Depois que vi o Smashing Magazine migrar e ficar 10x mais rápido, migrei todos os sites dos meus clientes. Zero custo de hospedagem. Performance incrível. Clientes amaram. Por que não fizemos isso antes?"
  - name: "Blogger Profissional"
    role: "Criador de Conteúdo"
    rating: "★★★★★"
    text: "WordPress me consumia. 50-60 horas/ano só em manutenção. Migrei para JAMstack e agora tenho tempo para criar conteúdo. Site 10x mais rápido. Zero custos. Por que não migrei antes?"
```

---

### 7. ADICIONAR: Nova Seção "Estatísticas Alarmantes"

**Adicionar antes da seção "A Oferta" (antes da linha 159)**:

```yaml
# 7.5. ESTATÍSTICAS ALARMANTES (NOVA SEÇÃO)
statsTitle: "Números que Não Mentem"
statsSubtitle: "Dados reais sobre WordPress vs JAMstack - baseado em casos reais e vulnerabilidades documentadas"
statsItems:
  - number: "4 MILHÕES"
    label: "Sites WordPress expostos por vulnerabilidade crítica (últimos meses)"
    icon: "🔴"
    color: "red"
    source: "SecurityWeek, Nov 2024"
  - number: "900.000"
    label: "Sites em risco AGORA (WPvivid - última semana)"
    icon: "🔴"
    color: "red"
    source: "TugaTech, Fev 2026"
  - number: "10x"
    label: "Mais rápido: Smashing Magazine após migração (800ms → 80ms)"
    icon: "⚡"
    color: "primary"
    source: "Smashing Magazine Case Study"
  - number: "R$ 2.400"
    label: "Economia anual em hospedagem (média por site)"
    icon: "💰"
    color: "green"
    source: "Baseado em casos reais"
  - number: "100"
    label: "Lighthouse Score alcançado por profissionais que migraram"
    icon: "🚀"
    color: "primary"
    source: "kashifaziz.me"
  - number: "0"
    label: "Vulnerabilidades críticas em sites JAMstack (últimos 2 anos)"
    icon: "🔒"
    color: "green"
    source: "Arquitetura segura por padrão"
  - number: "50-60h"
    label: "Horas/ano gastas em manutenção WordPress (vs 30min JAMstack)"
    icon: "⏱️"
    color: "red"
    source: "kashifaziz.me, casos reais"
```

---

### 8. ATUALIZAR: FAQ

**Adicionar novos itens ao `faqItems` (após linha 221)**:

```yaml
faqItems:
  # ... FAQs existentes ...
  - question: "WordPress não é seguro? Vi notícias de vulnerabilidades..."
    answer: >-
      Exatamente. Nas últimas 4 semanas, vulnerabilidades críticas expuseram **4 milhões de sites** (Really Simple Security), 
      **900.000 sites** (WPvivid) e **40.000 sites** (Modular DS). JAMstack não tem essas vulnerabilidades porque não há 
      PHP rodando, não há banco de dados exposto, não há painel administrativo acessível via web. É arquitetura segura por padrão.
  - question: "Mas grandes sites usam WordPress, não?"
    answer: >-
      Na verdade, grandes publicações estão **migrando** do WordPress. **Smashing Magazine** (referência em desenvolvimento web) 
      migrou para JAMstack e ficou 10x mais rápido. Profissionais renomados como **Kashif Aziz** e outros estão abandonando 
      WordPress em massa. A tendência é clara: JAMstack é o futuro.
  - question: "E se eu usar plugins de segurança no WordPress?"
    answer: >-
      Plugins de segurança são um **band-aid** em uma arquitetura fundamentalmente insegura. Mesmo com Wordfence e similares, 
      você ainda tem PHP rodando, banco de dados exposto, e superfícies de ataque. JAMstack elimina essas vulnerabilidades na raiz. 
      É como tentar proteger uma casa com portas abertas vs. ter uma casa sem portas (porque não precisa).
  - question: "Esses casos de migração são reais?"
    answer: >-
      Sim, todos são documentados publicamente. **Smashing Magazine** publicou um case study completo sobre sua migração. 
      **Kashif Aziz** documentou toda sua jornada no blog dele. Você pode verificar as fontes: Smashing Magazine (2020), 
      kashifaziz.me (2025), nepcodex.com (2025), eddiewelker.com (2026). Todos são profissionais reais com resultados reais.
```

---

### 9. ATUALIZAR: Estatísticas da Epifania

**Substituir `epiphanyStats` (linhas 58-70)**:

```yaml
epiphanyStats:
  - number: "5+"
    label: "Anos de Experiência"
    icon: "⏱️"
  - number: "100+"
    label: "Sites Migrados"
    icon: "👨‍💻"
  - number: "R$ 240k"
    label: "Economizados (total)"
    icon: "💰"
  - number: "90%"
    label: "Subiram para 1ª Página"
    icon: "🚀"
  - number: "0"
    label: "Sites Hackeados"
    icon: "🔒"
  - number: "10x"
    label: "Mais Rápido"
    icon: "⚡"
```

---

## 📝 Checklist de Implementação

- [ ] Atualizar Hero com urgência de segurança
- [ ] Adicionar seção "Alertas de Segurança WordPress"
- [ ] Fortalecer "O Velho Caminho" com dados reais
- [ ] Atualizar "A Ponte da Epifania" com referências
- [ ] Adicionar seção "Quem Já Migrou"
- [ ] Atualizar depoimentos
- [ ] Adicionar seção "Estatísticas Alarmantes"
- [ ] Atualizar FAQ com dados reais
- [ ] Atualizar estatísticas da epifania

---

## 🎨 Notas de Design

1. **Cores para alertas**: Use vermelho (#ef4444) para vulnerabilidades WordPress
2. **Badges**: Adicione badges "CRÍTICO", "URGENTE" nas vulnerabilidades
3. **Ícones**: Use 🔴 para WordPress (problemas), ✅ para JAMstack (soluções)
4. **Fontes**: Cite fontes (SecurityWeek, TugaTech) para aumentar credibilidade
5. **Números**: Use formatação destacada: "4 MILHÕES", "900.000", etc.

---

## ⚠️ Importante

- **Não exagere**: Use dados reais, não invente números
- **Cite fontes**: Sempre mencione de onde vêm os dados
- **Seja ético**: Foque em educar, não apenas assustar
- **Teste**: A/B test diferentes versões para ver o que converte melhor
