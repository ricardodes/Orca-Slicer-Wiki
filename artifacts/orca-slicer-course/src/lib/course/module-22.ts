import type { Modulo } from '@/lib/types'

export const modulo22: Modulo = {
  slug: 'configuracoes-material',
  numero: 22,
  titulo: 'Configurações de Material Avançadas',
  subtitulo: 'Tudo sobre perfis de filamento',
  descricao:
    'Temperatura de impressão, temperatura da mesa, ventilação, shrinkage, retração e todas as propriedades que compõem um perfil de filamento perfeito no OrcaSlicer.',
  licoes: [
    {
      slug: 'perfil-filamento',
      titulo: 'Configurando o Perfil de Filamento',
      resumo: 'Todos os campos do perfil de filamento e o que cada um faz.',
      duracao: '20 min',
      nivel: 'Avançado',
      intro: [
        'Um perfil de filamento bem configurado é a diferença entre uma impressão que sempre funciona e uma que depende de sorte.',
        'O OrcaSlicer tem perfis pré-configurados, mas entender cada campo permite ajustar para rolos específicos e condições únicas.',
      ],
      secoes: [
        {
          titulo: 'Temperaturas',
          conteudo: [
            'Nozzle Temperature: temperatura principal de impressão. Afeta viscosidade, adesão entre camadas e stringing.',
            'Nozzle Temperature Initial Layer: pode ser 5–10 °C mais alta que a temperatura principal para melhor adesão na primeira camada.',
            'Bed Temperature: temperatura da mesa. PLA: 50–60 °C; PETG: 70–85 °C; ABS: 100–110 °C.',
            'Bed Temperature Initial Layer: frequentemente 5 °C mais alta que a temperatura normal para melhor adesão.',
          ],
        },
        {
          titulo: 'Ventilação (Fan)',
          conteudo: [
            'Fan Speed: porcentagem do fan durante a impressão.',
            'Disable Fan for First N Layers: desativa o fan nas primeiras camadas para melhor adesão.',
            'Slow Down Cooling: atrasa o fan até uma temperatura específica — útil para PETG e ABS.',
            'PLA: 80–100%; PETG: 30–60%; ABS/ASA: 0–20%; PA/PC: 0–10%.',
          ],
        },
        {
          titulo: 'Retração no perfil de filamento',
          conteudo: [
            'Retraction Length: distância de retração. Direct Drive: 0,5–2 mm; Bowden: 3–8 mm.',
            'Retraction Speed: velocidade de retração. 25–60 mm/s (muito rápido = desgaste no Bowden).',
            'Retract Before Wipe: retrai antes do movimento de wipe — reduz stringing.',
            'Pressure Advance é definido aqui ou no perfil da impressora.',
          ],
        },
        {
          titulo: 'Propriedades específicas do material',
          conteudo: [
            'Filament Shrinkage: compensação dimensional para materiais que contraem (ABS: 0,5–1%, Nylon: 1–2%).',
            'Max Volumetric Speed: limite de fluxo específico desse filamento — sobrescreve o limite da impressora se menor.',
            'Color (e dados de cores): identificação visual no software.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Configurações de referência por material',
          colunas: ['Material', 'Bico (°C)', 'Mesa (°C)', 'Fan (%)', 'Retração DD'],
          linhas: [
            ['PLA', '195–220', '50–60', '80–100', '0,5–1,5 mm'],
            ['PETG', '230–250', '70–85', '30–60', '0,5–1,5 mm'],
            ['ABS', '230–260', '100–110', '0–20', '1–2 mm'],
            ['ASA', '240–260', '90–110', '0–20', '1–2 mm'],
            ['TPU 95A', '220–235', '40–60', '30–60', '0–1 mm'],
            ['PA (Nylon)', '240–270', '70–85', '0–20', '1–2 mm'],
            ['PC', '250–280', '100–120', '0–30', '1–2 mm'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Define todas as propriedades de impressão específicas de um filamento.',
        comoFunciona: 'O perfil de filamento substitui os valores padrão do perfil de processo para esse material específico.',
        quandoUsar: 'Crie um perfil por marca/tipo de filamento — não use um perfil genérico para todos os PLA.',
        errosComuns: [
          'Usar o mesmo perfil para PLA de marcas diferentes — viscosidades variam muito.',
          'Não ajustar o fan para PETG — usa 100% do perfil PLA e causa delaminação.',
        ],
      },
      exercicios: [
        'Crie um perfil de filamento do zero para um PLA que você usa, calibrando cada campo.',
        'Compare dois rolos de PETG de marcas diferentes e documente as diferenças de configuração.',
      ],
      testes: [
        'Por que a temperatura da primeira camada pode ser diferente da temperatura principal?',
        'O que acontece com PETG quando o fan está em 100%?',
      ],
    },
    {
      slug: 'materiais-especiais',
      titulo: 'Materiais Especiais: CF, Nylon, PC e Materiais Técnicos',
      resumo: 'Configurações e cuidados para os materiais de alta performance.',
      duracao: '22 min',
      nivel: 'Especialista',
      intro: [
        'Os materiais técnicos oferecem propriedades superiores mas exigem configurações específicas e hardware adequado. Sem isso, são mais difíceis de imprimir do que os básicos e ficam piores.',
      ],
      secoes: [
        {
          titulo: 'Compósitos com Fibra de Carbono (CF)',
          conteudo: [
            'PLA CF, PETG CF, PA CF: resistência e rigidez muito maiores que o material base.',
            'Abrasivo: desgasta bicos de latão rapidamente — use bico endurecido (aço, tungstênio).',
            'Temperatura 5–15 °C mais alta que o material base para fundir as fibras.',
            'Mais frágil que o material base puro — não espere ductilidade.',
            'Excelente relação rigidez/peso para peças técnicas e aeronáuticas.',
          ],
        },
        {
          titulo: 'Nylon (PA)',
          conteudo: [
            'Temperatura alta: 240–270 °C; mesa: 70–90 °C com adesivo especial (Magigoo PA).',
            'Higroscópico: absorve umidade rapidamente — seque sempre antes de usar e use dry box durante.',
            'Altamente tenaz e resistente ao desgaste — excelente para engrenagens e buchas.',
            'Encolhe significativamente: use shrinkage compensation e câmara aquecida para ABS.',
          ],
        },
        {
          titulo: 'Policarbonato (PC)',
          conteudo: [
            'Temperatura muito alta: 250–290 °C; mesa: 100–130 °C; câmara aquecida necessária.',
            'Transparente e impactante — único filamento que oferece transparência real.',
            'Exige hotend sem PTFE (all-metal) — o PTFE degrada acima de 240 °C.',
            'Muito propenso a warping sem câmara fechada e temperatura de câmara alta.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Materiais técnicos — requisitos',
          colunas: ['Material', 'Bico necessário', 'Câmara', 'Secagem', 'Dificuldade'],
          linhas: [
            ['PLA CF', 'Endurecido', 'Não', 'Opcional', 'Média'],
            ['PETG CF', 'Endurecido', 'Não', 'Recomendada', 'Média'],
            ['PA CF', 'Endurecido', 'Recomendada', 'Obrigatória', 'Alta'],
            ['Nylon PA', 'Standard ok', 'Recomendada', 'Obrigatória', 'Alta'],
            ['PC', 'All-metal', 'Obrigatória', 'Obrigatória', 'Muito alta'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Habilita o uso de materiais técnicos para aplicações de alta performance.',
        casosReais: [
          'PA CF é o material preferido para brackets aeronáuticos e componentes de drones de competição — rigidez de alumínio, peso de plástico.',
        ],
        errosComuns: [
          'Imprimir Nylon sem secar — absorve água e imprime inconsistentemente.',
          'Usar bico de latão com CF — desgasta em 2–5 horas de impressão.',
        ],
      },
      exercicios: [
        'Imprima a mesma peça em PETG e PETG CF e compare a rigidez.',
        'Prepare um protocolo de secagem para Nylon na sua dehydrator.',
      ],
      testes: [
        'Por que PC exige hotend all-metal?',
        'Qual a principal desvantagem do Nylon em relação ao PETG para uso geral?',
      ],
    },
  ],
}
