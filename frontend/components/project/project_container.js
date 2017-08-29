import { connect } from 'react-redux';
import { receiveAllProjects } from '../../actions/project_actions';
import { requestComments } from '../../actions/comment_actions';
import ProjectIndex from './project_index';
import { selectAllProjects } from '../../reducers/selectors';
import { selectComments } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    projects: selectAllProjects(state),
    users: state.users,
    comments: selectComments(state.projects),
  };
};


const mapDispatchToProps = dispatch => {

  return {
    requestAllProjects: () => dispatch(requestAllProjects()),
    requestComments: () => dispatch(requestComments()),
    requestImages: () => dispatch(requestImages())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
