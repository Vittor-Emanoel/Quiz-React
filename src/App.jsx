import { useState } from 'react'
import { questions } from '../questions'
import './App.css'
import HomePage from './pages/home'

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
    // <Box className="app" w="full" h="100">
    //   {showScore ? (
    //     <Box mt="60">
    //       <Text fontSize="3xl" className="showScore-section">
    //         Você acertou {score} de {questions.length}
    //       </Text>
    //     </Box>
    //   ) : (
    //     <>
    //       <ToggleColorMode />
    //       <Box
    //         className="question-section"
    //         width="full"
    //         p="10"
    //         pt="40"
    //         margin=" 0 auto"
    //         display="flex"
    //         flexDirection="column"
    //         justifyContent="center"
    //         alignItems="center"
    //       >
    //         <Heading as="h1" fontSize="4xl" fontWeight={800} mb="10">
    //           Questão {currentQuestion + 1}/{questions.length}
    //         </Heading>

    //         <Text fontSize="larger" as="h2" fontWeight={400}>
    //           {questions[currentQuestion].question}
    //         </Text>
    //       </Box>

    //       <Box
    //         className="answer-section"
    //         mt="77"
    //         width="full"
    //         p="5"
    //         display="flex"
    //         justifyContent="center"
    //         alignItems="center"
    //         gap="1.1rem"
    //         sm="flex"
    //       >
    //         {questions[currentQuestion].answers.map((item) => (
    //           <Button
    //             colorScheme="purple"
    //             size="sm"
    //             p="7"
    //             key={item.text}
    //             onClick={() => handleClick(item.correct)}
    //           >
    //             {item.text}
    //           </Button>
    //         ))}
    //       </Box>
    //     </>
    //   )}
    // </Box>
    <HomePage />
  )
}

export default App
