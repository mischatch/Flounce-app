import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';
// import { requestComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    user: state.users[userId],

  };
};


const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  // requestComments: () => dispatch(requestComments()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
