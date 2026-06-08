import type { Modulo } from '@/lib/types'

export const modulo05: Modulo = {
  slug: 'calibracao',
  numero: 5,
  titulo: 'Calibração Completa',
  subtitulo: 'As ferramentas de calibração nativas do OrcaSlicer',
  descricao:
    'O OrcaSlicer tem calibrações embutidas (menu Calibration). Dominar Temperature Tower, Flow, Pressure Advance, Retraction, Input Shaper e os testes de qualidade é o que transforma uma impressora "ok" numa máquina afiada.',
  licoes: [
    {
      slug: 'temp-flow-pa',
      titulo: 'Temperature Tower, Flow Rate e Pressure Advance',
      resumo: 'As três calibrações fundamentais que afetam diretamente a qualidade e a precisão.',
      duracao: '20 min',
      nivel: 'Avançado',
      intro: [
        'Calibrar é medir, não adivinhar. O OrcaSlicer gera modelos de teste prontos no menu Calibration. Você imprime, observa e ajusta — substituindo o "achismo" por dados.',
        'A ordem importa: temperatura primeiro (afeta tudo), depois fluxo, depois pressure advance.',
      ],
      secoes: [
        {
          titulo: 'Temperature Tower',
          conteudo: [
            'Imprime uma torre onde cada bloco usa uma temperatura diferente.',
            'Como interpretar: escolha o bloco com melhor equilíbrio entre adesão de camada, ponte, overhang e mínimo stringing.',
            'Como corrigir: defina a temperatura vencedora no perfil de filamento.',
          ],
        },
        {
          titulo: 'Flow Rate (calibração de fluxo)',
          conteudo: [
            'Imprime um cubo hollow com uma parede e mede a espessura real com paquímetro.',
            'Se a espessura está abaixo do esperado: aumente o Flow Ratio no perfil de filamento.',
            'Se está acima: reduza o Flow Ratio. Ajustes típicos: ±5–10%.',
            'O OrcaSlicer faz calibração de fluxo em dois passos: Coarse (grosso) e Fine (fino).',
          ],
        },
        {
          titulo: 'Pressure Advance (PA)',
          conteudo: [
            'Compensa a inércia de pressão no hotend — filamento leva tempo para começar e parar de fluir.',
            'Sem PA: cantos com bolhas de material (excesso de pressão ao desacelerar).',
            'Métodos: Line (rápido e visual), Tower (analítico) e Pattern (mais preciso).',
            'Valor típico: 0,01–0,05 para Direct Drive; 0,3–0,8 para Bowden.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Ordem recomendada de calibração',
          colunas: ['Etapa', 'Calibração', 'Por quê'],
          linhas: [
            ['1ª', 'Temperature Tower', 'Afeta viscosidade e tudo que vem depois'],
            ['2ª', 'Max Volumetric Speed', 'Define limite de fluxo seguro'],
            ['3ª', 'Flow Rate', 'Garante espessura de parede correta'],
            ['4ª', 'Pressure Advance', 'Afina controle de pressão'],
            ['5ª', 'Retraction', 'Elimina stringing'],
            ['6ª', 'Input Shaping', 'Reduz ghosting/ringing'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Ajusta o slicer e o firmware para a realidade física do seu hardware e filamento.',
        comoFunciona: 'Cada calibração imprime um modelo de teste específico e você ajusta o parâmetro com base no resultado visual ou medido.',
        quandoUsar: 'Sempre que trocar de filamento, bico ou hotend. Também ao mudar a velocidade de impressão significativamente.',
        impactoQualidade: 'Fundamental — sem calibração, mesmo o melhor slicer produz resultados medíocres.',
      },
      exercicios: [
        'Execute a Temperature Tower para seu PLA atual e documente a temperatura ideal.',
        'Realize a calibração de Flow Rate nos passos Coarse e Fine e registre o Flow Ratio resultante.',
      ],
      testes: [
        'O que indica um "blob" nos cantos de uma peça?',
        'Qual é a ordem correta: Flow antes ou depois de Pressure Advance?',
      ],
      desafio: 'Execute o protocolo completo de calibração (Temp → Fluxo → PA → Retração) e documente os valores encontrados. Compare uma peça antes e depois da calibração.',
    },
    {
      slug: 'retraction-input-shaper',
      titulo: 'Retraction e Input Shaping',
      resumo: 'Eliminar stringing e ghosting com calibração precisa de retração e input shaping.',
      duracao: '22 min',
      nivel: 'Especialista',
      intro: [
        'Retraction e Input Shaping são as calibrações que separam impressoras mediocres de impressoras realmente afinadas. Stringing e ghosting desaparecem quando esses dois parâmetros estão corretos.',
      ],
      secoes: [
        {
          titulo: 'Retraction Tower',
          conteudo: [
            'Imprime uma torre com vários "polegares" em cada bloco, cada bloco com retração diferente.',
            'Método: inicie em 0 mm, termine em 2 mm (Direct Drive) ou 6 mm (Bowden), passo de 0,1–0,2 mm.',
            'Escolha a seção com mínimo stringing sem lacunas no início das linhas.',
            'Dica: seque o filamento antes de calibrar — umidade causa stringing que nenhuma retração resolve.',
          ],
        },
        {
          titulo: 'Input Shaping (Cornering)',
          conteudo: [
            'Técnica que compensa as vibrações mecânicas do cabeçote — essencial para velocidade alta.',
            'Tipos de filtro: ZV (simples), MZV, EI, 2HUMP_EI, 3HUMP_EI — mais complexo = mais eficaz mas mais lento.',
            'Como calibrar: imprima o padrão de teste de ringing do OrcaSlicer e ajuste a frequência.',
            'Klipper e alguns firmwares modernos têm Input Shaping automático com acelerômetro ADXL345.',
          ],
        },
        {
          titulo: 'Jerk e Junction Deviation',
          conteudo: [
            'Jerk: velocidade instantânea mantida em mudanças de direção — alto = mais velocidade e mais ringing.',
            'Junction Deviation: alternativa ao Jerk, mais suave e precisa.',
            'Calibrar: reduza até o ringing desaparecer ou use Input Shaping para permitir aceleração maior sem ghosting.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Elimina stringing (retração) e ecos visuais nas paredes (Input Shaping).',
        impactoQualidade: 'Decisivo para peças comerciais e decorativas de alta qualidade.',
        impactoTempo: 'Input Shaping permite velocidades maiores sem perder qualidade.',
      },
      exercicios: [
        'Execute a calibração de Retraction Tower para seu PETG e encontre a retração mínima eficaz.',
        'Imprima o padrão de teste de ringing e ajuste a frequência do Input Shaping.',
      ],
      testes: [
        'Qual é o sinal de retração excessiva numa peça?',
        'Como o Input Shaping permite imprimir mais rápido sem ghosting?',
      ],
    },
  ],
}
