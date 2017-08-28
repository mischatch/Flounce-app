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
    this.setState({
      body: e.currentTarget.value,
      project_id: this.props.projectId,
      user_id: this.props.currentUser.id,
    });
  }

  render(){

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <textarea
            id="body"
            value={ this.state.body }
            onChange={ this.handleInput } />
          <button>leave comment</button>
        </form>
      </div>
    );
  }


}

export default CommentForm;
