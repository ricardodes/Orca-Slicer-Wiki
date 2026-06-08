import { Link } from 'wouter'
import { useProgresso } from '@/hooks/use-progresso'
import { modulos, getLicaoId } from '@/lib/course'
import { cn } from '@/lib/utils'
import { CheckCircle2, Circle, BookOpen, ChevronRight } from 'lucide-react'

const nivelCor: Record<string, string> = {
  Iniciante: 'text-chart-2',
  Intermediário: 'text-chart-1',
  Avançado: 'text-primary',
  Especialista: 'text-chart-5',
}

export function ModuleGrid() {
  const { estaConcluida } = useProgresso()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {modulos.map((modulo) => {
        const concluidas = modulo.licoes.filter((l) =>
          estaConcluida(getLicaoId(modulo.slug, l.slug)),
        ).length
        const total = modulo.licoes.length
        const pct = total > 0 ? Math.round((concluidas / total) * 100) : 0
        const concluido = concluidas === total

        return (
          <Link
            key={modulo.slug}
            href={`/modulo/${modulo.slug}`}
            className={cn(
              'group block rounded-xl border bg-card p-5 transition-all duration-200',
              'hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5',
              concluido && 'border-chart-2/30',
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-mono text-muted-foreground">
                Módulo {String(modulo.numero).padStart(2, '0')}
              </span>
              {concluido ? (
                <CheckCircle2 className="h-4 w-4 text-chart-2 shrink-0" />
              ) : concluidas > 0 ? (
                <Circle className="h-4 w-4 text-primary shrink-0" />
              ) : null}
            </div>

            <h3 className="font-semibold text-foreground mb-1 text-sm leading-snug group-hover:text-primary transition-colors">
              {modulo.titulo}
            </h3>
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {modulo.subtitulo}
            </p>

            <div className="space-y-2">
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-700',
                    concluido ? 'bg-chart-2' : 'bg-primary',
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <BookOpen className="h-3 w-3" />
                  <span>{total} aulas</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>{concluidas > 0 ? `${concluidas}/${total}` : 'Começar'}</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
