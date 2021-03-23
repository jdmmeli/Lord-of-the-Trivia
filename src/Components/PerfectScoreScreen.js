import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

function PerfectScoreScreen() {
    const { score, setScore,setGameState } = useContext(QuizContext)
    const restart = () => {
        setScore(0);
        setGameState("menu")
    }
    return (
        
        <div className="perfect">
            <h1 
            style={{marginTop: "2px"}}
            style={{fontSize: "40px"}}
            >Perfect Score!</h1>
            <h2>Score:  {score} / {Questions.length}</h2>
            <h1 className="Ea">Arda fades into the distance as you pass through 
                the Door of Night and ascend into the vastness of Ea
            </h1>
            <button onClick={restart}>Restart Journey</button>
        </div>
        
    )
} 

export default PerfectScoreScreen