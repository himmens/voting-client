import React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Switch} from 'react-router-dom';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={VotingContainer}/>
          <Route path="/results" component={ResultsContainer}/>
          <Route render={() => <div>No route matches</div>}/>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);