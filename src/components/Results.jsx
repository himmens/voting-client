import React from 'react';
import PropTypes from 'prop-types';
import Winner from './Winner';

class Results extends React.PureComponent {
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  render() {
    const {pair, winner, next} = this.props;

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
  pair: PropTypes.arrayOf(PropTypes.string),
  winner: PropTypes.string,
  next: PropTypes.func,
};

export default Results;