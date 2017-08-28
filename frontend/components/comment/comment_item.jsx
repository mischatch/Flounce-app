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
    const { body, username, commentId } = this.props.comment;
    return (
      <div className="bigdiv">
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
