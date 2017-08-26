import React from 'react';
import Modal from 'react-modal';
import style from './modal-style';
import { Link } from 'react-router-dom';
import ProjectIndex from './project_index';
import ProjectDetailContainer from './project_detail_container';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  // componentDidMount(){
  //   this.props.requestSingleProject(this.props.user.id);
  // }

  // componentWillReceiveProps(nextProps){
  //  if(this.props.project[id] !== nextProps.match.params.projectId){
  //    this.props.requestSingleProject(nextProps.match.params.projectId);
  //  }
  // }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    debugger
    this.setState({ modalOpen: true });
  }



  render (){
      const project = this.props.project;
      const user = this.props.user;
      return (
        <div>
          <div className="card-box">
            <div className ="content-list">
              <div className="project">
                <div className="project-pic">
                  <section onClick={this.openModal}>
                    <div className="card-pic">{/*   PLACE PICTURE HERE   */}</div>
                  </section>
                </div>
                  <div className="card-text-space">
                    <div className="card-text">
                      <div className="card-title">{project.title}</div>
                      <div className="card-name">{user.username}</div>
                    </div>
                </div>
              </div>
            </div>
        </div>

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
export default ProjectItem;
