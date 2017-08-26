import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProjectContainer from './project_container';
import ProjectItem from './project_item';
import ProjectDetailContainer from "./project_detail_container";

class ProjectIndex extends React.Component {

  componentWillMount(){
    this.props.requestAllProjects();
  }

  render(){
    const { projects, users, requestSingleProject } = this.props;
    if((Object.keys(this.props).length === 0) || (projects === undefined)){
      return null;
    }
    return (
      <div className="border-box">
        <div className="content-box">

            { projects.map(project => <ProjectItem
                                        key={project.id}
                                        project={project}
                                        user={users[project.user_id]}
                                        requestSingleProject={this.props.requestSingleProject}/>) }

        </div>
        <Route path="/projects/:projectId" component={ProjectDetailContainer} />
      </div>
    );
  }
}


export default ProjectIndex;
