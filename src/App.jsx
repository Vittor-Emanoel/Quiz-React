import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { questions } from '../questions'
import './App.css'

function App() {
  //Questão atual
  const [currentQuestion, setCurrentQuestion] = useState(0)
  //Score atual
  const [score, setScore] = useState(0)
  //Mostra os acertos
  const [showScore, setShowScore] = useState(false)

  const handleClick = (correct) => {
    if (correct) {
      setScore(score + 1)
      nextQuestion()
    } else {
      nextQuestion()
    }
  }

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  console.log(score)
  console.log(score)

  // if (correct) {
  //   setScore(score + 1)
  //   const nextQuestion = currentQuestion + 1
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion)
  //   } else {
  //     setShowScore(true)
  //   }
  // }]

  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          Você acerto {score} de {questions.length}
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>
              Questão {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].question}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answers.map((item) => (
              <Button
                colorScheme="purple"
                size="lg"
                key={item.text}
                onClick={() => handleClick(item.correct)}
              >
                {item.text}
              </Button>
            ))}
          </section>
        </>
      )}
    </div>
  )
}

export default App
