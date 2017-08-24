import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProjectContainer from './project_container';

class ProjectIndex extends Component {


  render(){
    const { projects } = this.props;
    const projectItems = project.map(project => (
        <projectItem
          key={ project.idea }
          project={ project } />
      )
    );
    return (
      <div>
        <ul>
          { projectItem }
        </ul>
      </div>
    );
  }
}


export default ProjectIndex;
