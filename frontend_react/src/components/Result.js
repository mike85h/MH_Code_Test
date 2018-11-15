import React, { Component } from 'React';
import ReactDOM from 'react-dom';

class Result extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
      return (
        <tr>
          <td>{this.repository.Name}</td>
          <td>{this.repository.Description}</td>
          <td>{this.repository.Stars}</td>
          <td>{this.repository.Owner}</td>
        </tr>
      );
  }

}

export default Result;
