import { connect } from 'react-redux';
import Comments from './comments';
import { selectComments } from '../../reducers/selectors';
import { requestComments } from '../../actions/comment_actions';


const mapStateToProps = state => {
  return {
    comments: selectComments(state),

  };
};

const mapDispatchToProps = dispatch => {

  return {
    requestComments: (id) => dispatch(requestComments(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
