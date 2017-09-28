import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.demologin = this.demologin.bind(this);
  }

  demologin(e){
    e.preventDefault();
    const demoUser = { user: {username: 'Rick', password: "password", email: "mail@mail.com", about: "We promote all talented car designers from all over the world since 2011!"}};
    this.props.login( demoUser );
  }

  sessionLinks(){

    return(
    <div className="buttons">
      <div className="logodiv">
        <Link to='/' >
          <img src={ window.staticImages.logo12 }  alt="logo" className="logo" />
        </Link>
      </div>
        <div className="login-signup">
            <div className="signdiv">
              <div className="signup-cont">
                <div><Link to="/signup" className="signUp-btn">Sign Up</Link></div>
                <div className="demo-log" onClick={this.demologin}>Demo Login</div>
              </div>
            </div>
        </div>
        <div className="logdiv">
          <div className="login-btn">
            <div><Link to="/login" className="login-cont">Login</Link></div>
          </div>
        </div>
    </div>
  )};

  personalGreeting(currentUser, logout) {
    return (
      <div className="buttons">
        <div className="logodiv">
          <Link to='/' >
            <img src={ window.staticImages.logo12 }  alt="logo" className="logo" />
          </Link>
        </div>
      <div className="logout-cont">
      	<hgroup className="header-group">
          <button className="header-button" onClick={logout}>Log Out</button>
      	</hgroup>
      </div>
      <div className="urname">
        <h2 className="header-name">
          <Link to={`/users/${currentUser.id}`}>
          { currentUser.username }
        </Link>
        </h2>
        <Link to={`/users/${currentUser.id}`}>
        <div className="headerUP">
          <img className="headerUPimage" src={this.props.picUrl} />
        </div>
      </Link>
      </div>
    </div>
  )};

  greeting({ currentUser, logout }){
    return(
    currentUser ? this.personalGreeting(currentUser, logout) : this.sessionLinks()
  )};

  render(){
    const {currentUser, logout} = this.props;
    return(
    this.greeting({ currentUser, logout })
  )}
};
export default Greeting;
