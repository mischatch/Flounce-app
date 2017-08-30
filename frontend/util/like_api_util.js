export const createLike = (like) => (
  $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: {like},
  })
);

export const destroyLike = (likeId) => {
    debugger
    return $.ajax({
    mathod: 'DELETE',
    url: `api/likes/${likeId}`,
  })
};
