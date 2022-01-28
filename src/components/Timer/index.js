const Timer = ({ time }) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return (
    <div>
      <p>{ minutes < 10 ? `0${minutes}` : minutes }:{seconds < 10 ? `0${seconds}` : seconds }</p>
      <p>Tempo médio por volta</p>
    </div>
  )
}

export default Timer