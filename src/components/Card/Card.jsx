import { useMemoryGame } from "../../hooks/useMemoryGame"
import classNames from "classnames"

import "./Card.css"

export const Card = ({id, idPair, image}) => {

  const {turnCard, idTurnedCards} = useMemoryGame()

  const controllClick =() => {
    turnCard({id, idPair})
  }

  const turnedCard = idTurnedCards.includes(id)

  const cn = classNames("card", {
    "turned--card" : turnedCard,
  })
  
  return(
    <button id={id} className={cn} onClick={controllClick}>
      <div className="card__content">
        <div className="card__front"></div>
        <div className="card__back">
          <img src={image} alt={`Card${idPair}`}  />
        </div>
      </div>
    </button>
  )
}