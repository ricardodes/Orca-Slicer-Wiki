import type { Modulo } from '@/lib/types'

export const modulo09: Modulo = {
  slug: 'comercial',
  numero: 9,
  titulo: 'Impressão 3D Comercial',
  subtitulo: 'Transforme conhecimento técnico em lucro',
  descricao:
    'Como calcular custo real e lucro, reduzir desperdício e criar perfis comerciais padronizados. A parte que separa hobby de negócio.',
  licoes: [
    {
      slug: 'custo-lucro-perfis',
      titulo: 'Custo, Lucro e Perfis Comerciais',
      resumo: 'A fórmula completa de precificação e como padronizar a produção.',
      duracao: '18 min',
      nivel: 'Especialista',
      intro: [
        'Quem não calcula custo real trabalha de graça (ou no prejuízo). O preço de uma peça vai muito além do peso do filamento.',
        'O custo total inclui material, energia, depreciação da máquina, taxa de falha, pós-processamento e o seu tempo.',
      ],
      secoes: [
        {
          titulo: 'Calculando o custo real',
          conteudo: [
            'Material: (gramas usadas ÷ 1000) × preço do kg. Inclua o suporte e o purge.',
            'Energia: potência média (kW) × horas × tarifa kWh.',
            'Depreciação: preço da máquina ÷ vida útil estimada (horas) × horas da peça.',
            'Manutenção e consumíveis: bicos, correias, placa — rateie por hora.',
            'Taxa de falha: adicione uma % (ex.: 5–10%) para cobrir reimpressões.',
            'Mão de obra: tempo de setup, remoção de suporte, acabamento × seu valor/hora.',
          ],
        },
        {
          titulo: 'Definindo o preço de venda',
          conteudo: [
            'Preço mínimo = custo total ÷ (1 - margem desejada).',
            'Marketplace: desconte a comissão (10–20%) e o frete antes de calcular a margem.',
            'Multiplicador típico: 2x a 4x o custo de produção para produtos físicos.',
            'Peças únicas e personalizadas: multiplique mais — o tempo de design e ajuste é custo oculto.',
          ],
        },
        {
          titulo: 'Perfis comerciais padronizados',
          conteudo: [
            'Crie perfis separados para cada categoria de produto: "Rápido", "Qualidade", "Premium".',
            'Cada perfil define camada, velocidade, paredes e infill otimizados para aquela categoria.',
            'Isso garante consistência entre lotes e facilita o orçamento.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Exemplo de custo detalhado (peça de 50g, 3h)',
          colunas: ['Componente', 'Cálculo', 'Valor'],
          linhas: [
            ['Material', '50g × R$0,08/g', 'R$ 4,00'],
            ['Energia', '0,15kW × 3h × R$0,90', 'R$ 0,40'],
            ['Máquina', '3h × R$0,50/h', 'R$ 1,50'],
            ['Mão de obra', '15min × R$12/h', 'R$ 3,00'],
            ['Taxa falha (10%)', '10% do subtotal', 'R$ 0,89'],
            ['Custo total', '', 'R$ 9,79'],
            ['Preço venda (3x)', 'R$9,79 × 3', 'R$ 29,00'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Garante que cada peça vendida cubra todos os custos e gere lucro real.',
        errosComuns: [
          'Precificar só pelo peso do filamento.',
          'Esquecer comissão do marketplace e frete no cálculo da margem.',
          'Ignorar a taxa de falha — uma falha a cada 10 peças aumenta o custo em 10%.',
        ],
        comoCorrigir: [
          'Use uma planilha de custo completa para cada produto.',
          'Simule o preço final no marketplace antes de publicar.',
        ],
      },
      exercicios: [
        'Calcule o custo real de uma peça que você produz atualmente usando a fórmula completa.',
        'Crie um perfil "Produção" no OrcaSlicer com as configurações ótimas para a sua peça mais vendida.',
      ],
      testes: [
        'Por que a taxa de falha precisa ser incluída no custo de cada peça, mesmo quando a peça em questão não falhou?',
        'Como o preço do bico influencia no custo de produção ao longo do tempo?',
      ],
      desafio: 'Monte uma planilha de custo para 5 produtos diferentes que você imprime ou planeja imprimir. Defina o preço de cada um para venda em marketplace com margem de 40% após comissões.',
    },
  ],
}
