import values from 'lodash/values';

export const selectAllProjects = state => {
  return values(state.projects);
};

export const selectUsers = state => {
  return values(state.users);
};


export const selectComments = state => {
  return values(state.comments);
};
