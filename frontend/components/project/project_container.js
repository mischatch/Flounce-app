import { connect } from 'react-redux';
import { receiveAllProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    projects: selectAllProjects(state),
    users: state.users,
  };
};


const mapDispatchToProps = dispatch => {

  return {
    requestAllProjects: () => dispatch(requestAllProjects())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
