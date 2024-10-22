import './App.css'
import Addition from './components/Activity_Addition'
import Addform from './components/AddForm'
import MultiFieldForm from './components/MultifieldForm'
import MultiFieldUncontrollableForms from './components/MultiFieldUncontrollableForm'
import UncontrollableForms from './components/UncontrollableForm'


function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', maxWidth: '1200px', margin: '0 auto', gap: '20px' }}>
      <div style={{ flex: '1 1 500px', marginBottom: '20px' }}>
        <Addform />
      </div>
      <div style={{ flex: '1 1 500px', marginBottom: '20px' }}>
        <MultiFieldForm />
      </div>
      <div style={{ flex: '1 1 500px', marginBottom: '20px' }}>
        <UncontrollableForms />
      </div>
      <div style={{ flex: '1 1 500px', marginBottom: '20px' }}>
        <MultiFieldUncontrollableForms />
      </div>
      <div style={{ flex: '1 1 500px', marginBottom: '20px' }}>
        <Addition />
      </div>
    </div>
  )
}

export default App
