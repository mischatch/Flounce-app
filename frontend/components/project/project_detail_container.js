import values from 'lodash/values';
import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { requestSingleProject } from '../../actions/project_actions';

const mapStateToProps = ({ projects, users }) => {
  debugger
  return {
    project: values(projects),
    user: values(users),
  };
};


const mapDispatchToProps = dispatch => {
  return {
    requestSingleProject: (id) => dispatch(requestSingleProject(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
