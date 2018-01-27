import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class PollsEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      users: []
    };
    this.onChange = this.onChange.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.submitUpdates = this.submitUpdates.bind(this);
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/api/polls/${this.props.location.pathname.split('/')[2]}`)
      .then(res => {
        this.setState(res.data);
      }).catch(err => console.log(err));
  }
  onChange(e) {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value});
  }
  removeUser(id) {
    this.setState({ users: this.state.users.map(user => {
      if(user.id != id) return user;
    }).filter(Boolean) });
  }
  submitUpdates() {
    axios.put(`http://localhost:3000/api/polls/${this.state.id}`, this.state);
  }
  render() {
    return (
      <div className="PollsEdit">
        <p>PollsEdit page</p>

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

          </form> :
            <p>loading...</p>
        }
        <button onClick={this.submitUpdates}>Submit updates</button>
      </div>
    );
  }
}

export default PollsEdit;
