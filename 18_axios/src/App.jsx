import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const findId = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${search}`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='container'>
      <h1>Fetching Data using AXIOS</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='input'
      />
      <button onClick={findId} className='button'>Get user</button>
      <br/>
      {data.id && (
        <div className='userInfo'>
          <h3>Id: {data.id}</h3>
          <h2>Name: {data.name}</h2>
          <h2>Email: {data.email}</h2>
          <h2>Address: {data.address.city}</h2>
        </div>
      )}
      {error && <div className='error'>Error: {error.message}</div>}
    </div>
  )
}

export default App
