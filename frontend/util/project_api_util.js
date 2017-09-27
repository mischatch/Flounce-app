export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const fetchSingleProject = id => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);

export const createProject = ( project ) => {
  return(
  $.ajax({
    method: 'POST',
    url: '/api/projects/',
    data: { "project": project },
  })
);
};
