import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class PollsCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      mid: '',
      availableUsers: []
    };
    this.onChange = this.onChange.bind(this);
    this.createPoll = this.createPoll.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }
  componentWillMount() {
    axios.get('http://localhost:3000/api/users')
      .then(res => {
        this.setState({ availableUsers: res.data });
      }).catch(err => console.log(err));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  selectChange(e) {
    this.setState({ mid: e.target.value });
  }
  createPoll(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/api/polls', {poll: this.state})
      .then(res => console.log(res));
  }
  render() {
    return (
      <div className="PollsCreate">
        <p>PollsCreate page</p>

        {
          this.state ?
          <form onSubmit={this.createPoll}>
            <label>Title</label>&nbsp;
            <input
              name="title"
              type="text"
              palceholder="Title"
              onChange={this.onChange}
              value={this.state.title} />&nbsp;
            <br />

          <select onChange={this.selectChange}>
            <option>Select</option>
            {
              this.state.availableUsers ?
                this.state.availableUsers.map(user => {
                  return <option key={user.id} value={user.id}>{user.username}</option>;
                }) :
                <option>No users</option>
            }
          </select>

          </form> :
            <p>loading...</p>
        }
        <button onClick={this.createPoll}>Create poll</button>
      </div>
    );
  }
}

export default PollsCreate;
