import type { Modulo } from '@/lib/types'

export const modulo06: Modulo = {
  slug: 'engenharia',
  numero: 6,
  titulo: 'Engenharia Mecânica para Impressão 3D',
  subtitulo: 'Pense como engenheiro, não como operador',
  descricao:
    'Direção das camadas, tensões mecânicas, compressão, flexão, torção e cisalhamento. Aprenda a projetar e orientar peças que não quebram.',
  licoes: [
    {
      slug: 'direcao-camadas-tensoes',
      titulo: 'Direção das Camadas e Tipos de Tensão',
      resumo: 'A anisotropia da impressão FDM e como compressão, flexão, torção e cisalhamento agem sobre a peça.',
      duracao: '20 min',
      nivel: 'Especialista',
      intro: [
        'Peças FDM são anisotrópicas: muito fortes ao longo das linhas e camadas, fracas entre camadas (eixo Z). Ignorar isso é a causa nº 1 de peças que quebram "sem motivo".',
        'O segredo da resistência não está em mais material, mas em orientar a peça para que as forças corram pela direção forte.',
      ],
      secoes: [
        {
          titulo: 'Anisotropia e direção das camadas',
          conteudo: [
            'A ligação entre camadas (Z) é a mais fraca — é onde a peça delamina sob tração.',
            'Ao longo de uma linha de extrusão a peça é quase tão forte quanto o material maciço.',
            'Regra de ouro: oriente a peça para que a maior força de tração fique paralela às camadas, nunca perpendicular.',
          ],
        },
        {
          titulo: 'Os cinco tipos de tensão',
          conteudo: [
            'Compressão: força que "espreme" o material. FDM resiste bem em qualquer direção.',
            'Tração: força que "puxa" o material. Fraca no eixo Z (entre camadas).',
            'Flexão: curvatura — cria compressão num lado e tração no outro. Orientar para que a tração fique nas camadas.',
            'Cisalhamento: força que tenta fazer as metades deslizarem — evitar que a interface entre camadas fique no plano de cisalhamento.',
            'Torção: rotação em torno do eixo — distribui tensão por toda a seção transversal.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Resistência por direção de carga',
          colunas: ['Tipo de tensão', 'Direção forte', 'Direção fraca', 'Como orientar'],
          linhas: [
            ['Compressão', 'Qualquer', 'Nenhuma', 'Coluna reta na vertical'],
            ['Tração', 'XY (ao longo das camadas)', 'Z (entre camadas)', 'Linha de tração paralela às camadas'],
            ['Flexão', 'Viga horizontal em Z', 'Corte entre camadas', 'Vigas na horizontal'],
            ['Cisalhamento', 'Diagonal nas camadas', 'Interface Z', 'Evitar planos de corte no Z'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define como orientar a peça para maximizar sua resistência às forças de uso.',
        comoFunciona: 'A ligação entre camadas (interfacial bond) é 20–50% mais fraca que o material ao longo das fibras.',
        quandoUsar: 'Sempre que a peça sofre alguma carga mecânica real.',
        impactoResistencia: 'Fundamental — pode triplicar a resistência útil sem adicionar um grama de material.',
      },
      exercicios: [
        'Imprima um gancho em 3 orientações diferentes e quebre cada um para medir a força de ruptura.',
        'Identifique os tipos de tensão em 3 objetos impressos que você usa no dia a dia.',
      ],
      testes: [
        'Por que a tração no eixo Z é tão perigosa para peças FDM?',
        'Como você orientaria uma chave de parafuso impressa para máxima resistência à torção?',
      ],
    },
    {
      slug: 'infill-resistencia',
      titulo: 'Infill, Paredes e Resistência Real',
      resumo: 'Como escolher o padrão de infill e número de paredes para cada tipo de carga.',
      duracao: '18 min',
      nivel: 'Especialista',
      intro: [
        'O infill não é o maior fator de resistência — as paredes geralmente importam mais. Mas o padrão de infill certo pode fazer uma grande diferença para cargas específicas.',
      ],
      secoes: [
        {
          titulo: 'Paredes vs Infill — o que resiste mais?',
          conteudo: [
            'Para a maioria das cargas reais (impacto, flexão, tração lateral): adicionar paredes supera aumentar infill.',
            'Razão: as paredes ficam na superfície onde as tensões de flexão são maiores.',
            'Regra prática: prefira 4+ paredes a 50%+ infill para peças funcionais.',
          ],
        },
        {
          titulo: 'Padrões de Infill para resistência',
          conteudo: [
            'Gyroid: isotrópico (mesma resistência em todas as direções) — melhor para cargas multidirecionais.',
            'Cubic: quase isotrópico, mais rápido de imprimir que o gyroid.',
            'Grid: rápido e bom para compressão vertical, fraco para tensões diagonais.',
            'Lightning: quase nenhuma resistência — apenas suporte para superfície. Use só para decoração.',
          ],
        },
        {
          titulo: 'Densidade de Infill por aplicação',
          conteudo: [
            '10–15%: peças decorativas sem carga. Apenas sustenta as camadas superiores.',
            '20–30%: uso geral com carga leve.',
            '40–60%: peças funcionais com carga moderada a intensa.',
            '80–100%: máxima resistência à compressão; use apenas onde realmente necessário.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Padrões de infill por tipo de carga',
          colunas: ['Padrão', 'Resistência XY', 'Resistência Z', 'Velocidade', 'Uso'],
          linhas: [
            ['Gyroid', 'Excelente', 'Excelente', 'Moderada', 'Cargas múltiplas'],
            ['Cubic', 'Bom', 'Bom', 'Moderada', 'Uso geral funcional'],
            ['Grid', 'Bom', 'Moderado', 'Rápida', 'Cargas verticais'],
            ['Lightning', 'Mínima', 'Nenhuma', 'Muito rápida', 'Decoração'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Escolhe o padrão interno que maximiza resistência para o tipo de carga esperado.',
        impactoResistencia: 'Significativo, mas paredes têm impacto maior na maioria dos casos.',
        impactoTempo: 'Gyroid é 20–40% mais lento que grid para mesma densidade.',
      },
      exercicios: [
        'Imprima cubos com gyroid e grid em 20% de infill e quebre ambos para comparar a resistência.',
        'Calcule quantas paredes equivalem a 30% de infill em termos de resistência e tempo.',
      ],
      testes: [
        'Por que o Gyroid é considerado o padrão mais versátil para peças funcionais?',
        'Em que situação o Lightning Infill é adequado?',
      ],
    },
  ],
}
