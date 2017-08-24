import { connect } from 'react-redux';
import { receiveAllProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    projects: selectAllProjects(state),
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = dispatch => {
  debugger
  return {
    requestAllProjects: () => dispatch(requestAllProjects())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
