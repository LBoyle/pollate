import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UsersEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      image: '',
      id: ''
    };
    this.onChange = this.onChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/api/users/${this.props.location.pathname.split('/')[2]}`)
      .then(res => {
        this.setState({email: res.data.email, username: res.data.username, image: res.data.image});
      }).catch(err => console.log(err));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  updateUser(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/users/${this.props.location.pathname.split('/')[2]}`, {user: this.state})
      .then(res => {
        this.setState({email: res.data.email, username: res.data.username, image: res.data.image});
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="UsersEdit">
        <h4>UsersEdit page</h4>

        <form onSubmit={this.updateUser}>
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
            type="text"
            placeholder="Username"
            onChange={this.onChange}
            value={this.state.username} /><br />

          <label>Image url</label>&nbsp;
          <input
            name="image"
            type="text"
            placeholder="Image url"
            onChange={this.onChange}
            value={this.state.image} /><br />

          <button onClick={this.updateUser}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UsersEdit;
