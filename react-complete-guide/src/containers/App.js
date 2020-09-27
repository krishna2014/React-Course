import React, { Component, useState } from 'react';
import styled from 'styled-components';
// import logo from './logo.svg';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import person from '../Components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black
  }
`;
// Class based components
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 25 },
      { id: 'id2', name: 'Manu', age: 26 },
      { id: 'id3', name: 'Stephen', age: 27 }
    ],
    otherState: 'Some other state',
    showPersons: false
  }
 
  // While assigning functions we should better use ES6 arrow functions which will resolve the this binding.
  switchHandler = (newName) => {
    // DONT do in the below way
    //this.state.persons[0].name = 'Maximilian';

    // Follow this way
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Manu', age: 26 },
        { name: 'Stephen', age: 28 }
      ]
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // (OR) const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //           (OR)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    // This below line gets executed each time the component is re rendered.
    console.log("[App.js] render");

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

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.nameChangeHandler}/>
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    /*
    * This code is for simulating an error
    */
    // const rnd = Math.random();
    // if( rnd > 0.7) {
    //   throw new Error('Something went wrong');
    // }

    return (
        <div className={classes.App}>
          <Cockpit 
          title = {this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
          {persons}
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
