import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actions from '../actions';

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
  // pair: PropTypes.arrayOf(PropTypes.string),
  vote: PropTypes.func,
  hasVoted: PropTypes.string,
  winner: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps, actions)(Voting);