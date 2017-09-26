import React from 'react';
import UserProfileContainer from './user_profile_container';
import UserProjectContainer from './user_project_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

  }




  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.requestAllProjects();
  }

  componentWillReceiveProps(nextProps, nextState){
    if (this.props.match.params.userId !== nextProps.match.params.userId){
     this.props.fetchUser(nextProps.match.params.userId);
     this.props.requestAllProjects();
   } else if (Object.keys(this.props.images).length !== Object.keys(nextProps.images).length){
     this.props.fetchUser(nextProps.match.params.userId);
     this.props.requestAllProjects();
   }
 }


  render() {
    if(this.props.user === undefined){
      return null;
    }
    const { user } = this.props;
    return (
      <div className="profileCanvas">
        <div className="profileFrame">
          <div className="profileBox">
            <div className="profileSidebar">
              <div className="profileUP">
                <img className="profileUPimg" src={ user.userpic } />
              </div>
              <div className="Podpis">
              {user.username}
            </div>
            <div className="PodpisAbout">
              {user.about}
            </div>
            </div>
            <div className="profile-body">
            <UserProjectContainer
              user={user}
              projects={user.projects}
              />
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default UserProfile;
