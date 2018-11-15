import React, { Component } from 'React';
import ReactDOM from 'react-dom';

class RepositoryList extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render(){
      const { repository } = this.props;
      return (
        <div>
         <Table responsive>
              <thead>
                <tr>
                  <th>Repository Name</th>
                  <th>Description</th>
                  <th># of Stars</th>
                  <th>Repo Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{repository.Name}</td>
                  <td>{repository.Description}</td>
                  <td>{repository.Stars}</td>
                  <td>{repository.Owner}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
  }

}

export default RepositoryList;
