import React from 'react';
import Comments from './comments';
import CommentContainer from './comment_container';
import { Link } from 'react-router-dom';


class CommentItem extends React.Component {
  constructor(props){
    super(props);
  }

  deleteCommentButton(comment){
    if(this.props.currentUser && this.props.currentUser.id === comment.user_id){
      return (
        <button className="bin" onClick={() => this.deleteCommentTrigger(comment.id)}>
           <img className='trsh-bin' src="https://s3.us-east-2.amazonaws.com/clone-app-dev/trashbin.svg" />
         </button>
      )
    }
  }

  deleteCommentTrigger(commentId){
    this.props.deleteComment(commentId)
  }

  render (){
    debugger
    const { body, username, commentId, userpic, user_id } = this.props.comment;
    return (
      <div className="bigdiv">
      <div className="one-comment">
        <Link to={`/users/${user_id}`} >
        <div className="com-pic">
              <img src={userpic} />
        </div>
      </Link>
        <div className="com-text">
          <div className="com-name">
            <Link to={`/users/${user_id}`} className="UserLink">
            {username}
          </Link>
          </div>
          <div className="com-body">
            {body}
          </div>
        </div>
      </div>

      <div className="btn-to-dlt-comnt">
        <div>
          {this.deleteCommentButton(this.props.comment)}
        </div>
      </div>

      </div>
    )
  }
}

export default CommentItem;
