import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ResultList extends Component{
  constructor(props) {
    super(props);
  }

  render(){

    return (
        <ul className="resultsList">
          {this.props.repos.map((repo, key) => (
            <li className="eachRepo" key={repo.id}>
              <ul className="reposResult">
                <li key={repo.name+key}>Name: {repo.name}</li>
                <li key={repo.description}>Description: {repo.description}</li>
                <li key={repo.stars}>Number of Stars: {repo.stars}</li>
                <li key={repo.language}>Language: {repo.language}</li>
                <li key={repo.owner}>Owner: {repo.owner}</li>
              </ul>
            </li>
          ))}
        </ul>
    );
  }
}

export default ResultList;
