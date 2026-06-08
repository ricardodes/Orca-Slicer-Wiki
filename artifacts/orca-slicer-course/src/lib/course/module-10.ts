import type { Modulo } from '@/lib/types'

export const modulo10: Modulo = {
  slug: 'mestre',
  numero: 10,
  titulo: 'Mestre do OrcaSlicer',
  subtitulo: 'O exame final do especialista',
  descricao:
    'Desafios integrados, simulação de problemas reais, perguntas técnicas e avaliação. Aqui você prova que sabe escolher a configuração ideal para qualquer peça.',
  licoes: [
    {
      slug: 'avaliacao-final',
      titulo: 'Desafios Integrados e Diagnóstico de Problemas',
      resumo: 'Simulações reais: dado um defeito ou objetivo, você decide a solução completa.',
      duracao: '30 min',
      nivel: 'Especialista',
      intro: [
        'O especialista absoluto não decora valores — raciocina. Diante de qualquer peça ou defeito, equilibra custo, tempo, resistência, acabamento e lucro.',
        'Estes desafios integram todos os módulos. Para cada um, explique o raciocínio técnico, não só a resposta.',
      ],
      secoes: [
        {
          titulo: 'Diagnóstico de defeitos (simulação)',
          conteudo: [
            'Cantos com bolhas e "orelhas" → Pressure Advance descalibrado.',
            'Ecos/sombras nas paredes (ghosting) → aceleração alta sem Input Shaper.',
            'Topo com buracos (pillowing) → poucas top layers / fan insuficiente / infill baixo.',
            'Peça delamina sob carga → orientação errada (tração no Z) ou temperatura baixa.',
            'Fios entre torres (stringing) → retração/temperatura; comum em PETG úmido.',
            'Warping nas bordas → mesa fria / sem brim / sem câmara (ABS).',
            'Subextrusão em altas velocidades → fluxo volumétrico excedido.',
            'Faixas horizontais periódicas (Z banding) → fuso empenado ou temperatura ambiente.',
          ],
        },
        {
          titulo: 'Desafios de configuração',
          conteudo: [
            'Peça de rosca funcional em ABS: qual material, parâmetros e tolerâncias?',
            'Vaso de 30cm para venda: como minimizar custo e maximizar acabamento?',
            'Suporte automotivo exposto ao sol: qual material e como orientar?',
            'Produzir 100 unidades de um organizador: como configurar para máxima velocidade com qualidade aceitável?',
          ],
        },
        {
          titulo: 'Perguntas de raciocínio avançado',
          conteudo: [
            'Por que aumentar o Pressure Advance além do ótimo piora a qualidade?',
            'Como você decidiria entre 0,15 mm e 0,25 mm de camada para um suporte mecânico?',
            'Em que situação o modo Vase é superior a 1 parede + 10% infill?',
            'Como a umidade do filamento afeta o Pressure Advance ideal?',
          ],
        },
      ],
      estrutura: {
        oQueFaz: 'Valida a capacidade de integrar todos os conhecimentos em soluções práticas.',
        comoFunciona: 'O especialista lê os sintomas, identifica a causa raiz e aplica a correção correta com o menor custo.',
        quandoUsar: 'Use este módulo como revisão antes de imprimir peças críticas ou comerciais.',
      },
      exercicios: [
        'Resolva 3 dos diagnósticos de defeitos acima com uma análise técnica completa: causa, parâmetro, valor de correção.',
        'Configure do zero um perfil completo para uma peça funcional específica (material, camada, paredes, infill, velocidade, suporte).',
      ],
      testes: [
        'Qual a causa mais provável de ghosting em alta velocidade?',
        'Como você diagnostica subextrusão causada por fluxo volumétrico excedido?',
      ],
      desafio: 'Escolha um produto para vender online. Defina: material, parâmetros completos, custo de produção, preço de venda, e identifique os 3 maiores riscos de falha na produção e como mitigá-los.',
      perguntas: [
        {
          pergunta: 'É possível ter ghosting mesmo com Input Shaper ativo?',
          resposta: 'Sim. O Input Shaper compensa frequências específicas de vibração. Se a frequência de ressonância mudar (ex.: bico diferente, modelo com massa diferente) ou se a aceleração for muito acima do que o filtro pode compensar, o ghosting reaparece. A calibração do Input Shaper deve ser repetida ao mudar o setup.',
        },
        {
          pergunta: 'Por que secar o filamento é o primeiro passo em qualquer diagnóstico de stringing?',
          resposta: 'A umidade vaporiza dentro do hotend e cria bolhas de vapor que escapam como fios entre movimentos de travel. Nenhuma configuração de retração resolve stringing causado por umidade — o diagnóstico correto identifica a causa raiz antes de ajustar parâmetros.',
        },
      ],
    },
  ],
}
