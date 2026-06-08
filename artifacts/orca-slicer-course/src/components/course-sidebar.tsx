import { Link, useLocation } from 'wouter'
import { useProgresso } from '@/hooks/use-progresso'
import { modulos, getLicaoId } from '@/lib/course'
import type { Modulo } from '@/lib/types'
import { cn } from '@/lib/utils'
import { CheckCircle2, Circle, ChevronDown, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'

type Props = {
  moduloAtual?: Modulo
  onClose?: () => void
}

export function CourseSidebar({ moduloAtual, onClose }: Props) {
  const [location] = useLocation()
  const { estaConcluida } = useProgresso()
  const [abertos, setAbertos] = useState<Set<string>>(
    new Set(moduloAtual ? [moduloAtual.slug] : []),
  )

  const toggleAberto = (slug: string) => {
    setAbertos((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return next
    })
  }

  return (
    <aside className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border shrink-0">
        <Link href="/" className="flex items-center gap-2 group" onClick={onClose}>
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
            OS
          </div>
          <span className="text-sm font-semibold text-sidebar-foreground group-hover:text-primary transition-colors">
            OrcaSlicer
          </span>
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded hover:bg-muted text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {modulos.map((modulo) => {
          const aberto = abertos.has(modulo.slug)
          const ativo = moduloAtual?.slug === modulo.slug

          const concluidas = modulo.licoes.filter((l) =>
            estaConcluida(getLicaoId(modulo.slug, l.slug)),
          ).length

          return (
            <div key={modulo.slug}>
              <button
                onClick={() => toggleAberto(modulo.slug)}
                className={cn(
                  'w-full flex items-center gap-2 px-4 py-2.5 text-left transition-colors',
                  'hover:bg-muted/50',
                  ativo && 'bg-primary/10',
                )}
              >
                <span className="text-xs font-mono text-muted-foreground w-5 shrink-0">
                  {String(modulo.numero).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'flex-1 text-xs font-medium leading-snug',
                    ativo ? 'text-primary' : 'text-sidebar-foreground',
                  )}
                >
                  {modulo.titulo}
                </span>
                <div className="flex items-center gap-1 shrink-0">
                  {concluidas > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {concluidas}/{modulo.licoes.length}
                    </span>
                  )}
                  {aberto ? (
                    <ChevronDown className="h-3 w-3 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  )}
                </div>
              </button>

              {aberto && (
                <div className="bg-muted/20">
                  {modulo.licoes.map((licao) => {
                    const id = getLicaoId(modulo.slug, licao.slug)
                    const href = `/modulo/${modulo.slug}/${licao.slug}`
                    const ativaLicao = location === href
                    const concluida = estaConcluida(id)

                    return (
                      <Link
                        key={licao.slug}
                        href={href}
                        onClick={onClose}
                        className={cn(
                          'flex items-center gap-2 pl-9 pr-4 py-2 text-xs transition-colors',
                          'hover:bg-muted/50 hover:text-primary',
                          ativaLicao
                            ? 'bg-primary/15 text-primary font-medium'
                            : 'text-muted-foreground',
                        )}
                      >
                        {concluida ? (
                          <CheckCircle2 className="h-3 w-3 text-chart-2 shrink-0" />
                        ) : (
                          <Circle className="h-3 w-3 shrink-0" />
                        )}
                        <span className="leading-snug">{licao.titulo}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
