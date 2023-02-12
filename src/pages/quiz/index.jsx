import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../../../questions'
import ToggleColorMode from '../../components/ToggleColorMode'

const QuizPage = () => {
  const navigate = useNavigate()

  //Questão atual
  const [currentQuestion, setCurrentQuestion] = useState(0)
  //Score atual
  const [score, setScore] = useState(0)
  //Mostra os acertos
  const [showScore, setShowScore] = useState(false)

  //
  const [questionWrong, setQuestionWrong] = useState([])

  function handleClick(correct) {
    if (correct) {
      setScore(score + 1)
      nextQuestion()
    } else {
      nextQuestion(correct)
    }
  }

  function nextQuestion(correct) {
    const nextQuestion = currentQuestion + 1
    if (correct === false) {
      setQuestionWrong((prevState) => [
        ...prevState,
        questions[currentQuestion],
      ])
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Box w="full" h="100">
      {showScore ? (
        <Box
          m="0 auto"
          height="100vh"
          w="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="2"
        >
          <Text
            fontWeight={800}
            textAlign="center"
            fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
          >
            Você acertou {score} de {questions.length}
          </Text>
          <Text
            fontSize="2xl"
            marginBlock="4"
            fontWeight="medium"
            textAlign="center"
          >
            {score >= 4
              ? 'Parabéns! 🎉'
              : 'Você errou, revise as seguintes questões:'}
          </Text>
          {questionWrong.map((item, index) => (
            <Text
              fontSize="2xl"
              textAlign="center"
              fontWeight="light"
              key={index}
              mt="10"
            >
              {item.question}
            </Text>
          ))}
        </Box>
      ) : (
        <>
          <Button onClick={handleBack} mr="50px">
            Voltar
          </Button>
          <ToggleColorMode />
          <Box
            width="full"
            p="10"
            mt="14"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h1" fontSize="4xl" fontWeight={800} mb="10">
              Questão {currentQuestion + 1}/{questions.length}
            </Heading>
            <Text fontSize="larger" as="h2" fontWeight={400}>
              {questions[currentQuestion].question}
            </Text>
          </Box>

          <Box
            className="answer-section"
            width="full"
            p="5"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="1.1rem"
            sm="flex"
            md-
          >
            {questions[currentQuestion].answers.map((item) => (
              <Button
                colorScheme="purple"
                size="sm"
                p="7"
                width={{ base: 'full', md: 'full', lg: 'lg' }}
                sm:w="full"
                display="flex"
                justifyContent="flex-start"
                key={item.text}
                onClick={() => handleClick(item.correct)}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

export default QuizPage
