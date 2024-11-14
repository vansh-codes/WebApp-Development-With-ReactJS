import './App.css'
import { Provider } from 'react-redux'
import Counter from './component/Counter'
import store from './store/store'

/* 
npm install @reduxjs/toolkit react-redux
*/

function App() {

  return (
    <Provider store={store}>
      <h1>Simple Redux Counter App</h1>
      <Counter />
    </Provider>
  )
}

export default App
