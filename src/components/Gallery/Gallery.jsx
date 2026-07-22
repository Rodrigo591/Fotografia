import { useMemo, useState } from 'react'
import { categories, sessions } from '../../data/sessions'
import GalleryItem from '../GalleryItem/GalleryItem'
import './Gallery.css'

export default function Gallery() {
  const [active, setActive] = useState('Todos')

  const filtered = useMemo(
    () => (active === 'Todos' ? sessions : sessions.filter((s) => s.type === active)),
    [active]
  )

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="gallery__header">
          <div>
            <span className="eyebrow">Galeria</span>
            <h2 className="gallery__title">Pessoas que já fotografei</h2>
            <p className="gallery__hint">Clique em um ensaio para ver a página completa.</p>
          </div>
          <div className="gallery__filters" role="tablist" aria-label="Filtrar por tipo de ensaio">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`gallery__filter ${active === cat ? 'gallery__filter--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery__grid">
          {filtered.map((session, index) => (
            <GalleryItem key={session.id} session={session} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
