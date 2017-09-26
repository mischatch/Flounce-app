export const fetchImages = projectId => {
    return $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}/images`,
  });
};

export const fetchImage = (projectId, imageId) => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}/images/${imageId}`,
  })
);

export const createImage = (project_id, formData) => {
  return $.ajax({
    method: 'POST',
    url: `api/projects/${project_id}/images/`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  });
};
