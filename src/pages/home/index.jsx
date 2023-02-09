import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ToggleColorMode from '../../components/ToggleColorMode'

const HomePage = () => {
  const navigate = useNavigate()

  const handleQuiz = () => {
    navigate('/quiz')
  }

  return (
    <>
      <ToggleColorMode />
      <Box
        w="45%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
        mt="2"
      >
        <Heading fontSize="5xl">Quiz Bíblico 📖</Heading>
        <Text mt="3" fontWeight="500">
          Teste seu conhecimento bíblico.
        </Text>

        <Stack boxSize="sm" mt="5">
          <Image
            src="https://images.unsplash.com/photo-1604882737321-e6937fd6f519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Bíblia Sagrada"
            objectFit="cover"
            h="100%"
            borderRadius="lg"
          />
        </Stack>
        <Button mt="3" p="6" colorScheme="purple" onClick={handleQuiz}>
          Iniciar
        </Button>
      </Box>
    </>
  )
}

export default HomePage
