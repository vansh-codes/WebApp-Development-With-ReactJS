import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count+1);
  },[count]);
  console.log("inc fuction remembered");

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
