import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UsersShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/api/users/${this.props.location.pathname.split('/')[2]}`)
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="UsersShow">
        <h4>UsersShow page</h4>

        {
          this.state.user.username ?
            <div className="row">
              <div className="four columns">
                <img src={this.state.user.image} alt="profileimg" />
              </div>
              <div className="eight columns">
                <p>Username: {this.state.user.username}</p>
                <p>Email: {this.state.user.email}</p><br />

                <p>Polls this user is in:</p>
                <ul>{
                  this.state.user.polls.map(poll => {
                    return (<li key={`poll${poll.id}`}>{ `${poll.title} / ` }
                      <Link to={`/polls/${poll.id}`}>View</Link>{' / '}
                      <Link to={`/polls/${poll.id}/vote`}>Vote</Link>
                    </li>);
                  })
                }</ul>
                <Link to={`/users/${this.state.user.id}/edit`}>Edit user</Link>
              </div>

            </div> :
            <p>No user</p>
        }
      </div>
    );
  }
}

export default UsersShow;
