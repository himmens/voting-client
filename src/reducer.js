// import { INITIAL_STATE, next, setEntries, vote } from './core';
import { Map } from 'immutable';

export default function reducer(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return state.merge(action.state);
  }
  // switch (action.type) {
  //   case 'SET_ENTRIES':
  //     return setEntries(state, action.entries);
  //   case 'NEXT':
  //     return next(state);
  //   case 'VOTE':
  //     return state.update('vote', voteState => vote(voteState, action.entry));
  // }
  return state;
}