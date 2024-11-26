import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Counter } from './Counter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Comp />
    <ClassComp name='Vansh!' state={23} /> */}
    <App />
    <Counter initialCount={23} />
  </StrictMode>
);
