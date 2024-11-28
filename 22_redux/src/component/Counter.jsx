import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, reset } from "../store/counterSlice"

export default function Counter() {   
    // select the current counter value from the redux store
    const count = useSelector((state) => state.counter.value)

    // get the dispatch function to dispatch actions to the store
    const dispatch = useDispatch()

    // local state to hold the amount entered by the user increment by amount
    const [amount, setAmount] = useState(0)
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Redux Counter</h1>
            <h2>Count: {count}</h2>
            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => dispatch(increment())} style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px" }}
                >
                    Increment
                </button>
                <button onClick={() => dispatch(decrement())} style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px" }}
                >
                    Decrement
                </button>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} style={{ padding: "10px", fontSize: "16px", width: "100px", marginRight: "10px" }}
                />
                <button onClick={() => dispatch(incrementByAmount(amount))} style={{ padding: "10px 20px", fontSize: "16px" }}
                >
                    Increment by amount
                </button>
            </div>
            <button onClick={() => dispatch(reset())} style={{ padding: "10px 20px", fontSize: "16px" }}
            >
                Reset
            </button>
        </div>
    )
}
