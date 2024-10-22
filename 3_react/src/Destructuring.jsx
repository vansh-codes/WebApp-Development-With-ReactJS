import { useState } from 'react'
export default function Destructuring() {
    let [details, setDetails] = useState({
        name: 'John Doe',
        age: 25,
    });

    const changeDetails = () => {
        setDetails((prev) => { return { ...prev, age: details.age + 1 } });
    }
    return (
        <>
            <button onClick={changeDetails}>Age is {details.age}</button>
            {Object.keys(details).map((key) => {
                return <h1 key={key}>{key} is {details[key]}</h1>
            })}
        </>

    )
}
