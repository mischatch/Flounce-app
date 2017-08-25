import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';

import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_PROJECTS:
      return action.users;
    case RECEIVE_PROJECT:
      const newProject = {[action.user.id]: action.user};
      return newProject;
    default:
      return state;
  }
};

export default usersReducer;
