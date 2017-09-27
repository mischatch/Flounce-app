import values from 'lodash/values';
import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { createLike, unlikeProject } from '../../actions/like_actions';
import { selectLikes } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    project: ownProps.project,
    user: ownProps.user,
    projectId: ownProps.projectId,
    likes: selectLikes(state),

  };
};


const mapDispatchToProps = dispatch => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    unlikeProject: (id) => dispatch(unlikeProject(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
