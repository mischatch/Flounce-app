import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const deleteLike = like => ({
  type: DELETE_LIKE,
  like,
});

export const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes,
});


export const createLike = (like) => dispatch => {
  return LikeAPIUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)));
};


export const unlikeProject = (like) => dispatch => {
  return LikeAPIUtil.destroyLike(like)
  .then(like => dispatch(deleteLike(like)));
};

export const getAllLikes = () => dispatch => {
  return LikeAPIUtil.fetchLikes()
    .then(likes => dispatch(receiveAllLikes(likes)));
};
