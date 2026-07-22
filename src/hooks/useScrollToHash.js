import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Faz a página rolar até a seção correspondente ao hash da URL (#galeria,
// #sobre, #contato) sempre que ele mudar — inclusive quando o link é
// clicado a partir de outra página (ex: /ensaio/:slug) e o React Router
// já está no "/", caso em que o navegador não rola sozinho.
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const el = document.querySelector(location.hash)
    if (!el) return

    const id = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => cancelAnimationFrame(id)
  }, [location])
}
