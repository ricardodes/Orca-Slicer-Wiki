import { useProgresso } from '@/hooks/use-progresso'
import { TOTAL_LICOES } from '@/lib/course'

export function ProgressoGlobal() {
  const { totalConcluidas } = useProgresso()
  const pct = Math.round((totalConcluidas / TOTAL_LICOES) * 100)

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden min-w-[80px]">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {totalConcluidas}/{TOTAL_LICOES} aulas
      </span>
    </div>
  )
}
