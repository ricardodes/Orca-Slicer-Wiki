import { useParams, Link } from 'wouter'
import { getModulo, getLicao } from '@/lib/course'
import { LessonView } from '@/components/lesson-view'
import { CourseSidebar } from '@/components/course-sidebar'
import { ProgressoGlobal } from '@/components/progresso-global'
import { Menu, X, Home } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function LicaoPage() {
  const params = useParams<{ moduloSlug: string; licaoSlug: string }>()
  const [sidebarAberta, setSidebarAberta] = useState(false)

  const modulo = getModulo(params.moduloSlug)
  const licao = modulo ? getLicao(params.moduloSlug, params.licaoSlug) : undefined

  if (!modulo || !licao) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-muted-foreground">Aula não encontrada.</p>
        <Link href="/" className="text-primary hover:underline text-sm">
          Voltar ao início
        </Link>
      </div>
    )
  }

  const idxLicao = modulo.licoes.findIndex((l) => l.slug === licao.slug)
  const licaoAnterior = idxLicao > 0 ? modulo.licoes[idxLicao - 1] : undefined
  const licaoProxima =
    idxLicao < modulo.licoes.length - 1 ? modulo.licoes[idxLicao + 1] : undefined

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar — desktop */}
      <div className="hidden lg:flex lg:w-64 xl:w-72 shrink-0">
        <CourseSidebar moduloAtual={modulo} />
      </div>

      {/* Sidebar — mobile overlay */}
      {sidebarAberta && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarAberta(false)}
          />
          <div className="relative z-10 w-72 flex flex-col">
            <CourseSidebar
              moduloAtual={modulo}
              onClose={() => setSidebarAberta(false)}
            />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card/50 shrink-0">
          <button
            onClick={() => setSidebarAberta(true)}
            className="lg:hidden p-1.5 rounded-md hover:bg-muted text-muted-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Home className="h-3.5 w-3.5" />
            Início
          </Link>

          <span className="hidden sm:block text-muted-foreground/40 text-xs">·</span>

          <span className="text-xs text-muted-foreground truncate">
            <span className="text-foreground font-medium">{modulo.titulo}</span>
            <span className="mx-1 opacity-40">/</span>
            {licao.titulo}
          </span>

          <div className="ml-auto hidden sm:block w-48">
            <ProgressoGlobal />
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">
          <LessonView
            modulo={modulo}
            licao={licao}
            licaoAnterior={licaoAnterior}
            licaoProxima={licaoProxima}
          />
        </main>
      </div>
    </div>
  )
}
