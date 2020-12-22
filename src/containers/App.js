import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id: '12adf', name:"Simon", age:36,  desc: "Father"},
        {id: '12agg', name:"Talia", age:28,  desc: "Mother"},
        {id: '12ahh', name:"Noam",  age:0.8, desc: "Son"}
      ],
      showPersons: false,
      showCockpit: true,
      authenticated: false
    }
  }

  //component hook
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');

    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameCHangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({persons: persons})
  }

  togglePersonsHandler = (event) => {
    this.setState( (previousState, props) => {
      return {
        showPersons: !previousState.showPersons
      }
    } );
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameCHangeHandler}
            isAthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button 
          onClick={
            () => {
              this.setState( (previousState, props) => {
                return {
                  showPersons: !previousState.showPersons
                }
              } );
            }
          }
        >
          Toggle Cockpit
        </button>
        <AuthContext.Provider value={ {authenticated: this.state.authenticated, login: this.loginHandler} }>
          {this.state.showCockpit ? 
              <Cockpit
                title={this.props.appTitle} 
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler}
              /> : null
          }
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;









/** EXAMPLE OF REACT HOOK COMPONENT */
// import React, { Component, useState } from 'react';
//  const app = props => {
  // const [personsState, setPersonsState] = useState({
      // persons: [
        // {name:"Simon", age:"36",  desc: "Father"},
        // {name:"Talia", age:"28",  desc: "Mother"},
        // {name:"Noam",  age:"0.8", desc: "Son"}
      // ],
      // otherState: "some other value"
    // });

    // const switchNameHandler = () => {
      // setPersonsState({persons: [
        // {name: "Simon", age:"37",  desc: "Father"},
        // {name: "Talia", age:"29",  desc: "Mother"},
        // {name: "Noam",  age:"1", desc: "Son"}
      // ],
      // /*
      //  in hooks we have to manully make sure all state value are in object to be updated or use `useState` again.
      //  better to use `useState` for every state element we need, and manage them seperetly. 
      // */
      // otherState: personsState.otherState 
    // });
  // }

  //  return (
    // <div className="App">
      {/* <h1>Hi, I'm a react app.</h1> */}
      {/* <button onClick={switchNameHandler}>Switch Name</button> */}
      {/* <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person> */}
    {/* </div> */}
  //  );
//  }

//  export default app;