/*
=========================== Creating a Component in React =========================================
* For creating a component in react, we need to import the react and Component class dependency from 
* react libraray.
* Ex:
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
      </div>
    );
  }
}
export default App;

* The Component class has method called render().
* We need to have render method because react will call this render() method to render something on the screen.
* Every React component has to return or render some html code which can be rendered to the DOM on the screen.
* We then export the above App class as the default export which can be imported in other files and classes.

*The same above react element can also be achieved using React.createElement() function.

  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React app'));

*/

/*
Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } } 
We'll of course dive into the difference throughout this course, you can already note that you should use 1) as often as possible though. It's the best-practice.

*/

/*
==================== Outputting the dynamic content ===================================
We can render dynamic content to the dom by enclosing the value in curly braces {}.
Ex:
const person = () => {
return <p>I'm a person and I'm {Math.floor(Math.random() * 30
    )} years old.</p>;
}

* Here age will be replaced dynamically.
* We can't define the js classes within the braces.
* We can execute one line expressions or call functions.

--> We can also output dyamic content using props.
Ex:
const person = (props) => {
    return <p>I'm {props.name} and I'm {props.age} years old.</p>
}
Ex: Usage in other components.
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph.</p>
        <Person name="Max" age="25"/>
        
        <Person name="Stephen" age="27"/>
      </div>
    );
  }
  
}

=============== Using children property from props
* childeren property refers to any elements between the opening and closing tag of our component.
Ex: <Person name="Manu" age="26">My Hobbies: Running</Person>
Here childern refers to the text 'My Hobbies: Running'.
* we can also nest complex html components within the opening and closing tag of our component.

--> When using class based components we should use this.props.
*/

/*
================ Understanding and using the State
* The state property can be created and used only in the components which extends the base Component class.
* We cannot use state property in the function components.
Ex: Like the below component
const person = (props) => {
    return <p>I'm {props.name} and I'm {props.age} years old.</p>
}
* props are set and passed from outside a component where it is used.
Ex: <Person name="Max" age="28"/>
* State is managed from inside a component.
*/

/*
================ Handling events with methods
* In order to handle the on click of a button, in normal js or html, it will be onclick(), but in react JSX
* it will be handled by onClick()  function with a capital C.

** We can't directly modify the data within the state by assigning values to it directly.
Ex: this.state.persons[0].name = 'Maximilian';

** We should always, use the setState() method to modify the state values.
** The setState() will merge the new data with the existing data in the state.
** If the key name is same, it will override the existing data with the same key.
Ex: this.setState({persons: [
      {name: 'Maximilian', age: 25},
      {name: 'Manu', age: 26},
      {name: 'Stephen', age: 28}
    ]});

** If state changes or props changes, react will re render the DOM wherever it is required.
*/

/*
================ Working with React hooks
* It is basically a collection of functions, exposed by react which we can use in functional components.
* With the help of hooks, we can even change the state in functional components as well.
* All the hooks start with use keyword.
* useState is the hook that allows us to manage state in a functional component.
* The useState() hook returns an array with exactly two elements.(always two elements)
* The first element of the array is always the current state i.e, whatever data we pass as the state
* and the second element will always be a function that allow us to update this state such that react is aware
* of it and re render the corresponding component. This is equal to the setState() method in class baseed components.
*** However, unlike the setState() method in class based components, the method provided by useState hook, does not
    merge the new state data to the previous state data, instead it overrides the existing state with new state.
** If we still want to persist the old data, we should expilictly pass it along with the changed data.
** We can use the useState() method multiple times to with different state slices to handle the above scenario.
Ex:
const [personState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 25},
      {name: 'Manu', age: 26},
      {name: 'Stephen', age: 27}
    ],
    otherState: 'Some other state'
  });

*/

/*
================ Stateless vs Statefull components
* Stateful components are the components that manages state, no matter it is using a class based approach or hook
based approach.
* Stateless components are the components which dont have internal state management.
* It is a good practise to create as many as stateless components. Stateless components are also called 
as dumb components or presentational components.
* The stateful components are also called as smart components or conainer components.
* It is always better to use very less statefull components so that it is easy to maintain and we know where
to make changes.
*/

/*
============ Passing method references between components
* We can also pass function references within the props to the components so that it can be called from the
component which doesn't have direct access to the function.
* It is a common practise to pass down the click handlers which allow us to change the data in the parent component.


*/

/*
create-react-app: https://github.com/facebookincubator/create-react-app
Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
Rendering Elements: https://reactjs.org/docs/rendering-elements.html
Components & Props: https://reactjs.org/docs/components-and-props.html
Listenable Events: https://reactjs.org/docs/events.html
*/