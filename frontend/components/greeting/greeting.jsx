import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="blue-button">

  <ul className="login-signup">

    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Sign up</Link></li>
  </ul>

</div>
);

const personalGreeting = (currentUser, logout) => {
  return (
    <div className="logout-cont">
	<hgroup className="header-group">
    <h2 className="header-name">{ currentUser.username }</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
</div>
)};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
