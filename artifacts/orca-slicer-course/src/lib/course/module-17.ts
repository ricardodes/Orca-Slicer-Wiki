import type { Modulo } from '@/lib/types'

export const modulo17: Modulo = {
  slug: 'gerador-de-paredes',
  numero: 17,
  titulo: 'Gerador de Paredes — Classic vs Arachne',
  subtitulo: 'O algoritmo que define suas paredes',
  descricao:
    'Entenda a diferença entre o gerador Classic e o Arachne (Variable Width), como cada um afeta a qualidade, a precisão dimensional e o comportamento em peças finas.',
  licoes: [
    {
      slug: 'classic-vs-arachne',
      titulo: 'Classic vs Arachne — Fundamentos',
      resumo: 'Como funcionam os dois geradores de parede e quando cada um é superior.',
      duracao: '20 min',
      nivel: 'Avançado',
      intro: [
        'O OrcaSlicer oferece dois algoritmos para gerar as paredes: o clássico (Classic) e o Arachne (Variable Width). A diferença está em como eles lidam com variações de espessura.',
        'Escolher o errado pode causar aberturas em paredes finas, super-sobreposição em paredes grossas ou artefatos em quinas complexas.',
      ],
      secoes: [
        {
          titulo: 'Classic Wall Generator',
          conteudo: [
            'Gera loops de parede com largura fixa igual à largura de extrusão configurada.',
            'Quando a geometria não divide perfeitamente na largura da linha, deixa uma lacuna ou sobrepõe.',
            'Vantagem: comportamento previsível e estável — bom para peças simples e robustas.',
            'Desvantagem: paredes finas (abaixo de 1 largura de linha) ficam sem material ou com material duplo.',
          ],
        },
        {
          titulo: 'Arachne (Variable Width Path Planning)',
          conteudo: [
            'Adapta a largura de cada linha de parede para preencher exatamente o espaço disponível.',
            'Lida melhor com geometrias complexas, paredes finas e variações de espessura.',
            'Resultado: menos lacunas em paredes finas, transições mais suaves em geometrias orgânicas.',
            'Desvantagem: pode ser menos estável em algumas geometrias muito complexas ou causar linhas muito finas difíceis de imprimir.',
          ],
        },
        {
          titulo: 'Quando usar cada um',
          conteudo: [
            'Use Classic para: peças robustas com geometria simples, peças funcionais com paredes uniformes, quando a previsibilidade é mais importante que o acabamento.',
            'Use Arachne para: peças decorativas com geometria complexa, paredes finas (< 1,2 mm), modelos com variações de espessura, impressão de logotipos e textos em relevo.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Classic vs Arachne',
          colunas: ['Característica', 'Classic', 'Arachne'],
          linhas: [
            ['Largura de linha', 'Fixa', 'Variável'],
            ['Paredes finas', 'Lacunas ou sobreposição', 'Preenchimento adaptativo'],
            ['Estabilidade', 'Alta', 'Média'],
            ['Geometria complexa', 'Artefatos possíveis', 'Melhor resultado'],
            ['Peças funcionais', 'Excelente', 'Bom'],
            ['Textos/logos em relevo', 'Regular', 'Excelente'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define o algoritmo que calcula as trajetórias das paredes externas e internas.',
        comoFunciona: 'Classic usa largura fixa em todos os loops; Arachne ajusta cada segmento de linha para preencher o espaço disponível.',
        quandoUsar: 'Arachne por padrão para peças decorativas; Classic para peças funcionais simples.',
        impactoQualidade: 'Significativo em paredes finas e geometrias complexas.',
      },
      exercicios: [
        'Imprima um texto em relevo com Classic e Arachne e compare a definição das letras.',
        'Imprima uma parede de 0,8 mm de espessura com bico 0,4 mm usando ambos os geradores.',
      ],
      testes: [
        'O que acontece com Classic quando a parede tem espessura de 0,6 mm com bico 0,4 mm?',
        'Por que o Arachne é melhor para textos e geometrias orgânicas?',
      ],
    },
    {
      slug: 'configuracoes-avancadas-paredes',
      titulo: 'Configurações Avançadas de Parede',
      resumo: 'Wall ordering, detect thin walls, overhang de parede e inner/outer wall speed.',
      duracao: '18 min',
      nivel: 'Especialista',
      intro: [
        'Além de escolher o gerador, o OrcaSlicer oferece configurações finas sobre a ordem das paredes, o tratamento de paredes finas e o comportamento nos overhangs.',
      ],
      secoes: [
        {
          titulo: 'Ordem de impressão das paredes',
          conteudo: [
            'Inner/Outer/Inner: começa pelas paredes internas, imprime a externa e volta para internas — melhor para precisão dimensional.',
            'Outer/Inner: externa primeiro — melhor para o acabamento visual da superfície externa.',
            'Inner/Outer: interna primeiro — mais simples, menos comum.',
            'Para peças funcionais onde dimensão importa: Inner/Outer/Inner.',
            'Para peças decorativas onde aparência importa: Outer/Inner.',
          ],
        },
        {
          titulo: 'Detect Thin Walls',
          conteudo: [
            'Quando ativo, o slicer tenta gerar linhas mesmo em regiões que normalmente seriam deixadas em branco.',
            'Essencial para paredes menores que 1 largura de linha — sem isso, ficam furos.',
            'Funciona melhor com Arachne — no Classic, pode gerar linhas muito finas e difíceis de imprimir.',
          ],
        },
        {
          titulo: 'Velocidade de parede e overhangs',
          conteudo: [
            'Parede externa deve ser sempre mais lenta — define o acabamento.',
            'Paredes em overhang beneficiam de velocidade reduzida adicional (50–70% da parede normal) e mais ventilação.',
            'Em overhangs graves (>70°), use Ironing e Bridge settings específicos.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Controla a ordem de impressão e o comportamento em regiões problemáticas.',
        impactoQualidade: 'A ordem Outer/Inner melhora o acabamento; Inner/Outer/Inner melhora a precisão.',
        impactoTempo: 'A ordem de parede tem impacto mínimo no tempo — priorize a qualidade.',
      },
      exercicios: [
        'Compare Outer/Inner e Inner/Outer/Inner em uma caixa quadrada — meça as dimensões externas.',
        'Ative Detect Thin Walls em um modelo com letras em relevo e observe o resultado.',
      ],
      testes: [
        'Por que Inner/Outer/Inner é melhor para precisão dimensional?',
        'O que acontece sem Detect Thin Walls em paredes muito finas?',
      ],
    },
  ],
}
