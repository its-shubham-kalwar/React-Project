import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {

  const [isGameStarted, setIsStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsStarted((prev) => !prev);
  };

  return (
    <>
    {  isGameStarted ? <GamePlay /> : <StartGame 

    toggle={toggleGamePlay}
    />  }
    </>
  );
}

export default App
