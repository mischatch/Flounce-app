import React from 'react';
import Modal from 'react-modal';
import style from './modal-style';
import { Link } from 'react-router-dom';
import ProjectIndex from './project_index';
import ProjectDetailContainer from './project_detail_container';
import ProjectDetail from './project_detail';



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
    this.setState({ modalOpen: true });
  }



  render (){
      const { user, project, images } = this.props;
      return (
        <div className="project-box-small">
          <div className="card-box">
            <div className ="content-list">
              <div className="project">
                <section onClick={this.openModal}>
                <div className="project-pic">
                  <div className="card-pic">
                    <img className="imgThumbnail" src={images[0]} />
                  </div>
                </div>
                </section>
                  <div className="card-text-space">
                    <div className="card-text">
                      <div className="card-title">{project.title}</div>
                      <Link to={`/users/${user.id}`}>
                      <div className="card-name">{user.username}</div>
                      </Link>
                    </div>
                    <div className="card-likes-cmnts">
                      <img className='smallLike' src='https://s3.us-east-2.amazonaws.com/clone-app-dev/like_icon.svg' />
                      {project.liker_ids.length}
                      <img className='smallCommenticon' src='https://s3.us-east-2.amazonaws.com/clone-app-dev/noun_974856_cc.svg' />
                      {project.comment_num}
                    </div>
                </div>
              </div>
            </div>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <div className="Modal-box">
            <ProjectDetailContainer
                    project={project}
                    user={user}
                    projectId={this.props.project.id} />
          </div>

        </Modal>
      </div>
    </div>
      )

  }
}
export default ProjectItem;
