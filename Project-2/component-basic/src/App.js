import React, { Component } from 'react';
import './App.css';

function timeTick(){
  const element = (
    <div> 
      <h1>The Time is</h1>
      <h2>time: {new Date().toLocaleTimeString} </h2>
    </div>
  );
}

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
