import React from 'react';
import CommentFormContainer from './comment_form_container';
import merge from 'lodash/merge';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
      debugger
    this.state = {
      body: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.createComment(projectId, this.state);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  render(){

    debugger
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
