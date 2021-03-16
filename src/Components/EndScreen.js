import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";


function EndScreen() {
    const { score, setScore,setGameState } = useContext(QuizContext)
    const restart = () => {
        setScore(0);
        setGameState("menu")
    }
let destination;
   if(score >= 8) {
       destination = "Welcome to Valinor!"
   } else if (score >= 6 && score < 8) {
       destination = "You have made it to Numenor!"
   } else if (score >= 4 && score < 6) {
       destination = "Rest here in Rivendell, weary traveler."
   } else if (score >= 2 && score < 4) {
       destination = "You didn't get past Frogmorton!"
   } else {
       destination = "Lost in Goblin Town!"
   }
 
    return (
       <div className="endScreen">
           <h1>Your journey has come to it's end</h1>
           <h3>Score:  {score} / {Questions.length}</h3>
           <h2>{destination}</h2>
           <button onClick={restart}>Restart Quiz</button>
       </div>
    )
}

export default EndScreen