import { Points }  from "../Points/Points"

import "./Score.css"

export const Score = () => {
  return(
    <div className="score">
      <Points title="Score" value={0}/>
      <Points title="Turned Cards" value={0}/>
    </div>
  )
}