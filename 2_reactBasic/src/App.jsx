import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

export class Comp extends React.Component {
  render() {
    return (
      <h1 className="hello">{"Hello!!!"}</h1>
    );
  }
}

export class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.state };
    this.initialState = { count: props.state };
  }

  display() {
    return this.props.name;
  }

  render() {
    return (
      <>
        <h1 className="hello">{this.display()}</h1>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
        <button onClick={() => this.setState({ count: this.state.count > this.initialState.count ? this.state.count - 1 : this.state.count })}>Decrement</button>
        <button onClick={() => this.setState({ count: this.initialState.count })}>Reset</button>
      </>
    );
  }
}

ClassComp.propTypes = {
  state: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

// Uncomment and use this if you want to render the components
function App() {
  return (
    <>
      <Comp />
      <ClassComp name="Vansh" state={24} />
    </>
  );
}

export default App;
