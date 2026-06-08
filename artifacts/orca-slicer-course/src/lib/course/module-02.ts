import type { Modulo } from '@/lib/types'

export const modulo02: Modulo = {
  slug: 'impressora',
  numero: 2,
  titulo: 'Configurações da Impressora',
  subtitulo: 'O perfil que descreve sua máquina',
  descricao:
    'Volume de impressão, firmware, aceleração, jerk, limites da máquina, extrusor, bico, fluxo e temperaturas. Configurar errado aqui invalida todo o resto.',
  licoes: [
    {
      slug: 'volume-firmware-limites',
      titulo: 'Volume, Firmware e Limites da Máquina',
      resumo: 'Altura máxima, volume de impressão, firmware, aceleração, jerk e limites cinemáticos.',
      duracao: '16 min',
      nivel: 'Intermediário',
      intro: [
        'O perfil de impressora informa ao OrcaSlicer os limites físicos e cinemáticos da sua máquina. Se esses valores estiverem errados, o slicer pode gerar G-code que sua impressora não consegue executar — ou que a danifica.',
        'É a fundação invisível: parâmetros de velocidade e aceleração no perfil de processo nunca poderão superar os limites definidos aqui.',
      ],
      secoes: [
        {
          titulo: 'Volume e altura máxima',
          conteudo: [
            'Bed shape e tamanho definem a área útil; a altura máxima (Z) define o quão alto você pode imprimir.',
            'Definir um volume maior que o real faz o slicer permitir peças que colidirão com a estrutura — sempre use as medidas reais do fabricante.',
            'Áreas de exclusão podem ser configuradas para acomodar clipes da mesa ou regiões problemáticas.',
          ],
        },
        {
          titulo: 'Firmware e cinemática',
          conteudo: [
            'O tipo de firmware (Marlin, Klipper, RepRap) determina quais G-codes são suportados.',
            'A cinemática (Cartesian, CoreXY, Delta) muda como os eixos se movem — o slicer precisa saber para gerar movimentos corretos.',
            'O OrcaSlicer tem perfis prontos para a maioria das impressoras; sempre verifique se o perfil é da versão correta do seu modelo.',
          ],
        },
        {
          titulo: 'Aceleração e Jerk máximos',
          conteudo: [
            'Aceleração máxima: quanto o cabeçote muda de velocidade por segundo. Valores altos = mais ringing.',
            'Jerk (ou Junction Deviation): a velocidade mínima mantida em mudanças bruscas de direção. Alto = mais ringing, mais velocidade; baixo = mais suave, mais lento.',
            'O OrcaSlicer pode sobrescrever esses limites se o perfil de processo definir valores menores — mas nunca pode superá-los.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define os limites absolutos da máquina — velocidade, aceleração, volume — que o slicer não pode ultrapassar.',
        comoFunciona: 'O slicer usa esses limites para validar os parâmetros do processo e gerar G-code seguro.',
        errosComuns: [
          'Usar um perfil de impressora genérico sem ajustar o volume real.',
          'Confundir aceleração do perfil de processo com os limites de aceleração da máquina.',
        ],
        comoCorrigir: [
          'Meça o volume real da sua impressora e configure com precisão.',
          'O perfil de processo define a aceleração usada; o perfil de máquina define o teto permitido.',
        ],
      },
      exercicios: [
        'Encontre a documentação técnica da sua impressora e verifique se o perfil no OrcaSlicer corresponde às medidas reais.',
        'Reduza a aceleração máxima da máquina em 20% e observe se o slicer respeita o novo limite.',
      ],
      testes: [
        'O que acontece se o volume configurado for maior que o real da impressora?',
        'Como o Jerk afeta a qualidade das quinas?',
      ],
    },
    {
      slug: 'bico-extrusor-fluxo',
      titulo: 'Bico, Extrusor e Configurações de Fluxo',
      resumo: 'Diâmetro do bico, tipo de extrusor, fluxo máximo volumétrico e temperaturas de operação.',
      duracao: '18 min',
      nivel: 'Intermediário',
      intro: [
        'O bico é onde tudo acontece: é ele que define a largura máxima de linha, o fluxo máximo e a necessidade de materiais especiais (abrasivos).',
        'Configurar corretamente o extrusor e o bico no perfil é o que permite ao slicer calcular velocidades seguras sem subextrusão.',
      ],
      secoes: [
        {
          titulo: 'Diâmetro do bico e impactos',
          conteudo: [
            'Bico 0,4 mm: padrão universal — equilíbrio entre detalhe e velocidade.',
            'Bico 0,6 mm: 50% mais fluxo possível; ideal para peças funcionais grandes e produção.',
            'Bico 0,2 mm: detalhes finos, lento, baixo fluxo — use para miniaturas e protótipos de alta resolução.',
            'A altura de camada máxima é 75% do diâmetro do bico.',
          ],
        },
        {
          titulo: 'Tipo de extrusor',
          conteudo: [
            'Direct Drive: extrusor montado direto no cabeçote. Melhor controle de retração, suporta flexíveis.',
            'Bowden: extrusor fixo no frame, tubo de PTFE leva o filamento. Cabeçote mais leve e rápido, mas maior retração necessária.',
            'O tipo afeta diretamente os valores de retração — sempre configure conforme o seu sistema.',
          ],
        },
        {
          titulo: 'Fluxo máximo volumétrico',
          conteudo: [
            'É a quantidade máxima de filamento que o hotend consegue fundir por segundo (mm³/s).',
            'Exceder esse limite causa subextrusão mesmo com todos os outros parâmetros corretos.',
            'Como descobrir: faça o teste de fluxo volumétrico do OrcaSlicer (Calibration > Max Volumetric Speed).',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Comparativo de bicos',
          colunas: ['Diâmetro', 'Detalhe', 'Velocidade', 'Uso típico'],
          linhas: [
            ['0,2 mm', 'Máximo', 'Lento', 'Miniaturas, protótipos finos'],
            ['0,4 mm', 'Bom', 'Médio', 'Uso geral'],
            ['0,6 mm', 'Médio', 'Rápido', 'Peças funcionais, produção'],
            ['0,8 mm', 'Grosseiro', 'Muito rápido', 'Peças grandes e brutas'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define as capacidades físicas do hotend — o que pode ser extrudado e em que quantidade.',
        impactoTempo: 'Bico maior = mais fluxo = paredes e infill mais rápidos.',
        impactoQualidade: 'Bico menor = linhas mais finas = mais detalhe nas superfícies.',
        errosComuns: [
          'Imprimir materiais abrasivos (fibra de carbono, madeira) com bico de latão — ele desgasta rapidamente.',
        ],
        comoCorrigir: [
          'Use bico endurecido (aço endurecido, tungstênio) para materiais abrasivos.',
        ],
      },
      exercicios: [
        'Realize o teste de Fluxo Volumétrico Máximo do seu hotend pelo menu Calibration.',
        'Calcule a velocidade máxima para seu setup: fluxo_máximo ÷ (altura_camada × largura_linha).',
      ],
      testes: [
        'Qual é a altura de camada máxima para um bico 0,4 mm?',
        'O que é fluxo volumétrico máximo e como ele limita a velocidade?',
      ],
    },
  ],
}
