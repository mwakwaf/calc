import React from 'react'
import {createRoot} from 'react-dom/client'
import {theme} from "./theme";
import {createGlobalStyle, ThemeProvider as StyledThemeProvider} from 'styled-components';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles'
import {StyledEngineProvider} from "@mui/material";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  a {
    color: ${theme.palette.primary.main};
  }
`

const container: HTMLElement = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    {/*<GlobalStyle/>*/}
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        {/*<StyledThemeProvider theme={theme}>*/}
          <App/>
        {/*</StyledThemeProvider>*/}
      </MuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
