import React, { Component } from 'react';

import Intro from '../Intro';
import Series from '../../containers/Series';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            Tv series
          </p>
        
        </header>

        <Intro message="Here u can find all of your loved series" />
        
        <Series />
      </div>
    );
  }
}

export default App;
