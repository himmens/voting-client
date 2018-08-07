import React from 'react';
import { hot } from 'react-hot-loader';
import Voting from './components/Voting';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {winner: null};
    this.vote = this.vote.bind(this);
  }

  vote(entry) {
    console.log("vote", entry);
    this.setState({winner: entry});
  }

  render() {
    const pair = ['Trainspotting', Math.floor(Math.random() * 100) + ' Days Later'];
    const {winner} = this.state;

    return (
      <div className="App">
        <Voting pair={pair} vote={this.vote} winner={winner} />
      </div>
    );
  }
}

export default hot(module)(App);