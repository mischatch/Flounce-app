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
      nextState = merge({}, state);
      nextState[action.like.project_id].liker_ids.push(action.like.user_id);
      return nextState;
    case DELETE_LIKE:
      nextState = merge({}, state);
      const index = nextState[action.like.project_id].liker_ids.indexOf(action.like.user_id);
      if(index >= 0){
        nextState[action.like.project_id].liker_ids.splice(index, 1);
      }
      return nextState;
    default:
      return state;
  }
};

export default projectsReducer;
