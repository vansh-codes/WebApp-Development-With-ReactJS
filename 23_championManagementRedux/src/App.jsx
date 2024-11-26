import './App.css'
import { Provider } from 'react-redux'
import Champion from './components/Champion'
import store from './store/store'

/* 
npm install @reduxjs/toolkit react-redux
*/


/* 
Create a React app that serves as a "Champion Management" system. In this app, set up Redux to
handle the state of"champions," where ear' hampion has properties like name,level, and abilities
Begin by configuring the Redux store and re . ers to manage a list of champions, along with actions to
add, update, or remove champions from the list. The app should include components for listing all
champions, viewing individual champion details, and forms to add or edit champion data
*/
function App() {

  return (
    <Provider store={store}>
      <h1>Redux Champion Management</h1>
      <Champion />
    </Provider>
  )
}

export default App
