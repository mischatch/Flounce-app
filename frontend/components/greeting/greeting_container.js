
import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => {
  let pic = '';
  if (state.session.currentUser === null){
    pic = '';
  } else if (state.users[state.session.currentUser.id] === undefined){
    pic = state.session.currentUser.userpic;
  } else if (state.users[state.session.currentUser.id]) {
    pic = state.users[state.session.currentUser.id].userpic;
  }
  if (state.session.currentUser === null){
    return {
      currentUser: state.session.currentUser,
    };
  } else {
    return {
      currentUser: state.session.currentUser,
      picUrl: pic,
    };
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
