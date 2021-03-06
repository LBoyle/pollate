import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class PollsEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mid: '',
      id: '',
      title: '',
      users: [],
      availableUsers: []
    };
    this.onChange = this.onChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updatePoll = this.updatePoll.bind(this);
  }
  componentWillMount() {
    this.getPoll();
    this.getAvailableUsers();
  }
  getPoll() {
    axios.get(`http://localhost:3000/api/polls/${this.props.location.pathname.split('/')[2]}`)
      .then(res => this.setState(res.data))
      .catch(err => console.log(err));
  }
  getAvailableUsers() {
    axios.get('http://localhost:3000/api/users')
      .then(res => this.setState({ availableUsers: res.data}))
      .catch(err => console.log(err));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  selectChange(e) {
    this.setState({ mid: e.target.value })
  }
  removeUser(id) {
    this.setState({ mid: id }, () => {
      axios.post(`http://localhost:3000/api/polls/${this.state.id}/rmuser`, {poll: this.state})
        .then(res => this.setState({ users: res.data.users }))
        .catch(err => console.log(err));
    });
  }
  addUser(id) {
    axios.post(`http://localhost:3000/api/polls/${this.state.id}/adduser`, {poll: this.state})
      .then(res => this.setState({ users: res.data.users }))
      .catch(err => console.log(err));
  }
  updatePoll(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/polls/${this.state.id}`, {poll: this.state})
      .then(res => this.setState({ title: res.data.title }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="PollsEdit">
        <h4>PollsEdit page</h4>

        {
          this.state ?
          <form onSubmit={this.updatePoll}>
            <label>Title</label>&nbsp;
            <input
              name="title"
              type="text"
              palceholder="Title"
              onChange={this.onChange}
              value={this.state.title} />&nbsp;
            <button onClick={this.updatePoll}>Update title</button>
            <br />



          </form> :
            <p>loading...</p>
        }

        <ul>{
          this.state.users.map(user => {
            return <li key={user.id}>{ `${user.username} - ` }<a href="#" onClick={() => this.removeUser(user.id)}>Remove</a></li>;
          })
        }</ul>

        <p>Add user</p>
        <select onChange={this.selectChange}>
          <option>Choose</option>
        {
          this.state.availableUsers ?
            this.state.availableUsers.map(user => {
              return <option key={user.id} value={user.id}>{user.username}</option>;
            }) :
            <option>No users</option>
        }
        </select>&nbsp;
        <button onClick={this.addUser}>Add</button>
      </div>
    );
  }
}

export default PollsEdit;
