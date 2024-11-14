import { useState, useEffect } from "react"
import axios from 'axios';

export default function Todo() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setTodos(response.data)
        console.log(response.data)
      })
      .catch(() => setError('Error fetching data'))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#fff' }}>Todo List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {todo.title}
          </li>
        ))}
      </ul>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  )
}
