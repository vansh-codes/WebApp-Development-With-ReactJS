import PropTypes from 'prop-types'
import { useState } from 'react'
function Notification(props) {
    let [isSub, setIsSub] = useState(props.subscribed);
    let [inputName, setInputName] = useState(props.name || "Input your name");
    return (
        <>
        <input type='text' placeholder="Enter your name: " style={{backgroundColor: "white", "margin":"20px", "color":"black"}}
        onChange={(e) => setInputName(e.target.value)}/>
        <div className="container" style={{ backgroundColor: "green", width: "800px" }}>
            <h1>{isSub ? "Subscribed" : "Non subscribed"} user</h1>
            <hr/>
            <p>{isSub ? `Welcome, ${inputName}!` : `Please ${inputName}`}</p>
            <p>{isSub ? "Thank you for subscribing!" : "Subscribe krde pls bol rha hu"}</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsSub(isSub = !isSub)}>Click me</button>
        </>
    )
}

Notification.propTypes = {
    name: PropTypes.string,
    subscribed: PropTypes.bool
}

export default Notification;