import { useEffect, useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

function App() {
  const [counter, setCounter] = useState(0)
  const [runTime, setRunTime] = useState(false)
  const [clock, setClock] = useState(0)

  useEffect(() => {
    let timer = null
    if(runTime) {
      timer = setInterval(() => {
        setClock(old => old + 1)
      }, 1000);
    }
    return () => {
      if(timer) {
        clearInterval(timer)
      }
    }
  }, [runTime])

  const handleClickAdd = () => setCounter(counter + 1)
  const handleClickSub = () => setCounter(counter - 1)
  const clickStart = () => setRunTime(!runTime)
  const clickRestart = () => {
    setRunTime(false)
    setClock(0)
  }

  return (
    <div>
      <Counter text={counter} />
      <Button text="+" onClick={handleClickAdd} />
      <Button text="-" onClick={handleClickSub} />
      <Timer time={clock} />
      <Button text="Iniciar" onClick={clickStart} />
      <Button text="Reiniciar" onClick={clickRestart} />
    </div>
  );
}

export default App;
