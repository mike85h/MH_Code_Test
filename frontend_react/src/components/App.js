import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputContainer from "./InputContainer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div className="container">
        <InputContainer />
      </div>
    )
  }
}

export default App;
