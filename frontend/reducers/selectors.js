import values from 'lodash/values';

export const selectAllProjects = state => values(state.entities.projects);
