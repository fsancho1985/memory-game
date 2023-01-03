import { Score } from '../Score/Score'
import { Card } from '../Card/Card'

import { cardsPair } from '../../constants/Cards'

import "./MemoryGame.css"
import { Result } from '../Result/Result'

export const MemoryGame = () => {
  return (
    <div className="memory-game">
      <div className="memory-game__content">
        <h1>Memory Game</h1>
        <Score />
        <div className="memory-game__cards">
          {cardsPair.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
      <Result />
    </div>
  )
}
