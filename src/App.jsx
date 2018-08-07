import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';
import { Map } from 'immutable';

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
          <hr />
          <Switch>
            <Route exact path="/" component={VotingContainer} />
            <Route path="/results" component={ResultsContainer} />
            <Route render={() => <div>No route matches</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);