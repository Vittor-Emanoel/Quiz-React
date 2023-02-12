import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColor: false,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Poppins, Inter',
      },
      code: {
        fontFamily: 'Poppins, Inter, sans-serif',
      },
    },
  },
})

export default theme
