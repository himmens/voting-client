import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Voting from './components/Voting';
import Results from './components/Results';
import {List, Map} from 'immutable';

class App extends React.Component {
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
    const pair = ['Trainspotting', '28 Days Later'];
    const tally = Map({'Trainspotting': 5, '28 Days Later': 4});
    const {winner} = this.state;

    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" render={() => <Voting pair={pair} vote={this.vote} winner={winner} />} />
            <Route path="/results" render={() => <Results pair={pair} tally={tally} winner={winner} />} />
            <Route render={() => <div>No route matches</div>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);