import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


// Class based components
class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 25},
      {name: 'Manu', age: 26},
      {name: 'Stephen', age: 27}
    ],
    otherState: 'Some other state'
  }

  // While assigning functions we should better use ES6 arrow functions which will resolve the this binding.
  switchHandler = (newName) => {
    // DONT do in the below way
    //this.state.persons[0].name = 'Maximilian';

    // Follow this way
    this.setState({persons: [
      {name: newName, age: 25},
      {name: 'Manu', age: 26},
      {name: 'Stephen', age: 28}
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 25},
      {name: event.target.value, age: 26},
      {name: 'Stephen', age: 28}
    ]});
  }

  render() {
    // This below line gets executed each time the component is re rendered.
    console.log("New log");

    // Inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph.</p>
        <button style={style}
        onClick={() => this.switchHandler('Maximilian!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchHandler.bind(this, 'Max!')}
        changed={this.nameChangeHandler}>
          My Hobbies: Running
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} 
        changed={this.nameChangeHandler}/>
      </div>
    );
    // The below statement will render h1 as a text but not as an element
    //return React.createElement('div', null, 'h1', 'Hi I\'m a react app');
    //This below stateent will work the exact same way as above html code
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React app'));
  }
  
}


/*
// Using react useState() hook
const App = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 25},
      {name: 'Manu', age: 26},
      {name: 'Stephen', age: 27}
    ],
    otherState: 'Some other state'
  });

  console.log('before' + JSON.stringify(personState));

  const [newStateVal, setNewState] = useState({
    newState: 'This is a new state'
  });

  console.log('after' + JSON.stringify(newStateVal));

  const switchHandler = () => {
    setPersonsState({
      persons: [
      {name: 'Maximilian', age: 25},
      {name: 'Manu', age: 26},
      {name: 'Stephen', age: 29}
      ],
      otherState: personState.otherState
    });
  };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph.</p>
        <button onClick={switchHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Running</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    // The below statement will render h1 as a text but not as an element
    //return React.createElement('div', null, 'h1', 'Hi I\'m a react app');
    //This below stateent will work the exact same way as above html code
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React app'));
  }
*/
export default App;
