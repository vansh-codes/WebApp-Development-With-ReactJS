import React from 'react'
import './App.css'

export class Comp extends React.Component {
  render(){
    return (
        <h1 className="hello">{"Hello!!!"}</h1>
    )
  }
}

export class ClassComp extends React.Component<{ name: string, state: number }, { count: number }>{
  name: string;
  initialState: { count: number };
  constructor(props: { name: string, state: number }){
    super(props)
    this.name = props.name;
    this.state = { count: props.state };
    this.initialState = { count: props.state };
  }
  display(){
    return this.name;
  }
  render(){
    return (
      <>
      <h1 className="hello">{this.display()}</h1>
      <h3>{this.state.count}</h3>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>  
      <button onClick={() => this.setState({ count: this.state.count>this.initialState.count ? this.state.count - 1 : this.state.count })}>Reset</button>
      </>
    )
  }
}

// function App() {

//   return (
//     <>
//       <h1 className="hello">Hello!</h1>
//     </>
//   )
// }

// export default Comps
