import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProjectContainer from './project_container';
import ProjectItem from './project_item';
import ProjectDetailContainer from "./project_detail_container";

class ProjectIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [],
      sort: 'newest'
    };

    this.changeSort = this.changeSort.bind(this);
  }

  componentWillMount(){
    // debugger
    this.props.requestAllProjects();
    this.props.fetchUsers();
  }

  componentDidMount(){
    // debugger
    this.props.requestAllProjects()
      .then(() => {
        this.setState({
          projects: this.props.projects.sort((a, b) => a.id > b.id ).reverse()
        });
      });
    this.props.fetchUsers();
  }

  changeSort(){
    switch (this.state.sort){
      case 'newest':
        let newSort = this.props.projects.sort((a, b) => a.id - b.id );
        this.setState({ projects: newSort, sort: 'oldest' });
        break;
      case 'oldest':
        let newSort2 = this.state.projects.sort((a, b) => b.id - a.id );
        this.setState({ projects: newSort2, sort: 'newest' });
        break;
      default:
        return null;
    }
  }

  render(){
    const { users, requestSingleProject, currentUser, requestComments } = this.props;
    const { projects } = this.state;
    if((Object.keys(this.props).length === 0) || (projects === undefined)){
      return null;
    }

    console.log(projects);
    return (
      <div className="border-box">
        <div className="ADBOX">

          <div className="ADTEXTBOX">Showcase & Discover Creative Work</div>
        </div>
        <span className="sort" >sorted by:     <span onClick={this.changeSort}>{this.state.sort}</span></span>
        <div className="content-box">

            { projects.map(project => <ProjectItem
                                  key={project.id}
                                  project={project}
                                  user={users[project.user_id]}
                                  projectId={project.id}
                                  requestComments={requestComments}
                                  images={project.imageUrls}
                                  currentUser={currentUser}/> )}
        </div>
        <Route path="/projects/:projectId" component={ProjectDetailContainer} />
      </div>
    );
  }
}


export default ProjectIndex;
