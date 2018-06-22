import values from 'lodash/values';
import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { createLike, unlikeProject, getAllLikes } from '../../actions/like_actions';
import { projectUpdate, requestSingleProject } from '../../actions/project_actions';
import { selectLikes } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser,
    // project: ownProps.project,
    user: ownProps.user,
    projectId: ownProps.projectId,
    likes: selectLikes(state, ownProps.projectId),

  };
};


const mapDispatchToProps = dispatch => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    unlikeProject: (id) => dispatch(unlikeProject(id)),
    getAllLikes: () => dispatch(getAllLikes()),
    projectUpdate: (project) => dispatch(projectUpdate(project)),
    requestSingleProject: (id) => dispatch(requestSingleProject(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
