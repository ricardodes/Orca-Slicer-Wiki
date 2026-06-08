import { modulo01 } from './module-01'
import { modulo02 } from './module-02'
import { modulo03 } from './module-03'
import { modulo04 } from './module-04'
import { modulo05 } from './module-05'
import { modulo06 } from './module-06'
import { modulo07 } from './module-07'
import { modulo08 } from './module-08'
import { modulo09 } from './module-09'
import { modulo10 } from './module-10'
import { modulo11 } from './module-11'
import { modulo12 } from './module-12'
import { modulo13 } from './module-13'
import { modulo14 } from './module-14'
import { modulo15 } from './module-15'
import { modulo16 } from './module-16'
import { modulo17 } from './module-17'
import { modulo18 } from './module-18'
import { modulo19 } from './module-19'
import { modulo20 } from './module-20'
import { modulo21 } from './module-21'
import { modulo22 } from './module-22'
import { modulo23 } from './module-23'
import { modulo24 } from './module-24'
import type { Modulo } from '@/lib/types'

export const modulos: Modulo[] = [
  modulo01, modulo02, modulo03, modulo04, modulo05, modulo06,
  modulo07, modulo08, modulo09, modulo10, modulo11, modulo12,
  modulo13, modulo14, modulo15, modulo16, modulo17, modulo18,
  modulo19, modulo20, modulo21, modulo22, modulo23, modulo24,
]

export function getModulo(slug: string): Modulo | undefined {
  return modulos.find((m) => m.slug === slug)
}

export function getLicao(moduloSlug: string, licaoSlug: string) {
  const modulo = getModulo(moduloSlug)
  if (!modulo) return undefined
  return modulo.licoes.find((l) => l.slug === licaoSlug)
}

export function getLicaoId(moduloSlug: string, licaoSlug: string) {
  return `${moduloSlug}/${licaoSlug}`
}

export const TOTAL_LICOES = modulos.reduce((acc, m) => acc + m.licoes.length, 0)
