export const Result = () => {
  return (
    <div className="result">
      <div className="result__box">
        <p>Seu nível de cosmo é:</p>
        <h1>Prata</h1>
        <img src="../Atena_prata.jpg" alt="Atena_Prata" height={150} />
        <p>
          <strong>Correct average: </strong>
          <span>60%</span>
        </p>
        <button className="button">New Game</button>
        <p><small>* This analysis is an ilustration</small></p>
      </div>
    </div>
  )
}
