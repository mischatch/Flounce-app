import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const deleteLike = like => ({
  type: DELETE_LIKE,
  like,
});


export const createLike = (like) => dispatch => {
  return LikeAPIUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)));
};


export const unlikeProject = (like) => dispatch => {
  return LikeAPIUtil.destroyLike(like)
  .then(like => dispatch(deleteLike(like)));
};
