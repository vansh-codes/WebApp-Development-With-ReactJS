import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ClassComp, Comp} from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Comp />
    <ClassComp name='Vansh!' state={23}/>
  </StrictMode>,
)
