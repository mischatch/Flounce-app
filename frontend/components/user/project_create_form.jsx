import React from 'react';
import AddImageContainer from './add_image_container';

class ProjectCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: {
      user_id: null,
      title: '',
      description: '',
      imageUrls: '',
    },
  image: {
    project_id: null,
    image_urls: [],
  }};


  this.arg = true;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = props.closeModal.bind(this);
    this.renderUpload = this.renderUpload.bind(this);
  }



  handleInput(e) {
    e.preventDefault();
    this.setState({ project: {
      user_id: this.props.currentUser.id,
      title: e.currentTarget.value,
      description: e.currentTarget.value,
      imageUrls: '',
    }});
  }


  upload(images){
    // let imagesMap = images.map(image => {
    //   this.createImage(image);
    // });
    // return imagesMap;
    // let file =
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state).then(() => this.setState({
      project: {
        user_id: null,
        title: '',
        description: '',
        imageUrls: [],
      }}))
      // .then(() => this.renderUpload());
      this.arg = false;
      // .then(() => this.closeModal());
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


  render() {
    if(this.arg === true){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.title} onChange={this.handleInput} />
            <input type='text' value={this.state.description} onChange={this.handleInput} />

            <button>Create Project</button>
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
}

export default ProjectCreateForm;
