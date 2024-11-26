/* import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count+1);
  },[count]);
  console.log("inc fuction remembered");

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App */
import { useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
/* const List = memo(function List({ getItems }){
  const items = getItems();
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}); */
const List = function List({ getItems }){
  const items = getItems();
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = () => {
    setCount(count + 1);
  }
  /* const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); */

  /* const getItems = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]); */
  const getItems = () => {
    return [count, count + 1, count + 2];
  };

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  };

  return (
    <div style={theme}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}
List.displayName = 'List';

List.propTypes = {
  getItems: PropTypes.func.isRequired,
};

export default App;