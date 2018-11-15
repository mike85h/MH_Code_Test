import React, { Component } from "react";
import ReactDOM from "react-dom";

class InputContainer extends Component {
  state = {
    searchTerm: "",
    filter:"stars",
    result: ""
  };

  appendResults = () => {
    console.log("appendResults");
  }

  handleSubmit = () => {
    fetch(`http://localhost:3000/${this.state.searchTerm}/${this.state.filter}`)
      .then(res => res.json())
      .then(data => {
        this.setState({result: data.items});
        console.log(this.state.result);
      })
      .catch((error) => {
          alert("Something went wrong. Please resend the search.")
          console.log(`error: ${error}`);
      })
    event.preventDefault();
  }

  onBlur = () => {
    this.setState({searchTerm: event.target.value, });
  }

  render() {
    return (
      <div>
        <input type="text" onBlur={this.onBlur}/>
        <input type="submit" value="Search" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default InputContainer;
