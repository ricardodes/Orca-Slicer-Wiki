import type { Modulo } from '@/lib/types'

export const modulo16: Modulo = {
  slug: 'estudos-de-caso-avancados',
  numero: 16,
  titulo: 'Estudos de Caso Reais',
  subtitulo: 'Decisões corretas para qualquer peça',
  descricao:
    'Estudos completos — do vaso decorativo ao produto viral — com material, parâmetros, custo, lucro estimado e justificativa técnica de cada decisão.',
  licoes: [
    {
      slug: 'casos-decorativos',
      titulo: 'Casos decorativos e organizadores',
      resumo: 'Vaso decorativo, organizador e suporte de ferramentas: estética e funcionalidade leve.',
      duracao: '24 min',
      nivel: 'Especialista',
      intro: [
        'Estes produtos vendem pela aparência e pela utilidade no dia a dia. As decisões priorizam acabamento e baixo custo de material.',
        'Cada caso segue o método: material → camada → paredes → infill → suporte → velocidade → custo → lucro → justificativa.',
      ],
      secoes: [
        {
          titulo: 'Caso 1 — Vaso decorativo',
          conteudo: [
            'Material: PLA Silk ou Galaxy para brilho decorativo.',
            'Layer Height: 0,2 mm; Walls: modo vaso (spiral/vase) — 1 parede contínua.',
            'Infill: 0% (vaso é oco); Support: nenhum.',
            'Velocidade: parede externa lenta para superfície lisa; Seam: Random.',
            'Custo baixo, lucro alto pela percepção decorativa — PLA Silk justifica preço premium.',
          ],
        },
        {
          titulo: 'Caso 2 — Organizador de mesa',
          conteudo: [
            'Material: PLA ou PETG; Layer Height: 0,24–0,28 mm (velocidade).',
            'Walls: 2–3; Infill: 10–15% gyroid; Support: nenhum (projetar sem balanços).',
            'Velocidade: alta; Seam: Aligned numa quina.',
            'Produto com alta demanda — otimizar para máxima quantidade por placa.',
          ],
        },
        {
          titulo: 'Caso 3 — Suporte de ferramentas',
          conteudo: [
            'Material: PETG (suporta impacto de ferramentas pesadas).',
            'Layer Height: 0,2 mm; Walls: 3–4; Infill: 20–25% gyroid.',
            'Orientação: base na mesa, slots voltados para cima — carga ao longo das camadas.',
            'Justificativa: PETG traz resistência real para uso industrial leve.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Parâmetros por tipo de produto decorativo',
          colunas: ['Produto', 'Material', 'Camada', 'Paredes', 'Infill', 'Velocidade'],
          linhas: [
            ['Vaso decorativo', 'PLA Silk', '0,20 mm', 'Vase mode', '0%', 'Parede lenta'],
            ['Organizador', 'PLA/PETG', '0,25 mm', '2–3', '15%', 'Alta'],
            ['Suporte ferramentas', 'PETG', '0,20 mm', '3–4', '25%', 'Média'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Demonstra como aplicar o raciocínio técnico completo em produtos reais de alta demanda.',
        casosReais: [
          'Um vaso em PLA Silk de 80g pode ser vendido por R$35–45, com custo de R$8–12 — margem de 3–4x.',
        ],
      },
      exercicios: [
        'Imprima um vaso em modo Spiral e compare custo e acabamento com 3 paredes + 15% infill.',
        'Configure uma placa com o máximo de organizadores e calcule o custo e o lucro do lote.',
      ],
      testes: [
        'Por que o modo Spiral (Vase) usa tão pouco material?',
        'Em que situação o PETG justifica o custo extra em relação ao PLA num suporte de ferramentas?',
      ],
    },
    {
      slug: 'casos-mecanicos-virais',
      titulo: 'Produtos Mecânicos e Virais — Estratégias de Escala',
      resumo: 'Peças mecânicas funcionais e produtos que viralizam: configuração e escala de produção.',
      duracao: '22 min',
      nivel: 'Especialista',
      intro: [
        'Produtos virais (fidgets, brinquedos articulados, gadgets) têm dinâmica diferente — velocidade de produção e volume importam mais que acabamento extremo.',
        'Peças mecânicas funcionais (engrenagens, suportes, encaixes) exigem precisão — erro de 0,2 mm pode arruinar o produto.',
      ],
      secoes: [
        {
          titulo: 'Produto viral — Articulado em PLA',
          conteudo: [
            'Material: PLA+ (resistência ao impacto nas articulações).',
            'Camada: 0,2 mm; Walls: 3; Infill: 20% gyroid.',
            'Folga nas articulações: 0,3 mm — testar antes de escalar o lote.',
            'Estratégia: imprimir muitos por placa, reduzir setup time.',
          ],
        },
        {
          titulo: 'Peça mecânica — Engrenagem de substituição',
          conteudo: [
            'Material: ABS ou PETG (resistência ao desgaste).',
            'Camada: 0,1–0,15 mm (precisão nos dentes).',
            'Walls: 4–5; Infill: 50–60%; Calibração dimensional obrigatória.',
            'Tolerância nos dentes: ±0,1 mm máximo para engrenamento suave.',
          ],
        },
        {
          titulo: 'Estratégia de escala para produtos populares',
          conteudo: [
            'Padronize o perfil: uma vez calibrado, nunca mude sem teste.',
            'Lotes grandes: preencha a placa ao máximo para minimizar setup por peça.',
            'Monitoramento: câmera para detectar falhas sem estar presente.',
            'Controle de estoque: mantenha buffer de 20–30% de unidades prontas.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define estratégias para produtos de alta demanda e peças com requisitos mecânicos precisos.',
        impactoTempo: 'Lotes grandes reduzem o custo por peça em 20–40% via economia de setup.',
      },
      exercicios: [
        'Projete e imprima uma peça articulada com folgas corretas — sem cola, só encaixe.',
        'Configure uma placa completa do produto mais popular que você faz e calcule o custo por peça no lote.',
      ],
      testes: [
        'Por que a folga entre partes articuladas não pode ser zero?',
        'Como lotes maiores reduzem o custo por peça mesmo sem mudar o material?',
      ],
      desafio: 'Escolha um produto para vender online, configure todos os parâmetros, imprima um lote piloto de 5 unidades, calcule o custo real e defina a estratégia de precificação e escala.',
    },
  ],
}
