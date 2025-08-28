import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokeGrid from './pages/PokeGrid'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokeGrid /> 
  </StrictMode>,
)
