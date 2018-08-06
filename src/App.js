import React, { Component } from 'react';

import ButtonLight from './components/ButtonLight';

import SimonLights from './components/SimonLights';


class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <SimonLights />
      </div>
    );
  }
}

export default App;
