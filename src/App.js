import './App.css';
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";
import Header from "./Components/Header"
import { Container } from 'react-bootstrap';


function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    <div className="App">

      <Header />
      <Container className="Container">
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
      </Container>

    </div>
  );
}

export default App;
