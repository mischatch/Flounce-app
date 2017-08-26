import React from 'react';
import Modal from 'react-modal';
import ProjectDetailContainer from './project_detail_container';
import style from './modal-style';


class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount(){
    this.props.requestSingleProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps){
   if(this.props.match.params.projectId !== nextProps.match.params.projectId){
     this.props.requestSingleProject(nextProps.match.params.projectId);
   }
 }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render(){

    const project = this.props.project[0];
    const user = this.props.user[0];

    if((Object.keys(this.props.project).length === 0) || (project === undefined)){
      return null;
    }

    return (
      <div>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestclose={this.closeModal}
          style={style}>

        <div className="ProjectModal?">
          <div className="projFrame">
            <div className="projBox">
                  <div className="projSidebar">
                    <div className="userPic"></div>
                    <div className="proj-name">{user.username}</div>
                  </div>
                <div className="projHeader">
                    <div className="proj-title">{project.title}</div>
                  </div>
                    <div className="proj-description">{project.description}</div>
                    <div className="proj-images">{project.image_id}</div>
            </div>
          </div>
        </div>
      </Modal>
      </div>
    )
  }
}


export default ProjectDetail;
