import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Polls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: []
    };
  }
  componentWillMount() {
    axios.get('http://localhost:3000/api/polls')
      .then(res => {
        this.setState({polls: res.data});
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Polls">
        <h4>Polls page</h4>

        <ul>{
          this.state.polls ?
            this.state.polls.map(poll => {
              return <li key={`poll${poll.id}`}><Link to={`/polls/${poll.id}`}>{ poll.title }</Link>{ `: ${poll.users.length} members` }</li>
            }) :
            <li>No polls</li>
        }</ul>
        <Link to={'/polls/create'}>New poll</Link>
      </div>
    );
  }
}

export default Polls;
