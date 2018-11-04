import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';


class App extends Component {

  state = {
    series: ["kill bill","kill bill2","Titanik"]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            Tv series
          </p>
        
        </header>

        <Intro message="Here u can find all of your loved series" />
        the length of series array: {this.state.series.length}
      </div>
    );
  }
}

export default App;
