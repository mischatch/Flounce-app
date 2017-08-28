import React from 'react';
import commentContainer from './comment_container';
import CommentItem from './comment_item';

class Comments extends React.Component {

  componentDidMount(){
    this.props.requestComments(this.props.projectId);
  }

  render() {
    const { comments } = this.props;


    return(
      <div>
        { comments.map(comment => <CommentItem
                                  key={comment.id}
                                  comment={comment} /> )}
      </div>
    );
  }
}

export default Comments;
