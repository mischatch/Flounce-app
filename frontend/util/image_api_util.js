export const fetchImages = projectId => {
    return $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}/images`,
  })
};

export const fetchImage = (projectId, imageId) => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}/images/${imageId}`,
  })
);
