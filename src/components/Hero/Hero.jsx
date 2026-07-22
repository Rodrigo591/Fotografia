import './Hero.css'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__canopy" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="eyebrow">Fotografia autoral</span>
          <h1 className="hero__title">
            Fotografia que
            <br />
            respira ao ar livre.
          </h1>
          <p className="hero__subtitle">
            Retratos, ensaios e editoriais feitos ao ar livre — por quem
            prefere fotografar pessoas com luz natural e sem pressa de
            chegar.
          </p>
          <div className="hero__actions">
            <a href="#galeria" className="button button--primary">
              Ver galeria
            </a>
            <a href="#sobre" className="button button--ghost">
              Conhecer o trabalho
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          {/* Placeholder: troque a <img> abaixo por uma foto real sua,
             em /src/assets/, quando estiver com o projeto localmente. */}
          <div className="hero__portrait-frame">
            <svg
              className="hero__portrait-icon"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="44" r="22" stroke="currentColor" strokeWidth="2.5" />
              <path
                d="M20 108c4-24 20-36 40-36s36 12 40 36"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="hero__portrait-tag">retrato · 85mm</span>
          </div>
        </div>
      </div>

      <a href="#galeria" className="hero__scroll" aria-label="Rolar até a galeria">
        <svg width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="hero__scroll-trail"
            d="M17 1C17 1 2 12 8 24C14 36 30 32 28 44C27 49.5 20 52 17 53"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle className="hero__scroll-dot" cx="17" cy="4" r="2.6" fill="currentColor" />
        </svg>
      </a>
    </section>
  )
}
