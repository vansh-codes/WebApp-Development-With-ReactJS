import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Dynamic from './components/Dynamic'
import Header from './components/Header'
import { useState } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/user/:id',
    element: <Dynamic />
  }
])

function App() {
  const [value, setValue] = useState('')
   const handleInput = () => {
    router.navigate(`/user/${value}`)
  } 

  return (
    <>
      <RouterProvider router={router} >
        <Header />
      </RouterProvider>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" onClick={handleInput}>Submit</button>
    </>
  )
}

export default App
