
import PropTypes from 'prop-types';     // used by debuggers
export default function Que1(props) {
    let arr = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    let joined = arr.join(", ");
    console.log(joined);
    console.log("Props: ", props)
    return (
        <div>
            <h1>Que1</h1>
            <h2>Array: {joined}</h2>
            <h2>My name is {props.name} and age is {props.age}</h2>
        </div>
    )
}

Que1.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

// study about default props!