import "./Points.css"

export const Points = ({title, value}) => {
  return(
    <div className="points">
      <strong className="points__title">{title}: </strong>
      <span className="points__value">{value}</span>
    </div>
  )
}