import type { Modulo } from '@/lib/types'

export const modulo07: Modulo = {
  slug: 'otimizacao',
  numero: 7,
  titulo: 'Otimização Extrema',
  subtitulo: 'Menos tempo, menos material, mais resistência',
  descricao:
    'Estratégias para reduzir filamento e tempo, aumentar resistência, melhorar acabamento e reduzir suportes e falhas — com tabelas de ganhos e perdas.',
  licoes: [
    {
      slug: 'tempo-material-resistencia',
      titulo: 'Reduzir Tempo e Material sem Perder Resistência',
      resumo: 'As alavancas reais de otimização e os trade-offs de cada decisão.',
      duracao: '18 min',
      nivel: 'Especialista',
      intro: [
        'Otimização é a arte do trade-off consciente. Quase toda economia tem um custo — o especialista sabe qual custo é aceitável para cada peça.',
        'As maiores alavancas: orientação (grátis), altura de camada (tempo), paredes vs infill (resistência/peso), suporte (material/tempo) e velocidade de infill/travel (tempo).',
      ],
      secoes: [
        {
          titulo: 'Reduzir tempo',
          conteudo: [
            'Aumente a altura de camada onde a qualidade não importa (maior impacto no tempo).',
            'Acelere infill e travel; mantenha a parede externa lenta.',
            'Reduza ou troque o suporte por tree/organic.',
            'Use bico maior (0,6 mm) para peças funcionais grandes.',
            'Desative ironing em superfícies não-visíveis.',
          ],
        },
        {
          titulo: 'Reduzir material',
          conteudo: [
            'Baixe a densidade do infill para o mínimo que garante o fechamento do topo.',
            'Use Lightning infill para peças puramente decorativas.',
            'Imprima em modo Vase (Spiral) quando a geometria permite.',
            'Minimize o brim — use apenas o necessário para adesão.',
          ],
        },
        {
          titulo: 'Aumentar resistência sem adicionar peso',
          conteudo: [
            'Prefira mais paredes a mais infill — relação resistência/peso melhor.',
            'Use Gyroid ou Cubic ao invés de Grid para resistência multidirecional.',
            'Oriente a peça corretamente — é o ganho de resistência de maior impacto e custo zero.',
            'Aumente as camadas top/bottom em vez de aumentar o infill.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Alavancas de otimização',
          colunas: ['Ação', 'Ganho', 'Custo', 'Impacto'],
          linhas: [
            ['Aumentar altura de camada', '30–50% menos tempo', 'Qualidade visual', 'Alto'],
            ['Velocidade de infill +50%', '10–20% menos tempo', 'Leve vibração', 'Médio'],
            ['Bico 0,6 mm', '40–60% menos tempo', 'Menos detalhe', 'Alto'],
            ['Lightning infill', '5–15% menos material', 'Zero resistência interna', 'Médio'],
            ['Orientação correta', 'Nenhum custo', 'Nenhum', 'Resistência 2–3x maior'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Equilibra custo, tempo e resistência para a função específica de cada peça.',
        comoFunciona: 'Cada parâmetro tem um custo e um benefício — o especialista avalia a relação para o caso concreto.',
        quandoUsar: 'Sempre, especialmente em produção comercial onde tempo e material são dinheiro.',
        impactoTempo: 'Combinando múltiplas otimizações, é possível reduzir o tempo total em 40–60%.',
        impactoFilamento: 'Cortes típicos de 10–30% de material sem comprometer a função.',
      },
      exercicios: [
        'Pegue uma peça real e aplique 3 otimizações simultâneas. Anote o ganho de tempo e custo.',
        'Crie dois perfis: "Rápido" e "Qualidade" para o mesmo modelo e compare o resultado.',
      ],
      testes: [
        'Qual a maior alavanca individual para reduzir tempo de impressão?',
        'Quando é mais eficiente adicionar paredes em vez de aumentar o infill?',
      ],
      desafio: 'Otimize uma peça funcional real para produção: reduza o custo total em pelo menos 30% sem comprometer a resistência necessária. Documente cada decisão e o trade-off aceito.',
    },
  ],
}
