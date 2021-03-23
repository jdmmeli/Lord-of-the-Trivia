import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";


function MainMenu() {
    const {gameState, setGameState, setUserName, userName} = useContext(QuizContext)
   
    return(
        <div className="Menu">
            <h1>Mae govannen!</h1>
            <h2>You are in Hobbiton</h2>
            <button onClick={() => {setGameState("quiz")}}
            >Begin Your Journey
            </button>
        </div>
        
    )
}

export default MainMenu