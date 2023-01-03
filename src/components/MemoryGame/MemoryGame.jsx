import { Score } from '../Score/Score'
import { Card } from '../Card/Card'
import { cardsPair } from '../../constants/Cards'
import { Result } from '../Result/Result'
import { LogicMemoryGameProvider } from '../../contexts/LogicMemoryGame'

import './MemoryGame.css'

export const MemoryGame = () => {
  return(
    <LogicMemoryGameProvider >
      <MemoryGameContent />
    </LogicMemoryGameProvider>
  )
}

export const MemoryGameContent = () => {
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
