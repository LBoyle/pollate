import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UsersCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: ''
    };
    this.onChange = this.onChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  createUser(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/api/users', {user: this.state})
      .then(res => console.log(res));
  }
  render() {
    return (
      <div className="UsersCreate">
        <h4>UsersCreate page</h4>

        <form onSubmit={this.createUser}>
          <label>Email</label>&nbsp;
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.onChange}
            value={this.state.email} /><br />

          <label>Username</label>&nbsp;
          <input
            name="username"
            type="username"
            placeholder="Username"
            onChange={this.onChange}
            value={this.state.username} /><br />

          <button onClick={this.createUser}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UsersCreate;
