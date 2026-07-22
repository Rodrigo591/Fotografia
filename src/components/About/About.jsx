import { useReveal } from '../../hooks/useReveal'
import './About.css'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="sobre" className="about">
      <div className="container about__inner" ref={ref}>
        <div className={`about__portrait ${visible ? 'about__portrait--visible' : ''}`}>
          <span className="about__portrait-tag">35mm · luz natural</span>
        </div>

        <div className={`about__text ${visible ? 'about__text--visible' : ''}`}>
          <span className="eyebrow">Sobre</span>
          <h2>Andar devagar, fotografar rápido.</h2>
          <p>
            Sou fotógrafa e passo mais tempo estradas afora do que em estúdio.
            Meu trabalho nasce da vontade de registrar o que só existe fora de
            casa: a luz que atravessa a copa das árvores, o sal no ar do
            litoral e a poeira que uma estrada de terra levanta atrás do carro.
          </p>
          <p>
            Cada imagem carrega o lugar, a hora e o clima em que foi feita —
            por isso publico os dados técnicos junto de cada foto, como um
            diário de viagem.
          </p>
          <blockquote>
            "Fotografar ao ar livre é aceitar que a luz manda, não eu."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
