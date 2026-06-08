import type { Modulo } from '@/lib/types'

export const modulo14: Modulo = {
  slug: 'resolucao-problemas',
  numero: 14,
  titulo: 'Resolução de Problemas Avançada',
  subtitulo: 'Diagnóstico e cura de qualquer defeito',
  descricao:
    'Um manual de diagnóstico para os principais defeitos de FDM: sintomas, causas, diagnóstico e solução para stringing, warping, delaminação, extrusão, layer shift, Z banding, clogs e mais.',
  licoes: [
    {
      slug: 'defeitos-superficie',
      titulo: 'Stringing, Ghosting, Ringing e Z Banding',
      resumo: 'Defeitos visuais de superfície: como reconhecer e corrigir.',
      duracao: '22 min',
      nivel: 'Avançado',
      intro: [
        'Defeitos de superfície raramente afetam a resistência, mas arruínam a aparência e o valor de venda.',
        'Cada um tem uma assinatura visual distinta — aprender a "ler" a peça é o que diferencia o profissional.',
      ],
      secoes: [
        {
          titulo: 'Stringing (fios)',
          conteudo: [
            'Sintomas: fios finos de plástico ligando partes separadas da peça.',
            'Causas: retração insuficiente, temperatura alta, filamento úmido (principalmente PETG).',
            'Diagnóstico: piora com filamento úmido; melhora ao secar.',
            'Solução: secar o filamento, calibrar retração, reduzir temperatura, ativar Wipe e Coasting.',
          ],
        },
        {
          titulo: 'Ghosting e Ringing',
          conteudo: [
            'Sintomas: ecos/sombras repetidas após cada quina ou mudança de direção.',
            'Causas: aceleração alta sem Input Shaper, frame pouco rígido, correias frouxas.',
            'Diagnóstico: padrão de ondas aparece depois de mudanças de direção.',
            'Solução: calibrar Input Shaper, reduzir aceleração, apertar correias.',
          ],
        },
        {
          titulo: 'Z Banding',
          conteudo: [
            'Sintomas: faixas horizontais regulares ao longo da altura da peça.',
            'Causas: fuso/barra Z empenado, acoplador defeituoso, variação de temperatura.',
            'Diagnóstico: faixas se repetem em intervalos constantes ligados ao passo do fuso.',
            'Solução: alinhar/lubrificar o eixo Z, verificar acoplador, estabilizar temperatura.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Diagnóstico rápido de defeitos de superfície',
          colunas: ['Defeito', 'Sintoma', 'Causa principal', 'Solução'],
          linhas: [
            ['Stringing', 'Fios entre partes', 'Umidade + retração', 'Secar + calibrar retração'],
            ['Ghosting', 'Ecos após quinas', 'Aceleração sem IS', 'Input Shaper + correias'],
            ['Z Banding', 'Faixas horizontais', 'Fuso empenado', 'Alinhar/lubrificar Z'],
            ['Blobs na seam', 'Bolinha na costura', 'PA descalibrado', 'Calibrar Pressure Advance'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Identifica e corrige defeitos puramente visuais de superfície.',
        impactoQualidade: 'Alto no valor estético e comercial.',
        errosComuns: [
          'Tentar resolver stringing com retração quando a causa é umidade.',
          'Apertar demais a correia achando que resolve ghosting — a frequência de ressonância muda, mas o ghosting persiste.',
        ],
      },
      exercicios: [
        'Imprima uma torre de stringing antes e depois de secar o filamento por 4h a 65 °C.',
        'Identifique a frequência de ressonância da sua máquina usando o padrão de ringing.',
      ],
      testes: [
        'Como você distingue stringing causado por umidade de stringing causado por retração insuficiente?',
        'Por que Z banding se repete em intervalos regulares?',
      ],
    },
    {
      slug: 'defeitos-estruturais',
      titulo: 'Warping, Delaminação, Subextrusão e Layer Shift',
      resumo: 'Defeitos que comprometem a estrutura e a integridade da peça.',
      duracao: '24 min',
      nivel: 'Avançado',
      intro: [
        'Defeitos estruturais são mais graves que os visuais — eles afetam a resistência, a forma e até tornam a peça inutilizável.',
        'A maioria tem causas identificáveis e soluções diretas quando você entende o mecanismo.',
      ],
      secoes: [
        {
          titulo: 'Warping',
          conteudo: [
            'Sintoma: bordas da peça levantam da mesa durante ou após a impressão.',
            'Causa: diferença de temperatura entre as camadas — o plástico contrai ao resfriar.',
            'Soluções: aquecer a mesa, usar brim largo, câmara fechada (ABS), ajustar temperatura de impressão.',
            'Materiais mais propensos: ABS, ASA, PA. Menos propensos: PLA, PETG.',
          ],
        },
        {
          titulo: 'Delaminação',
          conteudo: [
            'Sintoma: camadas se separam horizontalmente, peça quebra entre camadas facilmente.',
            'Causas: temperatura de impressão baixa, velocidade alta (material não adere), fan alto (PETG/ABS).',
            'Solução: aumentar temperatura, reduzir velocidade, reduzir fan para materiais técnicos.',
          ],
        },
        {
          titulo: 'Subextrusão e Obstrução (Clog)',
          conteudo: [
            'Subextrusão: menos material que o esperado — paredes finas, furos no topo.',
            'Causas: temperatura baixa, velocidade alta demais (fluxo máximo excedido), filamento úmido.',
            'Clog parcial: fluxo inconsistente, listras verticais nas paredes.',
            'Clog total: a impressão para, o filamento não sai.',
            'Solução: limpeza com "atomic pull" (cold pull), substituição do bico.',
          ],
        },
        {
          titulo: 'Layer Shift',
          conteudo: [
            'Sintoma: camadas deslocadas em X ou Y — a peça parece "deslizou" no meio.',
            'Causas: correia frouxa, motor perdendo passos, cabeçote batendo no modelo.',
            'Solução: apertar/trocar correias, reduzir velocidade/aceleração, verificar se há colisão com suporte.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Defeitos estruturais — causa e solução',
          colunas: ['Defeito', 'Sintoma', 'Causa', 'Solução'],
          linhas: [
            ['Warping', 'Bordas levantam', 'Contração do material', 'Brim + câmara + temperatura'],
            ['Delaminação', 'Camadas se separam', 'Temperatura/velocidade', 'Temperatura ↑, velocidade ↓'],
            ['Subextrusão', 'Paredes finas/furos', 'Fluxo insuficiente', 'Temperatura ↑ ou velocidade ↓'],
            ['Layer Shift', 'Camadas deslocadas', 'Correia/colisão', 'Apertar correias, verificar colisão'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Diagnostica e corrige defeitos que comprometem a forma e a estrutura da peça.',
        comoFunciona: 'Cada defeito tem um mecanismo físico específico — identificar o mecanismo leva diretamente à solução.',
      },
      exercicios: [
        'Provoque warping propositalmente (retire o brim, resfrie a mesa) e observe o resultado.',
        'Execute um "atomic pull" num bico e inspecione o material retirado.',
      ],
      testes: [
        'Por que ABS é mais propenso a warping que PLA?',
        'Como identificar se a subextrusão é causada por temperatura baixa ou fluxo máximo excedido?',
      ],
    },
  ],
}
