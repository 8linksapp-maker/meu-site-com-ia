import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        siteThemes: collection({
            label: 'Temas',
            slugField: 'slug',
            path: 'src/content/themes/*',
            format: { data: 'yaml' },
            schema: {
                name: fields.text({ label: 'Nome do Tema' }),
                slug: fields.text({ label: 'Slug (ID)' }),
                primaryColor: fields.text({ label: 'Cor Primária (Hex)', defaultValue: '#a855f7' }),
                secondaryColor: fields.text({ label: 'Cor Secundária (Hex)', defaultValue: '#ec4899' }),
                borderRadius: fields.select({
                    label: 'Arredondamento das Bordas',
                    options: [
                        { label: 'Reto (None)', value: '0px' },
                        { label: 'Suave (Small)', value: '4px' },
                        { label: 'Padrão (Medium)', value: '8px' },
                        { label: 'Arredondado (Large)', value: '16px' },
                        { label: 'Cápsula (Full)', value: '9999px' },
                    ],
                    defaultValue: '8px',
                }),
                layout: fields.select({
                    label: 'Arquitetura do Layout (Estrutura)',
                    options: [
                        { label: 'Classic (Padrão)', value: 'classic' },
                    ],
                    defaultValue: 'classic',
                }),
            },
        }),
    },
    singletons: {
        siteSettings: singleton({
            label: 'Configurações do Site',
            path: 'src/content/singletons/settings',
            format: { data: 'yaml' },
            schema: {
                activeTheme: fields.relationship({
                    label: 'Tema Ativo',
                    collection: 'siteThemes',
                    description: 'Selecione o tema estrutural que define a aparência completa do site.',
                }),
                siteName: fields.text({ label: 'Nome do Site', defaultValue: 'Curso de Vendas' }),
            },
        }),
        cursoVendas: singleton({
            label: 'Página de Vendas do Curso',
            path: 'src/content/singletons/curso-vendas',
            format: { data: 'yaml' },
            schema: {
                // 1. HERO SECTION
                heroBadge: fields.text({ label: 'Badge do Hero', defaultValue: '🚀 A NOVA ERA DA CRIAÇÃO DE SITES' }),
                heroTitleLine1: fields.text({ label: 'Título Hero - Linha 1', defaultValue: 'CANSADO DE PAGAR HOSPEDAGEM CARA E TER SITE LENTO?' }),
                heroTitleHighlight: fields.text({ label: 'Título Hero - Destaque', defaultValue: 'APRENDA A CRIAR SITES COM IA' }),
                heroTitleLine2: fields.text({ label: 'Título Hero - Linha 2', defaultValue: 'Sem código, sem custos, em minutos' }),
                heroSubtitle: fields.text({ label: 'Subtítulo do Hero', multiline: true, defaultValue: 'Aprenda a usar nosso CMS moderno para criar sites profissionais com IA, sem conhecimento técnico. Hospedagem 100% gratuita, site 10x mais rápido que WordPress.' }),
                heroCtaText: fields.text({ label: 'Texto do Botão CTA', defaultValue: 'QUERO CRIAR MEU SITE AGORA' }),
                heroCtaUrl: fields.text({ label: 'URL do Botão CTA', defaultValue: '#oferta' }),
                heroFeatures: fields.text({ label: 'Features do Hero', defaultValue: '✅ Sem código | ✅ Hospedagem gratuita | ✅ Site no ar em minutos' }),
                heroImage: fields.image({
                    label: 'Imagem do Hero (opcional)',
                    directory: 'public/images/general',
                    publicPath: '/images/general/',
                }),

                // 2. O VELHO CAMINHO VS O NOVO CAMINHO
                oldVsNewTitle: fields.text({ label: 'Título da Seção', defaultValue: 'O Velho Caminho vs. O Novo Caminho' }),
                oldVsNewSubtitle: fields.text({ label: 'Subtítulo', multiline: true, defaultValue: 'Veja a diferença entre contratar desenvolvedor e pagar hospedagem vs criar seu próprio site com nosso curso' }),
                oldPathTitle: fields.text({ label: 'Título - Velho Caminho', defaultValue: 'O Velho Caminho (Tradicional)' }),
                oldPathItems: fields.array(
                    fields.text({ label: 'Item do Velho Caminho', multiline: true }),
                    { label: 'Itens do Velho Caminho', itemLabel: (props) => props.value || 'Item' }
                ),
                newPathTitle: fields.text({ label: 'Título - Novo Caminho', defaultValue: 'O Novo Caminho (Curso + CMS)' }),
                newPathItems: fields.array(
                    fields.text({ label: 'Item do Novo Caminho', multiline: true }),
                    { label: 'Itens do Novo Caminho', itemLabel: (props) => props.value || 'Item' }
                ),

                // 3. A PONTE DA EPIFANIA
                epiphanyTitle: fields.text({ label: 'Título da Ponte da Epifania', multiline: true, defaultValue: 'O Erro de Anos que me levou a criar este curso' }),
                epiphanyContent: fields.text({ label: 'Conteúdo da Ponte da Epifania', multiline: true }),
                epiphanyQuote: fields.text({ label: 'Citação em Destaque', multiline: true }),
                epiphanyStats: fields.array(
                    fields.object({
                        number: fields.text({ label: 'Número' }),
                        label: fields.text({ label: 'Rótulo' }),
                        icon: fields.text({ label: 'Ícone (emoji)' }),
                    }),
                    { label: 'Estatísticas', itemLabel: (props) => `${props.fields.number.value} ${props.fields.label.value}` }
                ),
                epiphanyImage: fields.image({
                    label: 'Imagem da Ponte da Epifania (opcional)',
                    directory: 'public/images/general',
                    publicPath: '/images/general/',
                }),

                // 4. MECANISMO ÚNICO (Módulos do Curso)
                mechanismTitle: fields.text({ label: 'Título do Mecanismo Único', defaultValue: 'O Que Você Vai Aprender no Curso' }),
                mechanismItems: fields.array(
                    fields.object({
                        number: fields.text({ label: 'Número do Módulo' }),
                        icon: fields.text({ label: 'Ícone (emoji)' }),
                        title: fields.text({ label: 'Título do Módulo' }),
                        description: fields.text({ label: 'Descrição', multiline: true }),
                    }),
                    { label: 'Módulos do Curso', itemLabel: (props) => props.fields.title.value }
                ),
                mechanismFooter: fields.text({ label: 'Texto Final do Mecanismo', multiline: true, defaultValue: 'Tudo isso sem escrever uma linha de código' }),

                // 5. DEMONSTRAÇÃO TÉCNICA
                demoTitle: fields.text({ label: 'Título da Demonstração', multiline: true, defaultValue: 'Veja Como é Simples Criar um Site' }),
                demoDescription: fields.text({ label: 'Descrição da Demonstração', multiline: true }),
                demoVideoUrl: fields.text({ label: 'URL do Vídeo (opcional)' }),
                demoImage: fields.image({
                    label: 'Imagem da Demonstração (opcional)',
                    directory: 'public/images/general',
                    publicPath: '/images/general/',
                }),
                demoFeatures: fields.array(
                    fields.object({
                        icon: fields.text({ label: 'Ícone (emoji)' }),
                        title: fields.text({ label: 'Título' }),
                        description: fields.text({ label: 'Descrição', multiline: true }),
                    }),
                    { label: 'Features da Demonstração', itemLabel: (props) => props.fields.title.value }
                ),

                // 6. O CAMINHO COMPLETO (Processo do Curso)
                pathTitle: fields.text({ label: 'Título - O Caminho Completo', defaultValue: 'Sua Jornada do Zero ao Site no Ar' }),
                pathSubtitle: fields.text({ label: 'Subtítulo', multiline: true, defaultValue: 'Siga o passo a passo do curso e tenha seu site profissional no ar em horas, não dias ou semanas.' }),
                pathSteps: fields.array(
                    fields.object({
                        number: fields.text({ label: 'Número da Aula' }),
                        icon: fields.text({ label: 'Ícone (emoji)' }),
                        title: fields.text({ label: 'Título da Aula' }),
                        description: fields.text({ label: 'Descrição', multiline: true }),
                    }),
                    { label: 'Aulas do Curso', itemLabel: (props) => `${props.fields.number.value} - ${props.fields.title.value}` }
                ),

                // 7. DEPOIMENTOS/PROVA SOCIAL
                testimonialsTitle: fields.text({ label: 'Título dos Depoimentos', defaultValue: 'O Que Nossos Alunos Estão Dizendo' }),
                testimonialsSubtitle: fields.text({ label: 'Subtítulo', multiline: true, defaultValue: 'Resultados reais de quem fez o curso e criou seu site' }),
                testimonials: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Nome do Aluno' }),
                        role: fields.text({ label: 'Cargo/Profissão (opcional)' }),
                        rating: fields.text({ label: 'Avaliação (ex: ★★★★★)', defaultValue: '★★★★★' }),
                        text: fields.text({ label: 'Texto do Depoimento', multiline: true }),
                        image: fields.image({
                            label: 'Foto do Aluno (opcional)',
                            directory: 'public/images/general',
                            publicPath: '/images/general/',
                        }),
                        videoUrl: fields.text({ label: 'URL do Vídeo Depoimento (opcional)' }),
                    }),
                    { label: 'Depoimentos', itemLabel: (props) => props.fields.name.value || 'Depoimento' }
                ),

                // 8. A OFERTA
                offerTitle: fields.text({ label: 'Título da Oferta', multiline: true, defaultValue: 'O Que Você Recebe no Curso' }),
                offerItems: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Título do Item' }),
                        description: fields.text({ label: 'Descrição', multiline: true }),
                    }),
                    { label: 'Itens da Oferta', itemLabel: (props) => props.fields.title.value }
                ),
                offerBadge: fields.text({ label: 'Badge da Oferta', defaultValue: '🎯 TUDO QUE VOCÊ PRECISA PARA CRIAR SEU SITE' }),
                offerPriceTitle: fields.text({ label: 'Título do Preço', defaultValue: 'Investimento' }),
                offerPriceSubtitle: fields.text({ label: 'Subtítulo do Preço', defaultValue: 'Acesso completo ao curso' }),
                offerPrice: fields.text({ label: 'Preço', defaultValue: 'R$ 997' }),
                offerCtaText: fields.text({ label: 'Texto do Botão CTA', defaultValue: 'QUERO MEU ACESSO AGORA' }),
                offerCtaUrl: fields.text({ label: 'URL do Botão CTA', defaultValue: '/contato' }),
                offerBonuses: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Título do Bônus' }),
                        description: fields.text({ label: 'Descrição', multiline: true }),
                        icon: fields.text({ label: 'Ícone (emoji, opcional)' }),
                    }),
                    { label: 'Bônus do Curso', itemLabel: (props) => props.fields.title.value }
                ),

                // 9. GARANTIA
                guaranteeTitle: fields.text({ label: 'Título da Garantia', multiline: true, defaultValue: 'O Risco Está 100% Nas Minhas Costas' }),
                guaranteeText: fields.text({ label: 'Texto da Garantia', multiline: true }),
                guaranteeBadge: fields.text({ label: 'Badge da Garantia', defaultValue: 'Garantia Incondicional' }),
                guaranteeDays: fields.text({ label: 'Dias de Garantia', defaultValue: '7' }),

                // 10. FAQ
                faqTitle: fields.text({ label: 'Título do FAQ', defaultValue: 'Suas dúvidas respondidas' }),
                faqItems: fields.array(
                    fields.object({
                        question: fields.text({ label: 'Pergunta' }),
                        answer: fields.text({ label: 'Resposta', multiline: true }),
                    }),
                    { label: 'Perguntas Frequentes', itemLabel: (props) => props.fields.question.value }
                ),

                // 11. A ESCOLHA É SUA
                choiceTitle: fields.text({ label: 'Título Final', defaultValue: 'A Escolha é Sua' }),
                choiceOption1Title: fields.text({ label: 'Título Opção 1', defaultValue: 'Opção 1' }),
                choiceOption1Text: fields.text({ label: 'Texto Opção 1', multiline: true }),
                choiceOption2Title: fields.text({ label: 'Título Opção 2', defaultValue: 'Opção 2' }),
                choiceOption2Text: fields.text({ label: 'Texto Opção 2', multiline: true }),
                choiceCtaText: fields.text({ label: 'Texto do Botão Final', defaultValue: 'QUERO CRIAR MEU SITE AGORA' }),
                choiceCtaUrl: fields.text({ label: 'URL do Botão Final', defaultValue: '/contato' }),
                choiceFooter: fields.text({ label: 'Texto Final', defaultValue: 'Comece hoje. Site no ar em horas. Economia para sempre.' }),
            },
        }),
    },
});
