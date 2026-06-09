import { useProgresso } from '@/hooks/use-progresso'
import { getLicaoId } from '@/lib/course'
import type { Licao, Modulo } from '@/lib/types'
import { wikiImagensPorAula } from '@/lib/wiki-images'
import { BadgeNivel } from './badge-nivel'
import { cn } from '@/lib/utils'
import {
  CheckCircle2, Clock, BookOpen, Zap, Target, HelpCircle,
  ChevronRight, ChevronLeft, BarChart3, Lightbulb, AlertTriangle, Images,
} from 'lucide-react'
import { Link } from 'wouter'
import { useState } from 'react'

type Props = {
  modulo: Modulo
  licao: Licao
  licaoAnterior?: { slug: string; titulo: string }
  licaoProxima?: { slug: string; titulo: string }
}

function ImagemLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export function LessonView({ modulo, licao, licaoAnterior, licaoProxima }: Props) {
  const { alternar, estaConcluida } = useProgresso()
  const id = getLicaoId(modulo.slug, licao.slug)
  const concluida = estaConcluida(id)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const imagens = wikiImagensPorAula[id] ?? []

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {lightbox && (
        <ImagemLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Link href="/" className="hover:text-primary transition-colors">Início</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/modulo/${modulo.slug}`} className="hover:text-primary transition-colors">
            Módulo {modulo.numero}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{licao.titulo}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <BadgeNivel nivel={licao.nivel} />
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{licao.duracao}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          {licao.titulo}
        </h1>
        <p className="text-muted-foreground">{licao.resumo}</p>
      </header>

      {/* Intro */}
      {licao.intro.length > 0 && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mb-8">
          {licao.intro.map((p, i) => (
            <p key={i} className={cn('text-sm leading-relaxed text-foreground', i > 0 && 'mt-3')}>
              {p}
            </p>
          ))}
        </div>
      )}

      {/* Galeria de imagens da aula */}
      {imagens.length > 0 && (
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Images className="h-4 w-4 text-primary" />
            Imagens da Aula
          </h3>
          {imagens.length === 1 ? (
            <button
              onClick={() => setLightbox({ src: imagens[0].src, alt: imagens[0].alt })}
              className="group w-full rounded-xl overflow-hidden border border-border hover:border-primary/60 transition-all block text-left"
              title="Clique para ampliar"
            >
              <div className="w-full bg-muted/40 overflow-hidden" style={{ maxHeight: '420px' }}>
                <img
                  src={imagens[0].src}
                  alt={imagens[0].alt}
                  className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ maxHeight: '420px' }}
                />
              </div>
              {imagens[0].legenda && (
                <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/30 border-t border-border">
                  <Images className="h-3.5 w-3.5 text-primary shrink-0" />
                  <p className="text-xs text-muted-foreground leading-snug">{imagens[0].legenda}</p>
                </div>
              )}
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {imagens.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                  className="group rounded-xl overflow-hidden border border-border hover:border-primary/60 transition-all block text-left"
                  title="Clique para ampliar"
                >
                  <div className="w-full bg-muted/40 overflow-hidden aspect-video">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  {img.legenda && (
                    <div className="px-3 py-2 bg-muted/30 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{img.legenda}</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sections */}
      {licao.secoes.map((secao, i) => {
        return (
          <section key={i} className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              {secao.titulo}
            </h2>
            <ul className="space-y-3">
              {secao.conteudo.map((item, j) => {
                const [label, ...rest] = item.split(':')
                const hasLabel = rest.length > 0 && label.length < 40
                return (
                  <li key={j} className="flex gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      {hasLabel ? (
                        <>
                          <span className="font-medium text-foreground">{label}:</span>
                          {rest.join(':')}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}

      {/* Tables */}
      {licao.tabelas && licao.tabelas.length > 0 && (
        <div className="mb-8 space-y-6">
          {licao.tabelas.map((tabela, i) => (
            <div key={i} className="rounded-xl border border-border overflow-hidden">
              <div className="px-4 py-3 bg-muted/40 border-b border-border flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{tabela.titulo}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-muted/20">
                      {tabela.colunas.map((col, j) => (
                        <th
                          key={j}
                          className="px-4 py-2.5 text-left font-medium text-muted-foreground border-b border-border"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tabela.linhas.map((linha, j) => (
                      <tr key={j} className="border-b border-border last:border-0 hover:bg-muted/20">
                        {linha.map((cel, k) => (
                          <td
                            key={k}
                            className={cn(
                              'px-4 py-2.5 text-foreground/80',
                              k === 0 && 'font-medium text-foreground',
                            )}
                          >
                            {cel}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Estrutura técnica */}
      {licao.estrutura && (
        <div className="mb-8 rounded-xl border border-border bg-card/50 p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Estrutura Técnica
          </h3>
          <dl className="space-y-3 text-sm">
            {licao.estrutura.oQueFaz && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">O que faz</dt>
                <dd className="text-foreground/90">{licao.estrutura.oQueFaz}</dd>
              </div>
            )}
            {licao.estrutura.comoFunciona && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">Como funciona</dt>
                <dd className="text-foreground/90">{licao.estrutura.comoFunciona}</dd>
              </div>
            )}
            {licao.estrutura.quandoUsar && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">Quando usar</dt>
                <dd className="text-foreground/90">{licao.estrutura.quandoUsar}</dd>
              </div>
            )}
            {licao.estrutura.quandoEvitar && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">Quando evitar</dt>
                <dd className="text-foreground/90">{licao.estrutura.quandoEvitar}</dd>
              </div>
            )}
            {licao.estrutura.impactoResistencia && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">Impacto na resistência</dt>
                <dd className="text-foreground/90">{licao.estrutura.impactoResistencia}</dd>
              </div>
            )}
            {licao.estrutura.impactoQualidade && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">Impacto na qualidade</dt>
                <dd className="text-foreground/90">{licao.estrutura.impactoQualidade}</dd>
              </div>
            )}
            {licao.estrutura.impactoTempo && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">Impacto no tempo</dt>
                <dd className="text-foreground/90">{licao.estrutura.impactoTempo}</dd>
              </div>
            )}
            {licao.estrutura.impactoFilamento && (
              <div>
                <dt className="font-medium text-muted-foreground text-xs uppercase tracking-wider mb-1">Impacto no filamento</dt>
                <dd className="text-foreground/90">{licao.estrutura.impactoFilamento}</dd>
              </div>
            )}
          </dl>
          {(licao.estrutura.errosComuns || licao.estrutura.casosReais) && (
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              {licao.estrutura.errosComuns && licao.estrutura.errosComuns.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3 text-destructive" />
                    Erros comuns
                  </p>
                  <ul className="space-y-1">
                    {licao.estrutura.errosComuns.map((e, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-destructive shrink-0">✕</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                  {licao.estrutura.comoCorrigir && (
                    <ul className="mt-2 space-y-1">
                      {licao.estrutura.comoCorrigir.map((c, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex gap-2">
                          <span className="text-chart-2 shrink-0">✓</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {licao.estrutura.casosReais && licao.estrutura.casosReais.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Lightbulb className="h-3 w-3 text-chart-1" />
                    Casos reais
                  </p>
                  <ul className="space-y-1">
                    {licao.estrutura.casosReais.map((c, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-chart-1 shrink-0">→</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Exercícios */}
      {licao.exercicios && licao.exercicios.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-chart-1" />
            Exercícios Práticos
          </h3>
          <ol className="space-y-2">
            {licao.exercicios.map((ex, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full bg-chart-1/20 text-chart-1 flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-foreground/90 leading-relaxed pt-0.5">{ex}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Testes */}
      {licao.testes && licao.testes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-chart-3" />
            Perguntas de Revisão
          </h3>
          <ul className="space-y-2">
            {licao.testes.map((t, i) => (
              <li
                key={i}
                className="rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground/90"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desafio */}
      {licao.desafio && (
        <div className="mb-8 rounded-xl border border-primary/30 bg-primary/10 p-5">
          <h3 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
            <Target className="h-4 w-4" />
            Desafio Final
          </h3>
          <p className="text-sm text-foreground/90 leading-relaxed">{licao.desafio}</p>
        </div>
      )}

      {/* FAQ */}
      {licao.perguntas && licao.perguntas.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-chart-4" />
            Perguntas Frequentes
          </h3>
          <div className="space-y-3">
            {licao.perguntas.map((pq, i) => (
              <details key={i} className="rounded-lg border border-border bg-card/50 group">
                <summary className="px-4 py-3 text-sm font-medium cursor-pointer select-none hover:text-primary transition-colors list-none flex items-center justify-between">
                  {pq.pergunta}
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-2" />
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-foreground/80 leading-relaxed border-t border-border">
                  {pq.resposta}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => alternar(id)}
          className={cn(
            'flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all',
            concluida
              ? 'bg-chart-2/20 text-chart-2 hover:bg-chart-2/30 border border-chart-2/30'
              : 'bg-primary text-primary-foreground hover:bg-primary/90',
          )}
        >
          <CheckCircle2 className="h-4 w-4" />
          {concluida ? 'Marcar como pendente' : 'Marcar como concluída'}
        </button>

        <div className="flex items-center gap-2">
          {licaoAnterior && (
            <Link
              href={`/modulo/${modulo.slug}/${licaoAnterior.slug}`}
              className="flex items-center gap-1 rounded-lg border border-border px-4 py-2.5 text-xs text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            >
              <ChevronLeft className="h-3 w-3" />
              Anterior
            </Link>
          )}
          {licaoProxima && (
            <Link
              href={`/modulo/${modulo.slug}/${licaoProxima.slug}`}
              className="flex items-center gap-1 rounded-lg border border-border px-4 py-2.5 text-xs text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            >
              Próxima
              <ChevronRight className="h-3 w-3" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
