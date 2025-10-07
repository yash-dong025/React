import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter'
import './Hellow.css';
import Hooks from './Hooks'
import Sum from './sumdemo'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Hooks/>
    <Counter/>
    <Sum/>
     */}
     <App/>
     
  </StrictMode>,
)
