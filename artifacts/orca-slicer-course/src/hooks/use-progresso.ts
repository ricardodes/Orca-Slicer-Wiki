import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'orca-progresso-v1'

function load(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

function save(ids: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
  } catch {}
}

export function useProgresso() {
  const [concluidas, setConcluidas] = useState<Set<string>>(new Set())
  const [carregado, setCarregado] = useState(false)

  useEffect(() => {
    setConcluidas(load())
    setCarregado(true)
  }, [])

  const alternar = useCallback((id: string) => {
    setConcluidas((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      save(next)
      return next
    })
  }, [])

  const estaConcluida = useCallback(
    (id: string) => concluidas.has(id),
    [concluidas],
  )

  const totalConcluidas = concluidas.size

  return { concluidas, alternar, estaConcluida, totalConcluidas, carregado }
}
