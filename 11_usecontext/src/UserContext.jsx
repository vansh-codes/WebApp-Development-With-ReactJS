import { createContext, useState } from 'react'
import Context from './Context'

export const User = createContext();

export default function UserContext() {
  const [user] = useState("Vansh");
  return (
    <User.Provider value={user}>
      <div>
        <h1>Component {user}</h1>
      </div>
      <Context></Context>
    </User.Provider>
  )
}