import type { Modulo } from '@/lib/types'

export const modulo04: Modulo = {
  slug: 'materiais',
  numero: 4,
  titulo: 'Materiais',
  subtitulo: 'PLA, PETG, ABS, ASA, TPU, PC, Nylon e Compósitos CF',
  descricao:
    'Cada material tem temperatura, velocidade, ventilação, resistência, aplicações e problemas próprios. Conhecer o material é metade da batalha.',
  licoes: [
    {
      slug: 'pla-petg',
      titulo: 'PLA e PETG — Os pilares do dia a dia',
      resumo: 'Os dois materiais mais usados: quando escolher cada um e como configurá-los.',
      duracao: '15 min',
      nivel: 'Iniciante',
      intro: [
        'PLA e PETG cobrem 80% das necessidades. PLA é fácil, rígido e detalhado, mas frágil e sensível a calor. PETG é mais resistente, flexível e resistente à temperatura, mas mais difícil de imprimir bem.',
      ],
      secoes: [
        {
          titulo: 'PLA',
          conteudo: [
            'Temperatura: bico 190–220 °C, mesa 50–60 °C.',
            'Velocidade: aceita alta (high-speed PLA até 250+ mm/s).',
            'Ventilação: 80–100%.',
            'Resistência: rígido e forte em compressão, mas frágil (quebra seco) e amolece a ~55–60 °C.',
            'Aplicações: protótipos, decoração, peças sem calor/sol.',
            'Problemas: deforma em carro quente; frágil sob impacto.',
          ],
        },
        {
          titulo: 'PETG',
          conteudo: [
            'Temperatura: bico 230–250 °C, mesa 70–85 °C.',
            'Velocidade: moderada — muito rápido causa subextrusão e stringing.',
            'Ventilação: 30–60%.',
            'Resistência: tenaz (dobra antes de quebrar), aguenta ~80 °C.',
            'Aplicações: peças com carga moderada, expostas ao sol, em contato com água.',
            'Problemas: stringing, aderência entre camadas ruim com fan alto.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'PLA vs PETG',
          colunas: ['Propriedade', 'PLA', 'PETG'],
          linhas: [
            ['Temperatura bico', '190–220 °C', '230–250 °C'],
            ['Fan', '80–100%', '30–60%'],
            ['Resistência calor', '~55 °C', '~80 °C'],
            ['Facilidade', 'Fácil', 'Moderada'],
            ['Stringing', 'Baixo', 'Alto'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define o material base para a peça — impacta todas as propriedades físicas e configurações.',
        quandoUsar: 'PLA para decoração e protótipos; PETG para uso externo, umidade e carga moderada.',
        errosComuns: [
          'Usar PLA em peças expostas ao sol (carro) — amolece e deforma.',
          'Usar fan alto com PETG — causa delaminação.',
        ],
      },
      exercicios: [
        'Imprima a mesma peça em PLA e PETG e teste a resistência ao impacto.',
        'Deixe uma peça PLA no carro no verão e observe o resultado.',
      ],
      testes: [
        'A que temperatura o PLA começa a amolecer?',
        'Por que o PETG precisa de menos fan que o PLA?',
      ],
    },
    {
      slug: 'abs-asa-tpu',
      titulo: 'ABS, ASA e TPU — Alta Performance e Flexíveis',
      resumo: 'Materiais para ambientes extremos e aplicações especializadas.',
      duracao: '18 min',
      nivel: 'Avançado',
      intro: [
        'ABS e ASA oferecem resistência térmica e mecânica superiores, mas exigem câmara fechada e cuidado especial. TPU abre o mundo das peças flexíveis e amortecedoras.',
      ],
      secoes: [
        {
          titulo: 'ABS',
          conteudo: [
            'Temperatura: bico 230–260 °C, mesa 100–110 °C.',
            'Câmara fechada obrigatória — warping grave sem ela.',
            'Fan: quase zero (0–10%). Fan alto causa rachaduras entre camadas.',
            'Vantagem: aguenta ~100 °C, pode ser lixado e alisado com acetona.',
            'Desvantagem: cheiro forte (emissões de estireno), difícil de imprimir.',
          ],
        },
        {
          titulo: 'ASA',
          conteudo: [
            'ABS melhorado com resistência UV — não amarela ao sol.',
            'Temperatura similar ao ABS (240–260 °C), câmara fechada recomendada.',
            'Ideal para peças externas permanentes: suportes ao ar livre, tampas de caixas elétricas.',
          ],
        },
        {
          titulo: 'TPU (Flexível)',
          conteudo: [
            'Temperatura: 220–240 °C, mesa 40–60 °C.',
            'Velocidade muito baixa (20–40 mm/s) — filamento flexível não suporta pressão alta.',
            'Use extrusor Direct Drive — Bowden causa problemas sérios com TPU.',
            'Aplicações: cases, borrachas, amortecedores, juntas, peças que precisam dobrar.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Materiais avançados',
          colunas: ['Material', 'Temp. Bico', 'Câmara', 'Resistência Calor', 'Uso'],
          linhas: [
            ['ABS', '230–260 °C', 'Obrigatória', '~100 °C', 'Peças mecânicas'],
            ['ASA', '240–260 °C', 'Recomendada', '~100 °C', 'Uso externo / UV'],
            ['TPU Shore 95A', '220–235 °C', 'Não', 'Baixa', 'Borrachas, amortecedores'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Fornece propriedades superiores de calor, UV ou flexibilidade inacessíveis com PLA/PETG.',
        errosComuns: [
          'Tentar imprimir ABS sem câmara fechada — warping inevitável.',
          'Usar velocidade alta com TPU — o extrusor patina e o filamento dobra.',
        ],
        comoCorrigir: [
          'Feche a câmara e mantenha temperatura ambiente constante para ABS.',
          'Use velocidade máxima de 30 mm/s para TPU e direct drive.',
        ],
      },
      exercicios: [
        'Imprima uma junta de vedação em TPU e teste sua compressibilidade.',
        'Compare ABS e ASA expostos ao sol por 2 semanas.',
      ],
      testes: [
        'Por que o ABS exige câmara fechada?',
        'Qual extrusor é obrigatório para TPU e por quê?',
      ],
    },
  ],
}
