## Viva Preparation Question along with answers

# Table of Contents

- [Unit 1](#unit-1)
- [Unit 2](#unit-2)
- [Unit 3](#unit-3)
- [Unit 4](#unit-4)
- [Unit 5](#unit-5)
- [Unit 6](#unit-6)


### Unit 1

#### What is reducer method in Javascript
```
The reduce method in JavaScript is an array method used to iterate over an array and accumulate a single output value. It executes a provided reducer function on each element of the array, resulting in a single output value.
```

#### What is the difference between forEach and map in Javascript
```
`forEach` is used to iterate over an array and perform side effects without returning anything, while `map` is used to transform an array and returns a new array with the modified elements. Use `forEach` for actions like logging, and `map` when you need a new array.
```

#### what is destructuring in javascript
```
Destructuring in JavaScript is a way to extract values from arrays or properties from objects into variables in a concise syntax. It improves readability and reduces boilerplate code.
```

#### What are SPAs and MPAs
```
**SPAs**:
- Load a single HTML file and dynamically update content without reloading the page.
- Use JavaScript frameworks like React, Angular, or Vue.
- Example: Gmail, Google Docs.
- Advantages: Faster navigation, better user experience.
- Disadvantages: Initial load time is higher, and SEO can be challenging.

**MPAs**:
- Load a new HTML file for every new page or route.
- Example: Traditional websites like e-commerce platforms.
- Advantages: Better SEO, easier to implement without JavaScript frameworks.
- Disadvantages: Slower due to full-page reloads.
```

#### What is React
```
- A JavaScript library for building user interfaces, developed by Facebook.
- Focuses on creating reusable components for faster and more efficient development.
- Based on virtual DOM for high performance.
```

#### What are the features of React
```
- Component-Based Architecture: Build reusable, isolated components.
- Virtual DOM: Efficiently updates the UI without touching the real DOM unnecessarily.
- One-Way Data Binding: Data flows in a single direction for better control.
- JSX Syntax: Write HTML-like syntax in JavaScript.
- React Hooks: Enable functional components to use state and lifecycle methods.
- React Router: Facilitates navigation for SPAs.
```

#### What are the advantages of React
```
- Reusable Components: Increases development speed and maintainability.
- Fast Rendering: Virtual DOM makes updates efficient.
- Large Community and Ecosystem: Access to extensive libraries and tools.
- SEO-Friendly: Server-side rendering options with Next.js.
- Cross-Platform Development: Can be used for web (React) and mobile (React Native).
```

#### What are the disadvantages of React
```
- Poor SEO as its based on SPA and loads a single HTML file
- Steep Learning Curve: JSX and advanced concepts like hooks and state management require time to master.
- Poor Documentation: Constant updates make documentation challenging to keep up with.
- Heavy Dependency on Third-Party Libraries: Core React is minimal, so additional libraries are often required.
- Overhead for Small Apps: For simple projects, React may add unnecessary complexity.
```


### Unit 2

#### What is React.createElement()
```
The React.createElement() method creates React elements programmatically by specifying the element type, its properties, and its children. It’s primarily used under the hood, while developers typically use JSX for simplicity.
Takes 3 arguments:
- type: The HTML tag or React component to create (e.g., 'div', 'h1', or a custom component).
- props: An object containing attributes and event handlers for the element (e.g., { id: "title", className: "header" }).
- children: The content or nested elements inside the component. Can be strings, React elements, or arrays of elements.
Example:
const element = React.createElement(
  'h1',
  { id: 'greeting' },
  'Hello, World!'
);
```

#### What is jsx
```
JSX is a syntax extension for writing React elements in a readable, HTML-like way, whereas React.createElement() is a manual method for creating React elements, typically used by JSX internally.
```

#### What are jsx expressions
```
JSX is a syntax extension for writing React elements in a readable, HTML-like way, whereas React.createElement() is a manual method for creating React elements, typically used by JSX internally.
```

#### How React renders elements into DOM
```
React elements are rendered into the DOM using the ReactDOM.render() method (legacy) or createRoot.render() (modern). The render method takes a React element and attaches it to a DOM node, typically with the ID root.
```

#### What are components in React
```
React components are reusable pieces of UI. They can be created as functional components for simpler, stateless tasks or as class components for more complex logic and lifecycle methods.
```

#### What are functional components
```
A simple JavaScript function that accepts props as an argument and returns React elements.
- Simpler, declared as functions.
- Initially stateless, but with React Hooks, they can manage state and lifecycle features.
Example:
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

#### What are class components
```
A more complex way to create components using ES6 classes. It includes additional features like lifecycle methods.
- Use ES6 classes.
- Require the render() method to return JSX.
- Can manage state and lifecycle methods directly.
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

#### Whats the difference between class and functional components
```
Class components are more complex, supporting state and lifecycle methods, while functional components are simpler and use hooks like useState and useEffect for state and side effects.
```

#### What is React Virtual DOM
```
The React Virtual DOM is an in-memory representation of the real DOM. React updates the virtual DOM, compares it with the previous version, and efficiently applies changes to the real DOM.
```

#### What are Props
```
Props are inputs passed to components, allowing data to flow from parent to child. They are read-only and immutable and used for customization.
```

#### Types of CSS in React or How can we apply CSS in React
```
CSS in React can be applied via inline styles, external stylesheets, or CSS modules. CSS modules are preferred for scoped styling to avoid conflicts.
```

#### Bootstrap installation command and import statement
```
npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
```

### Unit 3

#### What are hooks
```
Hooks are special functions that allow you to use state and other React features in functional components without needing to write a class.
1. What are Hooks?
- Functions that let you "hook into" React's state and lifecycle features.
- Examples include useState for state, useEffect for side effects, and useContext for accessing context.
2. Rules of Hooks:
- Call Hooks at the top level: Do not call Hooks inside loops, conditions, or nested functions.
- Only call Hooks in React functions: Use them in functional components or custom hooks.
```

#### What is useState hook
```
Manages state in functional components.
Syntax: const [state, setState] = useState(initialValue);

useState returns an array containing two elements:
The current state value.
A setter function to update the state.
You use the setter function to update the state, and React re-renders the component with the new state.
```

#### What is useEffect hook
```
Handles side effects such as data fetching, subscriptions, or DOM manipulations.
Syntax:
useEffect(() => {
  // Effect logic
  return () => {
    // Cleanup logic
  };
}, [dependencies]);
```

#### What is useContext hook
```
Accesses data stored in a React Context without using Context.Consumer.
const value = useContext(Context);
```


#### What is useRef hook
```
Creates a mutable reference to a DOM element or value that persists across renders.
const ref = useRef(initialValue);
```

#### What is useReducer hook
```
Manages state using reducers, similar to Redux.
const [state, dispatch] = useReducer(reducer, initialState);
```

#### What is useCallback hook
```
Memoizes a callback function to prevent unnecessary re-creations.
const memoizedCallback = useCallback(() => {
  // Function logic
}, [dependencies]);
```

#### What is useMemo hook
```
Memoizes a value to optimize performance.
const memoizedValue = useMemo(() => computeValue(), [dependencies]);
```

#### What is custom hooks
```
Create reusable logic by combining existing hooks.
function useCustomHook() {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Logic here
  }, []);

  return [state, setState];
}
```

#### How does event handling work in React? 
```
React uses a synthetic event system. Events in React are handled using camelCase event names (e.g., onClick, onChange) and are passed as functions. They behave consistently across browsers.
```

#### What are stateless components
```
- Definition: Components that do not manage their own state and are purely responsible for displaying data.
- Characteristics: They receive data via props and return JSX. These components are typically functional components.
```

#### What are stateful components
```
- Definition: Components that manage their own state. They can modify their state internally and rerender based on state changes.
- Characteristics: They typically involve class components or functional components using the useState hook.
```

#### What is the difference between stateful and stateless components
```
Stateless components do not manage any state and only receive props for rendering, while stateful components manage their own state and can change their rendering based on that state.
```

#### How do you create state in React? 
```
In class components, state is created in the constructor using this.state. In functional components, state is created using the useState hook, which returns an array with the state variable and the setter function.
```

#### What are common pitfalls in state management in React? 
```
Common pitfalls include directly mutating state, not using functional updates for state that depends on previous values, not handling state updates asynchronously, and passing state down unnecessarily to child components.
```

#### What are the key lifecycle methods in class components?
```
Key lifecycle methods include constructor(), componentDidMount(), shouldComponentUpdate(), componentDidUpdate(), and componentWillUnmount()
```

#### How do lifecycle methods differ in functional components? 
```
Functional components use the useEffect hook to replicate the lifecycle behavior (like componentDidMount, componentDidUpdate, and componentWillUnmount).
```

### Unit 4

#### What are controlled forms
```
Controlled forms are React components where form input values are bound to the state. React manages the data through state and updates it with onChange.
```

#### What are Uncontrolled Forms? 
```
Uncontrolled forms rely on the DOM to manage input values. React accesses the data using refs instead of state management.
```

#### When to use Controlled Forms? 
```
Use controlled forms for real-time validations, dynamic forms, or complex forms where the input data affects the app state.
```

#### When to use Uncontrolled Forms? 
```
Use uncontrolled forms for simple, static forms where you don't need to validate or manipulate data as the user types.
```

### Unit 5

#### What is the difference between Fetch and Axios?
```
Fetch is a native JavaScript API, while Axios is a library. Axios automatically handles JSON parsing, provides built-in interceptors, and has better error handling for HTTP errors.
```

#### How do you make a GET request in Fetch?
```
Use the fetch function with the URL as an argument, then parse the response using .json().
```

#### What is the difference between query params and state for passing data?
```
Query params are appended to the URL and visible, while state is passed internally and not shown in the URL.
```

#### How do you pass data between pages without query params?
```
Use the state property in navigation and access it using useLocation.
```

#### What is the useNavigate hook used for?
```
For programmatic navigation, such as redirecting the user to another page.
```

#### How can you fetch data when a component loads?
```
Use the useEffect hook with an empty dependency array to run the fetch logic when the component mounts.
```

### Unit 6

#### What is Redux?
```
Redux is a state management library that provides a predictable way to manage state in JavaScript applications.
```

#### What are the key principles of Redux?
```
Single source of truth: State is stored in a centralized store.
State is read-only: The only way to change state is by dispatching actions.
Pure reducers: State updates are handled by pure functions.
``` 

#### What is a Redux action?
```
An object that describes what changes are to be made in the state.
```

#### What is a reducer?
```
A function that specifies how the state changes in response to actions.
```

#### Closures
A closure is a function that "remembers" the variables from its outer scope even after that scope has finished executing.
Why Use Closures?
1. Data Encapsulation (Hide data from the outside world).
2. Partial Application (Create specialized versions of functions).
3. Event Handling (Remember state between event executions).

### Potential Questions:

1. useState to manage counter, inc and dec
2. demonstrate how to handle events, create btn and show alert when you click
3. render list of users and allow filtering the list. use usecallback to optimize to filtering func and useMemo to memoize filtered list
4. component to display factorial, use useMemo to optimize performance
5. react context for theme switching
6. controlled form with username and pwd and validate both 
7. implement todo using useReducer(add,edit,delete)
8. custom hook that fetched data from api and demonstrates how it is re-used accross diff components
9. use fetch api or axios to get request to retrieve list of users and display
10. set up routing in react app and create links to navigate bwtween pages, passing data via url query params


### Interview Question:
 
#### JS
1. async js -> promise, then, catch, finally, promise chaining, promise.all, promise.race, custom promises, how promises solve callback hell
2. async await -> try,catch, conversion to promise and vice-versa
3. event loop, call stack, processing of events
4. generators and iterators -> yield, usage with async await
5. closure -> data encapsulation, partial application, event handling
6. prototypal inheritance -> object.create, new keyword usage working etc, __proto__
7. scope and hoisting
8. this keyword -> arrow func, method calls, func calls, bind call and apply usage
9. map, reducer, foreach, filter
10. es6 -> destructing, rest, spread, template literals, classes, import/export, arrow funcs, let const var
11. performance optimization -> bundling, dom manipulation, memory leak
12. DSA -> searching sorting

#### React
1. component lifecycle -> 
2. hooks and custom hooks
3. context api
4. data sharing without prop drilling
5. hoc
6. render props
7. error boundaries
8. performance optimization -> memo, virtualization, code splitting, profiling tools, tree shaking
9. react router and react router dom
10. global state management -> **redux**, useContext, useReducer
11. ssr optional (nextjs)
12. testing -> jest, cypress