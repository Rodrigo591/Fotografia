import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;

  const nome = form.name.value;
  const email = form.email.value;
  const mensagem = form.message.value;

  const texto = encodeURIComponent(
    `Olá! Meu nome é ${nome}.

  E-mail: ${email}

  Mensagem:
  ${mensagem}`
  );

  window.open(
    `https://wa.me/5521951012799?text=${texto}`,
    "_blank"
  );

  
  form.reset();
}

  return (
    <section id="contato" className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span>Contato</span>
          <h2>Vamos fotografar algo ao ar livre?</h2>
          <p>
            Aberta para ensaios em trilha, editoriais de viagem e parcerias com
            marcas outdoor. Responder em até 2 dias úteis.
          </p>
          <ul className="contact__links">
            <li>
              <span>E-mail</span>
              <a href="mailto:AnaAragao2005@gmail.com">AnaAragao2005@gmail.com</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href="https://www.instagram.com/anaaragaofotografias/" target="_blank">@anaaragaofotografias</a>
            </li>
            <li>
              <span>Baseada em</span>
              <a href="#">Maricá, RJ</a>
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
