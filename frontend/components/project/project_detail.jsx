import React from 'react';
import Modal from 'react-modal';
import ProjectDetailContainer from './project_detail_container';
import style from './modal-style';
import CommentsContainer from '../comment/comment_container';
import ProjectImage from './project_image';


class ProjectDetail extends React.Component {
  render(){
    const { project, user, projectId } = this.props;
    debugger
    return (
      <div>
        <div className="ProjectModal?">
          <div className="projFrame">
            <div className="projBox">
                  <div className="projSidebar">
                    <div className="userPic">
                      <img className="pic" src={user.userpic} />
                    </div>
                    <div className="proj-name">{user.username}</div>
                    <div className="proj-userpic"></div>
                  </div>
                  <div className="proj-body">
                    <div className="projHeader">
                      <div className="proj-title">{project.title}</div>
                    </div>
                      <div className="proj-description">{project.description}</div>
                      <div className="proj-images">
                        {project.imageUrls.map(image => <ProjectImage
                                                        key={image.id}
                                                        image={image} />)}
                      </div>
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
