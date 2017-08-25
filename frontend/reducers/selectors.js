import values from 'lodash/values';

export const selectAllProjects = state => {
  return values(state.projects);
};

export const selectUsers = state => {
  return values(state.users);
};
