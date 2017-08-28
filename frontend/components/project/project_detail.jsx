import React from 'react';
import Modal from 'react-modal';
import ProjectDetailContainer from './project_detail_container';
import style from './modal-style';
import CommentsContainer from '../comment/comment_container';


class ProjectDetail extends React.Component {
  render(){
    const { project, user, projectId } = this.props;
    return (
      <div>
        <div className="ProjectModal?">
          <div className="projFrame">
            <div className="projBox">
                  <div className="projSidebar">
                    <div className="userPic">
                      <img className="pic" src="https://s3.us-east-2.amazonaws.com/clone-app-dev/user_test.png" />
                    </div>
                    <div className="proj-name">{user.username}</div>
                    <div className="proj-userpic"></div>
                  </div>
                  <div className="proj-body">
                    <div className="projHeader">
                      <div className="proj-title">{project.title}</div>
                    </div>
                      <div className="proj-description">{project.description}</div>
                      <div className="proj-images">{project.image_id}</div>
                      <div>
                        
                        <CommentsContainer projectId={projectId}/>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectDetail;
