import { createContext, useState } from 'react'
import Context from './Context'

export const User = createContext();

export default function UserContext() {
  const [user, setUser ] = useState("Vansh");
  return (
    <User.Provider value={"Vansh"}>
      <div>
        <h1>Component {user}</h1>
      </div>
      <Context></Context>
    </User.Provider>
  )
}