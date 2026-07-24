import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import './GalleryItem.css'

export default function GalleryItem({ session, index }) {
  const [ref, visible] = useReveal()

  return (
    <Link
      to={`/ensaio/${session.slug}`}
      ref={ref}
      className={`gallery-item ${visible ? 'gallery-item--visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <figure className="gallery-item__figure">
        <div className="gallery-item__frame" style={{ background: session.gradient }}>
          <span className="gallery-item__category">{session.type}</span>
          <span className="gallery-item__view">Ver ensaio →</span>
        </div>
        <figcaption className="gallery-item__caption">
          <div>
            <h3>{session.name}</h3>
            <p>{session.local}</p>
          </div>
        </figcaption>
      </figure>
    </Link>
  )
}
