import type { Modulo } from '@/lib/types'

export const modulo19: Modulo = {
  slug: 'suporte-avancado',
  numero: 19,
  titulo: 'Suporte — Configurações Avançadas',
  subtitulo: 'Suporte só onde é necessário, fácil de remover',
  descricao:
    'Tipos de suporte (Normal vs Tree), ângulo crítico, interface layers, densidades, suporte em superfícies específicas e técnicas para minimizar suporte com bom design.',
  licoes: [
    {
      slug: 'tipos-suporte',
      titulo: 'Tipos de Suporte: Normal vs Tree Organic',
      resumo: 'Como cada tipo funciona, quando usar e as configurações críticas.',
      duracao: '20 min',
      nivel: 'Intermediário',
      intro: [
        'Suporte é necessário, mas tem custo: material extra, tempo e pós-processamento. A escolha correta do tipo de suporte e suas configurações pode reduzir significativamente esse custo.',
        'O OrcaSlicer oferece dois tipos principais: Normal (grid) e Tree Organic. Cada um tem vantagens claras em situações diferentes.',
      ],
      secoes: [
        {
          titulo: 'Suporte Normal (Grid/Linear)',
          conteudo: [
            'Cria colunas verticais diretas sob as regiões em overhang.',
            'Estável e previsível — bom para geometrias simples.',
            'Mais difícil de remover que o Tree, especialmente em superfícies côncavas.',
            'Usa mais material porque preenche a área diretamente.',
            'Melhor para: peças com overhangs planos e grandes, onde a área de suporte é simples.',
          ],
        },
        {
          titulo: 'Tree Support (Organic)',
          conteudo: [
            'Cria uma estrutura ramificada que "cresce" da mesa até os pontos de overhang.',
            'Toca a peça apenas onde necessário — menos contato = menos marcas e mais fácil de remover.',
            'Usa significativamente menos material que o Normal para geometrias orgânicas.',
            'Mais lento de calcular (slicing) mas geralmente mais rápido de imprimir.',
            'Melhor para: peças orgânicas, overhangs pontuais e regiões internas difíceis de alcançar.',
          ],
        },
        {
          titulo: 'Ângulo crítico de suporte (Threshold)',
          conteudo: [
            'Padrão: 40–45°. Abaixo desse ângulo (mais horizontal), o suporte é gerado.',
            'Com boa ventilação e velocidade adequada, PLA aguenta 45–50° sem suporte.',
            'Aumente o threshold (menos suporte) se o acabamento dos overhangs for aceitável sem suporte.',
            'Diminua o threshold (mais suporte) para materiais que saem mal em overhang (ABS, PETG).',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Normal vs Tree Support',
          colunas: ['Característica', 'Normal', 'Tree Organic'],
          linhas: [
            ['Material usado', 'Alto', 'Baixo–Médio'],
            ['Facilidade de remoção', 'Média–difícil', 'Fácil'],
            ['Marcas na peça', 'Moderadas', 'Mínimas'],
            ['Peças orgânicas', 'Regular', 'Excelente'],
            ['Peças planas/simples', 'Bom', 'Às vezes instável'],
            ['Tempo de impressão', 'Moderado', 'Geralmente menor'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Sustenta regiões da peça que estariam no ar durante a impressão.',
        quandoUsar: 'Tree Organic por padrão; Normal para geometrias muito simples e planas.',
        impactoTempo: 'Tree Organic tipicamente 20–40% menos material e tempo que Normal.',
        impactoQualidade: 'Marcas de suporte são inevitáveis; Interface Layers reduzem o impacto.',
      },
      exercicios: [
        'Imprima a mesma peça com Normal e Tree Support e compare o material, o tempo e as marcas.',
        'Ajuste o ângulo de threshold e observe quando o suporte desaparece em overhangs específicos.',
      ],
      testes: [
        'Por que Tree Support usa menos material que Normal em peças orgânicas?',
        'O que determina o ângulo de threshold ideal para o seu material?',
      ],
    },
    {
      slug: 'interface-layers-otimizacao',
      titulo: 'Interface Layers, Suporte Customizado e Design Anti-Suporte',
      resumo: 'Técnicas avançadas para minimizar suporte e melhorar o acabamento das superfícies suportadas.',
      duracao: '22 min',
      nivel: 'Avançado',
      intro: [
        'O suporte é um mal necessário — mas pode ser minimizado com configurações inteligentes e design consciente. As Interface Layers e o suporte pintado (Support Painting) são as ferramentas mais poderosas para isso.',
      ],
      secoes: [
        {
          titulo: 'Interface Layers',
          conteudo: [
            'Camadas de interface: camadas mais densas entre o suporte e a peça.',
            'Melhora significativamente o acabamento da superfície suportada.',
            'Use material diferente para interface se sua impressora tiver multimaterial (PVA, HIPS).',
            'Com mono-material: interface em 80–100% de densidade melhora a separação.',
            'Aumente a espessura do gap de interface (Z gap) para facilitar a remoção.',
          ],
        },
        {
          titulo: 'Suporte Pintado (Support Painting)',
          conteudo: [
            'Pinte manualmente onde forçar suporte (azul) ou bloqueá-lo (vermelho).',
            'Elimina suporte indesejado dentro de furos ou em regiões que na verdade não precisam.',
            'Adiciona suporte cirúrgico em regiões específicas que o algoritmo ignora.',
            'Poderosa combinação com Tree Support: coloque as "raízes" do suporte onde quiser.',
          ],
        },
        {
          titulo: 'Design Anti-Suporte',
          conteudo: [
            'A melhor solução para suporte é não precisar dele.',
            'Chanfros (chamfers) a 45°: substitua overhangs horizontais por rampas suportáveis.',
            'Ponte (bridge): seção horizontal curta que pode ser impressa sem suporte.',
            'Corte e remonte: divida a peça onde o overhang ocorre, imprima e cole.',
            'Furos horizontais: use forma de D (D-hole) para evitar suporte interno.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Técnicas para minimizar suporte',
          colunas: ['Técnica', 'Quando usar', 'Benefício'],
          linhas: [
            ['Interface Layers densas', 'Sempre que há suporte', 'Melhor acabamento'],
            ['Support Painting', 'Suporte indesejado/faltando', 'Controle preciso'],
            ['Chanfros 45°', 'No design CAD', 'Elimina overhang'],
            ['D-hole', 'Furos horizontais no CAD', 'Elimina suporte interno'],
            ['Corte e cola', 'Overhang inevitável', 'Sem suporte nenhum'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Minimiza o impacto do suporte na qualidade e no custo de produção.',
        casosReais: [
          'Um suporte bracket com furos horizontais imprime perfeito com D-holes — sem uma gota de suporte.',
        ],
      },
      exercicios: [
        'Use Support Painting para bloquear suporte dentro de um furo que o slicer preenche desnecessariamente.',
        'Redesenhe um overhang simples com um chanfro de 45° e verifique que o suporte desaparece.',
      ],
      testes: [
        'O que são Interface Layers e por que melhoram o acabamento?',
        'Como o D-hole elimina a necessidade de suporte em furos horizontais?',
      ],
    },
  ],
}
