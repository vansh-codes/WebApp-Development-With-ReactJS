import { useState } from 'react'

function HelloWorld() {
    let [state, setState] = useState("Hello, World!");
    const toggleText = () => {
        if (state === "Hello, World!") {
            setState("Goodbye, World!");
        } else {
            setState("Hello, World!");
        }
    }
    return (
        <>
            <div className="container" style={{ backgroundColor: "gray", width: "800px" }}>
                <h1>{state}</h1>
                <hr />
                <p>Click the button below to change the text</p>
                <button className="btn btn-primary" onClick={toggleText}>Click me</button>
            </div>
        </>
    )
}

export default HelloWorld