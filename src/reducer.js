import { Map } from 'immutable';

export default function reducer(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'VOTE':
      return vote(state, action.entry);
  }
  return state;
}

function setState(state, newState) {
  state = state.merge(newState);
  // reset hasVoted flag
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair']);
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  } else {
    return state;
  }
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  } else {
    return state;
  }
}