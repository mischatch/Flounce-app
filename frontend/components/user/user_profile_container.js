import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';
import { requestAllProjects } from '../../actions/project_actions';
import { updateUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    currentUser: state.session.currentUser,
    user: state.users[userId],
    images: state.images,
  };
};


const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  requestAllProjects: () => dispatch(requestAllProjects()),
  updateUser: user => dispatch(updateUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
