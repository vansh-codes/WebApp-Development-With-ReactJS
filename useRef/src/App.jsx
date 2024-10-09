import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    handleFocus();
  });
  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" placeholder='Click..' />
      <button onClick={handleFocus}>Focus the input</button>
    </>
  )
}

export default App;
