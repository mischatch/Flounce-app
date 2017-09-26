import React from 'react';
import UserProjectContainer from './user_project_container';
import ProjectItem from '../project/project_item';
import CreateProjectContainer from './create_project_container';

class UserProject extends React.Component {
  constructor(props){
    super(props);

    this.create = this.create.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.requestAllProjects();
  }


  componentWillReceiveProps(nextProps, nextState){
    if (this.props.match.params.userId !== nextProps.match.params.userId){
     this.props.fetchUser(nextProps.match.params.userId);
     this.props.requestAllProjects();
   } else if (Object.keys(nextProps.allProjects).length !== Object.keys(this.props.allProjects).length){
     this.props.fetchUser(nextProps.match.params.userId);
     this.props.requestAllProjects();
   }
 }

 create(){
   if (this.props.currentUser != null){
     if (this.props.currentUser.id == this.props.match.params.userId){
       return (
         <div>
           <CreateProjectContainer />
         </div> )
     }
   } else {
     return null;
   }
 }



  render() {
    if(this.props.user.projects === undefined || this.props.user.projects.length === 0){
      return null;
    } else if (Object.keys(this.props.allProjects).length === 0){
      return null;
    }
    const { allProjects, projects, user, currentUser } = this.props;
    return (
      <div>
        <div className="profile-body-box">
          <div className="profile-body-content-box">

            { this.create() }
            {/*   __________      MODAL  __________            __________*/}


            { projects.map(project => <ProjectItem
                                  key={project.id}
                                  project={allProjects[project.id]}
                                  user={user}
                                  projectId={project.id}
                                  requestComments={this.props.requestComments}
                                  images={allProjects[project.id].imageUrls}
                                  currentUser={this.props.currentUser} /> )}


            {/*   __________      MODAL  __________            __________*/}
          </div>
        </div>
      </div>
    )
  }
}

export default UserProject;
