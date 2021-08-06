import React from 'react'
import { LogBox } from 'react-native'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes/Routes'
import theme from './constants/theme'

let foo = 123

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

// export default require('./storybook').default;
export default App
