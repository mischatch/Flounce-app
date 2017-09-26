import { connect } from 'react-redux';
import AddImage from './add_image';
import { uploadImage } from '../../actions/image_actions';


const mapStateToProps = state => {
  const last = Object.keys(state.projects)[Object.keys(state.projects).length - 1];
  return {
    current_user: state.session.currentUser,
    LastProject: state.projects[last].id,
    images: state.images,
  };
};


const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  requestAllProjects: () => dispatch(requestAllProjects()),
  uploadImage: (projectId, image) => dispatch(uploadImage(projectId, image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
