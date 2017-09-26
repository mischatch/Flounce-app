import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import ProjectCreateForm from './project_create_form';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { requestAllProjects } from '../../actions/project_actions';
import { createImage } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};


const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  requestAllProjects: () => dispatch(requestAllProjects()),
  createImage: (image, projectId) => dispatch(createImage(image, projectId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectCreateForm));
