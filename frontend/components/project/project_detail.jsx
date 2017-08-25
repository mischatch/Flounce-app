import React from 'react';
import ProjectDetailContainer from './project_detail_container';


class ProjectDetail extends React.Component {

  componentDidMount(){
    this.props.requestSingleProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps){
   if(this.props.match.params.projectId !== nextProps.match.params.projectId){
     this.props.requestSingleProject(nextProps.match.params.projectId);
   }
 }

  render(){

    const project = this.props.project[0];
    const user = this.props.user[0];

    if((Object.keys(this.props.project).length === 0) || (project === undefined)){
      return null;
    }

    return (
      <div>
        <div className="proj-name">{user.username}</div>
        <div className="proj-title">{project.title}</div>
        <div className="proj-description">{project.description}</div>
        <div className="proj-description">{project.image_id}</div>
      </div>
    )
  }
}


export default ProjectDetail;
