import type { Modulo } from '@/lib/types'

export const modulo21: Modulo = {
  slug: 'calibracao-wiki',
  numero: 21,
  titulo: 'Calibração — Protocolo Completo',
  subtitulo: 'Do zero ao perfil perfeito',
  descricao:
    'O protocolo definitivo de calibração: ordem correta, cada teste, o que medir, o que ajustar e como documentar para nunca perder uma calibração boa.',
  licoes: [
    {
      slug: 'protocolo-calibracao',
      titulo: 'O Protocolo de Calibração em 8 Etapas',
      resumo: 'Ordem correta e ferramentas para cada etapa do processo de calibração.',
      duracao: '25 min',
      nivel: 'Especialista',
      intro: [
        'Calibração fora de ordem é tempo perdido. Temperatura afeta fluxo, que afeta Pressure Advance, que afeta a retração. A ordem correta garante que cada ajuste seja feito sobre uma base estável.',
        'Este protocolo cobre o processo completo desde a primeira vez até a calibração de manutenção ao trocar de filamento.',
      ],
      secoes: [
        {
          titulo: 'Etapa 1 — Nivelamento e Z offset',
          conteudo: [
            'Base de tudo: se a primeira camada não está certa, nada mais importa.',
            'Use o assistente de nivelamento do OrcaSlicer ou a calibração de Bed Mesh do Klipper.',
            'Z offset correto: a primeira linha deve ser levemente pressionada contra a mesa, sem ser excessivamente achatada.',
            'Teste: imprima um quadrado de primeira camada e verifique adesão uniforme em toda a área.',
          ],
        },
        {
          titulo: 'Etapa 2 — Temperature Tower',
          conteudo: [
            'Calibrate > Temperature Tower no menu.',
            'Inicie 15 °C acima da temperatura mínima do filamento.',
            'Avalie em cada bloco: pontes, overhangs, stringing e brilho da superfície.',
            'Escolha o bloco com melhor equilíbrio — geralmente ±5 °C do recomendado pelo fabricante.',
          ],
        },
        {
          titulo: 'Etapa 3 — Max Volumetric Speed',
          conteudo: [
            'Calibrate > Max Volumetric Speed no menu.',
            'O teste imprime uma linha que acelera progressivamente.',
            'Observe onde o filamento começa a ficar rugoso ou irregular — esse é o limite.',
            'Defina o valor máximo 10% abaixo do limite para segurança.',
          ],
        },
        {
          titulo: 'Etapas 4–8 (Flow, PA, Retraction, IS, Dimensional)',
          conteudo: [
            '4 — Flow Rate: Coarse (±10%) depois Fine (±2%). Use paquímetro.',
            '5 — Pressure Advance: Line Method ou Tower Method. Cantos nítidos sem blob = PA correto.',
            '6 — Retraction Tower: mínima retração que elimina stringing sem causar underextrusion.',
            '7 — Input Shaping: frequência de ressonância para eliminar ghosting a alta velocidade.',
            '8 — Calibração dimensional: cubo 20 mm, mede e ajusta XY Size Compensation.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Protocolo de calibração — resumo',
          colunas: ['Etapa', 'O que faz', 'Ferramenta', 'Resultado esperado'],
          linhas: [
            ['1 — Z offset', 'Adesão da 1ª camada', 'Assistente de nivelamento', 'Linha levemente achatada'],
            ['2 — Temperatura', 'Temp ideal do filamento', 'Temperature Tower', 'Bloco com melhor equilíbrio'],
            ['3 — Max Flow', 'Limite de fluxo do hotend', 'MVS Test', 'Valor em mm³/s'],
            ['4 — Flow Rate', 'Espessura de parede correta', 'Paquímetro + ajuste', 'Flow Ratio ±%'],
            ['5 — Pressure Advance', 'Cantos sem blob', 'PA Test', 'Valor PA ideal'],
            ['6 — Retração', 'Sem stringing', 'Retraction Tower', 'Distância em mm'],
            ['7 — Input Shaping', 'Sem ghosting', 'Ringing Pattern', 'Frequência Hz'],
            ['8 — Dimensional', 'Dimensões corretas', 'Cubo + paquímetro', 'XY Compensation mm'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Garante que todos os parâmetros do perfil correspondam à realidade física do hardware e do filamento.',
        comoFunciona: 'Cada etapa é realizada sobre a anterior calibrada — a ordem importa.',
        quandoUsar: 'Ao montar a impressora, ao trocar de bico, ao trocar de marca/tipo de filamento.',
        impactoQualidade: 'Uma impressora bem calibrada produz resultados consistentemente melhores que uma não calibrada com perfis premium.',
      },
      exercicios: [
        'Execute o protocolo completo de 8 etapas e documente cada valor encontrado.',
        'Compare uma peça impressa antes e depois da calibração completa.',
      ],
      testes: [
        'Por que a calibração de temperatura vem antes da calibração de fluxo?',
        'O que indica que o Pressure Advance está alto demais?',
      ],
      desafio: 'Execute o protocolo completo de calibração num novo filamento, documente todos os 8 valores e salve o perfil com o nome do filamento e data. Imprima um modelo de teste antes e depois e compare.',
    },
    {
      slug: 'manutencao-calibracao',
      titulo: 'Manutenção da Calibração e Diagnóstico Rápido',
      resumo: 'Como manter a calibração ao longo do tempo e quando recalibrar.',
      duracao: '15 min',
      nivel: 'Avançado',
      intro: [
        'A calibração não é permanente. Peças se desgastam, filamentos variam entre rolos e temperaturas ambientes mudam. Saber quando e o que recalibrar é tão importante quanto saber como.',
      ],
      secoes: [
        {
          titulo: 'Quando recalibrar',
          conteudo: [
            'Novo rolo do mesmo filamento: faça ao menos a calibração de temperatura e fluxo.',
            'Novo fabricante de filamento: protocolo completo.',
            'Troca de bico: protocolo completo.',
            'Temperatura ambiente muito diferente (estação do ano): verifique temperatura e PA.',
            'Qualidade caindo gradualmente: verifique desgaste do bico e fluxo volumétrico.',
          ],
        },
        {
          titulo: 'Diagnóstico rápido de descalibração',
          conteudo: [
            'Cantos com blobs: PA descalibrado — refaça a calibração de PA.',
            'Paredes finas ou grossas: fluxo descalibrado — refaça a calibração de fluxo.',
            'Stringing novo em material antes sem stringing: filamento úmido — seque e recalibre retração.',
            'Ghosting em peças antes sem ghosting: correia frouxou — aperte e recalibre Input Shaping.',
          ],
        },
        {
          titulo: 'Documentação e perfis salvos',
          conteudo: [
            'Salve um perfil por filamento com data e lote no nome.',
            'Documente os valores: temperatura, flow ratio, PA, retração.',
            'Use a função "Export" do OrcaSlicer para backup dos perfis.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Mantém a impressora em condições ótimas ao longo do tempo.',
        casosReais: [
          'Um rolo de PLA de outra marca mudou o flow ratio de 0,95 para 1,02 — sem recalibrar, as paredes ficaram grossas.',
        ],
      },
      exercicios: [
        'Compare dois rolos do mesmo filamento de fabricantes diferentes e veja se os parâmetros diferem.',
        'Crie um template de documentação de calibração para usar em todos os seus filamentos.',
      ],
      testes: [
        'Em que situação você NÃO precisa refazer o protocolo completo ao trocar de filamento?',
        'Quais sintomas indicam que o bico precisa ser trocado?',
      ],
    },
  ],
}
