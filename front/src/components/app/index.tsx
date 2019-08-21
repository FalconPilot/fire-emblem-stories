import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'

import theme from '../../theme'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        Plop
      </ThemeProvider>
    )
  }
}

export default App
