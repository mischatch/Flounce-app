import { connect } from 'react-redux';
import UserProject from './user_project';
import { fetchUser } from '../../actions/user_actions';
import { requestComments } from '../../actions/comment_actions';
import { selectUsersProjects } from '../../reducers/selectors';
import { withRouter } from 'react-router';
import { requestAllProjects } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: ownProps.projects,
    allProjects: state.projects,

  };
};


const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  requestComments: (projectId) => dispatch(requestComments(projectId)),
  requestAllProjects: () => dispatch(requestAllProjects()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProject));
