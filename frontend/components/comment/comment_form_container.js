import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, deleteComment } from '../../actions/comment_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    projectId: ownProps.projectId,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    createComment: (projectId, comment) => dispatch(createComment(projectId, comment)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
