import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Life Cycle</h2>
        </header>
        <Body></Body>
      </div>
    );
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


class Body extends Component {
  constructor(props){
    super(props); 
    this.state = {
      rand: 0
    }; 
    this.getRandNum = this.getRandNum.bind(this); 
}
getRandNum(){
 // console.log("Random pressed");
    this.setState({rand: getRandomInt(1, 100) })
}


  render(){
    return(
    <div>
      <br></br>
    <button class="button" onClick={this.getRandNum}> Issa Button (Random Number)</button>
    <Numbers myNumber={this.state.rand}></Numbers>
    </div>
   );
  }
}


class Numbers extends Component {
  render(){
    return(
    <div> 
      <br />
      {this.props.myNumber}
    </div>
    );
  }
}

export default App;
