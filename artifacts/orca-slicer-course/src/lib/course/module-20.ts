import type { Modulo } from '@/lib/types'

export const modulo20: Modulo = {
  slug: 'velocidade-aceleracao',
  numero: 20,
  titulo: 'Velocidade e Aceleração — Guia Completo',
  subtitulo: 'Cada variável de velocidade explicada',
  descricao:
    'Todas as variáveis de velocidade do OrcaSlicer: print speed, travel speed, first layer speed, outer wall, inner wall, infill, bridges, ironing e aceleração. Saiba o que cada uma faz e como otimizar.',
  licoes: [
    {
      slug: 'todas-velocidades',
      titulo: 'Todas as Variáveis de Velocidade',
      resumo: 'Mapa completo de todas as velocidades configuráveis no OrcaSlicer e seus impactos.',
      duracao: '22 min',
      nivel: 'Avançado',
      intro: [
        'O OrcaSlicer tem dezenas de variáveis de velocidade. Entender cada uma é o que permite configurar velocidade máxima sem perder qualidade.',
        'A estratégia profissional: máximo onde não importa, mínimo onde importa. E o importante é sempre a parede externa.',
      ],
      secoes: [
        {
          titulo: 'Velocidades de impressão (com extrusão)',
          conteudo: [
            'Outer Wall (parede externa): a mais importante. Lenta = melhor acabamento. Tipicamente 40–80 mm/s.',
            'Inner Wall (parede interna): pode ser mais rápida. Tipicamente 80–150 mm/s.',
            'Infill: a mais rápida. 100–300 mm/s dependendo do hotend.',
            'Top Surface: velocidade das camadas superiores — lenta para acabamento liso. 30–60 mm/s.',
            'Bridge: velocidade das pontes. Moderada para melhor resfriamento. 40–80 mm/s.',
            'First Layer: muito lenta para garantir adesão. 20–30 mm/s.',
          ],
        },
        {
          titulo: 'Velocidades de movimento (sem extrusão)',
          conteudo: [
            'Travel Speed: movimento sem extrusão entre regiões. Máximo possível para reduzir tempo de travel.',
            'Lift Z: velocidade do movimento de Z-hop. Alta é ok — não afeta qualidade.',
            'Retract: velocidade de retração do filamento. Moderada a alta — muito rápido pode causar atrito no Bowden.',
          ],
        },
        {
          titulo: 'Configurações de aceleração por região',
          conteudo: [
            'Outer Wall Accel: baixa (500–2000 mm/s²) para suavidade.',
            'Inner Wall / Infill Accel: alta (3000–10000+ mm/s²) para velocidade.',
            'Travel Accel: máximo — sem qualidade em jogo.',
            'First Layer Accel: baixa para estabilidade.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Referência de velocidades por região',
          colunas: ['Região', 'Velocidade Típica', 'Impacto na Qualidade', 'Impacto no Tempo'],
          linhas: [
            ['Parede externa', '40–80 mm/s', 'Alto (acabamento)', 'Baixo (~15% do tempo)'],
            ['Parede interna', '80–150 mm/s', 'Médio', 'Médio'],
            ['Infill', '100–300 mm/s', 'Baixo', 'Alto (~40% do tempo)'],
            ['Travel', 'Máximo', 'Nenhum', 'Médio (~20% do tempo)'],
            ['Primeira camada', '20–30 mm/s', 'Crítico (adesão)', 'Baixo'],
            ['Bridges', '40–80 mm/s', 'Alto (pontes)', 'Baixo'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Controla quanto tempo o cabeçote passa em cada tipo de movimento.',
        comoFunciona: 'Cada velocidade define mm/s para aquele tipo específico de movimento; aceleração define quão rápido essa velocidade é atingida.',
        impactoTempo: 'Infill speed tem maior impacto no tempo total; outer wall tem pouco impacto no tempo mas muito na qualidade.',
        errosComuns: [
          'Aumentar a velocidade da parede externa achando que ganha muito tempo — não ganha.',
          'Manter velocidade de travel baixa — travel alto reduz muito o tempo total.',
        ],
      },
      exercicios: [
        'Calcule o impacto no tempo total de dobrar a velocidade da parede externa vs dobrar a velocidade do infill.',
        'Configure velocidades diferenciadas por região e compare com velocidade uniforme.',
      ],
      testes: [
        'Qual velocidade tem maior impacto no tempo total de impressão?',
        'Por que aumentar a velocidade da parede externa raramente reduz significativamente o tempo?',
      ],
    },
    {
      slug: 'perfis-velocidade-material',
      titulo: 'Perfis de Velocidade por Material',
      resumo: 'Velocidades ideais para PLA, PETG, ABS, TPU e materiais de alta performance.',
      duracao: '18 min',
      nivel: 'Avançado',
      intro: [
        'Cada material tem uma faixa de velocidade ideal. Imprimir fora dessa faixa causa defeitos específicos — subextrusão, delaminação, stringing excessivo ou superfície ruim.',
      ],
      secoes: [
        {
          titulo: 'PLA — Alta velocidade',
          conteudo: [
            'PLA (padrão): 60–150 mm/s de parede externa; 150–300 mm/s de infill com hotend adequado.',
            'PLA High Speed: 150–300+ mm/s de parede externa com hotend CHT ou Volcano.',
            'Aceleração: 2000–10000 mm/s² dependendo do Input Shaper.',
            'Gargalo típico: fluxo volumétrico máximo do hotend.',
          ],
        },
        {
          titulo: 'PETG — Velocidade moderada',
          conteudo: [
            'PETG stringa muito em altas velocidades — mantém filamento fluido entre movimentos.',
            'Parede externa: 40–80 mm/s; Infill: 80–150 mm/s.',
            'Aceleração moderada: 1000–4000 mm/s².',
            'Fan baixo (30–60%) + velocidade moderada = melhor resultado.',
          ],
        },
        {
          titulo: 'ABS/ASA — Velocidade controlada',
          conteudo: [
            'Parede: 40–80 mm/s; Infill: 80–150 mm/s.',
            'Aceleração baixa–moderada: 500–3000 mm/s².',
            'Velocidade alta com ABS causa warping e delaminação.',
          ],
        },
        {
          titulo: 'TPU — Muito lento',
          conteudo: [
            'Parede e infill: 20–40 mm/s máximo.',
            'Aceleração baixa: 200–500 mm/s².',
            'TPU não suporta pressão alta — velocidade alta causa patinagem do extrusor e underextrusion.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Velocidades por material',
          colunas: ['Material', 'Parede Externa', 'Infill', 'Aceleração', 'Limite principal'],
          linhas: [
            ['PLA padrão', '60–150 mm/s', '150–300 mm/s', '2000–10000 mm/s²', 'Fluxo volumétrico'],
            ['PETG', '40–80 mm/s', '80–150 mm/s', '1000–4000 mm/s²', 'Stringing/resfriamento'],
            ['ABS/ASA', '40–80 mm/s', '80–150 mm/s', '500–3000 mm/s²', 'Warping/delaminação'],
            ['TPU', '20–40 mm/s', '20–40 mm/s', '200–500 mm/s²', 'Extrusor patina'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define o envelope de velocidade seguro para cada material.',
        errosComuns: [
          'Usar velocidades de PLA com PETG — stringing e má adesão de camada.',
          'Imprimir TPU com velocidade normal — extrusor patina e gera underextrusion.',
        ],
      },
      exercicios: [
        'Configure perfis de velocidade separados para PLA e PETG na sua impressora.',
        'Descubra o fluxo volumétrico máximo do seu hotend com o teste do OrcaSlicer.',
      ],
      testes: [
        'Por que PETG precisa de velocidade mais baixa que PLA mesmo com temperaturas similares?',
        'O que limita a velocidade do TPU?',
      ],
    },
  ],
}
