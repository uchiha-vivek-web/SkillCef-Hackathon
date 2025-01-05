import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Import the Saas UI theme
import { SaasProvider, theme as baseTheme } from '@saas-ui/react'

// 3. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#000',
    800: '#000',
    700: '#000',
  },
}

const theme = extendTheme({ colors }, baseTheme)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SaasProvider theme={theme} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SaasProvider>
    
     
  </StrictMode>,
)
