const images = [
  'aiolia.jpg',
  'aldebaran.jpg',
  'ikky.jpg',
  'mascara_morte.jpg',
  'mu.jpg',
  'saga.jpg',
  'seya.jpg',
  'shiryu.jpg',
  'yoga.jpg'
]

const unicCard = images.map((image, idPair) => ({
  idPair,
  image
}))

export const cardsPair = [...unicCard, ...unicCard].map((card, id) => ({
  ...card,
  id
}))
