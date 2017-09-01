import React from 'react';
import UserProfileContainer from './user_profile_container';
import UserProjectContainer from './User_project_container';

class UserProfile extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }


  render() {

    if(this.props.user === undefined){
      return null;
    }
    const { user } = this.props;
    debugger
    return (
      <div className="profileCanvas">
        <div className="profileFrame">
          <div className="profileBox">
            <div className="profileSidebar">
              <div className="profileUP">
                <img className="profileUPimg" src={user.userpic} />
              </div>
            </div>
            <div className="profile-body">
            <UserProjectContainer
              user={user}
              projects={user.projects}/>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default UserProfile;
