import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: 'Hello' }
  }

  componentDidMount(){
    fetch('/api', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if(!response.ok){
        console.log('app crash');
        return;
      }

      response.json().then(json => {
        this.setState({ data: json.data });
      }).catch(error => {
        console.log(error);
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.data}
        </header>
      </div>
    );
  }
}

export default App;
