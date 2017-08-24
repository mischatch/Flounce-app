import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProjectContainer from './project_container';
import ProjectItem from './project_item';

class ProjectIndex extends React.Component {

  componentWillMount(){
    this.props.requestAllProjects();
  }

  render(){
    const { projects } = this.props;
    if((Object.keys(this.props).length === 0) || (projects === undefined)){
      return null;
    }
    debugger
    return (
      <div>
        <h1>all projects</h1>
        <ul>
          { projects.map(project => <ProjectItem key={project.id} project={project} />) }
        </ul>
      </div>
    );
  }
}


export default ProjectIndex;
