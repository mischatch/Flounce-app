import React from 'react';
import Modal from 'react-modal';
import style from './modal-style';
import { Link } from 'react-router-dom';
import ProjectIndex from './project_index';
import ProjectDetailContainer from './project_detail_container';
import ProjectDetail from './project_detail';
import { requestSingleProject } from '../../actions/project_actions';
import { requestAllProject } from '../../actions/project_actions';
import loading from '../loading.gif';


class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      modalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.image = this.image.bind(this);
  }


  handleImageLoaded(e) {
    if(e.target.complete){
      this.setState({ loaded: true });
    }
  }

  handleImageErrored() {
    this.setState({ loaded: "failed to load" });
  }

  componentWillReceiveProps(nextProps){
   if(this.props.project.id !== nextProps.project.id){
     this.props.requestSingleProject(nextProps.match.params.projectId);
   }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  image(){
    debugger
    if(this.state.imageStatus === "loaded"){
      debugger
      return this.props.images[0];
    } else if (this.state.imageStatus === "failed to load"){
      return {spinner};
    } else {
      debugger
      return {spinner};
    }
  }


  render (){
    if(this.props.user === undefined){
      return null;
    }
      const { user, project, images } = this.props;
      return (
        <div className="project-box-small">
          <div className="card-box">
            <div className ="content-list">
              <div className="project">
                <section onClick={this.openModal}>
                <div className="project-pic">
                  <div className="card-pic">
                    <img className="imgThumbnail"
                      src={this.state.loaded ? images[0] : loading }

                      onLoad={this.handleImageLoaded.bind(this)}
                      onError={this.handleImageErrored.bind(this)}
                      />
                      { this.state.imageStatus }
                  </div>
                </div>
                </section>
                  <div className="card-text-space">
                    <div className="card-text">
                      <section onClick={this.openModal}>
                      <div className="card-title">{project.title}</div>
                      </section>
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
