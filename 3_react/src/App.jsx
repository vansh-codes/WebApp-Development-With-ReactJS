import './App.css'
import Que1 from './components/que1'
import Destructuring from './Destructuring'
import OnChange from './OnChange'
function App() {

  return (
    <>
      <h1> Hello </h1>
      <Que1 name="Vansh" age={21}/>
      <Destructuring/>
      <OnChange/>
    </>
  )
}

export default App