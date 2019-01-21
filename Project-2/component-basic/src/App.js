import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props); 
    this.yourname = "Brad";
    this.state = {}; 
  }

  helloFunction(name){
    return " and " + name;
  }

  render() {
    const myName = "Mikyla";
    return (
      
      <div className="App">
     <h2>Hello World {this.helloFunction(myName)} {this.helloFunction(this.yourname)}</h2>
      </div>
    );
  }
}

export default App;
