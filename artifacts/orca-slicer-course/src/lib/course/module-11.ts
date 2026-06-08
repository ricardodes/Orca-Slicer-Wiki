import type { Modulo } from '@/lib/types'

export const modulo11: Modulo = {
  slug: 'seams-acabamento',
  numero: 11,
  titulo: 'Seams e Acabamento Profissional',
  subtitulo: 'Peças visualmente impecáveis',
  descricao:
    'Domine a costura (seam) da peça, aprenda a escondê-la, a posicioná-la com intenção e a aplicar Ironing e suavização de superfície para um acabamento premium.',
  licoes: [
    {
      slug: 'entendendo-a-seam',
      titulo: 'O que é Seam e como o OrcaSlicer cria as emendas',
      resumo: 'A origem visível da costura, por que ela existe e o que acontece a cada camada.',
      duracao: '20 min',
      nivel: 'Avançado',
      intro: [
        'Toda parede impressa é uma linha fechada. Em algum ponto o bico precisa começar e terminar essa volta — esse ponto é a Seam (costura).',
        'A seam é inevitável em FDM: ela aparece como uma linha vertical, um ponto saliente ou uma pequena cicatriz subindo pela peça. O trabalho do profissional não é eliminá-la, mas controlá-la.',
      ],
      secoes: [
        {
          titulo: 'Por que a Seam existe',
          conteudo: [
            'O bico deposita material em loop. Para começar o loop ele precisa "ligar" o fluxo e, ao fechar, "desligar".',
            'No início há um pequeno acúmulo (blob) e no fim pode faltar material ou sobrar pressão.',
            'Esse desencontro de fluxo cria a marca visível. Quanto mais alinhadas estiverem essas marcas, mais perceptível (ou disfarçável) fica a linha.',
          ],
        },
        {
          titulo: 'Como o OrcaSlicer cria e move a emenda',
          conteudo: [
            'A cada camada, o slicer escolhe um ponto de partida do perímetro externo conforme a estratégia de seam selecionada.',
            'Ele tenta esconder o ponto em quinas (vértices), onde a marca se confunde com a geometria.',
            'O parâmetro "Seam position" define a regra; "Staggered" e ajustes de "Scarf joint" suavizam a transição entre início e fim do loop.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'A configuração de Seam controla onde cada perímetro externo começa e termina em cada camada.',
        comoFunciona: 'O slicer ordena o ponto de partida do loop externo segundo a estratégia escolhida e tenta posicioná-lo em quinas para disfarçar.',
        quandoUsar: 'Sempre que o acabamento visual importar: peças decorativas, produtos à venda, miniaturas e cases.',
        impactoQualidade: 'Altíssimo. A seam mal posicionada é o defeito estético mais comum em peças bem impressas.',
      },
      exercicios: [
        'Fatie um cilindro simples e observe onde a seam é colocada por padrão.',
        'Gire a peça 90° e veja como o ponto de partida muda em relação à geometria.',
      ],
      testes: [
        'Por que a seam é inevitável em FDM?',
        'O que acontece com o fluxo no início e no fim de cada loop de parede?',
      ],
    },
    {
      slug: 'tipos-de-seam',
      titulo: 'Tipos de Seam: Rear, Aligned, Nearest e Random',
      resumo: 'Vantagens, desvantagens e quando escolher cada estratégia de costura.',
      duracao: '22 min',
      nivel: 'Avançado',
      intro: [
        'O OrcaSlicer oferece quatro estratégias principais de posicionamento de seam. Cada uma resolve um problema diferente.',
        'A escolha certa depende do tipo de peça: decorativa, funcional ou orgânica.',
      ],
      secoes: [
        {
          titulo: 'As quatro estratégias',
          conteudo: [
            'Rear: a costura é colocada sempre na traseira da peça. Ideal quando há um lado que ninguém vê.',
            'Aligned: todas as costuras ficam alinhadas em uma linha vertical, normalmente numa quina. É a opção mais usada para peças expostas.',
            'Nearest: o ponto de partida é o mais próximo do fim do trajeto anterior, minimizando deslocamentos.',
            'Random: a costura é distribuída aleatoriamente a cada camada. Some a linha vertical, mas adiciona micro-pontos por toda a superfície.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Comparativo de estratégias de Seam',
          colunas: ['Tipo', 'Vantagem', 'Desvantagem', 'Melhor uso'],
          linhas: [
            ['Rear', 'Esconde no fundo', 'Inútil se a peça gira', 'Peças com lado oculto'],
            ['Aligned', 'Linha única e limpa', 'Linha visível se mal posicionada', 'Decorativas e à venda'],
            ['Nearest', 'Mais rápida', 'Costura imprevisível', 'Protótipos e funcionais'],
            ['Random', 'Some a linha vertical', 'Pontilhado por toda a peça', 'Cilindros e orgânicas'],
          ],
        },
      ],
      estrutura: {
        quandoUsar: 'Aligned para a maioria das peças expostas; Random para superfícies curvas contínuas.',
        quandoEvitar: 'Evite Random em peças com quinas nítidas — a marca espalhada fica pior que uma linha bem escondida.',
        casosReais: ['Um vaso liso ficou melhor com Random; já um troféu com arestas ficou perfeito com Aligned numa quina.'],
      },
      exercicios: [
        'Imprima o mesmo cilindro com Aligned e Random e compare o acabamento.',
        'Defina Rear em uma peça e identifique qual face ficou marcada.',
      ],
      testes: [
        'Qual estratégia cria uma única linha vertical?',
        'Em que tipo de peça o Random é vantajoso?',
      ],
    },
    {
      slug: 'escondendo-e-posicionando',
      titulo: 'Como esconder e posicionar a Seam com intenção',
      resumo: 'Posicionamento manual em peças decorativas e funcionais e o problema do blob.',
      duracao: '24 min',
      nivel: 'Especialista',
      intro: [
        'A diferença entre amador e profissional está em decidir onde a costura vai ficar — e não deixar o slicer decidir por você.',
        'Você pode pintar manualmente o ponto de seam no OrcaSlicer (Seam Painting) e forçá-la para uma quina, uma aresta interna ou um detalhe escondido.',
      ],
      secoes: [
        {
          titulo: 'Posicionando em peças decorativas',
          conteudo: [
            'Procure uma quina natural, uma reentrância ou a face que ficará contra a parede/prateleira.',
            'Use a ferramenta Seam Painting para fixar a costura ao longo de uma aresta vertical existente.',
            'Em peças simétricas sem quinas, prefira Random para diluir a marca.',
          ],
        },
        {
          titulo: 'Posicionando em peças funcionais',
          conteudo: [
            'Em peças funcionais o visual importa menos, mas a seam ainda é um ponto fraco mecânico.',
            'Posicione a costura longe de regiões que sofrem tração ou flexão.',
            'Nunca alinhe a seam com uma região de encaixe (press fit) — o pequeno blob pode atrapalhar a montagem.',
          ],
        },
        {
          titulo: 'Blob na Seam',
          conteudo: [
            'O blob é o acúmulo de material no ponto de início/fim. Aparece como uma bolinha saliente.',
            'Causas comuns: retração mal calibrada, Pressure Advance ausente ou baixo, e temperatura alta demais.',
            'Soluções: calibrar Pressure Advance, ajustar "Wipe" na seam, reduzir levemente a temperatura e usar "Scarf seam" para diluir o início.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'O posicionamento manual transfere a costura para o local menos prejudicial visual e mecanicamente.',
        errosComuns: [
          'Deixar o slicer colocar a seam numa face visível.',
          'Alinhar a costura sobre regiões de encaixe ou de carga.',
          'Ignorar o blob, achando que é defeito de hardware.',
        ],
        comoCorrigir: [
          'Use Seam Painting para fixar a costura.',
          'Calibre Pressure Advance para eliminar o blob.',
          'Ative Wipe/Scarf para suavizar início e fim.',
        ],
      },
      exercicios: [
        'Use Seam Painting para mover a costura de uma peça para uma aresta escondida.',
        'Provoque e depois elimine um blob ajustando Pressure Advance.',
      ],
      testes: [
        'O que causa o blob na seam?',
        'Por que não posicionar a seam sobre uma região de press fit?',
      ],
    },
    {
      slug: 'ironing-surface-smoothing',
      titulo: 'Ironing e Surface Smoothing para acabamento premium',
      resumo: 'Técnicas finais para topos espelhados e superfícies sem marcas de camada.',
      duracao: '22 min',
      nivel: 'Especialista',
      intro: [
        'Depois de controlar a seam, o último passo para um acabamento profissional é alisar as superfícies superiores.',
        'O Ironing passa o bico quente novamente sobre o topo, derretendo levemente o material e preenchendo os micro-vales entre as linhas.',
      ],
      secoes: [
        {
          titulo: 'Ironing',
          conteudo: [
            'Ative "Ironing" para as top surfaces da peça.',
            'Parâmetros-chave: "Ironing flow" (10–20%), "Ironing spacing" (0,1–0,2 mm) e velocidade baixa.',
            'Resultado: topo liso, quase brilhante, sem as linhas paralelas típicas das top layers.',
            'Custo: aumenta o tempo de impressão do topo; use apenas onde o topo é visível e plano.',
          ],
        },
        {
          titulo: 'Surface Smoothing e técnicas complementares',
          conteudo: [
            'Reduza a "Outer wall speed" para 30–50% da velocidade normal — paredes externas lentas ficam muito mais lisas.',
            'Diminua a altura de camada nas paredes externas com "variable layer height" em zonas curvas.',
            'Acabamento pós-impressão: lixamento progressivo, primer e, para ABS/ASA, alisamento com vapor de acetona.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Ironing reaquece e alisa o topo; reduzir a velocidade da parede externa melhora as laterais.',
        quandoUsar: 'Topos planos e visíveis, placas de identificação, bandejas e tampas.',
        quandoEvitar: 'Topos curvos ou não visíveis — o tempo extra não compensa.',
        impactoTempo: 'Ironing pode adicionar minutos por topo; velocidade baixa de parede aumenta o tempo total.',
        impactoQualidade: 'Transforma a percepção de qualidade da peça.',
      },
      exercicios: [
        'Imprima uma placa plana com e sem Ironing e compare o topo sob luz rasante.',
        'Reduza a velocidade da parede externa pela metade e avalie as laterais.',
      ],
      testes: [
        'Para que tipo de superfície o Ironing é indicado?',
        'Por que paredes externas mais lentas ficam mais lisas?',
      ],
      desafio: 'Produza uma peça decorativa com: seam pintada manualmente numa quina, Pressure Advance calibrado, Ironing no topo e parede externa lenta. A peça deve ficar sem linha de costura visível e com topo espelhado.',
      perguntas: [
        {
          pergunta: 'Ironing resolve marcas nas laterais da peça?',
          resposta: 'Não. Ironing atua apenas nas superfícies superiores horizontais. Para melhorar as laterais, reduza a velocidade da parede externa, ajuste o flow ratio e garanta que a seam esteja bem posicionada.',
        },
      ],
    },
  ],
}
