import React from 'react'
import {createRoot} from 'react-dom/client'
import {theme} from "./theme";
import {createGlobalStyle, ThemeProvider as StyledThemeProvider} from 'styled-components'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import {StylesProvider} from "@material-ui/core";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  a {
    color: ${theme.palette.primary.main};
  }
`

const container: HTMLElement = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <GlobalStyle/>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <App/>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>
)
