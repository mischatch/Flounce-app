import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';

import merge from 'lodash/merge';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project};
      return merge({}, state, newProject);
    default:
      return state;
  }
};

export default projectsReducer;
