import React from 'react';
import Modal from 'react-modal';
import ProjectDetailContainer from './project_detail_container';
import style from './modal-style';


class ProjectDetail extends React.Component {

  render(){

    const project = this.props.project;
    const user = this.props.user;
    return (
      <div>
        <div className="ProjectModal?">
          <div className="projFrame">
            <div className="projBox">
                  <div className="projSidebar">
                    <div className="userPic"></div>
                    <div className="proj-name">{user.username}</div>
                    <div className="proj-userpic">{user.userpic_url }</div>
                  </div>
                <div className="projHeader">
                    <div className="proj-title">{project.title}</div>
                  </div>
                    <div className="proj-description">{project.description}</div>
                    <div className="proj-images">{project.image_id}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectDetail;
