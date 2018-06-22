import { RECEIVE_LIKE, DELETE_LIKE, RECEIVE_ALL_LIKES } from '../actions/like_actions';

import merge from 'lodash/merge';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_LIKE:
      const newLike = {[action.like.id]: action.like};
      return merge({}, state, newLike);
    case DELETE_LIKE:
      nextState = merge({}, state);
      delete nextState[action.like.id];
      return nextState;
    case RECEIVE_ALL_LIKES:
      nextState = merge({}, action.likes, state);
      return nextState;
    default:
      return state;
  }
};

export default likesReducer;
