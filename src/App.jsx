import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sessao from './pages/Sessao/Sessao'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ensaio/:slug" element={<Sessao />} />
    </Routes>
  )
}
