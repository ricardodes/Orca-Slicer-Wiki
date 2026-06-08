import type { Modulo } from '@/lib/types'

export const modulo01: Modulo = {
  slug: 'interface',
  numero: 1,
  titulo: 'Interface Completa',
  subtitulo: 'Domine cada pixel do OrcaSlicer',
  descricao:
    'Conheça profundamente o layout, painéis, ferramentas de manipulação, corte, pintura, suporte, medição e reparação. A base de tudo: saber onde está cada coisa e por que ela existe.',
  licoes: [
    {
      slug: 'layout-geral',
      titulo: 'Layout Geral e Barra Superior',
      resumo: 'Visão macro da interface: as 3 zonas principais e a barra superior de fluxo de trabalho.',
      duracao: '12 min',
      nivel: 'Iniciante',
      intro: [
        'O OrcaSlicer divide a tela em três grandes zonas: a barra superior (fluxo de trabalho e seleção de objetos), a área central de visualização 3D e o painel lateral de parâmetros à direita.',
        'Entender essa anatomia evita que você se perca procurando configurações — 90% da sua produtividade vem de saber em qual zona cada decisão acontece.',
      ],
      secoes: [
        {
          titulo: 'As três zonas da interface',
          conteudo: [
            'Barra superior: contém as abas "Prepare" (preparação/fatiamento), "Preview" (pré-visualização das camadas) e "Device" (controle da impressora via rede). É aqui que você importa modelos, adiciona placas (plates) e dispara o fatiamento.',
            'Visualização 3D (centro): mostra a mesa de impressão (build plate), os objetos e as ferramentas de manipulação. É um ambiente interativo onde você gira, posiciona e inspeciona.',
            'Painel lateral direito: dividido em seleção de Impressora, Filamento e Processo no topo, e abaixo todos os parâmetros do perfil de processo (Quality, Walls, Infill, Speed, etc.).',
          ],
        },
        {
          titulo: 'Barra superior em detalhe',
          conteudo: [
            'Botões de arquivo: importar STL/STEP/3MF, salvar projeto (.3mf preserva TUDO: posição, perfis e modificações).',
            'Add Plate / Múltiplas placas: permite gerenciar várias mesas de impressão num só projeto — ótimo para organizar lotes comerciais.',
            'Botão "Slice plate" / "Slice all": gera o G-code. Após fatiar, o botão muda para "Print plate" ou exportação do G-code.',
            'Indicadores de tempo e consumo aparecem após o fatiamento — sua principal métrica de custo.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'A interface organiza o fluxo importar → orientar → configurar → fatiar → exportar/imprimir.',
        comoFunciona: 'Cada aba é um estado do projeto. "Prepare" edita geometria e perfis; "Preview" lê o G-code gerado camada por camada; "Device" comunica via rede (LAN/Cloud) com impressoras compatíveis.',
        quandoUsar: 'Use a barra superior para navegar entre etapas; use o painel lateral para qualquer ajuste fino de parâmetro.',
        errosComuns: [
          'Salvar como STL em vez de .3mf e perder todas as configurações do projeto.',
          'Confundir a aba Preview com a Prepare e achar que "sumiram" as ferramentas de manipulação.',
        ],
        comoCorrigir: [
          'Sempre salve o projeto como .3mf para preservar perfis e posicionamento.',
          'Volte para a aba Prepare para manipular objetos; Preview é somente leitura do resultado.',
        ],
        casosReais: [
          'Em produção comercial, manter múltiplas placas num único .3mf evita reabrir arquivos e acelera o fatiamento de lotes.',
        ],
      },
      exercicios: [
        'Importe um STL qualquer e identifique em qual zona da tela você o move, o gira e o escala.',
        'Salve o mesmo projeto como STL e como .3mf, feche e reabra ambos. Observe o que se perde.',
      ],
      testes: [
        'Qual formato preserva perfis e posicionamento ao salvar um projeto?',
        'Em qual aba você visualiza o G-code camada por camada?',
      ],
      desafio: 'Monte um projeto com 2 placas, cada uma contendo um objeto diferente, e fatie ambas. Anote o tempo e o consumo de cada placa.',
      perguntas: [
        {
          pergunta: 'Por que a aba "Preview" não permite mover o objeto?',
          resposta: 'Porque o Preview lê o G-code já gerado — a geometria de movimento já foi calculada. Qualquer alteração exige voltar ao Prepare e refatiar.',
        },
      ],
    },
    {
      slug: 'visualizacao-movimentacao',
      titulo: 'Visualização 3D, Movimentação, Escala e Rotação',
      resumo: 'Controles de câmera e as ferramentas de Move, Scale e Rotate — a base do posicionamento.',
      duracao: '15 min',
      nivel: 'Iniciante',
      intro: [
        'O posicionamento correto de uma peça determina resistência, necessidade de suporte e qualidade de superfície. Antes de configurar qualquer parâmetro, você precisa dominar mover, escalar e rotacionar.',
        'A orientação é a decisão mais barata e de maior impacto em toda a impressão 3D — ela não custa filamento nem tempo extra de configuração, mas muda completamente o resultado.',
      ],
      secoes: [
        {
          titulo: 'Controles de câmera',
          conteudo: [
            'Girar a vista: botão direito do mouse (ou botão do meio em alguns esquemas).',
            'Pan (deslocar): segurar o botão do meio / scroll pressionado.',
            'Zoom: roda do mouse.',
            'Atalhos numéricos (0–6) alternam entre vistas isométrica, frontal, traseira, superior, inferior e laterais — essenciais para inspecionar overhangs.',
          ],
        },
        {
          titulo: 'Ferramenta Move (M)',
          conteudo: [
            'Move posiciona o objeto na mesa. Você pode arrastar pelas setas (eixos X/Y/Z) ou digitar coordenadas exatas no painel.',
            'Mover em Z acima de 0 cria um "objeto flutuante" — útil para cortes, mas normalmente o objeto deve estar assentado na mesa (Place on face).',
          ],
        },
        {
          titulo: 'Ferramenta Scale (S)',
          conteudo: [
            'Escala uniforme (cadeado ligado) mantém proporções. Escala por eixo permite distorções intencionais.',
            'Você pode escalar por porcentagem ou por dimensão absoluta em mm — preferível para peças funcionais com medidas críticas.',
          ],
        },
        {
          titulo: 'Ferramenta Rotate (R)',
          conteudo: [
            'Rotacionar muda a direção das camadas em relação às forças que a peça vai sofrer — isso impacta diretamente a resistência.',
            '"Place on face" assenta automaticamente uma face escolhida na mesa, eliminando rotações manuais imprecisas.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define a posição, tamanho e orientação do objeto na mesa antes do fatiamento.',
        comoFunciona: 'As transformações são aplicadas à malha (mesh) antes do slicer calcular as camadas. A orientação determina onde ficam as linhas de camada e os overhangs.',
        quandoUsar: 'Sempre. Toda peça precisa ser orientada conscientemente — nunca aceite a orientação padrão sem avaliar.',
        quandoEvitar: 'Evite escalas não uniformes em peças de encaixe mecânico, pois distorcem tolerâncias.',
        impactoResistencia: 'Enorme: camadas perpendiculares à força resistem muito menos (delaminação). Oriente a peça para que as forças principais corram ao longo das camadas, não entre elas.',
        impactoQualidade: 'Superfícies viradas para cima ou em overhang têm pior acabamento; faces apoiadas na mesa ficam lisas.',
        impactoTempo: 'Orientação que reduz altura total reduz número de camadas e tempo. Orientação que evita suporte economiza tempo de impressão e pós-processamento.',
        impactoFilamento: 'Menos suporte = menos filamento desperdiçado.',
        errosComuns: [
          'Imprimir um gancho com a carga puxando perpendicular às camadas — ele rompe na primeira tração.',
          'Escalar por eixo sem perceber, deformando furos e encaixes.',
        ],
        comoCorrigir: [
          'Reoriente para que a direção da maior tensão fique paralela ao plano das camadas.',
          'Use o cadeado de escala uniforme e digite dimensões absolutas em mm.',
        ],
        casosReais: [
          'Um suporte de parede em L deve ser impresso com a aba na vertical e a carga descendo ao longo das camadas para não delaminar.',
        ],
      },
      tabelas: [
        {
          titulo: 'Impacto da orientação',
          colunas: ['Orientação', 'Resistência', 'Suporte', 'Acabamento'],
          linhas: [
            ['Forças ao longo das camadas', 'Alta', 'Variável', 'Bom'],
            ['Forças entre camadas (Z)', 'Baixa (delamina)', 'Variável', 'Bom'],
            ['Plana na mesa', 'Média', 'Pouco/nenhum', 'Excelente embaixo'],
            ['Em pé (alta)', 'Depende da carga', 'Pode precisar', 'Linhas visíveis'],
          ],
        },
      ],
      exercicios: [
        'Importe um gancho ou suporte em L e teste 3 orientações diferentes, anotando suporte gerado e altura total.',
        'Use "Place on face" para assentar uma peça por 3 faces diferentes e compare o suporte necessário.',
      ],
      testes: [
        'Por que camadas perpendiculares à força são mais fracas?',
        'Qual ferramenta assenta automaticamente uma face na mesa?',
      ],
      desafio: 'Pegue uma peça funcional (suporte, gancho, braçadeira) e encontre a orientação que minimiza o suporte E mantém a resistência. Justifique tecnicamente.',
    },
    {
      slug: 'ferramentas-avancadas',
      titulo: 'Ferramentas Avançadas: Corte, Pintura e Suporte Manual',
      resumo: 'Cut, Seam Painting, Support Painting e Modifier Mesh — controle granular sobre o fatiamento.',
      duracao: '18 min',
      nivel: 'Intermediário',
      intro: [
        'Além das ferramentas básicas, o OrcaSlicer oferece controles granulares: você pode cortar o modelo em partes, pintar onde quer suporte, pintar onde quer a costura e aplicar modificadores locais.',
        'Essas ferramentas transformam o slicer num editor de impressão — não apenas uma calculadora de G-code.',
      ],
      secoes: [
        {
          titulo: 'Cut (Corte)',
          conteudo: [
            'Divide o modelo em dois ou mais fragmentos por um plano de corte.',
            'Usado para quebrar peças que não cabem na mesa, ou para imprimir cada parte com orientação diferente.',
            'Gera conectores automáticos (pins/slots) nos planos de corte para reamontar a peça com cola ou pressão.',
          ],
        },
        {
          titulo: 'Seam Painting',
          conteudo: [
            'Permite pintar manualmente onde a costura de parede deve ser colocada (força) ou evitada.',
            'Pinte em vermelho para forçar a seam numa aresta específica; pinte em verde para banir a seam daquela região.',
            'Essencial para peças decorativas onde a costura precisa ficar numa posição exata e invisível.',
          ],
        },
        {
          titulo: 'Support Painting',
          conteudo: [
            'Pinte em azul para forçar suporte numa região específica; em vermelho para bloqueá-lo onde o slicer gerou suporte indesejado.',
            'Elimina o problema de suporte dentro de cavidades ou em regiões que na verdade não precisam de apoio.',
            'Combinado com Tree Support, permite configurações impossíveis de conseguir só com as configurações globais.',
          ],
        },
        {
          titulo: 'Modifier Mesh',
          conteudo: [
            'Adiciona um objeto 3D como "modificador" que altera os parâmetros dentro de seu volume.',
            'Exemplo: adicionar mais paredes ou mais infill apenas dentro de uma região crítica da peça, sem mudar o restante.',
            'Cria peças híbridas: rígidas onde precisam resistir e leves onde não importa.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Oferece controle granular sobre suporte, costura, parâmetros e geometria — indo além dos perfis globais.',
        comoFunciona: 'Cada ferramenta opera em regiões específicas do modelo, sobrepondo-se às configurações globais do perfil.',
        quandoUsar: 'Use quando as configurações globais não resolvem: suporte indesejado, seam em local ruim, regiões que precisam de mais resistência.',
        impactoQualidade: 'Alto: permite acabamento preciso e reforço cirúrgico.',
      },
      exercicios: [
        'Use o Cut para dividir uma peça que não cabe na mesa e gerar conectores automáticos.',
        'Use Support Painting para bloquear suporte dentro de um furo passante onde o slicer gera suporte desnecessário.',
      ],
      testes: [
        'Qual a diferença entre Seam Painting vermelho e verde?',
        'O que é um Modifier Mesh e para que ele serve?',
      ],
    },
  ],
}
