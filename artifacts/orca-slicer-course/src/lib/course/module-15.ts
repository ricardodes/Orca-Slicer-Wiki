import type { Modulo } from '@/lib/types'

export const modulo15: Modulo = {
  slug: 'producao-comercial',
  numero: 15,
  titulo: 'Produção Comercial e Otimização de Lucro',
  subtitulo: 'Transforme conhecimento técnico em negócio',
  descricao:
    'Calcule custo e lucro real, organize uma fazenda de impressão, controle qualidade, embale com profissionalismo e venda em Shopee, Mercado Livre e Amazon.',
  licoes: [
    {
      slug: 'custo-lucro',
      titulo: 'Cálculo de custo, lucro e tempo de máquina',
      resumo: 'A fórmula real do preço: material, energia, máquina, falhas e margem.',
      duracao: '24 min',
      nivel: 'Avançado',
      intro: [
        'Quem vende impressão 3D olhando só o preço do filamento fecha o negócio no prejuízo. O custo real tem várias camadas.',
        'O profissional precifica com método: soma todos os custos, aplica taxa de falha e marketplace, e só então a margem de lucro.',
      ],
      secoes: [
        {
          titulo: 'Os componentes do custo',
          conteudo: [
            'Material: gramas da peça × preço por grama do filamento.',
            'Energia: potência média (kW) × horas × tarifa por kWh.',
            'Tempo de máquina: depreciação da impressora + manutenção, rateados por hora de uso.',
            'Mão de obra: tempo de preparo, pós-processamento e embalagem.',
            'Taxa de falha: some 5–15% para cobrir peças refugadas.',
          ],
        },
        {
          titulo: 'A fórmula de precificação',
          conteudo: [
            'Custo total = material + energia + máquina/hora × horas + mão de obra.',
            'Preço de venda = custo total × multiplicador (2x a 4x conforme o produto e o canal).',
            'Desconte ainda a comissão do marketplace e o frete antes de definir o lucro líquido.',
          ],
        },
        {
          titulo: 'Precificando por canal de venda',
          conteudo: [
            'Marketplace (Shopee, ML, Amazon): comissão de 10–20% + taxa de anúncio.',
            'Venda direta (Instagram, WhatsApp): sem comissão, margem maior.',
            'Encomenda custom: cobrar setup + material + tempo de design.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Exemplo de custo de uma peça (50 g, 3 h)',
          colunas: ['Item', 'Cálculo', 'Valor'],
          linhas: [
            ['Material', '50 g × R$0,08/g', 'R$ 4,00'],
            ['Energia', '0,15 kW × 3 h × R$0,90', 'R$ 0,40'],
            ['Máquina/hora', '3 h × R$0,50', 'R$ 1,50'],
            ['Mão de obra', '15 min preparo/embalagem', 'R$ 3,00'],
            ['Custo total', 'soma + 10% falha', '~R$ 9,79'],
            ['Preço (3x)', 'custo × 3', '~R$ 29,00'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define um preço que cobre todos os custos e ainda gera lucro real.',
        errosComuns: [
          'Precificar só pelo filamento.',
          'Esquecer comissão do marketplace e frete.',
          'Não reservar margem para falhas.',
        ],
        comoCorrigir: [
          'Use a fórmula completa de custo.',
          'Desconte taxas do canal antes da margem.',
        ],
      },
      exercicios: [
        'Calcule o custo total real de uma peça sua usando a fórmula completa.',
        'Defina o preço de venda para uma margem líquida de 40% após comissões do marketplace.',
      ],
      testes: [
        'Por que a taxa de falha deve ser incluída no custo mesmo quando a peça específica não falhou?',
        'Como calcular o custo de energia de uma impressão de 8 horas com uma impressora de 200W?',
      ],
      desafio: 'Monte uma planilha de custos para os 5 produtos mais populares que você imprime ou planeja imprimir. Calcule a margem líquida após todas as deduções do marketplace.',
    },
    {
      slug: 'fazenda-qualidade',
      titulo: 'Fazenda de Impressão, Controle de Qualidade e Embalagem',
      resumo: 'Como escalar a produção, garantir consistência e apresentar profissionalmente.',
      duracao: '20 min',
      nivel: 'Especialista',
      intro: [
        'Uma impressora é um negócio de hobby. Duas ou mais impressoras em paralelo são uma fazenda — e exigem gestão profissional para ser lucrativas.',
      ],
      secoes: [
        {
          titulo: 'Organizando uma fazenda de impressão',
          conteudo: [
            'Perfis padronizados: cada produto tem um perfil salvo e documentado — nunca improvise em produção.',
            'Manutenção preventiva: troque bicos a cada 200–500 horas, lubrificar guias semanalmente.',
            'Monitoramento: câmera IP ou OctoPrint/Bambu conectado para detectar falhas remotamente.',
            'Lotes: organize placas completas para maximizar o uso do volume de impressão.',
          ],
        },
        {
          titulo: 'Controle de qualidade',
          conteudo: [
            'Primeiro artigo: imprima e inspecione 1 peça antes de rodar o lote.',
            'Inspeção visual: superfície, costura, topo, dimensões críticas.',
            'Peças defeituosas: recicle ou sucate — nunca venda uma peça com defeito.',
            'Rastreabilidade: anote o filamento, perfil e data de cada lote.',
          ],
        },
        {
          titulo: 'Embalagem profissional',
          conteudo: [
            'Embalagem importa tanto quanto o produto — é a primeira impressão física do cliente.',
            'Identifique o produto com etiqueta (nome, material, uso).',
            'Proteja contra impacto (bubble wrap, papel kraft) e umidade.',
            'Cartão de agradecimento personalizado aumenta recompra e avaliações positivas.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Permite escalar a produção mantendo qualidade consistente e margem lucrativa.',
        casosReais: [
          'Uma fazenda de 4 impressoras bem configurada pode faturar R$3.000–8.000/mês com produtos populares no ML.',
        ],
      },
      exercicios: [
        'Crie um checklist de controle de qualidade para um produto específico que você produz.',
        'Configure o OrcaSlicer para preencher uma placa inteira com o máximo de peças sem sobreposição.',
      ],
      testes: [
        'Por que padronizar perfis é crítico em produção em série?',
        'O que é "primeiro artigo" no contexto de controle de qualidade?',
      ],
    },
  ],
}
