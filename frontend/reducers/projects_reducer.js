import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';
import { RECEIVE_USERS } from '../actions/user_actions';

import merge from 'lodash/merge';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case RECEIVE_ALL_PROJECTS:
    // case RECEIVE_USERS:
      return action.projects;
    case RECEIVE_PROJECT:
    debugger
      const newProject = {[action.project.id]: action.project};
      nextState = newProject;
      return nextState;
    case RECEIVE_LIKE:
      nextState = merge({}, state);
      nextState[action.like.project_id].liker_id.push(action.like.user_id);
      return nextState;
    case DELETE_LIKE:
      nextState = merge({}, state);
      const index = nextState[action.like.project_id].liker_id.indexOf(action.like.user_id);
      if(index >= 0){
        nextState[action.like.project_id].liker_id.splice(index, 1);
      }
      return nextState;
    default:
      return state;
  }
};

export default projectsReducer;
