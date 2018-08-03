import React from 'react';
import {hot} from 'react-hot-loader';
import Voting from './components/Voting';

class App extends React.Component {
  render() {
    const pair = ['Trainspotting', '28 Days Later'];
    return (
      <div className="App">
        <Voting pair={pair}/>,
      </div>
    );
  }
}

export default hot(module)(App);