import { useReveal } from '../../hooks/useReveal'
import './SessionPhoto.css'

export default function SessionPhoto({ photo, index }) {
  const [ref, visible] = useReveal()

  return (
    <figure
      ref={ref}
      className={`session-photo ${visible ? 'session-photo--visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="session-photo__frame" style={{ background: photo.gradient }} />
      <figcaption className="session-photo__exif">
      </figcaption>
    </figure>
  )
}
