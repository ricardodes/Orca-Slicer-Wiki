import type { Modulo } from '@/lib/types'

export const modulo13: Modulo = {
  slug: 'tolerancias-funcionais',
  numero: 13,
  titulo: 'Tolerâncias e Projetos Funcionais',
  subtitulo: 'Peças mecânicas que encaixam de verdade',
  descricao:
    'Domine folgas, compensação dimensional e todos os ajustes (Horizontal Expansion, XY e Elephant Foot) para fabricar press fit, snap fit, roscas, dobradiças e engrenagens funcionais.',
  licoes: [
    {
      slug: 'tolerancias-folgas',
      titulo: 'Tolerâncias, folgas e compensação dimensional',
      resumo: 'Por que a peça sai diferente do CAD e como compensar com precisão.',
      duracao: '22 min',
      nivel: 'Avançado',
      intro: [
        'Em peças mecânicas o sucesso depende de centésimos de milímetro. Uma peça que encaixa no CAD pode travar ou ficar frouxa na vida real.',
        'A impressão FDM tende a deixar furos menores e pinos maiores que o projetado, por causa do alargamento da extrusão e da contração do material.',
      ],
      secoes: [
        {
          titulo: 'O que são tolerâncias e folgas',
          conteudo: [
            'Tolerância é a variação aceitável de uma medida. Folga (clearance) é o espaço deixado entre duas peças que se encaixam.',
            'Folga típica para encaixe deslizante: 0,2–0,4 mm no total (0,1–0,2 mm por lado).',
            'Folga para encaixe fixo (press fit): 0,0–0,1 mm — quase justo, com leve interferência.',
          ],
        },
        {
          titulo: 'Compensação dimensional no OrcaSlicer',
          conteudo: [
            'Imprima um cubo de calibração (ex.: 20 mm) e meça com paquímetro. A diferença é o seu erro sistemático.',
            'Use essa diferença para ajustar Horizontal Expansion / XY Compensation no perfil.',
            'Furos costumam precisar de compensação positiva (aumentar diâmetro no CAD ou via XY compensation negativa nas paredes internas).',
          ],
        },
        {
          titulo: 'Elephant Foot',
          conteudo: [
            'A primeira camada se espalha mais que as seguintes — isso cria o "pé de elefante" nas bordas inferiores.',
            'Compensação: ajuste "Elephant foot compensation" no OrcaSlicer para reduzir o esmagamento da primeira camada.',
            'Importante para peças com encaixes na base.',
          ],
        },
      ],
      tabelas: [
        {
          titulo: 'Folgas recomendadas por tipo de encaixe',
          colunas: ['Tipo de encaixe', 'Folga total', 'Resultado'],
          linhas: [
            ['Press fit (fixo)', '0,0–0,1 mm', 'Entra sob pressão, não solta'],
            ['Deslizante leve', '0,2 mm', 'Desliza com pouca folga'],
            ['Deslizante livre', '0,3–0,4 mm', 'Move-se livremente'],
            ['Rosca funcional', '0,3–0,5 mm', 'Enrosca sem travar'],
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Compensa o desvio entre a medida projetada e a impressa para garantir encaixes funcionais.',
        comoFunciona: 'Mede-se o erro sistemático em uma peça-teste e aplica-se a compensação no perfil ou no CAD.',
        impactoQualidade: 'Define se a peça mecânica funciona ou não.',
        errosComuns: [
          'Projetar furos no CAD com o diâmetro exato do pino — sempre vai travar na impressão.',
          'Ignorar o elephant foot em peças com encaixes na base.',
        ],
        comoCorrigir: [
          'Sempre adicione folga de 0,2 mm nos furos ao projetar para impressão FDM.',
          'Calibre o elephant foot e aplique a compensação no perfil.',
        ],
      },
      exercicios: [
        'Imprima um cubo de 20 mm, meça e calcule o erro dimensional da sua máquina.',
        'Imprima um teste de folgas (gap test) e descubra a folga ideal do seu setup.',
      ],
      testes: [
        'O que é o elephant foot e como o OrcaSlicer compensa esse efeito?',
        'Qual folga você usaria para um eixo de 10 mm que deve girar livremente numa bucha?',
      ],
    },
    {
      slug: 'press-fit-snap-roscas',
      titulo: 'Press Fit, Snap Fit, Roscas e Heat Inserts',
      resumo: 'Técnicas de encaixe funcional que resistem ao uso real.',
      duracao: '20 min',
      nivel: 'Especialista',
      intro: [
        'Encaixes funcionais são o grande desafio da impressão 3D para engenharia. A diferença entre uma peça que funciona e uma que quebra está nos detalhes de folga, orientação e material.',
      ],
      secoes: [
        {
          titulo: 'Press Fit (encaixe por pressão)',
          conteudo: [
            'Folga negativa: o pino é levemente maior que o furo — entra sob pressão.',
            'Material importa: PLA permite menos interferência que PETG (mais tenaz).',
            'Evite press fit em paredes finas — a parede pode rachar ao forçar o encaixe.',
          ],
        },
        {
          titulo: 'Snap Fit (encaixe por clique)',
          conteudo: [
            'Design com lingueta flexível que "clica" ao encaixar.',
            'Material ideal: PETG ou PLA+ (mais tenaz que PLA comum).',
            'Orientação: imprima a lingueta de forma que ela dobre ao longo das camadas, não entre elas.',
          ],
        },
        {
          titulo: 'Roscas impressas e Heat Inserts',
          conteudo: [
            'Roscas impressas: folga de 0,3–0,5 mm, padrão M3–M8. Frágeis para uso repetido.',
            'Heat Inserts: insertos metálicos inseridos a quente na impressão — roscas duráveis, repetíveis e profissionais.',
            'Para heat inserts: projete o furo 0,1 mm menor que o inserto e use ferro de solda para fundir o inserto no plástico.',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Permite fabricar encaixes mecânicos funcionais e duráveis com impressão FDM.',
        casosReais: [
          'Heat inserts são essenciais em caixas eletrônicas que abrem e fecham com parafusos — roscas plásticas se desgastam em 3–4 ciclos.',
        ],
      },
      exercicios: [
        'Projete e imprima um snap fit funcional com lingueta em PETG.',
        'Instale heat inserts M3 em uma peça impressa usando ferro de solda.',
      ],
      testes: [
        'Por que a orientação do snap fit é crítica para sua durabilidade?',
        'Quando heat inserts são preferíveis a roscas impressas?',
      ],
    },
  ],
}
