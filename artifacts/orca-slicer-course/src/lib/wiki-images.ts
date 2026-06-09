export interface WikiImagem {
  src: string
  alt: string
  legenda?: string
}

const W = '/wiki/'
const I = (src: string, alt: string, legenda?: string): WikiImagem => ({ src: W + src, alt, legenda })

export const wikiImagensPorAula: Record<string, WikiImagem[]> = {

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 1 — Interface Completa
  ═══════════════════════════════════════════════════════════ */
  'interface/layout-geral': [
    I('full-sidebar.png',        'Interface completa do OrcaSlicer',          'Vista completa: barra de workflow (topo), viewer 3D (centro), painel de parâmetros (direita)'),
    I('modes_switch.gif',        'Alternância entre modos Simple/Advanced/Expert', 'Mude de modo no dropdown do topo — Simple oculta parâmetros avançados, Expert expõe tudo'),
    I('process-preset.png',      'Seletor de perfil de processo',             'O perfil de processo concentra todos os parâmetros de fatiamento em abas organizadas'),
    I('tab-popup.png',           'Menu de abas do painel lateral',            'As abas Quality, Strength, Speed, Support e Others organizam centenas de parâmetros'),
  ],

  'interface/visualizacao-movimentacao': [
    I('assembly_bed_view.png',   'Vista da mesa — assembly view',             'A aba Assembly mostra todos os objetos posicionados na cama para inspeção antes do fatiamento'),
    I('assembly_view.png',       'Multi-objeto na vista de montagem',         'Inspecione individualmente cada objeto quando vários estão na cama'),
    I('auto_orientation.png',    'Auto-orientação automática',                'O OrcaSlicer calcula a melhor orientação para minimizar suporte e maximizar resistência'),
  ],

  'interface/ferramentas-avancadas': [
    I('printer-preset.png',      'Seletor de impressora',                     'Troque de impressora sem sair do projeto — limites de mesa e temperaturas atualizam automaticamente'),
    I('filament-preset.png',     'Seletor de perfil de filamento',            'Cada filamento tem perfil próprio: temperatura, fan, retração e MVS específicos'),
    I('process-quality.png',     'Aba Quality — parâmetros visuais',          'Layer height, line width, top/bottom shells e seam — os parâmetros mais usados no dia a dia'),
    I('process-strength.png',    'Aba Strength — parâmetros de resistência',  'Walls, infill type e density, top/bottom layers — controla resistência mecânica da peça'),
    I('process-others.png',      'Aba Others — configurações avançadas',      'Skirt, brim, elephant foot compensation, fuzzy skin e Z-hop — opções extras aqui'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 2 — Configurações da Impressora
  ═══════════════════════════════════════════════════════════ */
  'impressora/volume-firmware-limites': [
    I('ABM-PrinterConfig.png',     'Auto Bed Mesh — configuração',            'Configure o Auto Bed Mesh nas configurações da impressora para nivelamento automático'),
    I('ABM-Machine-G-code.png',    'G-code de máquina para Auto Bed Mesh',    'O G-code START deve chamar o ABM antes de imprimir para compensar falta de planeza da mesa'),
    I('inputshaping_printer.png',  'Input Shaper nas configurações',          'Frequências de ressonância X e Y ficam no perfil de impressora — permanentes para a máquina'),
    I('bed_type_selector.png',     'Seletor de superfície de impressão',      'PEI liso, PEI texturado, PEX, vidro — cada superfície muda temperatura e adesão'),
  ],

  'impressora/bico-extrusor-fluxo': [
    I('gen-nozzle-closeup.png',  'Bico 0.4 mm fundindo filamento PLA',        'O diâmetro do bico define largura mínima de linha — 0.4 mm é o padrão mais versátil do mercado'),
    I('multi_nozzle_diam.gif',   'Comparação entre diâmetros de bico',        'Bico 0.2 mm: detalhe máximo. 0.4 mm: equilíbrio. 0.6 mm+: velocidade e resistência'),
    I('cube_line_width.png',     'Line width visualizado em cubo de teste',   'Line width afeta diretamente a resistência das paredes e o acabamento superficial da peça'),
    I('line_width.png',          'Diagrama: largura de linha vs diâmetro',    'Use 75–150% do diâmetro do bico como largura de linha — acima de 150% causa underextrusion'),
    I('gen-flow-caliper.png',  'Paquímetro medindo parede calibrada',       'Meça a parede com paquímetro e compare com o valor projetado para calibrar o Flow Ratio'),
    I('gen-flow-caliper.png','Peça de calibração de flow impressa',       'Cubo de parede única impresso para calibração — meça com paquímetro e ajuste o Flow Ratio'),
    I('flowcalibration-guide.png', 'Guia do processo de calibração de fluxo', 'Passo 1: grosso ±10% → Passo 2: fino ±2% — dois passes para flow ratio preciso'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 3 — Configurações de Processo
  ═══════════════════════════════════════════════════════════ */
  'processo/quality-camadas': [
    I('process-quality.png',     'Detalhes do painel Quality',                'First layer height recomendado: 0.25 mm para boa adesão independente da layer height geral'),
    I('layer-height-spheres.png','Comparação visual de layer heights',        'Esferas impressas em 0.1, 0.2 e 0.3 mm: quanto mais fino, mais suave a superfície curva'),
    I('number-of-slow-layers.png','Camadas lentas no início da impressão',    'As primeiras N camadas imprimem mais devagar para garantir adesão sólida à mesa'),
    I('slow-down-for-curled-perimeters.png', 'Slow down para curling',        'Detecta curling nos overhangs e reduz velocidade automaticamente para compensar o levantamento'),
    I('top-bottom-shells.png',   'Top e bottom shells — configuração',        'Mínimo 4 camadas de top shell ou 0.8 mm total para superfície superior sem furos'),
  ],

  'processo/paredes-infill': [
    I('infill-top-gyroid.png',   'Infill Gyroid — padrão isotrópico',         'Gyroid: único padrão verdadeiramente 3D — mesma resistência em X, Y e Z'),
    I('gen-infill-crosssection.png',  'Gyroid impresso em PETG — foto real',       'Cubo de PETG com Gyroid 20% cortado ao meio — estrutura ondulada tridimensional real'),
    I('infill-top-honeycomb.png','Infill Honeycomb — resistência lateral',    'Hexagonais resistem bem à compressão lateral com boa relação rigidez/peso'),
    I('gen-infill-crosssection.png', 'Infill gyroid visto por dentro',      'Cubo cortado ao meio revelando a estrutura interna do Gyroid — geometria ondulada 3D'),
  ],

  'processo/cooling-support-adhesion': [
    I('brim.png',                'Brim na primeira camada',                   'Brim aumenta área de contato com a mesa — essencial para ABS, ASA e peças pequenas'),
    I('brim-outer.png',          'Brim externo — o mais comum',               'Adiciona N linhas ao redor da peça para evitar warping — padrão para materiais difíceis'),
    I('skirt.png',               'Skirt — linha de purga ao redor',           'O skirt purga o filamento antes de começar a peça — garante fluxo estável no início'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 4 — Materiais
  ═══════════════════════════════════════════════════════════ */
  'materiais/pla-petg': [
    I('gen-pla-quality.png',   'Peça em PLA laranja — alta qualidade FDM',  'PLA a 215–220°C, mesa 60°C, fan 100%: melhor acabamento superficial de todos os materiais FDM'),
    I('gen-temp-tower.png','Temperature Tower real — análise visual',  'Torre de temperatura PLA impressa: identifique o bloco com pontes mais limpas e overhangs firmes'),
    I('gen-temp-tower.png','Temperature Tower — configuração no OrcaSlicer', 'Menu de Temperature Tower: selecione o material e a faixa 190–230°C — gerada automaticamente'),
    I('bed_type_material_temperature.png','Temperatura da mesa por superfície','PEI texturado: 60°C PLA, 70°C PETG — a superfície da mesa impacta diretamente a adesão'),
    I('gen-pla-quality.png','Benchy em PLA — resultado de excelência', 'Benchy impresso com PLA calibrado: linhas invisíveis, seam discreta, bridge perfeita'),
    I('FilamentShrinkageCompensation.png','Compensação de encolhimento',       'Configure shrinkage% no perfil de filamento para peças dimensionalmente precisas'),
  ],

  'materiais/abs-asa-tpu': [
    I('Chamber-Temperature-Control-Material.png','Controle de câmara por material','ABS e ASA exigem câmara fechada a 40–50°C para evitar warping e delamination entre camadas'),
    I('Chamber-Temperature-Control-Printer.png', 'Config de câmara na impressora','Configure temperatura de câmara no perfil da impressora para materiais de engenharia'),
    I('FilamentShrinkageCompensation.png','Shrinkage: ABS ~0.8%, PA ~1.5%',   'ABS encolhe mais que PETG — use compensação de encolhimento para encaixes precisos'),
    I('filament_for_features.png','Material diferente por feature — multi-material','Configure suporte solúvel + material principal — remoção limpa sem marcas em geometrias complexas'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 5 — Calibração Completa
  ═══════════════════════════════════════════════════════════ */
  'calibracao/temp-flow-pa': [
    I('calibration.png',         'Menu de calibração — ponto de partida',     'Acesse em Calibrate: Temperature Tower, Max Flow Rate, Flow Ratio, Pressure Advance, Retraction'),
    I('temp-tower_test_menu.png','Configuração da Temperature Tower',          'Selecione o material e a faixa de temperaturas — a torre é gerada automaticamente'),
    I('gen-temp-tower.png','Temperature Tower impressa — análise',     'Torre de temperatura PLA impressa: bloco 215°C tem pontes limpas + overhangs firmes'),
    I('gen-temp-tower.png','Temperature Tower — análise visual completa','Bloco com pontes mais limpas + overhangs firmes + superfície brilhante = temperatura ideal'),
    I('gen-flow-caliper.png',  'Paquímetro calibrando Flow Ratio',          'Passo 1 grosso: ±10% até chegar perto. Passo 2 fino: ±2% medindo com paquímetro'),
    I('gen-flow-caliper.png','Peça de calibração de flow — resultado real','Cubo de parede única impresso em PLA — meça com paquímetro e ajuste o Flow Ratio'),
    I('flowcalibration-guide.png','Guia de dois passos para Flow Rate',        'Calibre sempre o flow ANTES do PA — flow incorreto invalida toda calibração seguinte'),
    I('flowrate-pass1-monotonic.jpg','Flow calibration — primeira passagem',   'Primeira passagem: ajuste grosseiro. Identifique se está acima ou abaixo do ideal'),
    I('flowrate-pass2-monotonic.jpg','Flow calibration — segunda passagem',    'Segunda passagem fina: ajuste mínimo até a parede ficar exatamente na espessura projetada'),
    I('pa-lines.png',            'Teste de Pressure Advance por linhas',       'Encontre a linha com cantos nítidos SEM blobs — esse número é seu PA ideal'),
    I('gen-pa-comparison.png', 'PA Lines impressas — foto real',             'Linhas de PA impressas: identifique visualmente onde os cantos ficam mais nítidos sem blob'),
    I('gen-pa-comparison.png','PA incorreto vs calibrado — comparação',     'Esquerda: blobs nos cantos (PA baixo). Direita: cantos nítidos limpos (PA calibrado)'),
    I('gen-pa-comparison.png','Detalhe de canto com PA calibrado',        'Macro de canto de cubo com PA correto — transição limpa, sem acúmulo de material'),
  ],

  'calibracao/retraction-input-shaper': [
    I('retraction_test_menu.png','Menu de teste de retração',                  'DD: 0–3 mm / Bowden: 3–8 mm / Velocidade: 30–60 mm/s — comece pelo meio da faixa'),
    I('gen-retraction-tower.png','Torre de retração impressa — foto real',   'Observe as pontes entre as colunas: a primeira seção sem fios finos é seu valor ideal'),
    I('gen-retraction-tower.png','Torre de retração — stringing visível','Identifique o valor mínimo que elimina o stringing sem causar underextrusion no reinício'),
    I('retraction_test_measure.png','Medir o stringing nas seções',            'Use luz lateral para revelar fios finos — a seção limpa mais baixa é sua retração ideal'),
    I('IS_freq_menu.png',        'Menu de calibração de frequência IS',        'O teste de frequência gera um padrão que revela as frequências de vibração da máquina'),
    I('IS_freq_marlin_print_measure.jpg','Medição do padrão de ringing',       'Conte os picos entre os marcadores — cada eixo (X e Y) tem frequência própria'),
    I('IS_damp_menu.png',        'Menu de damping ratio — amortecimento',      'Após encontrar a frequência, calibre o damping: valores típicos 0.05–0.15'),
    I('inputshaping_printer.png','Input Shaper nas configurações de movimento', 'Frequência e damping ficam no perfil de impressora — habilitam alta velocidade sem ghosting'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 6 — Engenharia Mecânica
  ═══════════════════════════════════════════════════════════ */
  'engenharia/direcao-camadas-tensoes': [
    I('fill-direction.png',      'Direção do infill configurável',             'Rotacione o infill para alinhar as linhas com a direção das forças que a peça sofrerá'),
    I('fill-direction-to-model.png','Direção relativa ao modelo',              'Fill Direction to Model orienta o infill relativo ao eixo longo da peça automaticamente'),
    I('fill-rotation.png',       'Rotação do infill — fill rotation',          'Gire o padrão de infill para que as linhas fiquem paralelas à direção de maior tensão'),
    I('makers-muse-walls-strength.png','Estudo: paredes vs resistência',       'Mais paredes = resistência muito maior. Infill acima de 40% tem retorno decrescente'),
    I('gen-functional-gears.png','Engrenagens funcionais — resultado',       'Engrenagens PLA pretas que realmente funcionam: 4 paredes, Gyroid 30%, camadas paralelas à carga'),
  ],

  'engenharia/infill-resistencia': [
    I('infill-top-gyroid.png',   'Gyroid — isotrópico em todos os eixos',      'O único padrão verdadeiramente 3D: igual resistência X, Y e Z — ideal para carga multidirecional'),
    I('gen-infill-crosssection.png',  'Gyroid em PLA — foto de peça cortada',       'Cubo cortado ao meio revelando Gyroid 20% em PLA — geometria ondulada tridimensional real'),
    I('gen-infill-crosssection.png','Gyroid em PETG — estrutura interna',    'A estrutura ondulada tridimensional do Gyroid vista por dentro de peça cortada'),
    I('infill-top-cubic.png',    'Cubic — quasi-isotrópico e rápido',          'Resistência próxima ao Gyroid com tempo de impressão menor — melhor equilíbrio prático'),
    I('infill-top-adaptive-cubic.png','Adaptive Cubic — mais denso nas bordas','Densifica automaticamente perto das paredes onde resistência importa — economiza material no centro'),
    I('infill-top-lightning.png','Lightning — mínimo de material',             'Só sustenta as camadas superiores — zero resistência estrutural. Para protótipos visuais rápidos'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 7 — Otimização Extrema
  ═══════════════════════════════════════════════════════════ */
  'otimizacao/tempo-material-resistencia': [
    I('ers-intro.png',           'ERS — Extrusion Rate Smoothing',             'O ERS suaviza as transições de velocidade para evitar underextrusion em mudanças bruscas'),
    I('ers-printspeed.png',      'ERS limita velocidade pelo MVS',             'A velocidade real é limitada pelo MVS: Speed = MVS ÷ Área da seção transversal da linha'),
    I('ers-artefact.jpg',        'Artefatos de velocidade excessiva',          'Blobs e ondas nas paredes = velocidade acima do MVS ou aceleração muito alta'),
    I('infill-ghosting.png',     'Ghosting causado por infill rápido',         'Infill rápido cria vibrações que aparecem como ondas simétricas nas paredes externas'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 8 — Estudos de Caso
  ═══════════════════════════════════════════════════════════ */
  'estudos-de-caso/funcionais-mecanicas': [
    I('gen-functional-gears.png','Engrenagens funcionais em PLA preto',      'Peças mecânicas funcionais: 4+ paredes, Gyroid 30%+, orientação estratégica das camadas'),
    I('OrcaToleranceTest_print.jpg','Teste de tolerâncias do OrcaSlicer',      'Imprima o OrcaTolerance Test para descobrir a folga funcional mínima do seu setup'),
    I('OrcaToleranceTes_m6.jpg', 'Tolerância M6 — teste de encaixe',           'Teste de encaixe M6: verifique se a rosca entra corretamente com a folga calibrada'),
    I('elephant-foot-compensation.png','Compensação de Elephant Foot',         'Primeira camada esmagada reduz furos e aumenta bases — corrija com Elephant Foot Compensation'),
    I('PolyHoles.png',           'PolyHoles — furos circulares precisos',      'Furos circulares FDM saem menores — PolyHoles converte para polígono que compensa o erro'),
    I('PreciseZOff.png',         'Sem Precise Z — variação na base',           'Sem a compensação, a primeira camada varia em espessura — furos inferiores ficam imprecisos'),
    I('PreciseZOn.png',          'Com Precise Z — base uniforme',              'Com Precise Z-height a primeira camada mantém altura consistente em toda a área da peça'),
  ],

  'estudos-de-caso/decorativos-comerciais': [
    I('gen-fuzzy-skin-vase.png','Vaso com Fuzzy Skin — produto decorativo','Fuzzy Skin cria texturas orgânicas que escondem marcas de camada — acabamento premium'),
    I('gen-fuzzy-skin-vase.png',     'Fuzzy Skin em peça real — resultado final',  'Textura organic impressa em PLA: parece pedra, esconde as linhas FDM completamente'),
    I('Fuzzy-skin-voronoi.png',  'Padrão Voronoi — células irregulares',       'Voronoi cria células que lembram pedra ou couro — efeito decorativo único e sofisticado'),
    I('Fuzzy-skin-ripple.png',   'Fuzzy Skin Ripple — ondas concêntricas',     'Padrão ripple em peças cilíndricas: efeito de ondas concêntricas dramático e natural'),
    I('gen-ironing-surface.png','Ironing — antes e depois, macro',           'Ironing: esquerda rugoso com linhas FDM visíveis. Direita: quase polido, brilhante'),
    I('gen-ironing-surface.png','Superfície após ironing — foto real',        'Topo de cubo PLA após ironing: superfície quase espelhada em comparação ao padrão sem ironing'),
    I('stl-transformation-smooth-rough.png','STL smooth vs rough transform',   'O OrcaSlicer pode suavizar ou adicionar rugosidade à malha STL sem precisar de CAD'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 9 — Impressão 3D Comercial
  ═══════════════════════════════════════════════════════════ */
  'comercial/custo-lucro-perfis': [
    I('gen-pla-quality.png',   'Produto final de alta qualidade',            'Acabamento comercial: ironing, seam posicionada atrás, sem stringing, tolerâncias corretas'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 10 — Mestre do OrcaSlicer
  ═══════════════════════════════════════════════════════════ */
  'mestre/avaliacao-final': [
    I('calibration.png',         'Menu completo de calibração dominado',       'O mestre conhece cada teste e quando aplicar — temperatura, flow, PA, retração, IS, JD'),
    I('gen-functional-gears.png','Peças funcionais com tolerâncias corretas', 'O domínio total permite imprimir peças funcionais com precisão e qualidade profissional'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 11 — Seams e Acabamento Profissional
  ═══════════════════════════════════════════════════════════ */
  'seams-acabamento/entendendo-a-seam': [
    I('seam-aligned.png',        'Seam Aligned — costura concentrada numa quina','Aligned concentra todas as costuras numa linha vertical — quina é o melhor lugar para esconder'),
    I('seam-gap.gif',            'Seam Gap — controle do fechamento do loop',  'O Seam Gap controla onde exatamente o loop fecha — antes, no ponto, ou depois do início'),
    I('pr-artifacts-1.png',      'Artefatos na costura — blob, lacuna, cicatriz','Blob = PA alto; Lacuna = Seam Gap pequeno; Cicatriz = falta de Wipe on Loop'),
  ],

  'seams-acabamento/tipos-de-seam': [
    I('seam-aligned.png',        'Seam Aligned — linha vertical numa quina',  'Aligned: costura sempre na mesma quina — previsível, fácil de esconder em cantos de caixas'),
    I('seam-back.png',           'Seam Rear — costura na face traseira',       'Rear: costura sempre na face de trás — para figuras e produtos que só a frente é vista'),
    I('seam-nearest.png',        'Seam Nearest — ponto mais próximo',          'Nearest: minimiza deslocamento do cabeçote — menos tempo mas costura imprevisível'),
    I('seam-random.png',         'Seam Random — distribuída aleatoriamente',   'Random: elimina a linha vertical mas cria pontos dispersos por toda a superfície'),
    I('seam-staggered-inner.gif','Seam Staggered — escalonada entre camadas',  'Staggered desloca a costura entre camadas — quase invisível em superfícies curvas'),
    I('scarf-joint-seam.png',    'Scarf Joint — transição gradual',            'O Scarf Joint abre e fecha o loop gradualmente — costura quase imperceptível'),
  ],

  'seams-acabamento/escondendo-e-posicionando': [
    I('seam-wipe-on-loop.png',   'Wipe on Loop — limpar excesso da costura',   'O Wipe on Loop passa o bico sobre a linha impressa para limpar o blob de fim de loop'),
    I('seam-wipe-on-loops-options.png','Opções do Wipe on Loop',               'Configure velocidade, comprimento e fluxo do wipe para diferentes materiais e geometrias'),
    I('seam-aligned-back.png',   'Seam Aligned + Rear — melhor dos dois',     'Combine Aligned e Rear para costura previsível E discreta — numa quina da face traseira'),
    I('apa-expected-seam.jpg',   'Seam com APA calibrado',                     'Pressure Advance bem calibrado reduz o blob da costura — PA e Seam Gap trabalham juntos'),
    I('pr-artifacts-2.png',      'Cicatriz na seam — como corrigir',           'Cicatriz vertical = Wipe on Loop ausente ou Seam Gap incorreto — ajuste nos parâmetros de seam'),
  ],

  'seams-acabamento/ironing-surface-smoothing': [
    I('gen-ironing-surface.png','Ironing macro — antes e depois',            'Diferença real: esquerda com linhas FDM, direita com superfície quase polida após ironing'),
    I('ironing.png',             'Painel de ironing — visão geral',            'O ironing reimprime a superfície superior com fluxo mínimo (5–15%) para alisar as linhas'),
    I('ironing-top-surfaces.png','Ironing em Top Surfaces (padrão)',           'Aplica ironing em todas as superfícies superiores horizontais — modo mais usado'),
    I('ironing-topmost-surface.png','Ironing só na superfície mais alta',      'Mais rápido: aplica ironing apenas na camada final horizontal da peça'),
    I('ironing-all-solid-layers.png','Ironing em todas as camadas sólidas',    'Mais completo e lento: todas as camadas sólidas internas também recebem ironing'),
    I('ironing-inset.png',       'Ironing Inset — recuo da borda',             'O Inset afasta o ironing da borda — evita excesso de material que arredonda quinas'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 12 — Velocidade Extrema e Input Shaper
  ═══════════════════════════════════════════════════════════ */
  'velocidade-input-shaper/o-que-limita-velocidade': [
    I('ers-intro.png',           'ERS — Extrusion Rate Smoothing',             'O limite de MVS é o fator mais ignorado — define a velocidade máxima real de impressão'),
    I('ers-printspeed.png',      'ERS × velocidade de impressão',              'Speed = MVS ÷ (Área da seção da linha) — o hotend define o teto, não os motores'),
    I('mvf_caliper_sample_mvf.jpg','Caliper medindo amostra de MVS',           'O MVS real é encontrado aumentando a velocidade até o primeiro underextrusion aparecer'),
    I('infill-ghosting.png',     'Ghosting — vibração nas paredes',            'Ondas simétricas nas paredes externas = vibração. Solução: Input Shaper ou menos velocidade'),
    I('vfa_test_print.jpg',      'VFA — artefatos finos verticais',            'Linhas finas verticais regulares = correia solta ou rolamento desgastado — manutenção mecânica'),
  ],

  'velocidade-input-shaper/aceleracao-jerk-input-shaper': [
    I('IS_freq_menu.png',        'Menu de calibração IS — frequência',         'Configure o teste de frequência — identifique a ressonância de X e Y da máquina'),
    I('IS_freq_marlin_print_measure.jpg','Padrão de frequência impresso',      'Conte os picos entre os marcadores — cada eixo tem sua própria frequência de ressonância'),
    I('IS_damp_menu.png',        'Menu de damping ratio',                      'O damping ratio controla a agressividade do cancelamento — valores típicos: 0.05–0.15'),
    I('IS_damp_marlin_print_measure.jpg','Resultado do damping calibrado',     'Com damping correto os picos ficam suaves sem undershoot — aceleração limpa e precisa'),
    I('inputshaping_printer.png','IS nas configurações de movimento',          'Frequências X e Y ficam no perfil de impressora — ativas para todos os materiais'),
    I('jd_first_menu.png',       'Junction Deviation — cornering speed',       'JD controla velocidade nas mudanças de direção — impacta qualidade nas quinas'),
    I('jd_second_print_measure.jpg','Resultado do teste de JD medido',         'Maior JD = quinas rápidas mas com possível ringing. Menor JD = mais lento mas suave'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 13 — Tolerâncias e Projetos Funcionais
  ═══════════════════════════════════════════════════════════ */
  'tolerancias-funcionais/tolerancias-folgas': [
    I('OrcaToleranceTest_print.jpg','Teste de tolerâncias do OrcaSlicer',      'Imprima o OrcaTolerance Test para descobrir a folga funcional mínima do seu setup'),
    I('elephant-foot-compensation.png','Elephant Foot na base da peça',        'A primeira camada esmagada reduz furos inferiores — Elephant Foot Compensation corrige'),
    I('PolyHoles.png',           'PolyHoles — compensação de furos circulares','FDM produz furos 0.05–0.2 mm menores que o projeto — PolyHoles compensa matematicamente'),
    I('FilamentShrinkageCompensation.png','Shrinkage por material',            'ABS ~0.8%, PA12 ~1.5%, PC ~0.6% — configure o % de encolhimento para cada material'),
    I('PreciseZOff.png',         'Sem Precise Z-height — variação na base',    'Sem a compensação, a primeira camada varia e afeta a precisão dos furos inferiores'),
    I('PreciseZOn.png',          'Com Precise Z-height — base uniforme',       'Com Precise Z-height a primeira camada mantém altura consistente em toda a área'),
  ],

  'tolerancias-funcionais/press-fit-snap-roscas': [
    I('gen-functional-gears.png','Engrenagens funcionais — precisão real',   'Engrenagens impressas que realmente funcionam: dimensionamento correto + tolerâncias calibradas'),
    I('OrcaToleranceTes_m6.jpg', 'Tolerância teste — encaixe M6',              'Teste específico M6: verifique se a rosca M6 entra com a folga correta no seu setup'),
    I('arcsinus-joint.png',      'Junta arc-sinus para snap-fits',             'Juntas em arc-sinus distribuem melhor a carga em encaixes snap-fit de plástico FDM'),
    I('cubic-joint.png',         'Junta cúbica — para encaixes desmontáveis',  'Juntas cúbicas permitem montagem/desmontagem repetida sem desgaste excessivo'),
    I('PolyHoles.png',           'PolyHoles para furos de parafusos',          'Furos para parafusos M3: projeto 2.5 mm mas com shrinkage + poly holes fica no tamanho certo'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 14 — Resolução de Problemas
  ═══════════════════════════════════════════════════════════ */
  'resolucao-problemas/defeitos-superficie': [
    I('pr-artifacts-1.png',      'Artefato tipo 1 na costura',                 'Blob na seam: PA muito alto ou temperatura alta — reduza PA ou abaixe temperatura 5°C'),
    I('pr-artifacts-2.png',      'Artefato tipo 2 na costura',                 'Cicatriz na seam: falta de Wipe on Loop ou Seam Gap incorreto — ajuste o retorno ao loop'),
    I('pr-artifacts-3.png',      'Artefato tipo 3 na costura',                 'Undershoot: PA muito alto — PA específico para cada material, recalibre ao trocar filamento'),
    I('infill-ghosting.png',     'Ghosting — ondas nas paredes externas',      'Ondas simétricas = vibração. Solução: ative Input Shaper ou reduza aceleração/velocidade'),
    I('vfa_test_print.jpg',      'VFA — linhas finas verticais regulares',     'Linhas finas periódicas = correia solta ou rolamento danificado — manutenção mecânica urgente'),
  ],

  'resolucao-problemas/defeitos-estruturais': [
    I('slow-down-for-curled-perimeters.png','Slow down para curling',          'Curling em overhangs: aumente cooling, reduza velocidade nesses trechos específicos'),
    I('extra-perimeters-on-overhangs.png','Perímetros extras em overhangs',    'Paredes extras nos overhangs melhoram a superfície suportada e reduzem o curling'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 15 — Produção Comercial
  ═══════════════════════════════════════════════════════════ */
  'producao-comercial/custo-lucro': [
    I('gen-pla-quality.png',   'Produto comercial de alta qualidade',        'Produto premium: ironing + seam rear + PA calibrado + tolerâncias verificadas'),
  ],

  'producao-comercial/fazenda-qualidade': [
    I('assembly_bed_view.png',   'Vista da cama com múltiplos objetos',        'Organize a cama para maximizar área e minimizar viagens — mais peças por impressão'),
    I('skirt-per-object.png',    'Skirt individual por objeto',                'Skirt por objeto garante purga individual — cada peça começa com fluxo estável'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 16 — Estudos de Caso Avançados
  ═══════════════════════════════════════════════════════════ */
  'estudos-de-caso-avancados/casos-decorativos': [
    I('gen-fuzzy-skin-vase.png','Vaso decorativo com fuzzy skin',         'Resultado final: produto decorativo com acabamento premium — zero pós-processamento'),
    I('Fuzzy-skin-voronoi.png',  'Fuzzy Skin Voronoi — padrão elaborado',     'Voronoi: células irregulares que lembram pedra, couro ou estrutura orgânica'),
    I('Fuzzy-skin-Combined-mode.png','Fuzzy Skin Combined mode',               'Combined mode aplica fuzzy skin nas paredes E nas superfícies horizontais simultaneamente'),
    I('Fuzzy-skin-perlin.png',   'Fuzzy Skin Perlin — textura natural',        'Perlin noise cria variação natural — parece superfície geológica ou madeira envelhecida'),
    I('Fuzzy-skin-ridged-multifractal.png','Fuzzy Skin Ridged Multifractal',   'Padrão fractal: textura muito elaborada com escalas múltiplas — aspecto mineral dramático'),
    I('Fuzzy-skin-Displacement-mode.png','Fuzzy Skin Displacement mode',       'Displacement mode move toda a geometria — ondulação profunda na superfície inteira'),
    I('stl-transformation.png',  'Transformações STL no OrcaSlicer',          'Escala, espelhamento, rotação complexa — diretamente no OrcaSlicer sem CAD adicional'),
  ],

  'estudos-de-caso-avancados/casos-mecanicos-virais': [
    I('gen-functional-gears.png','Engrenagens funcionais — caso mecânico',   'Peças mecânicas virais dependem de tolerâncias precisas e infill estrutural correto'),
    I('OrcaToleranceTest_print.jpg','Calibração de tolerâncias antes do projeto','Sempre calibre a folga mínima antes de imprimir peças mecânicas funcionais complexas'),
    I('infill-top-gyroid.png',   'Gyroid para peças com carga multidirecional','Peças mecânicas com torção e carga variável: Gyroid garante resistência igual em todos os eixos'),
    I('makers-muse-walls-strength.png','Paredes são mais importantes que infill','Estudo confirma: 4+ paredes têm impacto 3–4× maior na resistência que aumentar infill%'),
    I('gen-infill-crosssection.png','Infill interno de peça mecânica',       'Seção transversal: infill bem distribuído dentro de 4 paredes — estrutura sólida e eficiente'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 17 — Gerador de Paredes
  ═══════════════════════════════════════════════════════════ */
  'gerador-de-paredes/classic-vs-arachne': [
    I('wallgenerator-classic.png','Classic Wall Generator — largura fixa',     'Classic usa largura fixa — deixa lacunas visíveis em paredes finas que não dividem exatamente'),
    I('wallgenerator-arachne.png','Arachne Wall Generator — largura variável', 'Arachne adapta a largura de cada segmento — preenche geometrias finas sem lacunas'),
    I('walls-big-detect-thin-off-on.png','Detect Thin Walls — off vs on',      'Diferença clara: sem detecção há lacunas, com detecção todas as regiões finas são preenchidas'),
    I('makers-muse-walls-strength.png','Impacto do número de paredes',         'Mais paredes = resistência muito maior — Arachne garante que as paredes sejam sólidas'),
  ],

  'gerador-de-paredes/configuracoes-avancadas-paredes': [
    I('walls.png',               'Painel completo de paredes',                 'Perímetros, gerador, ordenamento e largura de linha por zona — todos configuráveis'),
    I('walls-small-detect-thin-off.png','Paredes finas SEM detecção — lacunas','Regiões menores que 1 line width ficam com lacuna de material sem Detect Thin Walls'),
    I('walls-small-detect-thin-on.png', 'Paredes finas COM detecção — preenchidas','Linhas adaptativas preenchem completamente regiões finas — nenhuma lacuna fica aberta'),
    I('inner-outer.gif',         'Ordem Inner→Outer animada',                  'Inner→Outer: parede interna impressa primeiro como guia — bom acabamento externo'),
    I('outer-inner.gif',         'Ordem Outer→Inner animada',                  'Outer→Inner: parede externa livre de empurrão — melhor precisão dimensional'),
    I('inner-outer-inner.gif',   'Ordem Inner→Outer→Inner — melhor equilíbrio','Melhor das opções para peças funcionais: inner guia, outer precisa, inner finaliza'),
    I('avoid-crossing-walls.png','Avoid Crossing Walls — rotas de travel',     'Roteia o travel pelo interior da peça — reduz stringing visível na superfície externa'),
    I('only-one-wall.gif',       'Only One Wall nas camadas superiores',        'Uma única parede nas camadas superiores melhora acabamento e reduz tempo de impressão'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 18 — Padrões de Infill
  ═══════════════════════════════════════════════════════════ */
  'padroes-infill/infill-basicos': [
    I('infill-top-line.png',     'Infill Lines — mais rápido de todos',        'Linhas paralelas sem cruzamento — fraco no eixo perpendicular às linhas, muito rápido'),
    I('infill-top-grid.png',     'Infill Grid — grade ortogonal',              'Grade de linhas perpendiculares — boa compressão vertical, rápido e simples'),
    I('infill-top-rectilinear.png','Infill Rectilinear — grade mais uniforme', 'Preenchimento mais homogêneo que Grid — preferido em densidades acima de 50%'),
    I('infill-top-honeycomb.png','Infill Honeycomb — favo de mel',             'Hexagonais: excelente resistência lateral com boa relação rigidez/peso/velocidade'),
    I('infill-top-triangles.png','Infill Triangles — múltiplas direções',      'Triângulos resistem bem em várias direções XY sem o custo de tempo do Gyroid'),
    I('infill-top-concentric.png','Infill Concentric — ideal para TPU',        'Concentric: linhas concêntricas permitem deformação uniforme — perfeito para partes flexíveis'),
  ],

  'padroes-infill/infill-avancados': [
    I('infill-top-gyroid.png',   'Gyroid — o rei do infill estrutural',        'Único padrão verdadeiramente 3D: igual resistência em X, Y e Z — ideal para cargas variadas'),
    I('gen-infill-crosssection.png','Gyroid cortado — estrutura 3D real',    'A estrutura ondulada do Gyroid vista por dentro — geometria triperiódica mínima'),
    I('infill-top-cubic.png',    'Cubic — quasi-isotrópico e mais rápido',     'Resistência próxima ao Gyroid com tempo menor — o melhor equilíbrio prático para peças funcionais'),
    I('infill-top-adaptive-cubic.png','Adaptive Cubic — densidade variável',   'Mais denso perto das paredes onde importa — economiza material no centro sem perder resistência'),
    I('infill-top-lightning.png','Lightning — mínimo absoluto de material',    'Só sustenta as camadas superiores — protótipos visuais rápidos sem resistência estrutural'),
    I('infill-top-tpms-d.png',   'TPMS-D — superfície triperiódica mínima',   'Similar ao Gyroid matematicamente mas com geometria diferente — isotrópico em todos os eixos'),
    I('infill-top-support-cubic.png','Support Cubic — base para suporte',      'Otimizado para suporte de material — máximo suporte vertical com mínimo contato com a peça'),
    I('extra-solid-infill.gif',  'Extra solid infill animado',                 'Camadas sólidas extras na transição infill→topo melhoram o acabamento superficial superior'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 19 — Suporte Avançado
  ═══════════════════════════════════════════════════════════ */
  'suporte-avancado/tipos-suporte': [
    I('overhang.png',            'Análise de overhang no OrcaSlicer',          'Vermelho = suporte obrigatório (>50°), amarelo = limite (40–50°), verde = imprime livre'),
    I('overhang-printable.png',  'Overhangs imprimíveis visualizados',         'A visualização de overhang mostra exatamente quais regiões precisam de suporte'),
    I('extra-perimeters-on-overhangs.png','Perímetros extras em overhangs',    'Paredes extras nos overhangs melhoram a superfície suportada e reduzem o curling'),
    I('brim-mouse-ears.png',     'Mouse Ears — brim pontual para overhangs',   'Mouse Ears adicionam adesão extra exatamente onde as bordas tendem a levantar'),
  ],

  'suporte-avancado/interface-layers-otimizacao': [
    I('overhang.png',            'Threshold de overhang ajustado',             'Aumente o threshold para gerar menos suporte — teste até achar o limite da sua impressora'),
    I('extra-perimeters-on-overhangs.png','Perímetros extras + interface layers','Extra perimeters + interface layers = melhor qualidade superficial suportada com remoção fácil'),
    I('brim-inner.png',          'Brim interno para suportes e ilhas',         'Brim interno na base do suporte aumenta adesão e evita que caia durante a impressão'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 20 — Velocidade e Aceleração
  ═══════════════════════════════════════════════════════════ */
  'velocidade-aceleracao/todas-velocidades': [
    I('travel-lines.png',        'Linhas de travel no preview',                'Viagens longas = oportunidade de otimização. Organize objetos para minimizar travels'),
    I('ers-printspeed.png',      'ERS × velocidade × MVS',                    'A velocidade real é limitada pelo MVS — ERS suaviza as transições de velocidade ao longo da peça'),
    I('jd_printer_jerk_limitation.png','Jerk — limitação de aceleração instantânea','Jerk muito alto = ringing nas quinas. Muito baixo = impressão desnecessariamente lenta'),
  ],

  'velocidade-aceleracao/perfis-velocidade-material': [
    I('apa-profile.png',         'Perfil APA — Adaptive Pressure Advance',    'O APA adapta o PA dinamicamente conforme a velocidade muda — elimina blobs e underextrusion'),
    I('apa-test.png',            'Teste de APA — configuração',                'O teste de APA imprime peça com diferentes velocidades para calibrar a curva de adaptação'),
    I('apa-identify-optimal.jpg','APA — identificando o valor ótimo',          'O valor ótimo de APA: cantos nítidos sem blobs em TODAS as velocidades de impressão'),
    I('apa-identify-too-high.jpg','APA muito alto — underextrusion nas quinas','PA adaptativo alto demais: underextrusion após curvas — reduza o valor base do APA'),
    I('apa-identify-too-low.jpg', 'APA muito baixo — blobs nos cantos',       'PA adaptativo baixo demais: blobs nas quinas — aumente o valor base do APA'),
    I('apa-material-config.png', 'APA configurado no perfil de material',      'A curva APA fica salva no perfil de filamento — cada material tem sua própria curva'),
    I('apa-setup-result-speed.png','Resultado APA com velocidade adaptativa',  'Com APA calibrado: qualidade uniforme em todas as velocidades — do infill rápido às paredes lentas'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 21 — Calibração Completa (Wiki)
  ═══════════════════════════════════════════════════════════ */
  'calibracao-wiki/protocolo-calibracao': [
    I('calibration.png',         'Menu de Calibração — visão geral',          'O menu Calibrate centraliza todos os testes em ordem lógica — comece sempre pela temperatura'),
    I('temp-tower_test_menu.png','Etapa 1 — Temperature Tower',               'Temperatura correta é a base de tudo — afeta flow, PA, retração e qualidade superficial'),
    I('gen-temp-tower.png','Torre de temperatura — análise visual',   'Identifique pontes limpas + overhangs firmes + superfície brilhante = temperatura ideal'),
    I('mvf_gui_flow.png',        'Etapa 2 — Max Volumetric Speed',            'MVS define o limite superior de velocidade — excedê-lo causa underextrusion em alta velocidade'),
    I('flowrate-pass1-monotonic.jpg','Etapa 3a — Flow Rate passagem 1',       'Primeira passagem de flow: ajuste grosseiro ±10% para chegar perto do valor correto'),
    I('flowrate-pass2-monotonic.jpg','Etapa 3b — Flow Rate passagem 2',       'Segunda passagem fina ±2%: medir com paquímetro até a parede ter espessura exata'),
    I('gen-pa-comparison.png','Etapa 4 — Pressure Advance calibrado',      'PA incorreto (esquerda) vs calibrado (direita) — cantos limpos sem blobs'),
    I('retraction_test_menu.png','Etapa 5 — Retraction Tower',                'Retração mínima que elimina stringing sem causar underextrusion no reinício da linha'),
    I('IS_freq_menu.png',        'Etapa 6 — Input Shaping',                   'Cancele as frequências de vibração para alta velocidade sem ghosting nas paredes'),
  ],

  'calibracao-wiki/manutencao-calibracao': [
    I('factorian-calibration-029.png','Guia de calibração de referência',     'Referência visual completa dos valores e quando recalibrar cada parâmetro'),
    I('gen-temp-tower.png','Recalibrar temperatura ao trocar lote',   'Temperatura pode variar 2–5°C entre lotes do mesmo filamento e cor — verifique sempre'),
    I('flowcalibration-example.png','Flow correto vs incorreto — comparação', 'Overextrusion acumula e causa problemas dimensionais — verifique flow mensalmente'),
    I('retraction_test_measure.png','Verificação periódica de retração',      'Stringing novo sem motivo = verifique temperatura e retração — podem ter derivado'),
    I('vfa_test_menu.png',       'VFA Test — verificação da correia',          'Artefatos verticais periódicos = correia solta ou rolamento desgastado — manutenção mecânica'),
    I('jd_second_menu.png',      'Revisão de JD após manutenção mecânica',    'Após trocar correia ou rolamentos recalibre JD — a tensão mecânica mudou'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 22 — Configurações de Material
  ═══════════════════════════════════════════════════════════ */
  'configuracoes-material/perfil-filamento': [
    I('filament-preset.png',     'Seletor de perfil de filamento',             'Cada filamento tem perfil próprio — não use perfis genéricos, calibre um por material'),
    I('bed_type_material_temperature.png','Temperatura por tipo de superfície','PEI liso, PEI texturado, vidro e PEX têm temperaturas diferentes para o mesmo material'),
    I('mvf_material_settings.png','MVS no perfil de material',                 'Define o limite de fluxo para o hotend com este material — o OrcaSlicer não excederá esse valor'),
    I('mvf_measurement_point.jpg','Encontrando o MVS real da combinação',      'O MVS real é encontrado aumentando velocidade até o primeiro underextrusion aparecer'),
    I('gen-pla-quality.png',   'Resultado de perfil bem calibrado',          'Com perfil calibrado: acabamento profissional, dimensões corretas, sem defeitos'),
  ],

  'configuracoes-material/materiais-especiais': [
    I('Chamber-Temperature-Control-Material.png','Câmara quente para materiais técnicos','ABS, PA, PC e compostos exigem câmara fechada — temperatura alta evita warping e cracking'),
    I('FilamentShrinkageCompensation.png','Shrinkage por material especializado','Cada material encolhe diferente: PA12 ~1.5%, PC ~0.6%, ABS ~0.8% — configure no perfil'),
    I('filament_for_features.png','Filamento diferente por feature',           'Em multi-material: use material de suporte solúvel, material rígido+flexível na mesma peça'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 23 — Configurações do Extrusor
  ═══════════════════════════════════════════════════════════ */
  'configuracoes-extrusor/retracao-avancada': [
    I('retraction_test_menu.png','Menu de teste de retração',                  'Direct Drive: 0–3 mm / Bowden: 3–8 mm / Velocidade: 30–60 mm/s — comece pelo meio'),
    I('gen-retraction-tower.png','Torre de retração — stringing visível','Identifique o valor mínimo que elimina o stringing sem causar underextrusion'),
    I('retraction_test_measure.png','Medir stringing nas seções da torre',     'Use luz lateral para revelar fios finos — a seção mais baixa sem stringing é sua retração'),
    I('retraction_test_print.jpg','Torres impressas — comparação de seções',   'Cada seção da torre foi impressa com um valor diferente — identifique a transição limpa'),
    I('apa-expected-results.jpg','APA + retração — resultado esperado',        'Com APA ativo a retração se ajusta às mudanças de velocidade — menos tuning manual necessário'),
  ],

  'configuracoes-extrusor/zhop-motion-ability': [
    I('travel-lines.png',        'Linhas de travel no preview — com Z-hop',    'Z-hop eleva o bico durante viagens para não arrastar sobre a peça impressa'),
    I('avoid-crossing-walls.png','Avoid Crossing Walls — alternativa ao Z-hop','Roteia o travel pelo interior da peça — evita stringing sem o overhead do Z-hop'),
    I('process-others.png',      'Configurações de Z-hop na aba Others',       'Z-hop height, threshold e lift — configure na aba Others do perfil de processo'),
    I('jd_second_menu.png',      'Junction Deviation — cornering speed',       'JD controla velocidade nas mudanças de direção — afeta qualidade das quinas e tempo total'),
    I('apa-setup-result-acceleration-jerk.png','Aceleração + JD calibrados',   'Com JD + IS + APA calibrados: aceleração máxima sem artefatos nas quinas ou paredes'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 24 — Ironing, Bridges e Fuzzy Skin
  ═══════════════════════════════════════════════════════════ */
  'ironing-superficie/ironing-detalhado': [
    I('gen-ironing-surface.png','Ironing — macro antes e depois',            'Diferença clara: esquerda com linhas FDM visíveis, direita quase polida após ironing'),
    I('ironing.png',             'Painel de ironing — configuração',           'O ironing reimprime com fluxo mínimo (5–15%) — spacing 0.1 mm, velocidade reduzida'),
    I('ironing-top-surfaces.png','Ironing em Top Surfaces (modo padrão)',      'Aplica ironing em todas as superfícies superiores horizontais — modo mais usado'),
    I('ironing-topmost-surface.png','Ironing só na superfície mais alta',      'Mais rápido: apenas a camada final horizontal recebe o tratamento de alisamento'),
    I('ironing-all-solid-layers.png','Ironing em todas as camadas sólidas',    'Mais lento e completo: todas as camadas sólidas internas também recebem ironing'),
    I('ironing-inset.png',       'Ironing Inset — recuo da borda',             'Inset afasta o ironing da borda — evita excesso que arredonda as quinas da peça'),
  ],

  'ironing-superficie/bridges-overhangs-fuzzy': [
    I('bridge-angle-0.png',      'Bridge — ângulo padrão 0°',                  'O OrcaSlicer detecta automaticamente a direção da ponte e imprime em linha reta no vão'),
    I('bridge-angle-2.png',      'Bridge com ângulo ajustado — otimizado',     'Ajuste o ângulo para minimizar comprimento de cada linha suspensa e melhorar qualidade'),
    I('bridge-counterbore-none.png','Bridge counterbore — sem sacrificial',    'Sem camada sacrificial: a superfície inferior do furo fica com as marcas das linhas de bridge'),
    I('bridge-counterbore-sacrificial.png','Bridge com camada sacrificial',    'Camada sacrificial: imprime uma camada que é depois removida — resultado muito mais liso'),
    I('gen-fuzzy-skin-vase.png','Vaso com Fuzzy Skin — produto final',    'Resultado: produto decorativo com textura orgânica — acabamento premium sem pós-processamento'),
    I('Fuzzy-skin-voronoi.png',  'Fuzzy Skin Voronoi — padrão elaborado',     'Voronoi: células irregulares únicas que lembram pedra ou couro — efeito decorativo sofisticado'),
    I('Fuzzy-skin-Extrusion-mode.png','Fuzzy Skin Extrusion mode',            'Extrusion mode cria textura variando o fluxo de extrusão — resultado suave e natural'),
    I('Fuzzy-skin-ripple.png',   'Fuzzy Skin Ripple — ondas concêntricas',    'Ripple: ondas concêntricas dramáticas em peças cilíndricas — efeito que impressiona'),
  ],
}
