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
      .then(res => {
        console.log(res.data);
        this.setState({user: res.data});
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="UsersShow">
        <h4>UsersShow page</h4>

        <ul>
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
                      return <li key={`poll${poll.id}`}><Link to={`/polls/${poll.id}`}>{poll.title}</Link></li>;
                    })
                  }</ul>
                </div>

              </div> :
              <p>No user</p>
          }
        </ul>
      </div>
    );
  }
}

export default UsersShow;
