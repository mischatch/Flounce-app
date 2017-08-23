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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div>
        <h2>Sign in to continue</h2>
        <h3>Create an account <Link to="/signup" className="link">sign up</Link></h3>
        </div>
        )
    } else {
      return (
        <div className="blue-link">
        <h2>Sign up to continue</h2>
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
    return (
      <div className="back">
      <div className="log-form">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h5>Welcome to Clone app</h5>
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
            <input type="submit" value={this.props.formType} className="submit-button" />
              <div className="errors-div">{this.renderErrors()}</div>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
  }
}

export default withRouter(SessionForm);
