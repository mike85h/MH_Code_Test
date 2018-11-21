import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResultList from "./ResultList.js";

class InputContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      filter:"stars",
      result:[],
      perPage: "20",
      pageNum: "1/"
    };
  }

  handleSubmit = () => {
    if(this.searchText==""){
      alert("You must enter text in the search field.");
    }else{
      let searchText = this.state.searchText;
      let filter = this.state.filter;
      let perPage = this.state.perPage;
      let pageNum = this.state.pageNum;
      let url = `http://localhost:3000/?searchText=${searchText}&filter=${filter}&perPage=${perPage}&pageNum=${pageNum}`;
      let resultArray = [];

      fetch(url)
        .then(res => res.json())
        .then(data => {
          for(let i=0; i<(data.items.length); i++){
            let prefix = data.items[i];
            resultArray.push({
                        id:prefix.id,
                        name:prefix.name,
                        description:prefix.description,
                        stars:prefix.stargazers_count,
                        language:prefix.language,
                        owner:prefix.owner.login
                        });
          }
          this.setState({result:resultArray});
        })
        .catch((error) => {
          alert("Something went wrong. Please resend the search.");
        })
        event.preventDefault();
    }
  };

  onChange = () => {
    this.setState({searchText: event.target.value});
    console.log(this.state.searchText);
  };

  handleChange = () => {
    this.setState({filter: event.target.value})
    console.log(this.state.filter);
  };

  render() {

    return (
      <div id="mainAppSection">
        <input className="searchText" type="text" onChange={this.onChange} autoFocus required/>
        <label className="mainSelectLabel" htmlFor="filter">Filter By:</label>
        <select id="filter" className="mainSelect" value={this.state.filter} onChange={this.handleChange}>
          <option className="selectOption" value="">Stars</option>
          <option className="selectOption" value="stars">Relevance</option>
        </select>
        <input className="searchButton" type="submit" value="Search" onClick={this.handleSubmit} />
        <section className="resultList">
          <ResultList repos={this.state.result}/>
        </section>
      </div>
    );
  }
}

export default InputContainer;
