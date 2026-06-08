import type { Modulo } from '@/lib/types'

export const modulo12: Modulo = {
  slug: 'velocidade-input-shaper',
  numero: 12,
  titulo: 'Velocidade Extrema e Input Shaper',
  subtitulo: 'Imprima até 70% mais rápido',
  descricao:
    'Entenda o que realmente limita a velocidade, calibre aceleração, jerk e Input Shaper, e respeite os limites de fluxo do hotend para imprimir rápido sem destruir a qualidade.',
  licoes: [
    {
      slug: 'o-que-limita-velocidade',
      titulo: 'O que realmente limita a velocidade',
      resumo: 'Hotend, extrusor, mecânica e os trade-offs entre velocidade, qualidade e resistência.',
      duracao: '20 min',
      nivel: 'Avançado',
      intro: [
        'Aumentar o número de velocidade no slicer não faz a peça sair mais rápido se outro componente for o gargalo.',
        'A velocidade real é limitada pelo elo mais fraco: capacidade de fundir filamento (hotend), de empurrar (extrusor) e de mover sem vibrar (mecânica).',
      ],
      secoes: [
        {
          titulo: 'Os três limites físicos',
          conteudo: [
            'Limite do Hotend: quantidade de material que ele consegue fundir por segundo (Maximum Volumetric Flow). Se você anda rápido demais, o filamento sai frio e subextrudido.',
            'Limite do Extrusor: força e tração para empurrar o filamento sem patinar.',
            'Limite da Máquina: rigidez do frame, massa do conjunto móvel e qualidade dos motores definem quanta aceleração é possível sem vibrar.',
          ],
        },
        {
          titulo: 'Estratégia por região da peça',
          conteudo: [
            'Infill e paredes internas: use a velocidade máxima segura.',
            'Parede externa: reduza para 40–60% — define o acabamento final.',
            'Primeira camada: máximo 20–30 mm/s — garante adesão.',
            'Bridges e overhangs: velocidade moderada para bom resfriamento.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Onde acelerar e onde frear',
          colunas: ['Região', 'Estratégia', 'Motivo'],
          linhas: [
            ['Infill', 'Rápido (100%+)', 'Não é visível nem crítico'],
            ['Parede interna', 'Rápido', 'Coberta pela externa'],
            ['Parede externa', 'Lento (40–60%)', 'Define o acabamento'],
            ['Primeira camada', 'Muito lento (20–30 mm/s)', 'Adesão à mesa'],
            ['Bridges', 'Médio', 'Precisa resfriar'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Identifica o gargalo real para que o aumento de velocidade seja efetivo.',
        impactoTempo: 'Atacar o gargalo certo pode reduzir o tempo em 30–60%.',
        impactoQualidade: 'Acelerar o elo errado degrada a peça sem ganhar tempo.',
      },
      exercicios: [
        'Identifique o fluxo volumétrico máximo do seu hotend com o teste do OrcaSlicer.',
        'Configure velocidades diferentes por região e compare o tempo total e o acabamento.',
      ],
      testes: [
        'O que é fluxo volumétrico máximo e por que ele limita a velocidade?',
        'Por que reduzir a velocidade da parede externa não aumenta significativamente o tempo total?',
      ],
    },
    {
      slug: 'aceleracao-jerk-input-shaper',
      titulo: 'Aceleração, Jerk e Input Shaper na Prática',
      resumo: 'Calibre aceleração e Input Shaper para velocidade máxima sem ghosting.',
      duracao: '25 min',
      nivel: 'Especialista',
      intro: [
        'A aceleração determina o quão rápido o cabeçote muda de velocidade. Aceleração alta permite velocidades máximas mais cedo — mas também gera mais vibrações.',
        'O Input Shaper é a tecnologia que permite aceleração alta sem o ghosting que ela normalmente causaria.',
      ],
      secoes: [
        {
          titulo: 'Aceleração por tipo de movimento',
          conteudo: [
            'Outer wall: baixa (500–1500 mm/s²) — qualidade sobre velocidade.',
            'Inner wall: moderada (2000–4000 mm/s²).',
            'Infill: alta (5000–10000 mm/s²) — não importa vibrar no infill.',
            'Travel: máxima — não está extrudando, tempo é tudo.',
          ],
        },
        {
          titulo: 'Input Shaper (Anti-ghosting)',
          conteudo: [
            'Gera um filtro de frequência que cancela as vibrações naturais da máquina.',
            'Cada máquina tem uma frequência de ressonância diferente — precisa de calibração.',
            'Com acelerômetro ADXL345: calibração automática e precisa via Klipper.',
            'Sem acelerômetro: use o padrão de ringing do OrcaSlicer e ajuste manualmente.',
            'Resultado: 2x–3x mais velocidade com a mesma qualidade visual.',
          ],
        },
        {
          titulo: 'Jerk / Junction Deviation',
          conteudo: [
            'Controla a velocidade mínima em mudanças de direção.',
            'Jerk alto: transições rápidas, mais ringing potencial.',
            'Reduza jerk se ainda houver ghosting após Input Shaper.',
            'Com Klipper/Input Shaper, o junction deviation pode ser mantido alto.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Permite alta velocidade e aceleração sem degradar a qualidade visual das paredes.',
        comoFunciona: 'O Input Shaper cancela matematicamente as frequências de vibração antes de gerar o G-code.',
        impactoTempo: 'Pode reduzir o tempo total em 40–70% quando combinado com aceleração alta.',
        impactoQualidade: 'Mantém qualidade equivalente ao imprimir lento, mas em fração do tempo.',
      },
      exercicios: [
        'Imprima o padrão de ringing do OrcaSlicer e calibre a frequência do Input Shaper manualmente.',
        'Compare impressão a 150 mm/s sem Input Shaper vs 250 mm/s com Input Shaper.',
      ],
      testes: [
        'O que determina a frequência de ressonância de uma impressora?',
        'Por que o Input Shaper permite velocidades maiores sem ghosting?',
      ],
    },
  ],
}
