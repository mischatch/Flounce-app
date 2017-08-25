import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProjectContainer from './project_container';
import ProjectItem from './project_item';

class ProjectIndex extends React.Component {

  componentWillMount(){
    this.props.requestAllProjects();
  }

  render(){
    const { projects, users } = this.props;
    if((Object.keys(this.props).length === 0) || (projects === undefined)){
      return null;
    }
    return (
      <div className="border-box">
        <div className="content-box">
          
            { projects.map(project => <ProjectItem
                                        key={project.id}
                                        project={project}
                                        users={users} />) }
        
        </div>
      </div>
    );
  }
}


export default ProjectIndex;
