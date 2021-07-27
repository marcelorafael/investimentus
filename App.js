import React from 'react';
import { ThemeProvider } from 'styled-components'
import Routes from './Routes/Routes';
import theme from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default require('./storybook').default
// export default App