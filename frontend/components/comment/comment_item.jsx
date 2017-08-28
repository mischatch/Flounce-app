import React from 'react';
import Comments from './comments';
import CommentContainer from './comment_container';

class CommentItem extends React.Component {

  render (){
    debugger
    const { body, username } = this.props.comment;
    return (
      <div>
        <span>{body}</span>
        <span>{username}</span>
      </div>
    )
  }
}

export default CommentItem;
