import { useScrollToHash } from '../../hooks/useScrollToHash'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/Gallery/Gallery'
import TrailDivider from '../../components/TrailDivider/TrailDivider'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  useScrollToHash()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <TrailDivider label="continue a trilha" />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
