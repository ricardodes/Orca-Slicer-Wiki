import { Link, useParams } from 'wouter'
import { getModulo, getLicaoId } from '@/lib/course'
import { useProgresso } from '@/hooks/use-progresso'
import { BadgeNivel } from '@/components/badge-nivel'
import { cn } from '@/lib/utils'
import { CheckCircle2, Circle, Clock, ChevronRight, ArrowLeft } from 'lucide-react'

export function ModuloPage() {
  const params = useParams<{ slug: string }>()
  const modulo = getModulo(params.slug)
  const { estaConcluida } = useProgresso()

  if (!modulo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-muted-foreground">Módulo não encontrado.</p>
        <Link href="/" className="text-primary hover:underline text-sm">
          Voltar ao início
        </Link>
      </div>
    )
  }

  const concluidas = modulo.licoes.filter((l) =>
    estaConcluida(getLicaoId(modulo.slug, l.slug)),
  ).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/30">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" />
            Todos os módulos
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-muted-foreground">
              Módulo {String(modulo.numero).padStart(2, '0')}
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-xs text-muted-foreground">
              {concluidas}/{modulo.licoes.length} aulas concluídas
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {modulo.titulo}
          </h1>
          <p className="text-muted-foreground mb-4">{modulo.subtitulo}</p>
          <p className="text-sm text-foreground/80">{modulo.descricao}</p>

          {/* Progress */}
          <div className="mt-6 h-1.5 w-full max-w-xs bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{
                width: `${modulo.licoes.length > 0 ? (concluidas / modulo.licoes.length) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-3">
          {modulo.licoes.map((licao, idx) => {
            const id = getLicaoId(modulo.slug, licao.slug)
            const concluida = estaConcluida(id)

            return (
              <Link
                key={licao.slug}
                href={`/modulo/${modulo.slug}/${licao.slug}`}
                className={cn(
                  'flex items-center gap-4 rounded-xl border bg-card p-4 transition-all',
                  'hover:border-primary/40 hover:bg-card/80 group',
                  concluida && 'border-chart-2/20',
                )}
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  {concluida ? (
                    <CheckCircle2 className="h-4 w-4 text-chart-2" />
                  ) : (
                    <span className="text-xs font-mono text-muted-foreground">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {licao.titulo}
                    </h3>
                    <BadgeNivel nivel={licao.nivel} />
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{licao.resumo}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{licao.duracao}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
