import type { Modulo } from '@/lib/types'

export const modulo08: Modulo = {
  slug: 'estudos-de-caso',
  numero: 8,
  titulo: 'Estudos de Caso',
  subtitulo: 'A configuração ideal para cada tipo de peça',
  descricao:
    'Análise prática de peças reais: suportes, vasos, organizadores, peças automotivas, dobradiças, engrenagens, brinquedos, decoração e produtos para venda.',
  licoes: [
    {
      slug: 'funcionais-mecanicas',
      titulo: 'Peças Funcionais: Suportes, Dobradiças, Engrenagens e Automotivas',
      resumo: 'Como configurar peças que precisam aguentar carga, movimento e calor.',
      duracao: '20 min',
      nivel: 'Especialista',
      intro: [
        'Peças funcionais perdoam pouco: erro de orientação ou material as faz falhar em uso. Aqui o critério é resistência e durabilidade, não aparência.',
      ],
      secoes: [
        {
          titulo: 'Suporte de ferramentas e organizadores',
          conteudo: [
            'Orientação: base maior na mesa para estabilidade; cargas ao longo das camadas.',
            'Material: PETG (tenaz) ou PLA para uso interno leve.',
            'Infill 15–25% gyroid, 3–4 paredes, camada 0,2–0,28 mm.',
          ],
        },
        {
          titulo: 'Dobradiças e engrenagens',
          conteudo: [
            'Dobradiça: oriente o eixo do movimento ao longo das camadas para não delaminar.',
            'Engrenagem: ABS ou PETG, 4+ paredes, 40–60% infill, camada fina (0,1–0,15 mm) para dentes precisos.',
            'Folga de 0,2 mm entre partes móveis para encaixe funcional após calibração dimensional.',
          ],
        },
        {
          titulo: 'Peças automotivas',
          conteudo: [
            'Temperatura acima de 60–70 °C: ABS, ASA ou PETG CF — PLA derrete no carro.',
            'Vibração constante: material tenaz (PETG ou ASA) + orientação com camadas resistindo ao cisalhamento.',
            'Suporte e fixação: furos com pinos metálicos inseridos a quente (heat inserts) para roscas duráveis.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Configurações por tipo de peça funcional',
          colunas: ['Peça', 'Material', 'Infill', 'Paredes', 'Camada'],
          linhas: [
            ['Suporte parede', 'PETG', '20–30%', '3–4', '0,2 mm'],
            ['Engrenagem', 'ABS/PETG', '40–60%', '4–5', '0,15 mm'],
            ['Dobradiça', 'PETG/PLA+', '30%', '4', '0,2 mm'],
            ['Peça automotiva', 'ASA/PETG CF', '40%', '4+', '0,2 mm'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define a combinação ideal de material, orientação e parâmetros para peças com função mecânica real.',
        errosComuns: [
          'Imprimir suportes de parede com PLA — amolece no sol.',
          'Imprimir engrenagens sem câmara para ABS — warping deforma os dentes.',
        ],
      },
      exercicios: [
        'Projete e imprima uma dobradiça funcional testando diferentes folgas (0,1, 0,2 e 0,3 mm).',
        'Imprima um suporte de prateleira em PETG e teste a carga máxima suportada.',
      ],
      testes: [
        'Qual material é obrigatório para peças dentro de um carro no verão?',
        'Como a orientação da dobradiça afeta sua durabilidade?',
      ],
    },
    {
      slug: 'decorativos-comerciais',
      titulo: 'Peças Decorativas, Brinquedos e Produtos para Venda',
      resumo: 'Configurações que priorizam acabamento visual e custo-benefício para comercialização.',
      duracao: '18 min',
      nivel: 'Avançado',
      intro: [
        'Peças decorativas e produtos para venda têm critério diferente: aparência e custo importam mais que resistência. O objetivo é maximizar a percepção de qualidade minimizando o tempo e o material.',
      ],
      secoes: [
        {
          titulo: 'Vasos e decoração',
          conteudo: [
            'Modo Vase/Spiral: 0% infill, 1 parede contínua, sem costura — acabamento perfeito.',
            'PLA Silk ou Galaxy para efeito decorativo premium.',
            'Seam: Random em cilindros, Aligned em objetos com quinas.',
          ],
        },
        {
          titulo: 'Brinquedos e peças infantis',
          conteudo: [
            'Material: PLA (sem ABS — odor e material problemático para crianças).',
            '3–4 paredes para resistir ao manuseio.',
            'Infill 20–30% gyroid — bom impacto sem excesso de peso.',
            'Ironing no topo para superfície lisa e sem marcas.',
          ],
        },
        {
          titulo: 'Produtos para venda em marketplace',
          conteudo: [
            'Velocidade moderada na parede externa — tempo extra vale o acabamento.',
            'Seam Painting manual para esconder costura.',
            'Camada 0,15–0,2 mm para boa qualidade visual.',
            'Calcule custo real + margem antes de precificar no marketplace.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Otimiza aparência e custo de produção para maximizar o lucro em produtos comercializados.',
        impactoQualidade: 'Alto — acabamento é o fator de venda principal.',
        impactoFilamento: 'Vasos em modo Spiral usam 50–70% menos material que com infill.',
      },
      exercicios: [
        'Imprima um vaso em modo Spiral e compare com o mesmo em 3 paredes + 15% infill.',
        'Calcule o custo real de um produto decorativo e defina um preço com margem de 3x.',
      ],
      testes: [
        'O que é o modo Vase/Spiral e qual sua principal vantagem?',
        'Por que o Ironing melhora o acabamento do topo?',
      ],
    },
  ],
}
