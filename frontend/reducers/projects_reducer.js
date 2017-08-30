import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';

import merge from 'lodash/merge';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project};
      return newProject;
    case RECEIVE_LIKE:
      debugger
    case DELETE_LIKE:
      debugger
    default:
      return state;
  }
};

export default projectsReducer;
