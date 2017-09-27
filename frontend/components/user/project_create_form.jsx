import React from 'react';
import AddImageContainer from './add_image_container';


class ProjectCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      title: '',
      description: '',
      imageUrls: '',
    };


    this.arg = true;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = props.closeModal.bind(this);
    this.renderUpload = this.renderUpload.bind(this);
    this.textOrPhoto = this.textOrPhoto.bind(this);
  }



  handleInput(e) {
    e.preventDefault();
    if(e.currentTarget.name === "title"){
      this.setState({
        title: e.currentTarget.value,
    });
    } else if (e.currentTarget.name === "description") {
      this.setState({
        description: e.currentTarget.value,
      });
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state).then(() => this.setState({
      project: {
        user_id: null,
        title: '',
        description: '',
        imageUrls: [],
      }}));
      this.arg = false;
  }

  renderUpload(){
    return (
      <div>
        <AddImageContainer
          closeModal={this.closeModal}
          imageAdded={this.props.imageAdded} />
      </div>
    )
  }

  textOrPhoto(){
    if(this.arg === true){
      return (
        <div className='text-form'>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className='text-inputs'>
              <h2>Project Title</h2>
              <input name="title" type='text' value={this.state.title} onChange={this.handleInput} />
              <h2>Project Description</h2>
              <textarea className='description' name="description" type='text' value={this.state.description} onChange={this.handleInput} />
            </div>
            <div className='button-cont'>
              <button>Create Project</button>
            </div>
          </form>
        </div> )
    } else {
      return (
        <div>
          { this.renderUpload() }
        </div>
      )
    }
  }



  render() {
    return (
      <div>
        <div className='add-project-header'>
          <div className='add-text-description'><h1 className={this.arg === true ? 'active' : 'inactive'}>1. Title and description</h1></div>
          <div className='add-images'><h1 className={this.arg === true ? 'inactive' : 'active'}>2. Add images</h1></div>
        </div>
        { this.textOrPhoto() }

      </div>
    )
  }
}

export default ProjectCreateForm;
