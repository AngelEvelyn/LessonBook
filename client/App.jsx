import React, { Component } from 'react';
import MainContainer from './Containers/MainContainer.jsx'


class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="App">
        <h1>Plan Share Grow</h1>
        <MainContainer />
      </div>
    )
  }
}

export default App;