import React from 'react';
import CommentFormContainer from './comment_form_container';
import merge from 'lodash/merge';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switcher = this.switcher.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.props.projectId, this.state).then(() => this.setState({
      body: '',
      project_id: this.props.projectId,
      user_id: this.props.currentUser.id,
    }));
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      body: e.currentTarget.value,
      project_id: this.props.projectId,
      user_id: this.props.currentUser.id,
    });
  }

  switcher(){
    if(this.props.currentUser){
      return(
        <div className="comment-form">
          <div>
            <form className="" onSubmit={ this.handleSubmit }>
              <textarea
                className="comment-textarea"
                id="body"
                value={ this.state.body }
                onChange={ this.handleInput } />
              <br/>
              <div className="cmnt-btn-box">
              <button className="post-a-comment">Post a Comment</button>
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      <div>
        User must be signed in to add comment!
      </div>
    }
  }
  render(){
    return (
      <div className='comment-box'>
        {this.switcher()}
      </div>
    );
  }


}

export default CommentForm;
