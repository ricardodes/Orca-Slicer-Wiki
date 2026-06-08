import { ModuleGrid } from '@/components/module-grid'
import { ProgressoGlobal } from '@/components/progresso-global'
import { modulos, TOTAL_LICOES } from '@/lib/course'
import { BookOpen, Zap, Trophy } from 'lucide-react'

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary mb-4">
                <Zap className="h-3 w-3" />
                Curso Completo
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
                OrcaSlicer
                <br />
                <span className="text-primary">Avançado</span>
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Do básico ao especialista em impressão 3D. {modulos.length} módulos, {TOTAL_LICOES} aulas
                com técnicas profissionais, calibração completa e estudos de caso reais.
              </p>
            </div>
            <div className="sm:text-right shrink-0">
              <div className="flex sm:justify-end gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{modulos.length}</div>
                  <div className="text-xs text-muted-foreground">Módulos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{TOTAL_LICOES}</div>
                  <div className="text-xs text-muted-foreground">Aulas</div>
                </div>
              </div>
              <div className="w-full sm:w-64">
                <p className="text-xs text-muted-foreground mb-2">Seu progresso</p>
                <ProgressoGlobal />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Conteúdo completo</div>
                <div className="text-xs text-muted-foreground">Do básico ao especialista</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-chart-1/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-chart-1" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Exercícios práticos</div>
                <div className="text-xs text-muted-foreground">Aplique cada conceito</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-chart-2/20 flex items-center justify-center">
                <Trophy className="h-4 w-4 text-chart-2" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Progresso salvo</div>
                <div className="text-xs text-muted-foreground">Continua de onde parou</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-lg font-semibold text-foreground mb-6">Todos os Módulos</h2>
        <ModuleGrid />
      </div>
    </div>
  )
}
