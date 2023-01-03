import { createContext, useState } from "react";

export const LogicMemoryGameContext = createContext()

export const LogicMemoryGameProvider = ({children}) => {

  const [cards, setCards] = useState([])
  const [idTurnedCards, setIdTurnedCards] = useState([])
  const [idsFoundPairs, setIdsFoundPairs] = useState([])

  const [quantityTurnedCards, setQuantityTurnedCards] = useState(0)
  const [quantityPoints, setQuantityPoints] = useState(0)

  const addQuantityTurnedCards = () => {
    setQuantityTurnedCards((quantity) => quantity + 1)
  }

  const turnCard = ({id, idPair}) => {
    addQuantityTurnedCards();
    setIdTurnedCards(ids => [...ids, id])
  }

  const value = {
    cards,
    quantityTurnedCards,
    quantityPoints,
    turnCard,
    idTurnedCards
  }

  return(
    <LogicMemoryGameContext.Provider value={value}>
      {children}
    </LogicMemoryGameContext.Provider>
  )
}