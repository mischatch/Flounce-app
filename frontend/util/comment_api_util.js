export const fetchComments = projectId => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}/comments`,
  })
);

export const createComment = (projectId, comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/projects/${projectId}/comments`,
    data: { comment }
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  });
};
