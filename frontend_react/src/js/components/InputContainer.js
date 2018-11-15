import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "Input";
import RepositoryList from "RepositoryList"

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Submitted: ' + this.state.value)
    event.preventDefault();
  }

  handleApiCall(searchTerm) {

  }

  render() {
    return (
      <div>
        <form id="input-form">
          <Input
            text="Search Github"
            label="search_github"
            type="text"
            id="search_github"
            value= {this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" className="btn btn-primary" value="Search" onclick={this.handleSubmit}/>
        </form>
        <RepositoryList />
      </div>
    );
  }
}

export default InputContainer;
