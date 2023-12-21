import React from 'react';
import './Reg.css';
import {Link} from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: '',
      name: '',
      age: '',
      orgName: '',
      orgType: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', this.state);
  };

  render() {
    return (
      <div className="signup-box">
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="Username"
                value={this.state.username}
                onChange={this.handleChange}
                
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                required
              />
              <label>Confirm Password</label>
            </div>
            {this.state.userType === 'individual' && (
              <>
                <div className="user-box">
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <label>Name</label>
                </div>
                <div className="user-box">
                  <input
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    required
                  />
                  <label>Age</label>
                </div>
              </>
            )}
            {this.state.userType === 'organization' && (
              <>
                <div className="user-box">
                  <input
                    type="text"
                    name="orgName"
                    value={this.state.orgName}
                    onChange={this.handleChange}
                    required
                  />
                  <label>Organization Name</label>
                </div>
                <div className="user-box">
                  <input
                    type="text"
                    name="orgType"
                    value={this.state.orgType}
                    onChange={this.handleChange}
                    required
                  />
                  <label>Organization Type</label>
                </div>
              </>
            )}
            <button type="submit">Signup</button>
            <p> 
              <h3>OR</h3>
            <Link to="/Login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
