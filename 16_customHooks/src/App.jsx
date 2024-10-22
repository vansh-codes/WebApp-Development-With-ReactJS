import './App.css'
import UseFetch from './customHook/UseFetch'

function App() {

  const [data] = UseFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      {data && data.map((user) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </>
  )
}

export default App
