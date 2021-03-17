import React, {useState, useContext} from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
    const { setScore, score, setGameState } = useContext(QuizContext)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
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
        if (value === "A") {
            setOptionChosen("A")
        } else if (value === "B") {
            setOptionChosen("B")
        } else if (value === "C") {
            setOptionChosen("C")
        } else {
            setOptionChosen("D")
        }
    }


    
    return(
        <div className="quiz">
            <h1 className="question">{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button value="A" onClick={handleClick}>{Questions[currentQuestion].optionA}</button>
                <button value="B" onClick={handleClick}>{Questions[currentQuestion].optionB}</button>
                <button value="C" onClick={handleClick}>{Questions[currentQuestion].optionC}</button>
                <button value="D" onClick={handleClick}>{Questions[currentQuestion].optionD}</button>
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