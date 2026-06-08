export type LicaoSecao = {
  titulo: string
  conteudo: string[]
}

export type TabelaComparativa = {
  titulo: string
  colunas: string[]
  linhas: string[][]
}

export type EstruturaTecnica = {
  oQueFaz?: string
  comoFunciona?: string
  quandoUsar?: string
  quandoEvitar?: string
  impactoResistencia?: string
  impactoQualidade?: string
  impactoTempo?: string
  impactoFilamento?: string
  errosComuns?: string[]
  comoCorrigir?: string[]
  casosReais?: string[]
}

export type Licao = {
  slug: string
  titulo: string
  resumo: string
  duracao: string
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Especialista'
  intro: string[]
  secoes: LicaoSecao[]
  estrutura?: EstruturaTecnica
  tabelas?: TabelaComparativa[]
  exercicios?: string[]
  testes?: string[]
  desafio?: string
  perguntas?: { pergunta: string; resposta: string }[]
}

export type Modulo = {
  slug: string
  numero: number
  titulo: string
  subtitulo: string
  descricao: string
  licoes: Licao[]
}
