import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Este formulário é apenas visual. Conecte a um serviço de e-mail
    // (Formspree, Resend, etc.) ou a um backend próprio para receber envios.
    setSent(true)
  }

  return (
    <section id="contato" className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="eyebrow">Contato</span>
          <h2>Vamos fotografar algo ao ar livre?</h2>
          <p>
            Aberta para ensaios em trilha, editoriais de viagem e parcerias com
            marcas outdoor. Responder em até 2 dias úteis.
          </p>
          <ul className="contact__links">
            <li>
              <span>E-mail</span>
              <a href="mailto:contato@mataeestrada.com">contato@mataeestrada.com</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href="#">@mataeestrada</a>
            </li>
            <li>
              <span>Baseada em</span>
              <a href="#">Florianópolis, SC</a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input type="text" name="name" required placeholder="Seu nome" />
          </label>
          <label>
            E-mail
            <input type="email" name="email" required placeholder="voce@email.com" />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows="4" required placeholder="Conte sobre o projeto..." />
          </label>
          <button type="submit" className="button button--primary">
            {sent ? 'Mensagem enviada' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  )
}
