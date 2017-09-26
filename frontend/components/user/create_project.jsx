import React from 'react';
import Modal from 'react-modal';
import style from './modal-style';
import ProjectCreateFormContainer from './project_create_form_container';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      image: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.userId !== nextProps.match.params.userId){
     this.props.fetchUser(nextProps.match.params.userId);
   }
 }




  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }


  render(){
    return (
      <div className="create-cont">
        <div className="create-card">
          <div onClick={this.openModal} className="circle">
            <img src="https://s3.us-east-2.amazonaws.com/clone-app-dev/add_prjct-01.svg" />
          </div>
        </div>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <div className="Modal-box">
            <ProjectCreateFormContainer
              closeModal={this.closeModal}
              imageAdded={this.props.imageAdded}
                     />
          </div>

        </Modal>
      </div>
    );
  }
}

export default CreateProject;
