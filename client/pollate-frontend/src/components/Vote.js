import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Vote extends Component {
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
      <div className="Vote">
        <h4>Vote</h4>

        { this.state.poll.users ?
          <div>
            <h5>Title: { this.state.poll.title }</h5>
            <ul>
              {
                this.state.poll.users.map(user => {
                  return <li key={user.id}>{user.username}</li>;
                })
              }
            </ul>
          </div> :
          <p>Nothing here</p>
        }
      </div>
    );
  }
}

export default Vote;
