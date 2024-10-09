import {useReducer} from 'react'
const initalState = { count: 0};

const countReducer = (state, action) => {
    switch(action.type){
        case 'inc': return {count: state.count + 1};
        case 'dec': return {count: state.count - 1};
        case 'reset': return initalState;
        default: return state;
    }
}

export default function ReducerCounter() {
    const [state, dispatch] = useReducer(countReducer, initalState);
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'inc'})}>Increment</button>    
        <button onClick={() => dispatch({type: 'dec'})}>Decrement</button>    
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>    
    </div>
  )
}
