import React from 'react';
import Comments from './comments';
import CommentContainer from './comment_container';


class CommentItem extends React.Component {
  constructor(props){
    super(props);
  }

  deleteCommentButton(comment){
    if(this.props.currentUser && this.props.currentUser.id === comment.user_id){
      return (
        <button onClick={() => this.deleteCommentTrigger(comment.id)}> delete comment </button>
      )
    }
  }

  deleteCommentTrigger(commentId){
    this.props.deleteComment(commentId)
  }

  render (){
    const { body, username, commentId } = this.props.comment;
    return (
      <div className="one-comment">
        <div className="com-pic">

        </div>
        <div className="com-text">
          <div className="com-name">
            {username}
          </div>
          <div className="com-body">
            {body}
          </div>
        </div>
          <div>
            {this.deleteCommentButton(this.props.comment)}
          </div>

      </div>
    )
  }
}

export default CommentItem;
