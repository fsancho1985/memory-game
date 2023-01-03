import "./Card.css"

export const Card = ({id, idPair, image}) => {
  return(
    <button id={id} className="card">
      <div className="card__content">
        <div className="card__front"></div>
        <div className="card__back">
          <img src={image} alt={`Card${idPair}`} width={200} />
        </div>
      </div>
    </button>
  )
}