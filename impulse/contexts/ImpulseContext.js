import { createContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"
import { theme } from "@impulse/components"

const GlobalStyle = createGlobalStyle`  
  body {
    color: black;
    margin: 0;
    padding: 0;
    position: relative;
    font-family: 'Gilroy-Bold', sans-serif;
      /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */

  }
  /* //change scrollbar color
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #121212;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #242424;
  } */

`

export const ImpulseContext = createContext({})

export const ImpulseProvider = ({ children }) => {
  return (
    <ImpulseContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ImpulseContext.Provider>
  )
}
