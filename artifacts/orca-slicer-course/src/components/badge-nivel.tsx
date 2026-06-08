import { cn } from '@/lib/utils'
import type { Licao } from '@/lib/types'

type Props = { nivel: Licao['nivel']; className?: string }

const cores: Record<Licao['nivel'], string> = {
  Iniciante: 'bg-chart-2/20 text-chart-2 border-chart-2/30',
  Intermediário: 'bg-chart-1/20 text-chart-1 border-chart-1/30',
  Avançado: 'bg-primary/20 text-primary border-primary/30',
  Especialista: 'bg-chart-5/20 text-chart-5 border-chart-5/30',
}

export function BadgeNivel({ nivel, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium',
        cores[nivel],
        className,
      )}
    >
      {nivel}
    </span>
  )
}
