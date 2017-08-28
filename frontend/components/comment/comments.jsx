import React from 'react';
import commentContainer from './comment_container';
import CommentItem from './comment_item';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {

  componentDidMount(){
    this.props.requestComments(this.props.projectId);
  }

  render() {
    const { comments } = this.props;


    return(
      <div>
        <div>
          { comments.map(comment => <CommentItem
                        key={comment.id}
                        comment={comment}
                        commentId={comment.id}
                        deleteComment={this.props.deleteComment}
                        currentUser={this.props.currentUser}/> )}
        </div>
        <CommentFormContainer
          projectId={this.props.projectId}/>
      </div>
    );
  }
}

export default Comments;
