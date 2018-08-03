import React from 'react';

export default function Voting(props) {
  const {pair} = props;

  return <div className="voting">
    {pair.map(entry =>
      <button key={entry}>
        <h1>{entry}</h1>
      </button>
    )}
  </div>;
};