export const createLike = (like) => (
  $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: {like},
  })
);

export const destroyLike = (projectId) => {
    return $.ajax({
    method: 'DELETE',
    url: `api/likes/${projectId}`,
  });
};

export const fetchLikes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/likes'
  })
);
