import { useMemoryGame } from "../../hooks/useMemoryGame"

import { Points }  from "../Points/Points"

import "./Score.css"

export const Score = () => {

  const {quantityTurnedCards, quantityPoints} = useMemoryGame()
  
  return(
    <div className="score">
      <Points title="Score" value={quantityPoints}/>
      <Points title="Turned Cards" value={quantityTurnedCards}/>
    </div>
  )
}