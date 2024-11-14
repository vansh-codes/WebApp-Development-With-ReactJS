import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Todo from './components/Todo'
import Header from './components/Header'

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
    path: '/todo',
    element: <Todo />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} >
        <Header />
      </RouterProvider>
    </>
  )
}

export default App
