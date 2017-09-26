import { connect } from 'react-redux';
import CreateProject from './create_project';
import { createProject } from '../../actions/project_actions';
import { fetchUser } from '../../actions/user_actions';
import { requestAllProjects } from '../../actions/project_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};


const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  requestAllProjects: () => dispatch(requestAllProjects()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
