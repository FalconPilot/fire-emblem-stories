import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'

import theme from '../../theme'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        Plop
      </ThemeProvider>
    )
  }
}

export default App
