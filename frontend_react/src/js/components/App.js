import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import InputContainer from 'InputContainer';
import ResultContainer from 'ResultContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <InputContainer />
      </div>
    )
  }
}

const wrapper = document.getElementById("main-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
