import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>{this.props.propNum}</h3>
          <h3>{this.props.propString}</h3>
          <h3>{this.props.propObject.obj1}</h3>
          <h3>{this.props.propObject.obj2}</h3>
          <h3>{this.props.propObject.obj3}</h3>
        <Parent></Parent>
      </div>
    );
  }
}


App.propTypes = {
  propObject: PropTypes.object, 
  propString: PropTypes.string ,
  propNum: PropTypes.number

}

App.defaultProps = {
  propNum: 3,
  propString: "Anything",
  propObject:{
    obj1: "Obj1",
    obj2: "Obj2",
    obj3: "Obj3"
  }
}

class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: ['1.Chevy', "2.Uh", '3.Something']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState( {cars: this.state.cars.reverse()});
  }

  render(){
    return(
      <div> 
        <h1>PARENT</h1> 
        <button onClick={this.handleClick}>Reverse State</button> 
        <Cars msg="Like Tomater but without the Tow." model="8675309" coolcars={this.state.cars}/>
        <Cars msg="LIFE IS A HIGHWAY" model="66" coolcars={this.props.cars} />
      </div>);
    }
  }

  Parent.defaultProps = {
    cars:['BMW', "MERC", 'VW']
  }

class Cars extends Component {
  render(){
    return(
    <div>
    <h2>I am Lightning Mcqueen</h2>  
    <p>{this.props.msg}</p>
    <p>Model Number: {this.props.model}</p>

    <div>{this.props.coolcars.map((item, i) => {
            return <p key={i}>{item}</p> ;
          })}</div>

          
    </div>
    
    );
  }
}






export default App;
