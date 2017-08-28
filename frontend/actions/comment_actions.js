import * as CommentAPIUtil from '../util/comment_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});


export const requestComments = projectId => dispatch => {
  return CommentAPIUtil.fetchComments(projectId)
  .then(comments => dispatch(receiveComments(comments)));
};

export const deleteComment = (commentId) => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
  .then(comment => dispatch(removeComment(comment)));
};

export const createComment = (projectId, comment) => dispatch => {
  return CommentAPIUtil.createComment(projectId, comment)
  .then(comment => dispatch(receiveComment(comment)),
            err => (dispatch(receiveErrors(err.responseJSON))));
};
