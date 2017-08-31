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
      userpic_url: this.props.currentUser.userpic_url,
    }));
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      body: e.currentTarget.value,
      project_id: this.props.projectId,
      user_id: this.props.currentUser.id,
      userpic_url: this.props.currentUser.userpic_url,
    });
  }

  switcher(){
    if(this.props.currentUser){
      return(
        <div className='comment-box'>
          <div className="comment-form">
            <form className="" onSubmit={ this.handleSubmit }>
              <div className="form-pic">
              <div className="future-comment-userpic">
                <img src={this.props.currentUser.userpic_url} />
              </div>
              <textarea
                className="comment-textarea"
                id="body"
                value={ this.state.body }
                onChange={ this.handleInput } />
            </div>
              <br/>
              <div className="cmnt-btn-box">
              <button className="post-a-comment">Post a Comment</button>
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div className="coment-alert-cont">
          <div className="comment-alert">
            User must be signed in to add comment!
          </div>
        </div>
    );
    }
  }
  render(){
    return (
      <div >
        {this.switcher()}
      </div>
    );
  }


}

export default CommentForm;
