import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demologin = this.demologin.bind(this);

  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentDidMount(){
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  demologin(e){
    e.preventDefault();
    const demoUser = { user: {username: 'Martin', password: "password", email: "mail@mail.com", about: "Just a simple demo User"}};
    this.props.login( demoUser );
  }


  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div>

        <h3>Create an account <Link to="/signup" className="link">sign up</Link></h3>
        </div>
        )
    } else {
      return (
        <div className="blue-link">

        <h3>Already have an account? <Link to="/login" className="link">log in</Link></h3>
        </div>
        )
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    debugger
    return (
      <div className="back">
      <div className="log-form">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="signup-to-cont">
            <p className="signup-to-cont">Sign up to continue</p>
          </div>
          <br/>
            <img src={ window.staticImages.logo2 } alt="logo2" className="logo2" />
          <br/>
          <h4>{this.navLink()}</h4>

          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="username"
                className="login-input"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
                className="login-input"
              />
            <br/>
            <div className="two-buttons">
              <div className="first-submit">
                <input type="submit" value={this.props.formType} className="submit-button" />
              </div>
              <div className="demo-button-div">
                <button type="submit" onClick={this.demologin} className="demo-button">demo</button>
              </div>
            </div>
            <br/>
            <ul className="errors">
              <li className="errors-div">{this.renderErrors()}</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
  }
}

export default withRouter(SessionForm);
