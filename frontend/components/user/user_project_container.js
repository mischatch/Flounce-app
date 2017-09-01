import { connect } from 'react-redux';
import UserProject from './user_project';
import { fetchUser } from '../../actions/user_actions';
import { requestComments } from '../../actions/comment_actions';
import { selectUsersProjects } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    projects: ownProps.projects,
    allProjects: state.projects,
  
  };
};


const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  requestComments: (projectId) => dispatch(requestComments(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProject);
