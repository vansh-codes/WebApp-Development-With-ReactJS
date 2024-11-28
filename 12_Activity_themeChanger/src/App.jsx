import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react';
import ThemeBtn from './components/themeBtn';
import Counter from './components/counter';

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }
  
  useEffect(() => {
    const doc = document.querySelector('html');
    doc.classList.remove("light", "dark")
    doc.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center bg-white">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Counter/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
