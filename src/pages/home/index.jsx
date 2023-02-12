import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ToggleColorMode from '../../components/ToggleColorMode'

const HomePage = () => {
  const navigate = useNavigate()

  const handleQuiz = () => {
    navigate('/quiz')
  }

  return (
    <Box
      w="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <ToggleColorMode />

      <Box
        width={{ base: '85%', sm: '85%', md: '40%', lg: '40%' }}
        height="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingBlock="20"
      >
        <Heading
          width={{ base: 'full', md: 'full', lg: 'full' }}
          fontSize={{ base: '4xl', md: 'full', lg: '4xl' }}
          textAlign="center"
          fontFamily="Inter, sans-serif"
        >
          Quiz Bíblico 📖
        </Heading>
        <Text
          fontWeight="500"
          w="full"
          textAlign="center"
          fontFamily="Sora, sans-serif"
        >
          Teste seu conhecimento bíblico.
        </Text>

        <Button
          p="6"
          mt="50"
          colorScheme="purple"
          onClick={handleQuiz}
          width={{ base: 'full', sm: 'full', md: 'full', lg: 'full' }}
        >
          Iniciar
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage
