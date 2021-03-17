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
       destination = "Behold, Valinor! The Undying Lands!"
   } else if (score >= 6 && score < 8) {
       destination = "Hail, and welcome to Numenor, hardy traveler!"
   } else if (score >= 4 && score < 6) {
       destination = "Rest from your struggles here in Rivendell, weary traveler!"
   } else if (score >= 2 && score < 4) {
       destination = "You were lost in the pits of Goblin Town!"
   } else {
       destination = "You didn't make it past Frogmorton!"
   }
 
    return (
       <div className="endScreen">
           <h1>Your journey has come to it's end</h1>
           <h3>Score:  {score} / {Questions.length}</h3>
           <h2>{destination}</h2>
           <button onClick={restart}>Restart Journey</button>
       </div>
    )
}

export default EndScreen