import type { Modulo } from '@/lib/types'

export const modulo23: Modulo = {
  slug: 'configuracoes-extrusor',
  numero: 23,
  titulo: 'Configurações do Extrusor e Hotend',
  subtitulo: 'O coração físico da impressora',
  descricao:
    'Retração, Pressure Advance, Z-hop, Motion Ability, fluxo volumétrico máximo, wipe e todas as configurações relacionadas ao hotend e extrusor no OrcaSlicer.',
  licoes: [
    {
      slug: 'retracao-avancada',
      titulo: 'Retração Avançada — Parâmetros Completos',
      resumo: 'Todos os parâmetros de retração e quando ajustar cada um.',
      duracao: '22 min',
      nivel: 'Avançado',
      intro: [
        'A retração é o movimento do filamento para trás no extrusor durante os movimentos de travel, para evitar que material escoe e crie fios (stringing).',
        'Mais retração não é sempre melhor — excesso causa underextrusion, clogs e marcas de início de linha.',
      ],
      secoes: [
        {
          titulo: 'Parâmetros de retração',
          conteudo: [
            'Retraction Length: distância que o filamento recua. DD: 0,5–2 mm; Bowden: 3–8 mm.',
            'Retraction Speed: velocidade do movimento de retração. 25–60 mm/s para DD.',
            'Minimum Travel for Retraction: distância mínima de travel que ativa a retração. Valores baixos = muita retração = mais heat creep.',
            'Retract Before Wipe: retrai antes do wipe para reduzir pressão no nozzle.',
          ],
        },
        {
          titulo: 'Wipe e Coasting',
          conteudo: [
            'Wipe: move o cabeçote sobre a parede antes de retrair, limpando o excesso de filamento.',
            'Wipe Distance: 1–5 mm para Direct Drive; mais para Bowden.',
            'Coasting: termina a extrusão ligeiramente antes do fim da linha, usando a pressão residual para completar.',
            'Coasting Volume: 0,02–0,2 mm³ — ajuste para eliminar blobs no fim das linhas.',
          ],
        },
        {
          titulo: 'Extra Restart Distance',
          conteudo: [
            'Volume extra de filamento extrudado ao recomeçar depois de uma retração.',
            'Compensa o filamento que escorreu durante o travel.',
            'Valor típico: 0 a 0,1 mm — positivo se houver underextrusion no início, negativo se houver blob.',
          ],
        },
        {
          titulo: 'Problemas comuns de retração',
          conteudo: [
            'Stringing: retração insuficiente ou temperatura alta ou filamento úmido.',
            'Underextrusion no início da linha: retração excessiva ou extra restart insuficiente.',
            'Clog gradual: retração muito rápida no Bowden causa desgaste do tubo PTFE.',
            'Heat creep: muitas retrações curtas aquecem o filamento na zona de resfriamento.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Parâmetros de retração por sistema',
          colunas: ['Parâmetro', 'Direct Drive', 'Bowden', 'Nota'],
          linhas: [
            ['Retraction Length', '0,5–2 mm', '3–8 mm', 'Mínimo que elimina stringing'],
            ['Retraction Speed', '25–60 mm/s', '20–45 mm/s', 'Muito rápido = desgaste PTFE'],
            ['Min Travel for Retract', '0,5–1 mm', '1–2 mm', 'Alto = menos retrações'],
            ['Wipe Distance', '1–3 mm', '2–5 mm', 'Reduz pressão na seam'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Controla o fluxo de material durante os movimentos sem extrusão.',
        errosComuns: [
          'Retração excessiva causando underextrusion no início de cada linha.',
          'Muitas retrações curtas causando heat creep.',
        ],
        comoCorrigir: [
          'Encontre a retração mínima eficaz com a Retraction Tower.',
          'Aumente o Minimum Travel for Retraction para evitar retrações desnecessárias.',
        ],
      },
      exercicios: [
        'Execute a Retraction Tower para PETG e encontre o mínimo que elimina o stringing.',
        'Compare wipe com e sem coasting na seam de uma peça e avalie o blob.',
      ],
      testes: [
        'O que é heat creep e qual parâmetro de retração contribui para ele?',
        'Por que retrações muito longas causam underextrusion?',
      ],
    },
    {
      slug: 'zhop-motion-ability',
      titulo: 'Z-Hop, Motion Ability e Configurações de Movimento',
      resumo: 'Z-hop, travel lifting, Motion Ability e como configurar movimentos de travel eficientes.',
      duracao: '20 min',
      nivel: 'Avançado',
      intro: [
        'Z-hop e as configurações de motion são o que separa uma impressão limpa de uma cheia de marcas de travel. Configurados corretamente, eliminam as linhas de arrasto nas superfícies.',
      ],
      secoes: [
        {
          titulo: 'Z-Hop (Travel Lift)',
          conteudo: [
            'Eleva o bico em Z antes de cada movimento de travel — evita arrastar o bico pela superfície da peça.',
            'Z-hop Height: 0,1–0,6 mm. Mais alto = mais seguro mas mais lento.',
            'Slow Lift: eleva devagar para reduzir vibração.',
            'Z-hop Only Over Printed Surface: ativa Z-hop apenas quando o travel cruza material impresso.',
            'Custo: mais tempo de travel; benefício: sem riscos na superfície.',
          ],
        },
        {
          titulo: 'Motion Ability',
          conteudo: [
            'Define se a impressora tem as capacidades de movimento necessárias para certas features.',
            'Layer Change Gcode: executado a cada mudança de camada.',
            'Start/End Gcode: scripts personalizados para início e fim.',
            'Bed Mesh Calibration: nivelamento automático da mesa por pontos.',
          ],
        },
        {
          titulo: 'Travel Speed e otimização de travel',
          conteudo: [
            'Travel speed: velocidade máxima durante movimentos sem extrusão. Use o máximo seguro da sua máquina.',
            'Avoid Crossing Perimeters: o slicer traça o travel pelo interior da peça para evitar cruzar paredes — reduz marcas de travel.',
            'Combing Mode: variante do Avoid Crossing — mantém o travel dentro do infill.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Z-hop — quando ativar',
          colunas: ['Situação', 'Z-hop recomendado', 'Motivo'],
          linhas: [
            ['Peça decorativa com topo liso', 'Sim, 0,2 mm', 'Evita riscos visíveis'],
            ['Peça funcional simples', 'Opcional', 'Velocidade vs proteção'],
            ['PETG / stringing', 'Sim, 0,2–0,4 mm', 'Reduz fios de travel'],
            ['PLA rápido (velocidade máxima)', 'Não ou mínimo', 'Tempo extra de lift'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Controla como o cabeçote se move entre regiões sem extrudar, evitando danos à superfície.',
        impactoQualidade: 'Alto em peças decorativas — elimina linhas de arrasto visíveis.',
        impactoTempo: 'Z-hop adiciona 5–15% ao tempo de travel; Avoid Crossing Perimeters pode adicionar 5–10% ao tempo total.',
        errosComuns: [
          'Desativar Z-hop em peças decorativas e ter riscos na superfície superior.',
          'Ativar Z-hop alto em alta velocidade — causa vibração e instabilidade.',
        ],
      },
      exercicios: [
        'Imprima uma peça com Z-hop ativo e desativado e compare as marcas de travel na superfície.',
        'Configure Combing Mode e observe como as trajetórias de travel mudam no Preview.',
      ],
      testes: [
        'O que é Z-hop e qual defeito ele previne?',
        'Por que "Avoid Crossing Perimeters" pode adicionar tempo de impressão?',
      ],
    },
  ],
}
