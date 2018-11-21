import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputContainer from "./InputContainer.js";
import Title from './Title.js'

class App extends Component {

  render(){
    return(
      <div>
        <Title />
        <InputContainer />
      </div>
    )
  }
}

export default App;
