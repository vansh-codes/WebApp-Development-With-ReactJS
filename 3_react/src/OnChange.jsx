import { useState } from "react";

export default function OnChange() {
    const [input, setInput] = useState('Please input something here');
  return (
    <div>
        <input type="text" style={{width: "180px", padding: "10px"}} value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setInput('')} />
        <p>{input==="Please input something here" ? 'Hello World!' : input}</p>
    </div>
  )
}
