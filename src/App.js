import './App.css';
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";
import Header from "./Components/Header"
import PerfectScoreScreen from './Components/PerfectScoreScreen';



function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    
    <div className="App">
      <Header />
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <EndScreen />}
        {gameState === "perfectscorescreen" && <PerfectScoreScreen />}
     </QuizContext.Provider>
    </div>
  
  );
}

export default App;
