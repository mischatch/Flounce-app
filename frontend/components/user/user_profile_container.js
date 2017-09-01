import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';
import { requestAllProjects } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    user: state.users[userId],

  };
};


const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  requestAllProjects: () => dispatch(requestAllProjects()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
