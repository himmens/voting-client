import React from 'react';
import PropTypes from 'prop-types';
import './Vote.css';
import classNames from 'classnames';

class Vote extends React.PureComponent {
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    const {pair, vote, hasVoted} = this.props;
    const disabled = !!hasVoted;

    return <div className="voting">
      {
        pair ? pair.map(entry =>
          <button key={entry}
                  className={classNames({voted: this.hasVotedFor(entry)})}
                  disabled={disabled}
                  onClick={() => vote(entry)}>
            <h1>{entry}</h1>
          </button>
        ) : 'No pairs'
      }
    </div>
  }
}

Vote.propTypes = {
  // pair: PropTypes.arrayOf(PropTypes.string),
  vote: PropTypes.func.isRequired,
  hasVoted: PropTypes.string,
};

export default Vote;