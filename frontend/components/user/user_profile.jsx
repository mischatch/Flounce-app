import React from 'react';
import UserProfileContainer from './user_profile_container';
import UserProjectContainer from './user_project_container';
import Greeting from '../greeting/greeting';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    if (this.props.currentUser){
      this.state = {
        display: 'none',
        imageUrl: '',
        imageFile: null,
        about: this.props.currentUser.about,
      };
    } else {
      this.state = {
        display: 'none',
        imageUrl: '',
        imageFile: null,
      };
    }

    this.showUpdate = this.showUpdate.bind(this);
    this.hideUpdate = this.hideUpdate.bind(this);
    this.handleUpdatePic = this.handleUpdatePic.bind(this);
    this.aboutForm = this.aboutForm.bind(this);
    this.handleAboutForm = this.handleAboutForm.bind(this);
    this.handleSubmitAbout = this.handleSubmitAbout.bind(this);
    this.showOrNot = this.showOrNot.bind(this);

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

  showUpdate(){
    this.setState({
      display: 'block',
    });
  }

  hideUpdate(){
    this.setState({
      display: 'none',
    });
  }



  handleUpdatePic(e) {
   const file = e.currentTarget.files[0];
   var reader = new FileReader();
   reader.readAsDataURL(file);
   this.setState({ imageFile: file }, () => {
     const formData = new FormData();
     formData.append("user[userpic]", this.state.imageFile);
     formData.append("user[id]", this.props.currentUser.id);
     const id = this.props.currentUser.id;
     this.props.updateUser(formData, id);
   });
 }

  handleAboutForm(e){
    e.preventDefault();

    this.setState({
      about: e.currentTarget.value,
    });
  }

  handleSubmitAbout(e){
    const id = this.props.currentUser.id;
   if (e.keyCode == 13 && e.shiftKey == false){
    const formData = new FormData();
    formData.append("user[about]", this.state.about);
    formData.append("user[id]", id);
    this.props.updateUser(formData, id);
    }
  }

   aboutForm(){
     if (!this.props.currentUser){
       return  this.props.user.about;
     } else if (this.props.currentUser.id === user.id){
       return (
         <div>
           <form
             onSubmit={this.handleSubmitAbout}
             onKeyDown={(e) => {this.handleSubmitAbout(e)}}>
             <textarea
               value={this.state.about === null ? '' : this.state.about}

               onChange={this.handleAboutForm}
               spellCheck='false'
               type="text"
               placeholder='tell about yourself...'
               className='about-form'>{this.state.about === null ? '' : this.state.about}</textarea>
           </form>
         </div>
       )
     } else {
       return this.props.user.about;
     }
   }

   showOrNot(){
     const { user } = this.props;
     let pic = '';
     if (user.userpic[0] === '/' && this.state.imageUrl === ''){
       pic = user.userpic;
     } else if(this.state.imageUrl !== '') {
       pic = this.state.imageUrl;
     } else {
       pic = user.userpic;
     }

     if(this.props.currentUser && this.props.user.id === this.props.currentUser.id){
       return (
         <div className="profileUP" onMouseEnter={this.showUpdate} onMouseLeave={this.hideUpdate}>
           <div className='update-user-link' style={{display: this.state.display}}>
             <img className='photo-icon-upload' src='https://s3.us-east-2.amazonaws.com/clone-app-dev/photo-icon.svg' />
             <input type="file" onChange={this.handleUpdatePic} />
             </div>
           <img className="profileUPimg" src={ pic } />
         </div>
       );
     } else {
       return (
         <div className="profileUP" >
           <img className="profileUPimg" src={ pic } />
         </div>
       );
     }
   }



  render() {
    debugger
    if(this.props.user === undefined){
      return null;
    }
    const { user } = this.props;
    let pic = '';
    if (user.userpic[0] === '/' && this.state.imageUrl === ''){
      pic = user.userpic;
    } else if(this.state.imageUrl !== '') {
      pic = this.state.imageUrl;
    } else {
      pic = user.userpic;
    }
    return (
      <div className="profileCanvas">
        <div className="profileFrame">
          <div className="profileBox">
            <div className="profileSidebar">

              { this.showOrNot() }

              <div className="Podpis">
              {user.username}
            </div>
            <div className="PodpisAbout">
              { this.aboutForm() }
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
