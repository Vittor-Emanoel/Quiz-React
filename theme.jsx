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
        'font-family': 'sans-serif, Roboto, inter',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      code: {
        'font-family': 'sans-serif,roboto, inter',
      },
    },
  },
})

export default theme
