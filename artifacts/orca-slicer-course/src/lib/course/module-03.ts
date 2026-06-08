import type { Modulo } from '@/lib/types'

export const modulo03: Modulo = {
  slug: 'processo',
  numero: 3,
  titulo: 'Configurações de Processo',
  subtitulo: 'O coração do fatiamento',
  descricao:
    'Cada parâmetro que define como sua peça é construída: Quality, Walls, Top/Bottom, Infill, Speed, Acceleration, Cooling, Support e Adhesion. Aqui mora 70% das suas decisões técnicas.',
  licoes: [
    {
      slug: 'quality-camadas',
      titulo: 'Quality — Altura de Camada e Camadas Adaptativas',
      resumo: 'Layer height, first layer height, adaptive layer e variable layer height.',
      duracao: '16 min',
      nivel: 'Intermediário',
      intro: [
        'A altura de camada é o parâmetro de qualidade mais visível e o de maior impacto no tempo. Camadas finas = mais detalhe e mais tempo; camadas grossas = rápido e robusto, porém com "degraus" visíveis.',
        'A primeira camada é especial: ela define se a peça gruda. Quase todo fracasso de impressão começa (ou não) na primeira camada.',
      ],
      secoes: [
        {
          titulo: 'Layer Height',
          conteudo: [
            'Define a espessura de cada fatia em Z. Regra: entre 25% e 75% do diâmetro do bico (0,1–0,3 mm para bico 0,4).',
            'O tempo é quase inversamente proporcional: passar de 0,2 para 0,1 mm aproximadamente DOBRA o tempo.',
            'Camadas mais finas melhoram superfícies curvas e overhangs, mas não melhoram a precisão XY (isso são as paredes).',
          ],
        },
        {
          titulo: 'First Layer Height',
          conteudo: [
            'Geralmente definida como 100–150% da camada normal para melhor adesão à mesa.',
            'Camada inicial mais grossa = mais material pressionado contra a mesa = mais adesão.',
            'A velocidade da primeira camada deve ser reduzida independentemente para garantir adesão.',
          ],
        },
        {
          titulo: 'Adaptive Layer Height',
          conteudo: [
            'O OrcaSlicer ajusta automaticamente a altura de camada em cada região com base na curvatura da superfície.',
            'Regiões curvas usam camadas mais finas; regiões retas usam camadas mais grossas.',
            'Resultado: qualidade máxima onde importa, velocidade onde a curvatura é baixa.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Controla a resolução vertical da impressão e a qualidade das superfícies.',
        comoFunciona: 'Cada camada é uma fatia horizontal da peça; alturas menores produzem mais camadas e mais detalhe.',
        quandoUsar: 'Camadas finas (0,1–0,15 mm) para peças estéticas; grossas (0,25–0,3 mm) para peças funcionais e rápidas.',
        impactoTempo: 'Alto — dobrando a altura, você corta o tempo pela metade.',
        impactoQualidade: 'Alto nas superfícies curvas e inclinadas; neutro nas paredes verticais.',
      },
      tabelas: [
        {
          titulo: 'Guia de altura de camada',
          colunas: ['Altura', 'Tempo', 'Qualidade', 'Uso'],
          linhas: [
            ['0,08–0,10 mm', '4–5x mais lento', 'Máxima', 'Miniaturas, joias'],
            ['0,15–0,20 mm', 'Padrão', 'Boa', 'Uso geral'],
            ['0,25–0,30 mm', '25–50% mais rápido', 'Funcional', 'Peças de engenharia'],
            ['0,35+ mm', 'Muito rápido', 'Grossa', 'Protótipos rápidos'],
          ],
        },
      ],
      exercicios: [
        'Imprima a mesma peça em 0,1, 0,2 e 0,3 mm e compare tempo, qualidade e resistência.',
        'Ative o Adaptive Layer Height numa peça com curvas e compare com altura fixa.',
      ],
      testes: [
        'Por que a primeira camada é mais grossa que as seguintes?',
        'Qual é a altura máxima de camada para um bico 0,4 mm?',
      ],
    },
    {
      slug: 'paredes-infill',
      titulo: 'Paredes, Infill e Top/Bottom',
      resumo: 'Wall loops, top/bottom layers, infill density e como cada um afeta resistência e tempo.',
      duracao: '20 min',
      nivel: 'Intermediário',
      intro: [
        'As paredes (walls) definem o exterior e a resistência lateral; o infill preenche o interior; as camadas top/bottom fecham a peça. São os três pilares estruturais de qualquer impressão.',
        'A combinação certa de paredes + infill + top/bottom é o que determina se a peça aguenta o uso real.',
      ],
      secoes: [
        {
          titulo: 'Wall Loops (número de paredes)',
          conteudo: [
            '2–3 paredes: adequado para decoração e protótipos sem carga.',
            '3–4 paredes: uso geral, boa resistência lateral.',
            '5+ paredes: peças que sofrem impacto, pressão ou rosca diretamente na parede.',
            'Mais paredes = mais tempo e filamento, mas quase sempre mais resistência que mais infill.',
          ],
        },
        {
          titulo: 'Top e Bottom Layers',
          conteudo: [
            '3–4 top layers: fecha a peça adequadamente para a maioria dos casos.',
            'Regra: top/bottom total deve cobrir 0,8–1,0 mm (ex.: 4 camadas de 0,2 mm = 0,8 mm).',
            'Poucas top layers + infill baixo = "pillowing" (superfície superior com furos).',
          ],
        },
        {
          titulo: 'Infill Density e Pattern',
          conteudo: [
            '10–15%: decoração e peças que não sofrem carga.',
            '15–25%: uso geral, boa base para as top layers.',
            '35–50%: peças funcionais com carga moderada.',
            '70–100%: peças que sofrem compressão forte, peças sólidas.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Configurações por uso',
          colunas: ['Uso', 'Paredes', 'Infill', 'Top/Bottom'],
          linhas: [
            ['Decoração', '2–3', '10–15%', '3–4'],
            ['Uso geral', '3', '15–25%', '4'],
            ['Funcional', '4', '30–40%', '4–5'],
            ['Mecânica pesada', '5+', '40–60%', '5+'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Determina a estrutura interna e a resistência global da peça.',
        impactoResistencia: 'Paredes têm mais impacto que infill na maioria dos casos de uso real.',
        impactoTempo: 'Mais paredes e mais infill aumentam o tempo linearmente.',
        impactoFilamento: 'Infill alto e muitas paredes consomem mais material.',
      },
      exercicios: [
        'Imprima um cubo com 2, 3, 4 e 5 paredes e quebre cada um — compare a resistência.',
        'Compare 15% vs 40% de infill na resistência e no tempo de impressão.',
      ],
      testes: [
        'O que causa "pillowing" no topo de uma peça?',
        'Por que adicionar paredes geralmente ajuda mais na resistência do que aumentar o infill?',
      ],
    },
    {
      slug: 'cooling-support-adhesion',
      titulo: 'Cooling, Suporte e Adesão à Mesa',
      resumo: 'Configurações de ventilação, tipos de suporte e estratégias de adesão (brim, skirt, raft).',
      duracao: '18 min',
      nivel: 'Intermediário',
      intro: [
        'Cooling controla como o material solidifica — afeta bridges, overhangs e stringing. Suporte mantém geometrias impossíveis. Adesão garante que a peça não desprenda durante a impressão.',
      ],
      secoes: [
        {
          titulo: 'Cooling Fan',
          conteudo: [
            'PLA: 80–100% de fan. Solidifica rápido, bridges excelentes.',
            'PETG: 30–50%. Fan alto causa delaminação e superfícies quebradiças.',
            'ABS/ASA: 0–20%. Fan alto causa warping.',
            'As primeiras camadas geralmente usam menos fan para melhorar a adesão à mesa.',
          ],
        },
        {
          titulo: 'Tipos de Suporte',
          conteudo: [
            'Normal (grid): sólido e estável, difícil de remover.',
            'Tree Organic: menos material, mais fácil de remover, ótimo para peças orgânicas.',
            'Threshold padrão: 40°–45°. Abaixo desse ângulo de overhang, suporte é gerado.',
            'Interface layers: camadas finas entre a peça e o suporte facilitam a remoção e melhoram o acabamento.',
          ],
        },
        {
          titulo: 'Adesão à Mesa',
          conteudo: [
            'Skirt: apenas contorno sem tocar a peça — ajuda a purgar o bico.',
            'Brim: aba ao redor da peça — aumenta a área de contato e evita warping.',
            'Raft: plataforma completa sob a peça — máxima adesão, mais difícil de remover.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Controla solidificação, geometrias suspensas e adesão à mesa.',
        errosComuns: [
          'Usar fan alto com PETG e causar delaminação.',
          'Usar raft desnecessariamente, aumentando tempo e material.',
        ],
        comoCorrigir: [
          'Ajuste o fan conforme o material, não use valores genéricos.',
          'Para a maioria dos casos, brim é suficiente se a temperatura da mesa estiver correta.',
        ],
      },
      exercicios: [
        'Imprima a mesma bridge com 0%, 50% e 100% de fan e compare o resultado.',
        'Compare suporte Normal com Tree Organic e avalie remoção e acabamento.',
      ],
      testes: [
        'Por que PETG precisa de menos fan que PLA?',
        'Qual é a diferença entre brim e raft?',
      ],
    },
  ],
}
