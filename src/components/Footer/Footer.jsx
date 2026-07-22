import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Mata &amp; Estrada</span>
        <span>Fotografia que respira ao ar livre.</span>
      </div>
    </footer>
  )
}
