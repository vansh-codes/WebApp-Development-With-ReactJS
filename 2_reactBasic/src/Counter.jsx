import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            count: props.initialCount, // Set initial count from props
        };
        console.log("Constructor: Component is being created.");
    }

    // Lifecycle method: Called after the component is mounted
    componentDidMount() {
        console.log("componentDidMount: Component has been mounted to the DOM.");
    }

    // Lifecycle method: Called after the state or props change
    componentDidUpdate(prevProps, prevState) {
        console.log(
            `componentDidUpdate: Count changed from ${prevState.count} to ${this.state.count}.`
        );
    }

    // Lifecycle method: Called just before the component is removed from the DOM
    componentWillUnmount() {
        console.log("componentWillUnmount: Component is being removed.");
    }

    // Increment count by 1
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    // Reset count to initial count
    reset = () => {
        this.setState({
            count: this.props.initialCount,
        });
    };

    // Render method to display JSX
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1>Counter</h1>
                <h2>Current Count: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset} style={{ marginLeft: "10px" }}>
                    Reset
                </button>
            </div>
        );
    }
}

// Set default props in case none are provided
Counter.defaultProps = {
    initialCount: 0,
};

// Define PropTypes for type-checking
Counter.propTypes = {
    initialCount: PropTypes.number,
};