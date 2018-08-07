import React from 'react';
import PropTypes from 'prop-types';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends React.PureComponent {
  render() {
    const {winner} = this.props;

    return <div>
      {
        winner ?
          <Winner ref="winner" winner={winner} /> :
          <Vote {...this.props} />
      }
    </div>;
  }
}

Voting.propTypes = {
  pair: PropTypes.arrayOf(PropTypes.string),
  vote: PropTypes.func,
  hasVoted: PropTypes.string,
  winner: PropTypes.string,
};

export default Voting;