import type { Modulo } from '@/lib/types'

export const modulo24: Modulo = {
  slug: 'ironing-superficie',
  numero: 24,
  titulo: 'Ironing, Bridges e Acabamento de Superfície',
  subtitulo: 'Superfícies perfeitas em qualquer geometria',
  descricao:
    'Configurações avançadas de acabamento de superfície: Ironing detalhado, Bridge Settings, overhang otimizado, Fuzzy Skin e técnicas para obter superfícies de qualidade fotográfica.',
  licoes: [
    {
      slug: 'ironing-detalhado',
      titulo: 'Ironing — Configuração Detalhada',
      resumo: 'Todos os parâmetros do Ironing e como usá-los para superfícies superiores perfeitas.',
      duracao: '20 min',
      nivel: 'Avançado',
      intro: [
        'O Ironing passa o bico quente novamente sobre as superfícies superiores com fluxo mínimo, alisando as linhas e preenchendo micro-vales.',
        'Configurado corretamente, transforma um topo rugoso em uma superfície quase espelhada — sem pós-processamento.',
      ],
      secoes: [
        {
          titulo: 'Parâmetros do Ironing',
          conteudo: [
            'Ironing Type: Top Surfaces (padrão), All Solid Layers ou External Surfaces.',
            'Ironing Flow: porcentagem do fluxo normal — 10–20% para alisar sem adicionar material.',
            'Ironing Spacing: espaçamento entre as linhas de ironing — 0,1–0,25 mm. Menor = mais suave mas mais lento.',
            'Ironing Speed: velocidade do processo — 10–30 mm/s. Mais lento = mais calor = superfície mais lisa.',
            'Ironing Angle: ângulo das linhas de ironing — pode diferir das top layers para esconder as junções.',
          ],
        },
        {
          titulo: 'Quando usar Ironing',
          conteudo: [
            'Superfícies planas e horizontais visíveis — onde o efeito é máximo.',
            'Placas de identificação, tampas de caixas, topos de vasos planos.',
            'Não use em superfícies curvas — o efeito é mínimo e o tempo desperdiçado.',
            'Não use em peças estruturais — tempo extra sem benefício de resistência.',
          ],
        },
        {
          titulo: 'Resolução de problemas do Ironing',
          conteudo: [
            'Topo com marcas de inflow: aumente o ironing flow ligeiramente.',
            'Material acumulando durante ironing: reduza o flow ou aumente a velocidade.',
            'Linhas de ironing visíveis: reduza o spacing.',
            'Queimando o plástico: reduza a temperatura de 5–10 °C antes de ironing ou aumente a velocidade.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Configurações de Ironing por resultado',
          colunas: ['Objetivo', 'Flow', 'Spacing', 'Speed', 'Resultado'],
          linhas: [
            ['Acabamento padrão', '15%', '0,15 mm', '15 mm/s', 'Bom acabamento'],
            ['Máxima suavidade', '10%', '0,1 mm', '10 mm/s', 'Espelhado (+ lento)'],
            ['Rapidez aceitável', '15%', '0,2 mm', '25 mm/s', 'Bom e mais rápido'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Reaquece e alisa as camadas superiores com mínimo de material adicional.',
        quandoUsar: 'Topos planos visíveis em peças decorativas e comerciais.',
        quandoEvitar: 'Curvas, estruturais, e qualquer superfície não visível.',
        impactoTempo: 'Adiciona 20–50% ao tempo de impressão do topo.',
        impactoQualidade: 'Transforma radicalmente a aparência da superfície superior.',
      },
      exercicios: [
        'Imprima uma placa plana com Ironing em 3 configurações (fast, default, premium) e compare.',
        'Use Ironing numa superfície levemente curva e avalie o resultado.',
      ],
      testes: [
        'Por que o Ironing Flow é tão baixo (10–20%)?',
        'Em que tipo de superfície o Ironing não funciona bem?',
      ],
    },
    {
      slug: 'bridges-overhangs-fuzzy',
      titulo: 'Bridges, Overhangs e Fuzzy Skin',
      resumo: 'Configurações para pontes, overhangs e a textura especial Fuzzy Skin.',
      duracao: '18 min',
      nivel: 'Avançado',
      intro: [
        'Bridges e overhangs são os dois maiores desafios geométricos da impressão FDM. Com configurações corretas, é possível imprimir pontes de 100 mm+ e overhangs de 70°+ sem suporte.',
      ],
      secoes: [
        {
          titulo: 'Bridge Settings',
          conteudo: [
            'Bridge Speed: velocidade de pontes. Mais lento = mais tempo no ar = melhor resfriamento.',
            'Bridge Fan Speed: fan alto (100%) para esfriar o filamento rapidamente e evitar que afunde.',
            'Bridge Flow: fluxo reduzido (80–95%) para pontes — o filamento ficará mais tenso e se dobrar menos.',
            'Bridge Layer Thickness: pode ser menor que a camada normal — linhas mais finas se sustentam melhor.',
            'Regra prática: pontes até 60–80 mm são possíveis com boas configurações em PLA.',
          ],
        },
        {
          titulo: 'Overhang por Região',
          conteudo: [
            'O OrcaSlicer gera camadas especiais para overhangs graves (>50–60°).',
            'Overhang Speed: reduz automaticamente a velocidade conforme o ângulo aumenta.',
            'Extra Perimeters on Overhangs: adiciona paredes extras nos overhangs para melhor suporte lateral.',
            'Fan Speed por ângulo: aumenta o fan progressivamente conforme o overhang piora.',
          ],
        },
        {
          titulo: 'Fuzzy Skin',
          conteudo: [
            'Adiciona uma textura irregular e rugosa nas paredes externas — parece "pele" ou pedra.',
            'Esconde a seam, marcas de camada e imperfeições menores.',
            'Fuzzy Skin Thickness: amplitude da textura — 0,2–0,8 mm.',
            'Fuzzy Skin Point Distance: espaçamento dos pontos — 0,4–1,5 mm.',
            'Uso: vasos rústicos, designs de textura, capas de objetos onde o acabamento liso não é desejado.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Configurações de Bridge por distância',
          colunas: ['Comprimento da ponte', 'Bridge Speed', 'Fan', 'Suporte necessário'],
          linhas: [
            ['< 30 mm', 'Normal', 'Normal', 'Não'],
            ['30–60 mm', '50–70 mm/s', '100%', 'Provavelmente não'],
            ['60–100 mm', '40–60 mm/s', '100%', 'Possivelmente'],
            ['> 100 mm', '30–50 mm/s', '100%', 'Geralmente sim'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Gerencia geometrias suspensas e adiciona texturas especiais às superfícies.',
        impactoQualidade: 'Boas configurações de bridge podem eliminar suporte em 70% dos casos.',
        casosReais: [
          'Um encaixe de plug em caixa eletrônica — ponte de 50 mm sem suporte, usando bridge flow 85% e fan 100%.',
        ],
      },
      exercicios: [
        'Imprima uma ponte de teste em 30, 60 e 100 mm e determine o limite sem suporte do seu setup.',
        'Aplique Fuzzy Skin em um vaso simples e compare o resultado com a versão lisa.',
      ],
      testes: [
        'Por que o Bridge Flow é menor que 100%?',
        'O que o Fuzzy Skin esconde que outros acabamentos não conseguem?',
      ],
      desafio: 'Crie uma peça que usa bridges para eliminar suporte, tem topo com Ironing e tem Fuzzy Skin nas laterais. Imprima e avalie cada técnica individualmente.',
    },
  ],
}
