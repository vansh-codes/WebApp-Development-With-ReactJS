import './App.css'
import Q1 from './components/Q1'
import Q2 from './components/Q2'
import Footer from './components/Footer'

// tailwind install cmd: 
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p
function App() {

  return (
    <>
      <Q1 />
      <Q2 />
      <Footer />
    </>
  )
}

export default App
