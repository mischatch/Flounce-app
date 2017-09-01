import React from 'react';
import UserProjectContainer from './User_project_container';
import ProjectItem from '../project/project_item';

class UserProject extends React.Component {
  // componentDidMount(){
  //   debugger
  //   this.props.fetchUser(this.props.user.id);
  // }

  render() {
    if(this.props.user.projects === undefined || this.props.user.projects.length === 0){
      return null;
    }
    debugger
    const { allProjects, projects, user } = this.props;
    return (
      <div>
        <div className="border-box">
          <div className="content-box">
            {/*   __________      MODAL  __________            __________*/}


            { projects.map(project => <ProjectItem
                                  key={project.id}
                                  project={allProjects[project.id]}
                                  user={user}
                                  projectId={project.id}
                                  requestComments={this.props.requestComments}
                                  images={allProjects[project.id].imageUrls}
                                  currentUser={this.props.currentUser}/> )}


            {/*   __________      MODAL  __________            __________*/}
          </div>
        </div>
      </div>
    )
  }
}

export default UserProject;
