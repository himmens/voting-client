import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Winner from './Winner';
import * as actions from '../actions';

class Results extends React.PureComponent {
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  render() {
    const {pair, tally, winner, next} = this.props;

    return winner ? <Winner ref="winner" winner={winner} /> :
      <div className="results">
        <div className="tally">
          {
            pair ? pair.map(entry =>
              <div key={entry}>
                <h1>{entry}</h1>
                <div className="voteCount">
                  {this.getVotes(entry)}
                </div>
              </div>
            ) : 'No pairs'
          }
        </div>
        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={next}>
            Next
          </button>
        </div>
      </div>;
  }
}

Results.propTypes = {
  // pair: PropTypes.arrayOf(PropTypes.string),
  winner: PropTypes.string,
  next: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps, actions)(Results);