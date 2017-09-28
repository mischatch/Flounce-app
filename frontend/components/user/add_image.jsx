import React from 'react';
import Preview from './preview';
import Dropzone from 'react-dropzone';


class AddImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: {
        imageFile: [],
        imageUrls: [],
      },
       image: {
        project_id: null,
        image: [],
      }
    };
    this.setState = this.setState.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.props.closeModal.bind(this);

  }

  handleImage(e){
    let files = e.currentTarget === undefined ? Array.from(Object.values(e)) : Array.from(Object.values(e.currentTarget.files));
    files.forEach((file) => {
      var reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ preview: {
          imageFile: this.state.preview.imageFile.concat(file),
          imageUrls: this.state.preview.imageUrls.concat(reader.result),
          },
          image: {
            project_id: this.props.LastProject,
          }
        });
      };
      reader.readAsDataURL(file);
    });
  }


  handleSubmit(e){
    const files = this.state.preview.imageFile;
    files.forEach((file) => {
      const formData = new FormData();
      formData.append("image[image]", file);
      this.props.uploadImage(this.state.image.project_id, formData);
    });
    this.props.closeModal();

  }


  render(){

    const prev = this.state.preview.imageUrls.map((img, idx) => <Preview img={img} key={idx} /> );
    return (
      <div className='add-images-cont'>

        <form onSubmit={this.handleSubmit}>
          {   /*<input multiple="true" type='file' onChange={this.handleImage} />  */}

          <Dropzone className='dropzone' onDrop={this.handleImage}>
            <img src="https://s3.us-east-2.amazonaws.com/clone-app-dev/upload.svg" />
            Click to select images
            <br/>OR
              <br/>Drag and Drop
          </Dropzone>
          <button>Add Image</button>
        </form>

          { prev }

      </div>
    )
  }

}


export default AddImage;
