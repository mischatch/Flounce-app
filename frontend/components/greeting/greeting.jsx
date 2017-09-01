import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
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
            </div>
          </div>
      </div>
      <div className="logdiv">
        <div className="login-btn">
          <div><Link to="/login" className="login-cont">Login</Link></div>
        </div>
      </div>
  </div>
);

const personalGreeting = (currentUser, logout) => {
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
        <img className="headerUPimage" src={currentUser.userpic_url} />
      </div>
    </Link>
    </div>
  </div>
)};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
