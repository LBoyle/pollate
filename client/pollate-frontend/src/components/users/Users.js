import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentWillMount() {
    axios.get('http://localhost:3000/api/users')
      .then(res => {
        this.setState({users: res.data});
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Users">
        <h4>Users page</h4>

        <ul>
          {
            this.state.users[0] ?
                this.state.users.map(user => {
                  return <li key={`user${user.id}`}><Link to={`/users/${user.id}`}>{user.username}</Link></li>
                }) :
              <li>No users</li>
          }
        </ul>
        <Link to={'/users/create'}>New user</Link>
      </div>
    );
  }
}

export default Users;
