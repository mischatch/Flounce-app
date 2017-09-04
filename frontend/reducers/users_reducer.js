import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    // case RECEIVE_ALL_PROJECTS:
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_PROJECT:
      const newProject = {[action.user.id]: action.user};
      return newProject;
    case RECEIVE_USER:
      const user = {[action.user.id]: action.user};
      return merge({}, state, user);

    default:
      return state;
  }
};

export default usersReducer;
