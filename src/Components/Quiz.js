import React, {useState, useContext} from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
    const { setScore, score, setGameState, gameState } = useContext(QuizContext)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
            alert("correct")
        }
        
        setCurrentQuestion(currentQuestion + 1)
    }
    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
        }
        setGameState("endscreen")
        }
    function handleClick(e) {
        const {value} = e.target
        if (value === "optionA") {
            setOptionChosen("optionA")
        }
        if (value === "optionB") {
            setOptionChosen("optionB")
        }    
        if (value === "optionC") {
            setOptionChosen("optionC")
        }    
        if (value === "optionD") {
            setOptionChosen("optionD")
        }
    }


    
    return(
        <div className="quiz">
            <h1 className="question">{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button value="optionA" onClick={handleClick}>{Questions[currentQuestion].optionA}</button>
                <button value="optionB" onClick={handleClick}>{Questions[currentQuestion].optionB}</button>
                <button value="optionC" onClick={handleClick}>{Questions[currentQuestion].optionC}</button>
                <button value="optionD" onClick={handleClick}>{Questions[currentQuestion].optionD}</button>
            </div>
           {currentQuestion === Questions.length - 1 ? (
               <button onClick={finishQuiz}>Finish Your Journey</button>
           ) : (
            <button className="next" onClick={nextQuestion}>Continue</button>
           )}
            
        </div>
    )
}

export default Quiz