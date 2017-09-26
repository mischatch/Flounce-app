import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});


export const requestImages = projectId => dispatch => {
  return ImageAPIUtil.fetchImages(projectId)
  .then(images => dispatch(receiveImages(images)));
};

export const requestImage = (projectId, imageId) => dispatch => {
  return ImageAPIUtil.fetchImage(imageId)
  .then(image => dispatch(receiveImage(image)));
};

export const uploadImage = (projectId, image) => dispatch => {
  return ImageAPIUtil.createImage(projectId, image)
  .then(image => dispatch(receiveImage(image)));
};
