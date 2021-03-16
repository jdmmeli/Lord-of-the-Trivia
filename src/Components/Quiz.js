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
        // Questions[currentQuestion].answer === optionChosen ? setScore(score + 1) : setGameState("endscreen")
    
    return(
        <div className="quiz">
            <h1 className="question">{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
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