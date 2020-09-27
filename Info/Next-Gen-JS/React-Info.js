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

/*
================ Rendering the content conditionally
* We can render the content dynamically to the DOM similar to other frameworks like angular, vue etc.
* JSX supports writing condtional expressions within the code.
* we can write ternary expressions in the JSX code.

** Ex: Using a ternary condition for condtional rendering
{
    this.state.showPersons ?
    <div>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      />
    </div> : null
}

** We cannot write block statements within the conditional code.
Ex: Below code is invalid
{
    if() {
      <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        />
      </div> : null
    }
}


=====> We can render the content dynamically by not placing the condition  within the JSX code, but
we can do it within in the render function.
Ex:

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph.</p>
        <button style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
*/

/*
============ Outputting lists
render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
         {
            this.state.persons.map((person, index) => {
              return <Person name={person.name}
                  age={person.age} 
                  click={() => this.deletePersonHandler(index)}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph.</p>
        <button style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }

** We should always update the state in an immutable fashion without mutating the original state.
* First create a copy of the existing state and then update it and then set it.
* We should always add a key prop while rendering the lists of data. If we don't add a key prop, react will throw
a warnin message. If we don't assign a key prop to the list elements, react will re render the entire list of elements when
the render function is called. If we assign the key prop, then react will only render the elements that are
required to change which will help in fast rendering process.


Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html
Lists & Keys: https://reactjs.org/docs/lists-and-keys.html

*/

/*
========================= Styling react components and elements
* We can create styles as javascript objects within the jsx code and assign them to the required elements.
* We can also assign the styles dynamically based on a condition.
* In order to avoid the issues with pseudo selectors, i.e, if we want to assign a hover style of a specific button,
it will be applied to all the buttons in the application. To avoid this we can use npm module called Radium.
* Within the style object we can write the hover functionality and Radium will take care of applying the hover
* only to that specific button.
* We can also use media queries with Radium and when using media queries, the entire component need to be wrapped
* inside the StyleRoot component.
* Radium is a higher order component.
* Ex: All above ponints are described in the below example.
render() {
    // Inline style
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                  key={person.id}
                  name={person.name}
                  age={person.age} 
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}/>
            })
          }
          style.backgroundColor = 'red';
          style[':hover'] = {
            backgroundColor: 'lightred',
            color: 'black'
          }
        }
    
        const classes = [];
        if(this.state.persons.length <= 2) {
          classes.push('red');
        }
        if(this.state.persons.length <= 1) {
          classes.push('bold');
        }
    
        return (
         <StyleRoot>
          <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is a paragraph.</p>
            <button style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
          </div>
        </StyleRoot>
      );
    }  
  }
  export default Radium(app);


Using CSS Modules in create-react-app Projects: https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
More information about CSS Modules: https://github.com/css-modules/css-modules
*
*/

/*
* ================= Debugging React Apps =======================
* We can debug react apps more efficiently using the React Developer tools plugin.
* Whenever we encounter an error, we can set up an error boundary which is a global component which shows the error message.
* We need wrap our required component with this error boundary component.
* Within the component, we have a method called componentDidCatch() which gets executed whenever the component
we wrap with this erroBoundary component throws an error.
Ex:
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }
    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}

Wrapping other components with this error boundary:
Ex:
 return <ErrorBoundary key={person.id}><Person
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          </ErrorBoundary>
* It is not suggested to use error boundaries everywhere in our application. Use it where we think that the errors
cannot be controlled by us i.e, unkonwn error might occur.

Error Boundaries: https://reactjs.org/docs/error-boundaries.html
Chrome Devtool Debugging: https://developers.google.com/web/tools/chrome-devtools/javascript/
*/

//Comparing stateless and statefull components
/*
* A functional component that manages its own state with use state (useState()) is also a statefull component.
* Statefull component does not always need to be a class based component. Using react hooks, we can maintain state
in functional components as well.
* We can use useState() hook to manage state in functional components.
* Before react 16.8 version, functional components cannot manage state. After 16.8, they can manage state with hooks.
*/

// Class based vs Functional components
/*
class based :
-> These are the components that extend the React Component object
class xyz extends React.component{

}
-> They can manage state and have access to state and life cycle hooks.
-> Since state and props are the properties of the component class, we need to access them via "this" word.
->  If the react version doesn't support hooks and we want to manage state and life cycle hooks, then we can use class based components.
-> In class based components, we can use this.props to access the props that are passed to our component. 
Ex: {this.props.name}


function based:
-> These are just js functions that receive props and return some jsx code.
const xyz = props => {...}
-> Before react hooks, these couldn't manage hooks. After react hooks, they can manage state with useState() hooks.
-> Lifecycle hooks are still not supported.
-> In functional components, we get props like argument, and we use it as it is.
-> If the react version does support hooks, then it is suggested to use functional components as much as possible.
-> If the react version doesn't support hooks, then use functional components for all the presentational components.
*/

// Component Lifecycle
/*
-> Component lifecycle is only available in class based components.
-> Functional components has lifecycle equivalent methods given by hooks.
-> The following are the lifecycle methods.
constructor()
getDerivedStateFromProps()
getSnapShotBeforeUpdate()
componentDidCatch()
componentDidMount()
componentDidUpdate()
shouldComponentUpdate()
componentWillUnmount()
render()
-> These lifecycle methods run at different points of time and we can do different things with them like
fetching data from the web before rendering the component or do some cleanup before the component is removed from DOM.

Order of execution of lifecycle methods.

Component Lifecycle: creation
1. constructor()  
  => this is not a react lifecycle method but it is default es6 class feature.
  writing a constructor method is optional, but if we write it we need to call super(props).
  We can do all the initialization work and setup the state.

2. getDerivedStateFromProps(props, state)
  => This lifecycle hook was added in React 16.3
  => Whenever the props change, and we want to update the interal state of the component, then we should use this hook.
  => Used for syncing the state.

3. render()
  => This method prepares and structures our jsx code and should be used only for rendering.
  => We should not make any httpcalls or timeouts with in the render method.
  => If we render other components wihtin this parent component, then the child components will render after this.
  => Once all the child components render method is finished and current render is finished, componentDidMount() is called.

4. componentDidMount()
  => It is a very important lifecycle method and is used very often.
  => In this mehtod, we can make side effects like making httpcalls etc.
  => We should not do the update the state i.e, we should not call setState() unless  if it is in a then block of promise.



*/