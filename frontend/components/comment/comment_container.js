import { connect } from 'react-redux';
import Comments from './comments';
import { selectComments } from '../../reducers/selectors';
import { requestComments, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = state => {
  return {
    comments: selectComments(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestComments: (id) => dispatch(requestComments(id)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
