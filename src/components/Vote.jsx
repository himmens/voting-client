import React from 'react';
import PropTypes from 'prop-types';

class Vote extends React.PureComponent {
  render() {
    const {pair, vote, hasVoted} = this.props;
    const disabled = !!hasVoted;

    return <div className="voting">
      {pair.map(entry =>
        <button key={entry}
                disabled={disabled}
                onClick={() => vote(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>
  }
}

Vote.propTypes = {
  pair: PropTypes.arrayOf(PropTypes.string).isRequired,
  vote: PropTypes.func.isRequired,
  hasVoted: PropTypes.string,
};

export default Vote;