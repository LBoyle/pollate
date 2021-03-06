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
      .then(res => this.setState({poll: res.data}))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="PollsShow">
        <h4>PollsShow page</h4>
        <p>Title: {this.state.poll.title}</p>
        {
          this.state.poll.creator ?
            <span>
              Creator:
              <Link to={`/users/${this.state.poll.creator.id}`}>{this.state.poll.creator.username}</Link>
            </span> :
            ''
        }

        <p>Users in this poll:</p>
        <ul>{
          this.state.poll.title ?
            this.state.poll.users.map(user => {
              return <li key={`user${user.id}`}><Link to={`/users/${user.id}`}>{user.username}</Link></li>;
            }) :
            <li>No poll</li>
        }</ul>
        <Link to={`/polls/${this.props.location.pathname.split('/')[2]}/edit`}>Edit poll</Link><br />
        <Link to={`/polls/${this.props.location.pathname.split('/')[2]}/vote`}>Vote in poll</Link>
      </div>
    );
  }
}

export default PollsShow;
