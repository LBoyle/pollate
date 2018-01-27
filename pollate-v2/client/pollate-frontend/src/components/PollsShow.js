import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PollsShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: {}
    };
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/api/polls/${this.props.location.pathname.split('/')[2]}`)
      .then(res => {
        this.setState({poll: res.data});
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="PollsShow">
        <p>PollsShow page</p>
        <p>Title: {this.state.poll.title}</p>
        <p>Users in this poll:</p>
        <ul>{
          this.state.poll.title ?
            this.state.poll.users.map(user => {
              return <li key={`user${user.id}`}><Link to={`/users/${user.id}`}>{user.username}</Link></li>;
            }) :
            <li>No poll</li>
        }</ul>
      </div>
    );
  }
}

export default PollsShow;
