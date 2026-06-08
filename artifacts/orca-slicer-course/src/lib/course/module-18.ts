import type { Modulo } from '@/lib/types'

export const modulo18: Modulo = {
  slug: 'padroes-infill',
  numero: 18,
  titulo: 'Padrões de Infill em Detalhe',
  subtitulo: 'O padrão certo para cada aplicação',
  descricao:
    'Análise completa de todos os padrões de infill do OrcaSlicer: Grid, Lines, Gyroid, Honeycomb, Lightning, Cubic, Adaptive Cubic, Rectilinear, Triangles e mais. Saiba qual usar e por quê.',
  licoes: [
    {
      slug: 'infill-basicos',
      titulo: 'Infill Básicos: Grid, Lines, Rectilinear e Honeycomb',
      resumo: 'Os padrões mais simples e rápidos — quando e como usá-los.',
      duracao: '18 min',
      nivel: 'Intermediário',
      intro: [
        'Os padrões de infill básicos são os mais rápidos de imprimir e os mais adequados para uso geral. Cada um tem pontos fortes específicos.',
      ],
      secoes: [
        {
          titulo: 'Lines (Linhas)',
          conteudo: [
            'Linhas paralelas alternadas a cada camada.',
            'Mais rápido de imprimir entre todos os padrões.',
            'Fraco em Z (sem conexão entre camadas); bom apenas para compressão vertical.',
            'Uso: protótipos rápidos, peças decorativas onde resistência não importa.',
          ],
        },
        {
          titulo: 'Grid',
          conteudo: [
            'Duas camadas de Lines perpendiculares entre si — forma uma grade.',
            'Melhor que Lines: conecta as linhas em XY.',
            'Bom para compressão e cargas verticais.',
            'Rápido: apenas 2 direções de movimento por conjunto de camadas.',
          ],
        },
        {
          titulo: 'Rectilinear',
          conteudo: [
            'Similar ao Grid mas com padrão de preenchimento diferente — mais denso e uniforme.',
            'Bom para peças sólidas e alta densidade de infill.',
            'Preferido para infill acima de 70% — mais eficiente que Grid nessas densidades.',
          ],
        },
        {
          titulo: 'Honeycomb (Favo de Mel)',
          conteudo: [
            'Células hexagonais — estrutura encontrada na natureza por ser eficiente.',
            'Boa relação resistência/peso para cargas multidirecionais em XY.',
            'Mais lento que Grid por causa da geometria curva.',
            'Uso: peças que precisam de leveza com boa resistência lateral.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Padrões básicos comparados',
          colunas: ['Padrão', 'Velocidade', 'Resistência XY', 'Resistência Z', 'Uso'],
          linhas: [
            ['Lines', 'Muito rápida', 'Baixa', 'Mínima', 'Protótipos rápidos'],
            ['Grid', 'Rápida', 'Boa', 'Baixa', 'Uso geral'],
            ['Rectilinear', 'Rápida', 'Boa', 'Baixa', 'Alta densidade'],
            ['Honeycomb', 'Moderada', 'Excelente XY', 'Baixa', 'Leveza + resistência lateral'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Preenche o interior da peça com um padrão que equilibra velocidade e resistência.',
        quandoUsar: 'Grid ou Honeycomb para uso geral; Lines para protótipos rápidos.',
        impactoTempo: 'Lines é 10–30% mais rápido que Grid para a mesma densidade.',
        impactoResistencia: 'Grid supera Lines; Honeycomb supera Grid em XY.',
      },
      exercicios: [
        'Imprima cubos com Lines, Grid e Honeycomb em 20% e comprima cada um verticalmente.',
        'Compare o tempo de impressão de Grid vs Honeycomb para a mesma densidade.',
      ],
      testes: [
        'Por que Lines é fraco no eixo Z?',
        'Em que situação Honeycomb supera Grid?',
      ],
    },
    {
      slug: 'infill-avancados',
      titulo: 'Infill Avançados: Gyroid, Cubic, Lightning e Adaptive Cubic',
      resumo: 'Os padrões mais sofisticados para casos específicos de alta performance.',
      duracao: '22 min',
      nivel: 'Avançado',
      intro: [
        'Os padrões avançados resolvem problemas que os básicos não conseguem: isotropia verdadeira, suporte mínimo para a superfície, e densidades variáveis.',
      ],
      secoes: [
        {
          titulo: 'Gyroid',
          conteudo: [
            'Estrutura matemática tridimensional contínua — sem direções preferenciais.',
            'Isotrópico: mesma resistência em X, Y e Z — o único padrão verdadeiramente 3D.',
            'Excelente para peças com cargas multidirecionais.',
            'Consome mais tempo e filamento que Grid para mesma densidade.',
            'Uso: peças funcionais que sofrem forças em múltiplas direções.',
          ],
        },
        {
          titulo: 'Cubic (e Cubic Subdivision)',
          conteudo: [
            'Estrutura cúbica em 3D — quase tão boa quanto Gyroid em isotropia.',
            'Mais rápido de imprimir que Gyroid.',
            'Cubic Subdivision: densifica automaticamente perto das paredes onde é mais importante.',
            'Excelente equilíbrio entre resistência, isotropia e velocidade.',
          ],
        },
        {
          titulo: 'Lightning',
          conteudo: [
            'Cria apenas o mínimo necessário para suportar as camadas superiores.',
            'Usa apenas 5–15% de material mesmo com "density" alta aparente.',
            'Sem resistência estrutural — apenas suporte de superfície.',
            'Uso exclusivo: decoração, brinquedos e peças onde qualquer carga vai pelas paredes.',
          ],
        },
        {
          titulo: 'Adaptive Cubic',
          conteudo: [
            'Versão inteligente do Cubic: densidade automática por região.',
            'Perto das paredes: mais denso (onde importa). Interior: menos denso (economia).',
            'Melhor relação resistência/material de todos os padrões.',
            'Ideal para peças funcionais grandes onde reduzir material sem comprometer estrutura é crítico.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Padrões avançados comparados',
          colunas: ['Padrão', 'Isotropia', 'Velocidade', 'Consumo', 'Melhor uso'],
          linhas: [
            ['Gyroid', 'Total (X+Y+Z)', 'Lenta', 'Alto', 'Cargas multidirecionais'],
            ['Cubic', 'Quase total', 'Moderada', 'Médio', 'Uso funcional geral'],
            ['Adaptive Cubic', 'Quase total', 'Moderada', 'Baixo', 'Peças grandes e otimizadas'],
            ['Lightning', 'Nenhuma', 'Muito rápida', 'Mínimo', 'Decoração'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Oferece padrões otimizados para casos específicos: máxima resistência, mínimo material ou densidade adaptativa.',
        quandoUsar: 'Gyroid ou Cubic para peças funcionais com cargas variadas; Lightning para decoração; Adaptive Cubic para peças funcionais grandes.',
        impactoResistencia: 'Gyroid e Cubic são 20–40% mais resistentes que Grid para a mesma densidade em cargas multiaxiais.',
        impactoTempo: 'Gyroid pode ser 30–50% mais lento que Grid.',
      },
      exercicios: [
        'Imprima um cubo com Gyroid e outro com Grid em 20% e aplique carga diagonal — compare a resistência.',
        'Use Lightning para um vaso decorativo e meça o ganho de material vs Grid 15%.',
      ],
      testes: [
        'Por que Gyroid é o único padrão verdadeiramente isotrópico?',
        'Quando usar Adaptive Cubic ao invés de Cubic simples?',
      ],
      desafio: 'Para uma peça funcional que você usa no dia a dia, determine qual padrão de infill oferece a melhor relação resistência/tempo/material. Justifique tecnicamente.',
    },
  ],
}
