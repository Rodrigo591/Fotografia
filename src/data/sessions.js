// Cada "ensaio" representa uma pessoa/sessão fotografada e tem sua própria
// página em /ensaio/[slug]. Substitua "gradient" pelo caminho da foto real
// (ex: "/src/assets/ana-01.jpg") e ajuste os metadados conforme o EXIF real.

export const categories = ['Todos', 'Retrato', 'Editorial', 'Casamento', 'Corporativo', 'Ensaio Externo']

export const sessions = [
  {
    id: 1,
    slug: 'ana-retrato',
    name: 'Ana',
    type: 'Retrato',
    local: 'Estúdio, Florianópolis',
    gradient: 'linear-gradient(155deg, #3c4d2f 0%, #6f8a52 55%, #a8c48a 100%)',
    aperture: 'f/1.8',
    iso: 'ISO 200',
    focal: '85mm',
    photos: [
      { id: 1, gradient: 'linear-gradient(155deg, #3c4d2f 0%, #6f8a52 55%, #a8c48a 100%)', aperture: 'f/1.8', iso: 'ISO 200', focal: '85mm' },
      { id: 2, gradient: 'linear-gradient(155deg, #2c3a22 0%, #6d8a4a 55%, #c4d99f 100%)', aperture: 'f/2', iso: 'ISO 200', focal: '85mm' },
      { id: 3, gradient: 'linear-gradient(155deg, #35442c 0%, #7c9473 55%, #cdd9b8 100%)', aperture: 'f/1.8', iso: 'ISO 320', focal: '50mm' },
      { id: 4, gradient: 'linear-gradient(155deg, #40342b 0%, #8a6a4a 55%, #d7ab7a 100%)', aperture: 'f/2.2', iso: 'ISO 200', focal: '85mm' },
    ],
  },
  {
    id: 2,
    slug: 'joao-editorial',
    name: 'João',
    type: 'Editorial',
    local: 'Centro Histórico, São Francisco do Sul',
    gradient: 'linear-gradient(155deg, #4a3c28 0%, #b3854f 55%, #e6c98a 100%)',
    aperture: 'f/2.8',
    iso: 'ISO 400',
    focal: '35mm',
    photos: [
      { id: 1, gradient: 'linear-gradient(155deg, #4a3c28 0%, #b3854f 55%, #e6c98a 100%)', aperture: 'f/2.8', iso: 'ISO 400', focal: '35mm' },
      { id: 2, gradient: 'linear-gradient(155deg, #5c4a33 0%, #c98a4b 55%, #e8c48f 100%)', aperture: 'f/2.8', iso: 'ISO 320', focal: '35mm' },
      { id: 3, gradient: 'linear-gradient(155deg, #333f24 0%, #7c8f4e 55%, #c9d69b 100%)', aperture: 'f/3.5', iso: 'ISO 400', focal: '24mm' },
    ],
  },
  {
    id: 3,
    slug: 'marina-e-pedro-casamento',
    name: 'Marina & Pedro',
    type: 'Casamento',
    local: 'Praia do Rosa, SC',
    gradient: 'linear-gradient(155deg, #234238 0%, #4d7a6b 55%, #a8c9b8 100%)',
    aperture: 'f/2',
    iso: 'ISO 250',
    focal: '50mm',
    photos: [
      { id: 1, gradient: 'linear-gradient(155deg, #234238 0%, #4d7a6b 55%, #a8c9b8 100%)', aperture: 'f/2', iso: 'ISO 250', focal: '50mm' },
      { id: 2, gradient: 'linear-gradient(155deg, #1f3b33 0%, #3f6f5c 55%, #93bfa4 100%)', aperture: 'f/1.8', iso: 'ISO 320', focal: '85mm' },
      { id: 3, gradient: 'linear-gradient(155deg, #2c3a22 0%, #6d8a4a 55%, #c4d99f 100%)', aperture: 'f/2.5', iso: 'ISO 200', focal: '35mm' },
      { id: 4, gradient: 'linear-gradient(155deg, #35442c 0%, #7c9473 55%, #cdd9b8 100%)', aperture: 'f/2', iso: 'ISO 200', focal: '50mm' },
      { id: 5, gradient: 'linear-gradient(155deg, #3c4d2f 0%, #6f8a52 55%, #a8c48a 100%)', aperture: 'f/1.8', iso: 'ISO 400', focal: '85mm' },
    ],
  },
  {
    id: 4,
    slug: 'equipe-verde-corporativo',
    name: 'Equipe Verde',
    type: 'Corporativo',
    local: 'Escritório, Florianópolis',
    gradient: 'linear-gradient(155deg, #40342b 0%, #8a6a4a 55%, #d7ab7a 100%)',
    aperture: 'f/4',
    iso: 'ISO 200',
    focal: '50mm',
    photos: [
      { id: 1, gradient: 'linear-gradient(155deg, #40342b 0%, #8a6a4a 55%, #d7ab7a 100%)', aperture: 'f/4', iso: 'ISO 200', focal: '50mm' },
      { id: 2, gradient: 'linear-gradient(155deg, #4a3c28 0%, #b3854f 55%, #e6c98a 100%)', aperture: 'f/4', iso: 'ISO 250', focal: '35mm' },
      { id: 3, gradient: 'linear-gradient(155deg, #333f24 0%, #7c8f4e 55%, #c9d69b 100%)', aperture: 'f/5', iso: 'ISO 200', focal: '50mm' },
    ],
  },
  {
    id: 5,
    slug: 'clara-ensaio-externo',
    name: 'Clara',
    type: 'Ensaio Externo',
    local: 'Parque Nacional do Itatiaia',
    gradient: 'linear-gradient(155deg, #2c3a22 0%, #6d8a4a 55%, #c4d99f 100%)',
    aperture: 'f/1.8',
    iso: 'ISO 800',
    focal: '50mm',
    photos: [
      { id: 1, gradient: 'linear-gradient(155deg, #2c3a22 0%, #6d8a4a 55%, #c4d99f 100%)', aperture: 'f/1.8', iso: 'ISO 800', focal: '50mm' },
      { id: 2, gradient: 'linear-gradient(155deg, #3c4d2f 0%, #6f8a52 55%, #a8c48a 100%)', aperture: 'f/2', iso: 'ISO 640', focal: '85mm' },
      { id: 3, gradient: 'linear-gradient(155deg, #234238 0%, #4d7a6b 55%, #a8c9b8 100%)', aperture: 'f/2.2', iso: 'ISO 400', focal: '35mm' },
      { id: 4, gradient: 'linear-gradient(155deg, #1f3b33 0%, #3f6f5c 55%, #93bfa4 100%)', aperture: 'f/1.8', iso: 'ISO 800', focal: '50mm' },
    ],
  },
  {
    id: 6,
    slug: 'rafael-retrato',
    name: 'Rafael',
    type: 'Retrato',
    local: 'Estúdio, Florianópolis',
    gradient: 'linear-gradient(155deg, #333f24 0%, #7c8f4e 55%, #c9d69b 100%)',
    aperture: 'f/2',
    iso: 'ISO 200',
    focal: '85mm',
    photos: [
      { id: 1, gradient: 'linear-gradient(155deg, #333f24 0%, #7c8f4e 55%, #c9d69b 100%)', aperture: 'f/2', iso: 'ISO 200', focal: '85mm' },
      { id: 2, gradient: 'linear-gradient(155deg, #35442c 0%, #7c9473 55%, #cdd9b8 100%)', aperture: 'f/1.8', iso: 'ISO 250', focal: '85mm' },
      { id: 3, gradient: 'linear-gradient(155deg, #40342b 0%, #8a6a4a 55%, #d7ab7a 100%)', aperture: 'f/2.2', iso: 'ISO 200', focal: '50mm' },
    ],
  },
]

export function getSessionBySlug(slug) {
  return sessions.find((s) => s.slug === slug)
}
