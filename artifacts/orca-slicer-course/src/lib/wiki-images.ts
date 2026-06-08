export interface WikiImagem {
  src: string
  alt: string
  legenda?: string
}

const BASE = '/wiki/'

const I = (src: string, alt: string, legenda?: string): WikiImagem => ({
  src: BASE + src,
  alt,
  legenda,
})

export const wikiImagensPorAula: Record<string, WikiImagem[]> = {
  /* ── Módulo 1 — Interface ─────────────────────────────────── */
  'interface/layout-geral': [
    I('full-sidebar.png', 'Interface completa do OrcaSlicer',
      'As três zonas: barra superior (workflow), visualização 3D central e painel lateral de parâmetros'),
    I('modes_switch.gif', 'Alternância entre modos de exibição',
      'Alterne entre Simple, Advanced e Expert para ver diferentes níveis de parâmetros'),
  ],
  'interface/visualizacao-movimentacao': [
    I('printer-preset.png', 'Seletor de perfil de impressora',
      'Troque de impressora, crie ou importe perfis aqui'),
    I('process-preset.png', 'Seletor de perfil de processo',
      'O perfil de processo contém todos os parâmetros de fatiamento (Quality, Speed, Support…)'),
  ],
  'interface/ferramentas-avancadas': [
    I('filament-preset.png', 'Seletor de perfil de filamento',
      'Cada filamento tem seu próprio perfil: temperaturas, retração, fan e MVS'),
    I('process-preset-full.png', 'Abas completas do painel de processo',
      'Quality, Strength, Speed, Support, Multimaterial, Others — cada aba agrupa parâmetros relacionados'),
  ],

  /* ── Módulo 5 — Calibração ────────────────────────────────── */
  'calibracao/temp-flow-pa': [
    I('temp-tower_test_menu.png', 'Menu de Temperature Tower',
      'Acesse em Calibrate → Temperature Tower para gerar automaticamente a torre de temperatura'),
    I('temp-tower.jpg', 'Temperature Tower impressa',
      'Identifique o bloco com melhor acabamento: pontes limpas, overhangs firmes, superfície brilhante'),
    I('flowcalibration-guide.png', 'Guia de calibração de fluxo',
      'Dois passes: Coarse (±10%) depois Fine (±2%) para Flow Ratio preciso'),
    I('flowcalibration-example.png', 'Exemplo de calibração de fluxo',
      'Parede com espessura uniforme em toda a altura — resultado ideal do Flow Rate calibrado'),
    I('pressure_advance_enable.png', 'Habilitando Pressure Advance',
      'Ative o PA no perfil de filamento antes de calibrar'),
    I('pa-lines.png', 'Teste de PA por linhas',
      'Encontre a linha com cantos mais nítidos sem blobs — esse é o seu PA ideal'),
    I('pa-tower.jpg', 'Torre de PA impressa',
      'Torre alternativa: avalie onde os cantos ficam limpos sem excesso de material'),
  ],
  'calibracao/retraction-input-shaper': [
    I('retraction_test_menu.png', 'Menu de teste de retração',
      'Configure a Torre de Retração no OrcaSlicer — ajuste a faixa para DD ou Bowden'),
    I('retraction_test_print.jpg', 'Resultado do teste de retração',
      'Avalie qual combinação elimina o stringing sem causar underextrusion no início das linhas'),
    I('IS_freq_menu.png', 'Menu de Input Shaping — frequência',
      'Configure o teste de frequência de ressonância — identifique os picos no padrão impresso'),
    I('inputshaping_printer.png', 'Input Shaper nas configurações da impressora',
      'Aplique a frequência e o amortecimento (damping) nas configurações de movimento'),
    I('IS_freq_marlin_print_measure.jpg', 'Medição do padrão de ringing',
      'Conte os picos no padrão impresso para calcular a frequência de ressonância da máquina'),
  ],

  /* ── Módulo 11 — Seams ────────────────────────────────────── */
  'seams-acabamento/tipos-de-seam': [
    I('seam-aligned.png', 'Seam Aligned — costura alinhada numa quina',
      'Aligned posiciona a costura sempre na mesma quina — linha vertical limpa e previsível'),
    I('seam-back.png', 'Seam Rear — costura na traseira',
      'Rear coloca a costura na face traseira da peça — ideal quando há um lado que ninguém vê'),
    I('seam-nearest.png', 'Seam Nearest — ponto mais próximo',
      'Nearest minimiza deslocamentos do cabeçote — costura imprevisível mas rápida'),
    I('seam-random.png', 'Seam Random — costura aleatória',
      'Random distribui a costura aleatoriamente — some a linha vertical mas cria pontos dispersos'),
  ],
  'seams-acabamento/escondendo-e-posicionando': [
    I('seam-quality.jpg', 'Comparação de qualidade de seam',
      'Diferença visual entre uma seam bem posicionada (esq.) e uma sem controle (dir.)'),
    I('scarf-joint-seam.png', 'Scarf Joint Seam — emenda gradual',
      'O Scarf Joint suaviza a transição do início/fim da camada reduzindo o blob na costura'),
  ],
  'seams-acabamento/ironing-surface-smoothing': [
    I('ironing.png', 'Ironing — visão geral da configuração',
      'Ative o Ironing para repassar o bico com fluxo mínimo sobre as superfícies superiores'),
    I('ironing-top-surfaces.png', 'Ironing em Top Surfaces',
      'Opção padrão: aplica ironing somente nas superfícies superiores visíveis da peça'),
    I('ironing-topmost-surface.png', 'Ironing só na camada mais alta',
      'Mais eficiente: apenas a última camada horizontal recebe o tratamento de alisamento'),
    I('ironing-all-solid-layers.png', 'Ironing em todas as camadas sólidas',
      'Opção mais completa: todas as camadas sólidas recebem ironing — muito mais lento'),
  ],

  /* ── Módulo 12 — Velocidade / Input Shaper ────────────────── */
  'velocidade-input-shaper/aceleracao-jerk-input-shaper': [
    I('IS_freq_menu.png', 'Calibração de frequência do Input Shaper',
      'Use o teste de frequência para cancelar vibrações e habilitar aceleração maior sem ghosting'),
    I('inputshaping_printer.png', 'Input Shaper nas configurações de movimento',
      'Configure o filtro de frequência diretamente nas configurações de movimento da impressora'),
    I('jd_first_menu.png', 'Menu de Junction Deviation / Jerk',
      'Controle a velocidade mínima em mudanças de direção para equilibrar velocidade e qualidade'),
    I('jd_first_print_measure.jpg', 'Resultado do teste de Junction Deviation',
      'Avalie o padrão impresso para encontrar o valor de JD com melhor equilíbrio'),
  ],

  /* ── Módulo 13 — Tolerâncias ──────────────────────────────── */
  'tolerancias-funcionais/tolerancias-folgas': [
    I('elephant-foot-compensation.png', 'Compensação de Elephant Foot',
      'O Elephant Foot Compensation reduz o esmagamento da primeira camada nas bordas inferiores'),
    I('OrcaToleranceTes_m6.jpg', 'Teste de tolerância do OrcaSlicer',
      'Use o teste de tolerâncias para identificar a folga funcional mínima do seu setup'),
    I('PolyHoles.png', 'Poly Holes — furos dimensionalmente precisos',
      'A opção Poly Holes compensa o erro de redondeza dos furos circulares em FDM'),
    I('FilamentShrinkageCompensation.png', 'Compensação de encolhimento do filamento',
      'Configure o percentual de shrinkage para materiais que contraem (ABS: ~0,8%, PA: ~1,5%)'),
  ],

  /* ── Módulo 17 — Gerador de Paredes ──────────────────────── */
  'gerador-de-paredes/classic-vs-arachne': [
    I('wallgenerator-classic.png', 'Wall Generator Classic — largura fixa',
      'Classic usa largura de linha fixa — lacunas visíveis em paredes finas que não dividem exatamente'),
    I('wallgenerator-arachne.png', 'Wall Generator Arachne — largura variável',
      'Arachne adapta a largura de cada segmento — preenchimento perfeito em geometrias complexas e finas'),
  ],
  'gerador-de-paredes/configuracoes-avancadas-paredes': [
    I('walls.png', 'Painel de paredes no OrcaSlicer',
      'Configuração de número de perímetros, gerador (Classic/Arachne) e opções de ordenamento'),
    I('walls-small-detect-thin-off.png', 'Detect Thin Walls desativado',
      'Sem Detect Thin Walls: regiões abaixo de 1 largura de linha ficam com lacunas de material'),
    I('walls-small-detect-thin-on.png', 'Detect Thin Walls ativado',
      'Com Detect Thin Walls: linhas adaptativas preenchem regiões finas sem deixar furos'),
    I('inner-outer.gif', 'Ordem de parede: Inner → Outer',
      'A parede interna é impressa primeiro e serve de guia para a externa — bom acabamento'),
    I('outer-inner.gif', 'Ordem de parede: Outer → Inner',
      'Parede externa impressa livre de empurrão interno — melhor precisão dimensional'),
    I('inner-outer-inner.gif', 'Ordem de parede: Inner → Outer → Inner',
      'Melhor equilíbrio: inner guia, outer sem interferência, inner termina — ideal para peças funcionais'),
  ],

  /* ── Módulo 18 — Padrões de Infill ───────────────────────── */
  'padroes-infill/infill-basicos': [
    I('infill-top-line.png', 'Infill Lines — linhas paralelas',
      'O mais rápido de todos — fraco no eixo Z, ideal para protótipos rápidos'),
    I('infill-top-grid.png', 'Infill Grid — grade ortogonal',
      'Duas direções perpendiculares — rápido e bom para compressão vertical'),
    I('infill-top-rectilinear.png', 'Infill Rectilinear',
      'Similar ao Grid mas com preenchimento mais uniforme — preferido para densidades acima de 70%'),
    I('infill-top-honeycomb.png', 'Infill Honeycomb — favo de mel',
      'Células hexagonais — excelente resistência lateral com boa relação peso/rigidez'),
    I('infill-top-triangles.png', 'Infill Triangles',
      'Triângulos — boa rigidez em múltiplas direções XY sem o custo do Gyroid'),
  ],
  'padroes-infill/infill-avancados': [
    I('infill-top-gyroid.png', 'Infill Gyroid — isotrópico total',
      'O único padrão verdadeiramente 3D: mesma resistência em X, Y e Z — ideal para cargas multidirecionais'),
    I('infill-top-cubic.png', 'Infill Cubic — quase isotrópico',
      'Muito próximo do Gyroid em isotropia mas consideravelmente mais rápido de imprimir'),
    I('infill-top-adaptive-cubic.png', 'Infill Adaptive Cubic',
      'Densifica automaticamente perto das paredes onde a resistência importa — economiza material no interior'),
    I('infill-top-lightning.png', 'Infill Lightning — mínimo material',
      'Usa apenas o necessário para sustentar as camadas superiores — sem resistência estrutural'),
  ],

  /* ── Módulo 19 — Suporte Avançado ────────────────────────── */
  'suporte-avancado/interface-layers-otimizacao': [
    I('overhang.png', 'Visualização de overhangs no OrcaSlicer',
      'Regiões coloridas indicam ângulo de overhang — vermelho = precisa de suporte'),
    I('extra-perimeters-on-overhangs.png', 'Extra perimeters em overhangs',
      'Paredes extras nos overhangs melhoram o suporte lateral e o acabamento da superfície suportada'),
  ],

  /* ── Módulo 20 — Velocidade e Aceleração ─────────────────── */
  'velocidade-aceleracao/todas-velocidades': [
    I('travel-lines.png', 'Linhas de travel no preview',
      'Visualize os movimentos sem extrusão no preview — linhas longas = oportunidade para otimizar'),
    I('ers-intro.png', 'Extrusion Rate Smoothing (ERS)',
      'O ERS suaviza mudanças bruscas de fluxo — reduz artefatos em velocidades muito variáveis'),
  ],

  /* ── Módulo 21 — Calibração Completa (Wiki) ──────────────── */
  'calibracao-wiki/protocolo-calibracao': [
    I('calibration.png', 'Menu de calibração do OrcaSlicer',
      'O menu Calibrate centraliza todos os testes: Temp, Flow, PA, Retração, IS, MVS, JD, Dimensional'),
    I('temp-tower_test_menu.png', 'Etapa 2 — Temperature Tower',
      'Temperature Tower: estabelece a temperatura ideal antes de todos os outros testes'),
    I('mvf_gui_flow.png', 'Etapa 3 — Max Volumetric Speed',
      'MVS Test: descubra o limite de fluxo do hotend em mm³/s'),
    I('flowcalibration-guide.png', 'Etapa 4 — Flow Rate',
      'Flow Rate: calibre a quantidade de material extrudado com paquímetro'),
    I('pa-lines.png', 'Etapa 5 — Pressure Advance',
      'PA: elimine blobs nos cantos e underextrusion no início das linhas'),
    I('retraction_test_menu.png', 'Etapa 6 — Retração',
      'Retraction Tower: encontre a retração mínima que elimina o stringing'),
    I('IS_freq_menu.png', 'Etapa 7 — Input Shaping',
      'Input Shaping: cancele as frequências de vibração para alta velocidade sem ghosting'),
  ],

  /* ── Módulo 22 — Configurações de Material ───────────────── */
  'configuracoes-material/perfil-filamento': [
    I('bed_type_material_temperature.png', 'Temperatura de mesa por tipo de superfície',
      'Configure temperatura da mesa por superfície (PEI liso, PEI texturado, vidro, PEX) e material'),
    I('filament-preset.png', 'Perfil de filamento completo',
      'O perfil de filamento reúne: temperatura, fan, retração, MVS e propriedades específicas do material'),
    I('mvf_material_settings.png', 'Max Volumetric Speed no perfil de material',
      'Defina o MVS diretamente no perfil de filamento — limita o fluxo para esse material específico'),
  ],

  /* ── Módulo 23 — Configurações do Extrusor ───────────────── */
  'configuracoes-extrusor/retracao-avancada': [
    I('retraction_test_menu.png', 'Menu de teste de retração',
      'Configure a Retraction Tower com a faixa correta para Direct Drive (0–3 mm) ou Bowden (3–8 mm)'),
    I('retraction_test.gif', 'Torre de retração em preview animado',
      'Animação do preview mostrando como o slicer organiza as seções do teste de retração'),
    I('retraction_test_print.jpg', 'Resultado impresso do teste de retração',
      'Avalie qual linha elimina o stringing sem blob de retração no início das próximas linhas'),
  ],

  /* ── Módulo 24 — Ironing, Bridges e Fuzzy Skin ───────────── */
  'ironing-superficie/ironing-detalhado': [
    I('ironing.png', 'Ironing — configuração geral',
      'Ative o Ironing para repassar o bico quente sobre as superfícies horizontais com fluxo mínimo'),
    I('ironing-top-surfaces.png', 'Ironing em Top Surfaces (padrão)',
      'A opção mais comum: aplica ironing somente nas superfícies superiores visíveis da peça'),
    I('ironing-topmost-surface.png', 'Ironing só na superfície mais alta',
      'Opção mais eficiente: apenas a camada superior final recebe o alisamento'),
    I('ironing-all-solid-layers.png', 'Ironing em todas as camadas sólidas',
      'Opção mais completa mas muito mais lenta: todas as camadas sólidas internas recebem ironing'),
  ],
  'ironing-superficie/bridges-overhangs-fuzzy': [
    I('bridge-angle-0.png', 'Bridge ângulo 0° — padrão',
      'Configuração de ponte com ângulo neutro — as linhas cruzam o vão em linha reta'),
    I('bridge-angle-2.png', 'Bridge com ângulo ajustado',
      'Ajuste o ângulo da ponte para minimizar o comprimento de cada linha suspensa no ar'),
    I('thick-bridges.png', 'Thick Bridges — pontes mais espessas',
      'Pontes mais espessas oferecem melhor sustentação mas requerem mais resfriamento'),
    I('Fuzzy-skin-classic.png', 'Fuzzy Skin — textura clássica',
      'Textura irregular clássica do Fuzzy Skin — esconde seam, marcas de camada e pequenos defeitos'),
    I('Fuzzy-skin-voronoi.png', 'Fuzzy Skin — textura Voronoi',
      'Padrão Voronoi elaborado — efeito decorativo único que lembra pedra ou estruturas orgânicas'),
    I('Fuzzy-skin-ripple-example.jpg', 'Resultado real de Fuzzy Skin ripple',
      'Peça impressa com textura ripple — superfície com ondas naturais, sem nenhum pós-processamento'),
  ],
}
