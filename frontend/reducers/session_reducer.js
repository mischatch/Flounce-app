import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    // case RECEIVE_USER:
      return merge({}, nullUser, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, { errors: action.errors });
    case CLEAR_ERRORS:
      return merge({}, nullUser, { errors: [] });
    default:
      return state;
  }
};

export default SessionReducer;
