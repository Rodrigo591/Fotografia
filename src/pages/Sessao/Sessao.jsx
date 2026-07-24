import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SessionPhoto from '../../components/SessionPhoto/SessionPhoto'
import { getSessionBySlug } from '../../data/sessions'
import './Sessao.css'

export default function Sessao() {
  const { slug } = useParams()
  const session = getSessionBySlug(slug)

  if (!session) {
    return (
      <>
        <Header />
        <main className="sessao-vazia container">
          <span>Ensaio não encontrado</span>
          <h1>Essa trilha não existe (ainda).</h1>
          <Link to="/#galeria" className="button button--primary">
            Voltar para a galeria
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="sessao">
        <div className="container">
          <Link to="/#galeria" className="sessao__voltar">
            ← Voltar para a galeria
          </Link>

          <div className="sessao__header">
            <div>
              <span>{session.type}</span>
              <h1>{session.name}</h1>
              <p className="sessao__local">{session.local}</p>
            </div>
          </div>

          <div className="sessao__grid">
            {session.photos.map((photo, index) => (
              <SessionPhoto key={photo.id} photo={photo} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
