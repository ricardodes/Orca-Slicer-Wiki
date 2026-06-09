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
    I('full-sidebar.png',          'Interface completa do OrcaSlicer com sidebar', 'Visão geral: barra de workflow (topo), viewer 3D central e painel lateral de parâmetros'),
    I('real-orca-interface.jpg',   'OrcaSlicer carregado com modelo 3D',            'O OrcaSlicer exibe o modelo sobre a mesa virtual — cada cor representa uma estrutura diferente'),
    I('modes_switch.gif',          'Alternância entre modos Simple/Advanced/Expert', 'Mude de modo pelo dropdown no topo: Simple oculta parâmetros avançados, Expert expõe tudo'),
    I('process-quality.png',       'Aba Quality do painel de processo',              'Na aba Quality ficam layer height, line width, top/bottom shells e seam — os parâmetros mais usados'),
    I('real-slicer-preview.jpg',   'Preview de fatiamento com camadas coloridas',    'Após fatiar, o modo de preview mostra cada estrutura: paredes, infill, suporte e viagens'),
  ],

  'interface/visualizacao-movimentacao': [
    I('real-orca-interface.jpg',   'OrcaSlicer — navegação 3D com modelo',         'Rotacione com botão direito, pan com meio, zoom com scroll — igual ao Bambu Studio'),
    I('printer-preset.png',        'Seletor de impressora no topo da interface',    'Troque de impressora sem sair do projeto — os limites da mesa e perfis de temperatura mudam automaticamente'),
    I('assembly_bed_view.png',     'Vista da mesa de impressão — assembly view',    'A aba Assembly mostra todos os objetos na cama em posição real, útil para prints em lote'),
    I('assembly_view.png',         'Vista de montagem multi-objeto',                'Com vários objetos na cama é possível rotacionar e inspecionar individualmente cada um'),
    I('auto_orientation.png',      'Auto-orientação automática de objeto',          'O OrcaSlicer calcula a orientação que minimiza suportes e maximiza resistência mecânica'),
    I('real-slicer-preview.jpg',   'Preview de camadas após fatiamento',            'Deslize a barra de camadas para inspecionar o gcode camada por camada antes de imprimir'),
  ],

  'interface/ferramentas-avancadas': [
    I('process-preset.png',        'Seletor de perfil de processo',                 'O perfil de processo agrupa todos os parâmetros de fatiamento — Quality, Speed, Support…'),
    I('filament-preset.png',       'Seletor de perfil de filamento',                'Cada filamento tem seu próprio perfil com temperaturas, retração e MVS específicos'),
    I('process-strength.png',      'Aba Strength — parâmetros de resistência',      'Defina aqui walls, infill type e density, top/bottom layers para resistência estrutural'),
    I('process-speed.png',         'Aba Speed — controle de todas as velocidades',  'Cada tipo de movimento tem velocidade independente: parede externa, interna, infill, travel'),
    I('process-support.png',       'Aba Support — configurações de suporte',        'Normal vs tree support, threshold, interface layers e removabilidade controlados aqui'),
    I('process-others.png',        'Aba Others — parâmetros extras',                'Skirt, brim, elephant foot compensation, fuzzy skin e outras opções avançadas ficam aqui'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 2 — Configurações da Impressora
  ═══════════════════════════════════════════════════════════ */
  'impressora/volume-firmware-limites': [
    I('real-printer-config.jpg',   'Painel de configuração da impressora',          'Volume de impressão, firmware (Klipper/Marlin), limites de temperatura e velocidade máxima'),
    I('ABM-PrinterConfig.png',     'Auto Bed Mesh — configuração na impressora',    'Configure o ABM (Auto Bed Mesh) nas configurações da impressora para nivelamento automático'),
    I('ABM-Machine-G-code.png',    'G-code de máquina para ABM',                   'G-code START e END devem chamar o ABM antes de imprimir para compensar a falta de planeza'),
    I('inputshaping_printer.png',  'Input Shaper nas configurações de movimento',   'As frequências de ressonância de X e Y são salvas no perfil de impressora, não no processo'),
  ],

  'impressora/bico-extrusor-fluxo': [
    I('real-print-layers.jpg',     'Bico depositando filamento durante impressão',  'O diâmetro do bico define a largura mínima de linha — 0.4 mm é o padrão mais versátil'),
    I('cube_line_width.png',       'Visualização de line width no cubo de teste',   'Line width afeta diretamente a resistência das paredes e o acabamento superficial'),
    I('line_width.png',            'Diagrama de largura de linha vs diâmetro',      'Você pode usar 75-150% do diâmetro do bico como largura de linha sem problemas'),
    I('real-flow-test-print.jpg',  'Cubos de calibração de flow impressos',         'Imprima cubos de calibração e meça com paquímetro para ajustar o Flow Ratio com precisão'),
    I('multi_nozzle_diam.gif',     'Multi-nozzle com diâmetros diferentes',         'O OrcaSlicer suporta diferentes diâmetros de bico em configurações multi-extrusor'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 3 — Configurações de Processo
  ═══════════════════════════════════════════════════════════ */
  'processo/quality-camadas': [
    I('process-quality.png',       'Aba Quality — layer height e parâmetros visuais', 'Layer height: 0.1–0.35 mm para bicos de 0.4 mm. Camadas finas = mais tempo, melhor visual'),
    I('real-orca-settings-quality.jpg', 'Configurações de qualidade no OrcaSlicer', 'First layer height recomendado: 0.25 mm para boa adesão independente da layer height escolhida'),
    I('number-of-slow-layers.png', 'Número de camadas lentas no início',             'As primeiras N camadas imprimem mais devagar para garantir adesão sólida à mesa'),
    I('slow-down-for-curled-perimeters.png', 'Slow down para perímetros curvados',  'Detecta curling (levantamento de bordas) e reduz velocidade automaticamente para compensar'),
    I('top-bottom-shells.png',     'Configuração de top e bottom shells',            'Top shells: mínimo 4 camadas ou 0.8 mm para superfícies superiores lisas sem furos'),
  ],

  'processo/paredes-infill': [
    I('process-strength.png',      'Aba Strength — paredes e infill',               'Walls (perímetros) e Infill são os dois fatores que mais impactam resistência mecânica'),
    I('infill-top-gyroid.png',     'Infill Gyroid — isotrópico em todos os eixos',  'Gyroid é o único padrão verdadeiramente 3D — mesma resistência em X, Y e Z'),
    I('infill-top-honeycomb.png',  'Infill Honeycomb — excelente resistência XY',   'Hexagonais distribuem carga de forma eficiente — ótimo para peças submetidas a pressão lateral'),
    I('walls.png',                 'Painel de configuração de paredes',              '3–4 paredes para peças funcionais, 2 para protótipos rápidos, 1 apenas para visual'),
    I('real-infill-gyroid.jpg',    'Gyroid impresso em PETG transparente',          'O padrão Gyroid visto de lado em PETG translúcido — estrutura ondulada tridimensional'),
    I('real-infill-patterns.jpg',  'Amostras de padrões de infill comparados',      'Diferentes padrões de infill lado a lado: cada um tem trade-off entre velocidade e resistência'),
  ],

  'processo/cooling-support-adhesion': [
    I('process-support.png',       'Configurações de suporte no painel',            'Suporte Normal usa grid ortogonal; Tree usa galhos orgânicos — mais fácil de remover'),
    I('overhang-printable.png',    'Visualização de overhangs imprimíveis',         'Verde = ok sem suporte, amarelo = borda do limite, vermelho = precisa de suporte'),
    I('brim.png',                  'Brim na primeira camada',                       'Brim é uma aba plana ao redor da peça que aumenta a área de contato com a mesa'),
    I('brim-outer.png',            'Brim externo — o mais comum',                   'Brim externo padrão: adiciona N linhas ao redor da peça para evitar warping'),
    I('combined-brims.gif',        'Brims combinados em multi-objeto',              'Em prints com múltiplos objetos, os brims podem se unir para economizar material'),
    I('skirt.png',                 'Skirt — linha de purga ao redor da peça',       'O skirt purga o filamento antes de começar a peça — garante fluxo estável no início'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 4 — Materiais
  ═══════════════════════════════════════════════════════════ */
  'materiais/pla-petg': [
    I('real-benchy-highquality.jpg','Benchy em PLA laranja — alta qualidade',       'PLA a 215–220°C, mesa 60°C, fan 100%: melhor acabamento superficial de todos os materiais FDM'),
    I('bed_type_material_temperature.png', 'Temperatura da mesa por tipo de superfície', 'PEI texturado: 60°C PLA, 70°C PETG, 110°C ABS — a superfície da mesa impacta a adesão'),
    I('real-flow-test-print.jpg',  'Teste de flow rate em PETG branco',             'PETG requer temperatura maior (235–245°C) e fan reduzida para boa adesão entre camadas'),
    I('temp-tower.jpg',            'Temperature Tower para encontrar temperatura ideal','Imprima uma temperature tower antes de qualquer peça funcional com material novo'),
    I('FilamentShrinkageCompensation.png', 'Compensação de encolhimento do filamento', 'PETG encolhe menos que ABS — configure shrinkage compensation para peças dimensionalmente precisas'),
  ],

  'materiais/abs-asa-tpu': [
    I('Chamber-Temperature-Control-Material.png', 'Controle de temperatura de câmara', 'ABS e ASA precisam de câmara fechada a 40–50°C para evitar warping e delamination'),
    I('Chamber-Temperature-Control-Printer.png',  'Config de câmara na impressora',    'Configure a temperatura da câmara no perfil da impressora para materiais de engenharia'),
    I('real-print-layers.jpg',     'Impressão de material técnico em andamento',    'TPU flexível imprime bem em Direct Drive a 220–240°C com velocidade reduzida (25–40 mm/s)'),
    I('FilamentShrinkageCompensation.png', 'Compensação de shrinkage para ABS/ASA',  'ABS encolhe ~0.8%, ASA ~0.7% — use compensação de encolhimento para encaixes precisos'),
    I('real-benchy-highquality.jpg','Comparação de acabamento entre materiais',      'A qualidade superficial depende de temperatura, cooling e velocidade — não só do material'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 5 — Calibração Completa
  ═══════════════════════════════════════════════════════════ */
  'calibracao/temp-flow-pa': [
    I('calibration.png',           'Menu de calibração do OrcaSlicer',              'O menu Calibrate centraliza todos os testes: Temperature, Flow, PA, Retraction, IS, MVS, JD'),
    I('temp-tower_test_menu.png',  'Menu de Temperature Tower',                     'Selecione o material e a faixa de temperaturas — o OrcaSlicer gera a torre automaticamente'),
    I('temp-tower.jpg',            'Temperature Tower impressa — diferenças visíveis','Cada bloco da torre foi impresso em temperatura diferente — identifique o melhor visualmente'),
    I('real-temp-tower-print.jpg', 'Torre de temperatura com marcações claras',     'Pontes limpas + overhangs firmes + superfície brilhante = temperatura ideal encontrada'),
    I('flowcalibration-guide.png', 'Guia de calibração de fluxo (flow rate)',       'Passo 1: calibração grosseira ±10% || Passo 2: calibração fina ±2% com paquímetro'),
    I('flowcalibration-example.png','Exemplo de flow rate calibrado corretamente',  'Parede com espessura uniforme — nem underextrusion (fino) nem overextrusion (largo)'),
    I('pressure_advance_enable.png','Habilitando Pressure Advance no perfil',       'Ative o PA no perfil de filamento ANTES de fazer o teste de calibração'),
    I('pa-lines.png',              'Teste de PA por linhas',                        'Encontre a linha com cantos nítidos sem blobs — esse número é seu Pressure Advance'),
    I('real-pa-lines-print.jpg',   'Linhas de PA impressas com diferentes valores', 'PA muito baixo: blobs nos cantos. PA muito alto: underextrusion após curvas. Encontre o meio'),
  ],

  'calibracao/retraction-input-shaper': [
    I('retraction_test_menu.png',  'Menu de teste de retração',                     'Configure a faixa: Direct Drive 0–3 mm, Bowden 3–8 mm — velocidade padrão 40 mm/s'),
    I('retraction_test_print.jpg', 'Torres de retração com diferentes valores',     'Avalie qual combinação elimina o stringing sem causar underextrusion no reinício'),
    I('retraction_test_measure.png','Medir resultado do teste de retração',         'Use a régua do OrcaSlicer para medir o stringing — ou inspecione visualmente com luz'),
    I('real-retraction-tower.jpg', 'Torre de retração em PETG — stringing visível', 'PETG produz stringing fino mesmo bem calibrado — é normal, reduza com fan e temp mais baixa'),
    I('IS_freq_menu.png',          'Menu de teste de frequência — Input Shaper',    'O teste de frequência gera um padrão impresso que revela as frequências de vibração da máquina'),
    I('IS_freq_marlin_print_measure.jpg', 'Medição do padrão de ringing impresso',  'Conte os picos do padrão entre os marcadores para calcular a frequência de ressonância'),
    I('IS_damp_menu.png',          'Menu de damping ratio — amortecimento',         'Após encontrar a frequência, calibre o damping ratio para cancelamento mais suave'),
    I('inputshaping_printer.png',  'Input Shaper aplicado nas configurações',       'Frequência e damping ficam no perfil de impressora — habilitam alta velocidade sem ghosting'),
    I('real-input-shaper-print.jpg','Comparação antes e depois do Input Shaper',    'À esquerda: ghosting/ringing visível. À direita: superfície limpa com IS ativo'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 6 — Engenharia Mecânica
  ═══════════════════════════════════════════════════════════ */
  'engenharia/direcao-camadas-tensoes': [
    I('real-infill-patterns.jpg',  'Padrões de infill e direção das linhas',        'As linhas de cada camada têm a maior resistência ao longo do eixo de deposição'),
    I('fill-direction.png',        'Direção do infill configurável',                'Rotacione o infill para alinhar as linhas com a direção das forças que a peça vai sofrer'),
    I('fill-direction-to-model.png','Direção relativa ao modelo',                   'Opção Fill Direction to Model orienta o infill relativo ao eixo longo da peça automaticamente'),
    I('makers-muse-walls-strength.png', 'Estudo Makers Muse: paredes vs resistência', 'Mais paredes aumentam resistência isotrópica — infill ajuda pouco acima de 40% de densidade'),
    I('real-benchy-highquality.jpg','Peça estrutural em PLA laranja',               'A orientação de impressão é o fator mais impactante na resistência mecânica da peça final'),
  ],

  'engenharia/infill-resistencia': [
    I('infill-top-gyroid.png',     'Gyroid — isotrópico, melhor em 3D',             'Gyroid: mesma resistência em todos os eixos — ideal para peças com carga multidirecional'),
    I('infill-top-cubic.png',      'Cubic — quasi-isotrópico, mais rápido',         'Cubic oferece resistência próxima ao Gyroid mas imprime significativamente mais rápido'),
    I('infill-top-honeycomb.png',  'Honeycomb — excelente compressão lateral',      'Hexagonais resistem bem à compressão lateral — ótimo para suportes e bases de carga'),
    I('infill-top-lightning.png',  'Lightning — mínimo material, sem estrutura',    'Lightning usa só o necessário para sustentar as camadas superiores — sem resistência estrutural'),
    I('infill-top-adaptive-cubic.png','Adaptive Cubic — densifica perto das paredes','O Adaptive Cubic aumenta automaticamente a densidade próximo às paredes onde importa mais'),
    I('real-infill-gyroid.jpg',    'Gyroid em PETG translúcido — estrutura 3D real','Visto de lado em PETG transparente, o Gyroid revela sua estrutura tridimensional complexa'),
    I('extra-solid-infill.gif',    'Infill sólido extra animado',                   'Extra solid infill adiciona camadas sólidas na transição infill→topo para melhor acabamento'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 7 — Otimização Extrema
  ═══════════════════════════════════════════════════════════ */
  'otimizacao/tempo-material-resistencia': [
    I('real-speed-test.jpg',       'Comparação de velocidade: rápido vs lento',     'Velocidade maior = menos tempo mas qualidade reduzida — encontre o equilíbrio para cada peça'),
    I('process-speed.png',         'Painel de velocidades do OrcaSlicer',           'Cada estrutura tem velocidade independente: externa lenta para acabamento, interna rápida'),
    I('ers-printspeed.png',        'ERS — Extrusion Rate Smoothing vs velocidade',  'O ERS suaviza mudanças bruscas de velocidade prevenindo blobs e underextrusion transitório'),
    I('ers-artefact.jpg',          'Artefatos de extrusion sem ERS ativo',          'Sem ERS: mudanças abruptas de velocidade causam excesso ou falta de material nas transições'),
    I('ers-intro.png',             'Introdução ao Extrusion Rate Smoothing',        'ERS é especialmente útil em impressoras de alta velocidade (300+ mm/s) com filamentos viscosos'),
    I('infill-ghosting.png',       'Ghosting causado por infill rápido',            'Infill muito rápido cria vibrações que aparecem como ondas (ghosting) nas paredes externas'),
    I('real-benchy-highquality.jpg','Benchy impresso em alta velocidade otimizada', 'Com Input Shaper + ERS + PA calibrado: alta velocidade sem sacrificar qualidade'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 8 — Estudos de Caso
  ═══════════════════════════════════════════════════════════ */
  'estudos-de-caso/funcionais-mecanicas': [
    I('real-tolerance-test.jpg',   'Teste de tolerância com paquímetro',            'Peças funcionais exigem tolerâncias controladas — calibre seu setup antes de imprimir encaixes'),
    I('OrcaToleranceTest_print.jpg','Teste de tolerância do OrcaSlicer impresso',   'O OrcaTolerance Test revela a folga mínima funcional para cada par peça-encaixe no seu setup'),
    I('elephant-foot-compensation.png','Compensação de Elephant Foot',              'A primeira camada esmagada cria "pés de elefante" que reduzem a precisão dimensional inferior'),
    I('PolyHoles.png',             'PolyHoles — furos circulares mais precisos',    'Furos circulares em FDM ficam menores que o projetado — PolyHoles compensa esse erro automaticamente'),
    I('real-print-layers.jpg',     'Impressão de peça funcional em andamento',      'Para peças funcionais: 4+ paredes, 40%+ infill, orientação estratégica das camadas'),
  ],

  'estudos-de-caso/decorativos-comerciais': [
    I('real-fuzzy-skin.jpg',       'Peça decorativa com fuzzy skin em PLA preto',   'Fuzzy skin cria texturas orgânicas que escondem marcas de camada e dão acabamento premium'),
    I('Fuzzy-skin-voronoi.png',    'Fuzzy Skin — padrão Voronoi elaborado',         'Voronoi cria células irregulares como pedra ou couro — efeito decorativo único e sofisticado'),
    I('Fuzzy-skin-classic.png',    'Fuzzy Skin clássico — textura rugosa',          'A textura clássica do Fuzzy Skin esconde imperfeições e dá aparência artesanal à peça'),
    I('stl-transformation-smooth-rough.png','STL Transformation: suave vs rugoso',  'O OrcaSlicer pode aplicar transformações de suavização ou rugosidade na malha STL'),
    I('ironing-top-surfaces.png',  'Ironing nas superfícies superiores',            'Ironing cria superfícies superiores com acabamento quase injeção — ideal para produtos comerciais'),
    I('real-ironing-surface.jpg',  'Comparação antes/depois do ironing',            'Esquerda: superfície FDM padrão com linhas. Direita: superfície ironed lisa e brilhante'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 9 — Impressão 3D Comercial
  ═══════════════════════════════════════════════════════════ */
  'comercial/custo-lucro-perfis': [
    I('real-orca-interface.jpg',   'OrcaSlicer com análise de tempo e material',    'O OrcaSlicer estima tempo e gramas de filamento antes de imprimir — base para precificação'),
    I('process-preset-full.png',   'Perfis de processo para diferentes clientes',   'Crie perfis separados por tipo de cliente: protótipo rápido, qualidade comercial, peça funcional'),
    I('real-benchy-highquality.jpg','Produto final de alta qualidade em laranja',    'Acabamento comercial: ironing no topo, seam alinhada atrás, sem stringing, tolerâncias precisas'),
    I('real-speed-test.jpg',       'Comparação velocidade × qualidade × lucro',     'Velocidade alta = mais peças/hora = mais lucro — se qualidade for aceita pelo cliente'),
    I('filament-preset.png',       'Gestão de perfis de filamento por custo',       'Organize filamentos por custo/kg e defina MVS real para calcular tempo de impressão com precisão'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 10 — Mestre do OrcaSlicer
  ═══════════════════════════════════════════════════════════ */
  'mestre/avaliacao-final': [
    I('calibration.png',           'Menu completo de calibração — domínio total',   'O mestre do OrcaSlicer conhece cada teste de calibração e quando aplicar cada um'),
    I('real-orca-interface.jpg',   'Interface completa dominada pelo especialista',  'Cada parâmetro em seu lugar, perfis organizados, workflows otimizados para produção'),
    I('real-benchy-highquality.jpg','Benchy perfeito — resultado do domínio total', 'Resultado de PA calibrado + temperatura certa + IS ativo + seam controlada + ironing'),
    I('process-preset-full.png',   'Biblioteca de perfis do especialista',          'Um especialista mantém perfis separados por material, velocidade, qualidade e finalidade'),
    I('real-slicer-preview.jpg',   'Preview detalhado pré-impressão',               'Inspeção camada por camada antes de imprimir é hábito de quem não quer desperdiçar material'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 11 — Seams e Acabamento Profissional
  ═══════════════════════════════════════════════════════════ */
  'seams-acabamento/entendendo-a-seam': [
    I('real-seam-comparison.jpg',  'Comparação de seam em cilindros PLA verde',     'A costura existe porque o bico precisa parar em algum ponto da circunferência — escolha onde'),
    I('seam-aligned.png',          'Seam Aligned — costura alinhada numa quina',    'Aligned concentra todas as costuras numa linha vertical — quina é o melhor lugar para esconder'),
    I('seam-back.png',             'Seam Rear — costura na face traseira',          'Rear posiciona a costura sempre na face de trás — ideal quando há um lado que ninguém vê'),
    I('seam-gap.gif',              'Seam Gap — controle do espaçamento da costura', 'Ajuste o Seam Gap para controlar onde exatamente o loop fecha em relação ao ponto de início'),
    I('seam-wipe-on-loop.png',     'Wipe on Loop — limpar o bico na costura',      'Wipe on Loop move o bico sobre a linha já impressa para limpar o excesso de material da costura'),
  ],

  'seams-acabamento/tipos-de-seam': [
    I('seam-aligned.png',          'Seam Aligned — linha vertical limpa',           'A costura alinhada cria uma linha vertical sutil mas previsível — fácil de esconder em peças'),
    I('seam-back.png',             'Seam Rear — costura atrás da peça',             'Rear é perfeito para figuras e produtos onde só a frente será vista pelo cliente'),
    I('seam-nearest.png',          'Seam Nearest — ponto mais próximo',             'Nearest minimiza viagens do cabeçote — costura imprevisível mas melhora velocidade'),
    I('seam-random.png',           'Seam Random — costura distribuída',             'Random distribui a costura aleatoriamente — elimina a linha vertical mas cria pontos dispersos'),
    I('seam-staggered-inner.gif',  'Seam Staggered — escalonada entre camadas',     'Staggered desloca a costura entre camadas — quase invisível em superfícies curvas'),
    I('seam-aligned-back.png',     'Seam Aligned Back — alinhada na traseira',      'Combina previsibilidade do Aligned com discrição do Rear — melhor dos dois mundos'),
  ],

  'seams-acabamento/escondendo-e-posicionando': [
    I('seam-wipe-on-loop.png',     'Wipe on Loop para limpar excesso',              'O Wipe on Loop elimina o blob de fim de loop passando o bico sobre a linha recém-impressa'),
    I('seam-wipe-on-loops-options.png','Opções do Wipe on Loop',                    'Configure velocidade, comprimento e fluxo do wipe para diferentes materiais e geometrias'),
    I('seam-gap.gif',              'Ajuste fino do Seam Gap animado',               'O Seam Gap controla se o loop fecha antes, no ponto exato ou depois do ponto de início'),
    I('apa-expected-seam.jpg',     'Seam esperada com APA (Adaptive PA)',           'Com Pressure Advance calibrado a seam fica mínima — PA reduz o blob de início e fim de linha'),
    I('scarf-joint-seam.png',      'Scarf Joint — costura em rampa gradual',        'Scarf Joint abre e fecha o loop gradualmente — costura quase invisível em superfícies lisas'),
    I('pr-artifacts-1.png',        'Artefatos na seam sem otimização',              'Blob, lacuna ou cicatriz na costura — cada um indica um ajuste diferente necessário'),
  ],

  'seams-acabamento/ironing-surface-smoothing': [
    I('ironing.png',               'Ironing — configuração geral',                  'O ironing reimprime a camada superior com fluxo mínimo para alisar as linhas superficiais'),
    I('ironing-top-surfaces.png',  'Ironing em Top Surfaces (padrão)',              'Aplica ironing em todas as superfícies superiores visíveis — o modo mais usado'),
    I('ironing-topmost-surface.png','Ironing só na camada mais alta',               'Mais rápido: aplica ironing apenas na última camada horizontal da peça'),
    I('ironing-all-solid-layers.png','Ironing em todas as camadas sólidas',         'Mais completo (e lento): todas as camadas sólidas internas recebem o tratamento'),
    I('ironing-inset.png',         'Ironing Inset — recuo da borda',               'O Inset afasta o ironing da borda para evitar excesso de material nas quinas'),
    I('real-ironing-surface.jpg',  'Resultado real: antes e depois do ironing',     'Diferença clara: esquerda com linhas visíveis, direita com superfície lisa e brilhante'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 12 — Velocidade Extrema e Input Shaper
  ═══════════════════════════════════════════════════════════ */
  'velocidade-input-shaper/o-que-limita-velocidade': [
    I('real-speed-test.jpg',       'Teste de velocidade: qualidade comparada',      'Cada impressora tem uma velocidade máxima de qualidade — acima disso aparecem artefatos'),
    I('ers-intro.png',             'ERS — limite de taxa de extrusão',               'O limite de MVS (Max Volumetric Speed) é o fator mais ignorado na velocidade de impressão'),
    I('ers-printspeed.png',        'ERS × velocidade de impressão',                 'A velocidade de impressão está diretamente limitada pelo MVS: Speed = MVS ÷ (Área da seção)'),
    I('ers-artefact.jpg',          'Artefatos de alta velocidade sem compensação',  'Blobs, underextrusion e ondas nas paredes — sintomas típicos de velocidade acima do MVS'),
    I('infill-ghosting.png',       'Ghosting — fantasma de vibração nas paredes',   'O ghosting aparece em paredes lisas como ondas simétricas — causado por vibração do eixo'),
    I('vfa_test_print.jpg',        'VFA — Vertical Fine Artifacts test print',      'VFA (artefatos finos verticais) são causados por correias e rolamentos com folga ou sujos'),
  ],

  'velocidade-input-shaper/aceleracao-jerk-input-shaper': [
    I('IS_freq_menu.png',          'Menu de calibração de frequência IS',           'Input Shaper: configure o teste de frequência para encontrar a ressonância X e Y da máquina'),
    I('IS_freq_marlin_print_measure.jpg', 'Medição do padrão de frequência',        'Conte os picos no padrão entre os marcadores — cada eixo tem sua própria frequência'),
    I('IS_damp_menu.png',          'Menu de damping ratio',                         'O damping ratio controla quão agressivo é o cancelamento — valores típicos: 0.05–0.15'),
    I('IS_damp_marlin_print_measure.jpg', 'Medição do damping no padrão',           'Com damping correto os picos ficam suaves sem undershoot — aceleração limpa e rápida'),
    I('inputshaping_printer.png',  'IS aplicado nas configurações de movimento',    'As frequências X e Y ficam no perfil de impressora — ativas para todos os materiais'),
    I('jd_first_menu.png',         'Menu de Junction Deviation / Jerk',             'JD controla a velocidade mínima nas mudanças de direção — impacta qualidade nas quinas'),
    I('jd_second_print_measure.jpg','Resultado do teste de JD medido',              'Maior JD = quinas mais rápidas mas com possível ringing. Menor JD = mais lento mas suave'),
    I('real-input-shaper-print.jpg','Antes e depois do Input Shaper',               'Com IS ativo: quinas limpas, sem ghosting, velocidade muito maior sem perda de qualidade'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 13 — Tolerâncias e Projetos Funcionais
  ═══════════════════════════════════════════════════════════ */
  'tolerancias-funcionais/tolerancias-folgas': [
    I('OrcaToleranceTest_print.jpg','Teste de tolerâncias impresso',                'Imprima o OrcaTolerance Test para descobrir a folga mínima funcional do seu setup específico'),
    I('real-tolerance-test.jpg',   'Paquímetro medindo peça de tolerância',        'Sempre meça com paquímetro — a diferença entre projeto e impressão pode ser 0.1–0.5 mm'),
    I('elephant-foot-compensation.png','Compensação de Elephant Foot nas bordas',   'A primeira camada esmagada reduz furos e aumenta bases — use Elephant Foot Compensation'),
    I('PolyHoles.png',             'PolyHoles para furos circulares precisos',      'Furos circulares em FDM saem menores — PolyHoles converte para polígonos que compensam o erro'),
    I('FilamentShrinkageCompensation.png','Compensação de encolhimento do material', 'Configure o shrinkage % do material no perfil para que o OrcaSlicer pre-escale a peça'),
    I('QualityPrecision.png',      'Configurações de precisão e qualidade',         'Precise Z-height, Precise Extrusion Rate e outras opções de precisão dimensional'),
  ],

  'tolerancias-funcionais/press-fit-snap-roscas': [
    I('real-tolerance-test.jpg',   'Teste de press-fit e encaixes',                'Teste diferentes folgas: 0.1 mm para press-fit, 0.2 mm para deslizante, 0.4 mm para livre'),
    I('OrcaToleranceTest_print.jpg','OrcaTolerance Test — todos os encaixes',       'O teste inclui múltiplas folgas pré-configuradas para você identificar qual funciona no seu setup'),
    I('PolyHoles.png',             'PolyHoles para furos de parafusos precisos',    'Rosca M3 precisa de furo 2.5 mm — com shrinkage e poly holes o resultado fica no tamanho certo'),
    I('PreciseZOff.png',           'Sem Precise Z-height — primeira camada variável','Sem a compensação, a altura da primeira camada varia e afeta a precisão do furo inferior'),
    I('PreciseZOn.png',            'Com Precise Z-height — primeira camada uniforme','Com Precise Z-height ativo a primeira camada mantém altura consistente em toda a área da mesa'),
    I('arcsinus-joint.png',        'Junta arc-sinus para encaixes impressos',       'Juntas em arc-sinus distribuem melhor a carga em encaixes snap-fit de plástico'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 14 — Resolução de Problemas
  ═══════════════════════════════════════════════════════════ */
  'resolucao-problemas/defeitos-superficie': [
    I('pr-artifacts-1.png',        'Artefatos de superfície — tipo 1',              'Blob na seam: PA muito alto ou temperatura alta — reduza PA ou abaixe temperatura 5°C'),
    I('pr-artifacts-2.png',        'Artefatos de superfície — tipo 2',              'Cicatriz na seam: falta de Wipe on Loop ou Seam Gap incorreto — ajuste o retorno ao loop'),
    I('pr-artifacts-3.png',        'Artefatos de superfície — tipo 3',              'Undershoot na seam: PA muito alto — cada material tem um PA específico, recalibre'),
    I('infill-ghosting.png',       'Ghosting nas paredes — vibração',               'Ondas simétricas nas paredes externas = vibração. Solução: Input Shaper ou menos velocidade'),
    I('vfa_test_print.jpg',        'VFA — artefatos finos verticais',               'Linhas finas verticais regulares: correia solta, rolamento danificado ou temperatura instável'),
    I('ers-artefact.jpg',          'Artefatos de ERS — taxa de extrusão',           'Blobs periódicos em mudanças de velocidade = MVS excedido. Ative ERS ou reduza velocidade'),
  ],

  'resolucao-problemas/defeitos-estruturais': [
    I('real-print-layers.jpg',     'Impressão com layer adhesion visível',           'Delamination entre camadas: temperatura baixa, cooling excessivo ou velocidade muito alta'),
    I('slow-down-for-curled-perimeters.png','Slow down para perimeter curling',      'Curling (bordas levantando) em overhangs: aumente cooling, reduza velocidade nesses trechos'),
    I('extra-perimeters-on-overhangs.png','Perímetros extras em overhangs',          'Extra perimeters nos overhangs melhoram a superfície suportada e reduzem curling'),
    I('close-holes.png',           'Close Holes — fechar furos na malha',            'Malhas com furos causam problemas de fatiamento — Close Holes conserta automaticamente'),
    I('overhang-printable.png',    'Análise de overhang — o que é imprimível',      'Use a análise de overhang para identificar onde suporte é necessário antes de fatiar'),
    I('real-support-removal.jpg',  'Remoção de suporte — superfície resultante',    'Superfície suportada com interface layers 2–3: muito mais fácil de remover e acabamento melhor'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 15 — Produção Comercial
  ═══════════════════════════════════════════════════════════ */
  'producao-comercial/custo-lucro': [
    I('real-orca-interface.jpg',   'OrcaSlicer estimando tempo e material',         'A estimativa de tempo e gramas do OrcaSlicer é a base para calcular custo e preço de venda'),
    I('process-preset-full.png',   'Múltiplos perfis para diferentes produtos',     'Organize perfis por linha de produto — cada cliente tem seu padrão de qualidade e tempo'),
    I('real-speed-test.jpg',       'Otimização de velocidade para produção',        'A velocidade certa para produção é a máxima que ainda entrega a qualidade que o cliente aceita'),
    I('real-benchy-highquality.jpg','Produto comercial de alta qualidade',           'Produto premium: ironing + seam rear + PA calibrado + tolerâncias medidas'),
    I('filament-preset.png',       'Gestão de filamentos por custo e qualidade',    'Diferentes fornecedores de PLA têm custos diferentes — organize por custo/kg no perfil'),
  ],

  'producao-comercial/fazenda-qualidade': [
    I('assembly_bed_view.png',     'Múltiplos objetos na cama — farm setup',        'Preencha a cama sem que os objetos interfiram — o OrcaSlicer calcula colisões automaticamente'),
    I('assembly_view.png',         'Vista de montagem com vários objetos',          'Rotacione e posicione múltiplas peças para maximizar a área da cama e reduzir tempo por peça'),
    I('auto_orientation.png',      'Auto-orientação para lote de impressão',        'Auto-orient calcula a melhor orientação para cada peça minimizando suporte e maximizando força'),
    I('skirt-per-object.png',      'Skirt individual por objeto',                   'Skirt por objeto garante que cada peça purga o filamento no início, evitando subextrusão'),
    I('real-slicer-preview.jpg',   'Preview de farm: inspeção antes de imprimir',   'Sempre inspecione o gcode em modo preview antes de iniciar um lote — erros custam material e tempo'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 16 — Estudos de Caso Avançados
  ═══════════════════════════════════════════════════════════ */
  'estudos-de-caso-avancados/casos-decorativos': [
    I('Fuzzy-skin-voronoi.png',    'Fuzzy Skin Voronoi — textura premium',          'Padrão Voronoi cria células irregulares que lembram pedra, couro ou estrutura orgânica'),
    I('Fuzzy-skin-classic.png',    'Fuzzy Skin clássico — textura artesanal',       'Textura clássica do fuzzy skin — esconde marcas de camada e dá aparência manuscrita/artesanal'),
    I('Fuzzy-skin-perlin.png',     'Fuzzy Skin Perlin — ruído natural',             'Perlin noise cria textura com variação natural — parece superfície geológica ou madeira'),
    I('Fuzzy-skin-ripple.png',     'Fuzzy Skin ripple — ondas',                    'Padrão ripple cria ondas concêntricas — efeito dramático em vasos e peças cilíndricas'),
    I('Fuzzy-skin-billow.png',     'Fuzzy Skin billow — volume orgânico',           'Billow cria volumes irregulares que lembram nuvens — muito suave e orgânico'),
    I('real-fuzzy-skin.jpg',       'Resultado real: vaso com fuzzy skin',           'Peça final em PLA matte preto com textura fuzzy — acabamento que impressiona sem pós-processamento'),
    I('stl-transformation.png',    'Transformações de STL no OrcaSlicer',           'Aplique escalas, espelhamentos e rotações complexas diretamente no OrcaSlicer sem CAD'),
  ],

  'estudos-de-caso-avancados/casos-mecanicos-virais': [
    I('real-tolerance-test.jpg',   'Encaixes mecânicos calibrados',                'Peças mecânicas virais geralmente dependem de tolerâncias precisas — meça sempre com paquímetro'),
    I('OrcaToleranceTest_print.jpg','Teste de tolerância antes da peça viral',     'Antes de imprimir a peça viral, imprima o teste de tolerância para calibrar os encaixes'),
    I('real-infill-patterns.jpg',  'Infill estrutural para peças mecânicas',       'Peças mecânicas funcionais: 4+ paredes + Gyroid ou Cubic acima de 30% para resistência isotrópica'),
    I('infill-top-gyroid.png',     'Gyroid para peças submetidas a torção',        'Torção e cargas multidirecionais: Gyroid é o infill certo — resistência igual em todos os eixos'),
    I('makers-muse-walls-strength.png','Estudo de resistência: paredes vs infill', 'Paredes têm 3–4× mais impacto na resistência que o infill — priorize walls, não infill%'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 17 — Gerador de Paredes
  ═══════════════════════════════════════════════════════════ */
  'gerador-de-paredes/classic-vs-arachne': [
    I('wallgenerator-classic.png', 'Classic Wall Generator — largura fixa',         'Classic usa largura fixa para todas as linhas — deixa lacunas em paredes finas que não dividem exatamente'),
    I('wallgenerator-arachne.png', 'Arachne Wall Generator — largura variável',     'Arachne adapta a largura de cada segmento individualmente — preenche geometrias finas sem lacunas'),
    I('walls-big-detect-thin-off-on.png','Comparação: Detect Thin Walls off vs on',  'Sem o detect thin walls há lacunas em paredes finas — com ele as paredes finas são preenchidas'),
    I('real-wall-generator.jpg',   'Painel de configuração do Wall Generator',      'O OrcaSlicer mantém o padrão Arachne desde 2024 — mais preciso que o Classic para geometrias complexas'),
    I('makers-muse-walls-strength.png','Impacto das paredes na resistência final',  'Estudo mostra: duplicar o número de paredes tem mais impacto que dobrar a densidade de infill'),
  ],

  'gerador-de-paredes/configuracoes-avancadas-paredes': [
    I('walls.png',                 'Painel completo de configuração de paredes',    'Configure número de perímetros, gerador, ordenamento e largura de linha por zona'),
    I('walls-small-detect-thin-off.png','Detect Thin Walls OFF — lacunas visíveis', 'Sem detecção de paredes finas: regiões < 1 line width ficam com vazio de material'),
    I('walls-small-detect-thin-on.png', 'Detect Thin Walls ON — sem lacunas',       'Com detecção ativa: linhas adaptativas preenchem completamente todas as regiões finas'),
    I('inner-outer.gif',           'Ordem: Inner primeiro, Outer depois',           'Inner→Outer: parede interna serve de guia — resultado suave, bom acabamento externo'),
    I('outer-inner.gif',           'Ordem: Outer primeiro, Inner depois',           'Outer→Inner: parede externa impressa sem empurrão — melhor precisão dimensional'),
    I('inner-outer-inner.gif',     'Ordem: Inner→Outer→Inner — melhor equilíbrio', 'Melhor das opções: inner guia, outer livre, inner termina — padrão para peças funcionais'),
    I('avoid-crossing-walls.png',  'Avoid Crossing Walls — rotas de travel',       'Evita cruzar paredes no travel — reduz stringing visível na superfície externa'),
    I('only-one-wall.gif',         'Only One Wall no topo das peças',               'Uma única parede nas camadas superiores melhora o acabamento e reduz tempo de impressão'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 18 — Padrões de Infill
  ═══════════════════════════════════════════════════════════ */
  'padroes-infill/infill-basicos': [
    I('infill-top-line.png',       'Infill Lines — linhas paralelas, mais rápido',  'O padrão mais rápido: linhas paralelas sem cruzamento — fraco no eixo perpendicular às linhas'),
    I('infill-top-grid.png',       'Infill Grid — grade ortogonal',                 'Grade de linhas perpendiculares — rápido e razoável para compressão vertical e lateral'),
    I('infill-top-rectilinear.png','Infill Rectilinear — grade mais uniforme',      'Similar ao Grid mas com preenchimento mais homogêneo — preferido em densidades acima de 50%'),
    I('infill-top-honeycomb.png',  'Infill Honeycomb — favo de mel clássico',       'Hexagonais oferecem excelente resistência lateral com ótima relação rigidez/peso/tempo'),
    I('infill-top-triangles.png',  'Infill Triangles — bom em múltiplas direções',  'Triângulos resistem bem em várias direções XY sem o custo de tempo do Gyroid'),
    I('infill-top-concentric.png', 'Infill Concentric — spiralizado',               'Concentric é ideal para peças flexíveis (TPU) — as linhas concêntricas permitem deformação uniforme'),
    I('real-infill-patterns.jpg',  'Comparação real de padrões de infill',          'Amostras físicas lado a lado: visualize como cada padrão preenche o volume internamente'),
  ],

  'padroes-infill/infill-avancados': [
    I('infill-top-gyroid.png',     'Gyroid — o rei do infill isotrópico',           'Único padrão verdadeiramente 3D: igual resistência em X, Y e Z — ideal para cargas variadas'),
    I('real-infill-gyroid.jpg',    'Gyroid em PETG translúcido — estrutura real',   'Visto através do PETG transparente: a estrutura ondulada 3D do Gyroid em toda sua complexidade'),
    I('infill-top-cubic.png',      'Cubic — quasi-isotrópico e mais rápido',        'Resistência próxima ao Gyroid com tempo de impressão menor — o equilíbrio perfeito para peças funcionais'),
    I('infill-top-adaptive-cubic.png','Adaptive Cubic — mais denso nas bordas',     'Densifica automaticamente perto das paredes onde resistência importa — economiza material no centro'),
    I('infill-top-lightning.png',  'Lightning — mínimo absoluto de material',       'Só sustenta as camadas superiores — sem resistência estrutural. Para protótipos visuais rapidíssimos'),
    I('infill-top-gyroid.png',     'Gyroid em 3D — único infill verdadeiramente 3D','A estrutura triperiódica mínima do Gyroid distribui cargas igualmente em todas as direções'),
    I('infill-top-support-cubic.png','Support Cubic — para bases de suporte',       'Otimizado para suporte de material — maximiza suporte vertical minimizando contato com a peça'),
    I('infill-top-tpms-d.png',     'TPMS-D — superfície triperiódica mínima',      'TPMS-D é similar ao Gyroid matematicamente mas com geometria diferente — isotrópico também'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 19 — Suporte Avançado
  ═══════════════════════════════════════════════════════════ */
  'suporte-avancado/tipos-suporte': [
    I('overhang.png',              'Análise de overhang — o que precisa de suporte','Vermelho = suporte obrigatório (>50°), amarelo = borda do limite (40–50°), verde = imprime livre'),
    I('overhang-printable.png',    'Overhangs imprimíveis sem suporte',             'FDM consegue imprimir até 45–50° sem suporte com cooling adequado e velocidade controlada'),
    I('extra-perimeters-on-overhangs.png','Perímetros extras em overhangs',         'Paredes extras nos overhangs melhoram a superfície e reduzem curling nas bordas suspensas'),
    I('real-support-removal.jpg',  'Suporte removido — superfície limpa',           'Com interface layers corretamente configuradas a superfície suportada fica muito mais limpa'),
    I('brim-mouse-ears.png',       'Mouse Ears — brim pontual para overhangs',      'Mouse Ears adicionam adesão extra exatamente onde as bordas tendem a levantar — muito eficiente'),
  ],

  'suporte-avancado/interface-layers-otimizacao': [
    I('real-support-removal.jpg',  'Suporte com interface layers — remoção fácil', 'Interface layers criam uma zona de separação entre suporte e peça — remoção limpa e fácil'),
    I('extra-perimeters-on-overhangs.png','Perímetros extras melhoram overhang',    'Cada perímetro extra no overhang reduz a flecha (sagging) e melhora o acabamento da superfície'),
    I('overhang.png',              'Visualização de angulação de overhang',         'Aumente o threshold para reduzir suporte necessário — teste antes para saber o limite da sua impressora'),
    I('process-support.png',       'Painel completo de configurações de suporte',   'Interface layer spacing, material, pattern e removability — todos impactam a facilidade de remoção'),
    I('brim-inner.png',            'Brim interno para suportes e ilhas',             'Brim interno na base do suporte melhora adesão e evita que o suporte caia durante a impressão'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 20 — Velocidade e Aceleração
  ═══════════════════════════════════════════════════════════ */
  'velocidade-aceleracao/todas-velocidades': [
    I('process-speed.png',         'Painel completo de velocidades',                'Cada estrutura tem velocidade independente: external perimeter lenta, internal wall rápida'),
    I('real-speed-test.jpg',       'Comparação de qualidade × velocidade',          'Velocidade externa: 60–80 mm/s para qualidade. Interna: 150–200 mm/s. Travel: 300–500 mm/s'),
    I('travel-lines.png',          'Visualização de linhas de travel no preview',   'Viagens longas = oportunidade de otimização. Arrange objects para minimizar travels entre peças'),
    I('ers-printspeed.png',        'ERS limita velocidade pelo MVS real',           'A velocidade máxima real é limitada pelo MVS: se o hotend não consegue fundir rápido, ela cai'),
    I('apa-setup-result-speed.png','APA — resultado de velocidade adaptativa',      'Adaptive Pressure Advance ajusta o PA dinamicamente conforme a velocidade muda ao longo da peça'),
    I('jd_printer_jerk_limitation.png','Limitação de Jerk na impressora',           'O Jerk (aceleração instantânea) limita a velocidade de cornering — ajuste no perfil de impressora'),
  ],

  'velocidade-aceleracao/perfis-velocidade-material': [
    I('apa-profile.png',           'Perfil APA — Adaptive Pressure Advance',        'O APA adapta o PA em tempo real conforme a velocidade muda — elimina blobs e underextrusion'),
    I('apa-test.png',              'Teste de APA — configuração',                   'O teste de APA imprime uma peça com diferentes velocidades para calibrar a curva de adaptação'),
    I('apa-test210.png',           'Resultado do teste APA a 210°C',                'Cada temperatura e material tem uma curva APA diferente — calibre para cada combinação nova'),
    I('apa-material-config.png',   'APA configurado no perfil de material',         'A curva APA fica salva no perfil de filamento — cada material tem sua própria curva de adaptação'),
    I('apa-setup-result-acceleration-jerk.png','Resultado APA com aceleração e jerk', 'APA calibrado: acelerações suaves, zero blob nas quinas, qualidade uniforme em toda a peça'),
    I('real-speed-test.jpg',       'Velocidade otimizada por material',             'PLA: até 300 mm/s com Input Shaper. PETG: 150–200 mm/s. ABS: 100–150 mm/s para evitar warping'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 21 — Calibração Completa (Wiki)
  ═══════════════════════════════════════════════════════════ */
  'calibracao-wiki/protocolo-calibracao': [
    I('calibration.png',           'Menu de Calibração — ponto de partida',         'O menu Calibrate centraliza todos os testes: comece sempre pela temperatura antes de qualquer outro'),
    I('temp-tower_test_menu.png',  'Etapa 1 — Temperature Tower',                   'Temperatura correta é a base de tudo — ela afeta flow, PA, retração e qualidade superficial'),
    I('real-temp-tower-print.jpg', 'Torre de temperatura impressa — análise',       'Identifique o bloco com pontes mais limpas + overhangs firmes + superfície mais brilhante'),
    I('mvf_gui_flow.png',          'Etapa 2 — Max Volumetric Speed',                'MVS define o limite superior de velocidade — excedê-lo causa underextrusion em alta velocidade'),
    I('flowcalibration-guide.png', 'Etapa 3 — Flow Rate com paquímetro',            'Medir a parede com paquímetro e ajustar o Flow Ratio garante extrusão precisa e dimensões corretas'),
    I('pa-lines.png',              'Etapa 4 — Pressure Advance',                    'Com temperatura e flow corretos, calibre o PA — elimina blobs nos cantos e início de linhas'),
    I('retraction_test_menu.png',  'Etapa 5 — Retraction Tower',                    'A retração mínima que elimina o stringing sem causar underextrusion no reinício da linha'),
    I('IS_freq_menu.png',          'Etapa 6 — Input Shaping',                       'Frequências de ressonância dos eixos X e Y — habilita alta velocidade sem ghosting'),
    I('real-calibration-menu.jpg', 'Painel completo de calibração no OrcaSlicer',   'Todos os testes acessíveis de um só lugar — execute na ordem para resultados consistentes'),
  ],

  'calibracao-wiki/manutencao-calibracao': [
    I('factorian-calibration-029.png','Guia de calibração Factorian',               'Referência visual completa dos valores de calibração e quando recalibrar cada um'),
    I('calibration.png',           'Menu de calibração para revisão periódica',     'Recalibre temperatura e flow quando trocar de lote de filamento (mesmo marca e cor)'),
    I('temp-tower.jpg',            'Temperature Tower de revisão',                  'Temperature pode variar 2–5°C entre lotes do mesmo filamento — verifique sempre'),
    I('flowcalibration-example.png','Flow Rate correto × incorreto',                'Overextrusion acumula e causa problemas dimensionais progressivos — verifique mensalmente'),
    I('retraction_test_measure.png','Medição de retração para verificação',         'Stringing novo sem motivo aparente = verifique temperatura e retração — podem ter derivado'),
    I('vfa_test_menu.png',         'VFA Test — verificação de artefatos de correia','Artefatos verticais finos periódicos = correia solta ou rolamento desgastado — manutenção mecânica'),
    I('jd_second_menu.png',        'Revisão de Junction Deviation após manutenção', 'Após trocar correia ou rolamentos, recalibre JD — a tensão mecânica mudou'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 22 — Configurações de Material
  ═══════════════════════════════════════════════════════════ */
  'configuracoes-material/perfil-filamento': [
    I('filament-preset.png',       'Perfil de filamento completo',                  'O perfil de filamento contém: temperatura, fan, retração, MVS e propriedades específicas do material'),
    I('real-filament-profile.jpg', 'Configurações de filamento no OrcaSlicer',      'Cada parâmetro do perfil afeta a qualidade — não use perfis genéricos, calibre um por material'),
    I('bed_type_material_temperature.png','Temperatura de mesa por superfície',     'PEI liso, PEI texturado, vidro e PEX têm temperaturas diferentes para o mesmo material'),
    I('mvf_material_settings.png', 'Max Volumetric Speed no perfil de material',    'O MVS limita o fluxo — defina-o no perfil para que o OrcaSlicer não exceda a capacidade do hotend'),
    I('mvf_measurement_point.jpg', 'Ponto de medição do MVS real',                 'O MVS real é encontrado aumentando a velocidade até o primeiro underextrusion aparecer'),
    I('mvf_gui_flow.png',          'Interface do teste de MVS',                     'O OrcaSlicer gera automaticamente o teste de MVS — ajuste e salve no perfil de filamento'),
  ],

  'configuracoes-material/materiais-especiais': [
    I('Chamber-Temperature-Control-Material.png','Câmara quente para materiais técnicos','ABS, PA, PC e compostos exigem câmara fechada — temperatura ambiente alta evita warping e cracking'),
    I('FilamentShrinkageCompensation.png','Compensação de encolhimento por material', 'Cada material encolhe diferente: ABS ~0.8%, PA12 ~1.5%, PC ~0.6% — configure no perfil'),
    I('real-print-layers.jpg',     'Impressão de material técnico',                 'TPU, PA e compostos com fibra exigem configurações muito específicas de temperatura e velocidade'),
    I('filament_for_features.png', 'Filamento diferente por feature',               'Em multicolor/multi-material, use materiais diferentes para features específicas da peça'),
    I('real-benchy-highquality.jpg','Resultado com material e perfil corretos',     'Com perfil calibrado: mesmo material exótico entrega acabamento e precisão profissional'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 23 — Configurações do Extrusor
  ═══════════════════════════════════════════════════════════ */
  'configuracoes-extrusor/retracao-avancada': [
    I('retraction_test_menu.png',  'Menu de teste de retração',                     'Direct Drive: 0–3 mm. Bowden: 3–8 mm. Velocidade: 30–60 mm/s. Comece pelo meio da faixa'),
    I('retraction_test_print.jpg', 'Torres de retração comparadas',                 'Identifique o menor valor que elimina o stringing — retração excessiva causa jamming'),
    I('retraction_test_measure.png','Medir o stringing nas seções da torre',        'Use luz lateral para revelar fios finos entre as torres — inspecione cada seção'),
    I('real-retraction-tower.jpg', 'Torre de retração real em PETG',                'PETG tem stringing inerente — fios muito finos são normais, fios grossos indicam mais retração'),
    I('apa-expected-results.jpg',  'Resultados esperados com APA calibrado',        'Com APA ativo a retração se ajusta automaticamente à velocidade — menos tuning manual'),
    I('pa-tower-measure.jpg',      'Medir tower de PA para complementar retração',  'PA e retração trabalham juntos: PA lida com pressão, retração com viagens — calibre os dois'),
  ],

  'configuracoes-extrusor/zhop-motion-ability': [
    I('real-slicer-preview.jpg',   'Preview de Z-hop animado no OrcaSlicer',        'Z-hop eleva o bico durante viagens para não arrastar sobre a peça impressa'),
    I('travel-lines.png',          'Linhas de travel com e sem Z-hop',              'Z-hop evita collisions mas adiciona tempo às viagens — use só quando necessário'),
    I('avoid-crossing-walls.png',  'Avoid Crossing Walls — alternativa ao Z-hop',  'Avoid Crossing Walls rotea o travel pelo interior da peça — evita stringing sem Z-hop'),
    I('process-others.png',        'Configurações avançadas de movimento',          'Z-hop height, Z-hop threshold e travel lift — configurações na aba Others do processo'),
    I('jd_second_menu.png',        'Junction Deviation — controle de cornering',    'JD controla a velocidade nas mudanças de direção — afeta qualidade das quinas e tempo total'),
    I('apa-setup-result-acceleration-jerk.png','Resultado de aceleração otimizada', 'Com JD + IS + APA calibrados: aceleração máxima sem artefatos nas quinas ou paredes'),
  ],

  /* ═══════════════════════════════════════════════════════════
     MÓDULO 24 — Ironing, Bridges e Fuzzy Skin
  ═══════════════════════════════════════════════════════════ */
  'ironing-superficie/ironing-detalhado': [
    I('ironing.png',               'Ironing — visão geral do painel',               'O ironing reimprime a superfície superior com fluxo mínimo (5–15%) para alisar as linhas'),
    I('ironing-top-surfaces.png',  'Ironing em Top Surfaces (padrão)',              'Aplica ironing em todas as superfícies superiores horizontais da peça — o modo mais usado'),
    I('ironing-topmost-surface.png','Ironing só na superfície mais alta',           'Mais rápido: apenas a camada final recebe o tratamento — ideal para peças com uma face plana'),
    I('ironing-all-solid-layers.png','Ironing em todas as camadas sólidas',         'Mais lento e completo: todas as camadas sólidas internas também recebem ironing'),
    I('ironing-inset.png',         'Ironing Inset — afastamento da borda',          'O inset afasta o ironing da borda — evita excesso de material que causa arredondamento das quinas'),
    I('real-ironing-surface.jpg',  'Antes e depois do ironing — diferença real',    'A diferença é clara: esquerda com linhas FDM visíveis, direita com superfície quase polida'),
  ],

  'ironing-superficie/bridges-overhangs-fuzzy': [
    I('bridge-angle-0.png',        'Bridge — ângulo padrão (0°)',                   'A ponte padrão cruza o vão em linha reta — o OrcaSlicer detecta automaticamente a direção'),
    I('bridge-angle-2.png',        'Bridge com ângulo ajustado',                    'Ajuste o ângulo para minimizar o comprimento de cada linha suspensa no ar'),
    I('bridge-angle-8.png',        'Bridge com ângulo 8° — comparação',             'Pequenas variações de ângulo podem fazer grande diferença em vãos irregulares'),
    I('thick-bridges.png',         'Thick Bridges — pontes mais espessas',          'Pontes mais espessas oferecem melhor sustentação mas requerem cooling mais forte'),
    I('real-bridge-test.jpg',      'Teste de bridge impresso — vão limpo',          'Uma boa bridge: sem sagging, linhas paralelas tensas, superfície lisa na parte inferior'),
    I('Fuzzy-skin-classic.png',    'Fuzzy Skin Classic — textura rugosa',           'A textura clássica esconde marcas de camada e imperfeições com aparência artesanal'),
    I('Fuzzy-skin-voronoi.png',    'Fuzzy Skin Voronoi — células irregulares',      'Voronoi cria um padrão orgânico complexo — ideal para produtos decorativos premium'),
    I('Fuzzy-skin-ripple-example.jpg','Resultado real de Fuzzy Skin ripple',        'Vaso impresso com ripple: textura de ondas naturais sem nenhum pós-processamento'),
    I('real-fuzzy-skin.jpg',       'Peça com Fuzzy Skin — resultado final',         'PLA matte preto com fuzzy skin: acabamento que compete com técnicas de pós-processamento'),
  ],
}
