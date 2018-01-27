import React, { Component } from 'react';
import axios from 'axios';

class PollsCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      users: []
    };
    this.availableUsers = [];
    this.onChange = this.onChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.submitUpdates = this.submitUpdates.bind(this);
  }
  componentWillMount() {
    axios.get('http://localhost:3000/api/users')
      .then(res => {
        this.availableUsers = res.data;
      }).catch(err => console.log(err));
  }
  onChange(e) {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value});
  }
  submitUpdates() {
    axios.post('http://localhost:3000/api/polls', this.state)
      .then(res => {
        console.log(res.data);
      });
  }
  removeUser(id) {
    this.setState({ users: this.state.users.map(user => {
      if(user.id != id) return user;
    }).filter(Boolean) });
  }
  selectChange(e) {
    console.log(e.target.value);
  }
  render() {
    const availableUsers = this.availableUsers.map(user => {
      return <option key={user.id} value={user.id}>{user.username}</option>;
    });
    return (
      <div className="PollsCreate">
        <p>PollsCreate page</p>

        {
          this.state ?
          <form>
            <label>Title</label>
            <input
              name="title"
              type="text"
              palceholder="Title"
              onChange={this.onChange}
              value={this.state.title} /><br />

            <ul>{
              this.state.users.map(user => {
                return <li key={user.id}>{ `${user.username} - ` }<a href="#" onClick={() => this.removeUser(user.id)}>Remove</a></li>;
              })
            }</ul>

            <label>Add user</label>
            <select onChange={this.selectChange}>
              <option>Select</option>
              {availableUsers}
            </select>

          </form> :
            <p>loading...</p>
        }
        <button onClick={this.submitUpdates}>Submit updates</button>
      </div>
    );
  }
}

export default PollsCreate;
