import values from 'lodash/values';
import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { createLike, unlikeProject } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    project: ownProps.project,
    user: ownProps.user,
    projectId: ownProps.projectId,

  };
};


const mapDispatchToProps = dispatch => {
  debugger
  return {
    createLike: (like) => dispatch(createLike(like)),
    unlikeProject: (id) => dispatch(unlikeProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
