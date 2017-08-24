import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllProjects = ({projects, users}) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects,
  users
});

export const receiveProject = ({project, user}) => ({
  type: RECEIVE_PROJECT,
  project,
  user
});



export const requestAllProjects = () => dispatch => {
  return ProjectAPIUtil.fetchProjects()
    .then(projects => dispatch(receiveAllProjects(projects)));
};

export const requestSingleProject = id => dispatch => {
  return ProjectAPIUtil.fetchSingleProject(id)
    .then(project => dispatch(receiveProject(project)));
};

export const createProject = project => dispatch => {
  return ProjectAPIUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)));
};
