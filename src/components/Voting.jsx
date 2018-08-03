import React from 'react';
import PropTypes from 'prop-types';

function Voting(props) {
  const {pair} = props;

  return <div className="voting">
    {pair.map(entry =>
      <button key={entry}>
        <h1>{entry}</h1>
      </button>
    )}
  </div>;
};

Voting.propTypes = {
  pair: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Voting;