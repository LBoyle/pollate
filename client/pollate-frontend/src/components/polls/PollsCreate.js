import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class PollsCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
    this.onChange = this.onChange.bind(this);
    this.createPoll = this.createPoll.bind(this);
  }
  onChange(e) {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value});
  }
  createPoll() {
    axios.post('http://localhost:3000/api/polls', {poll: this.state});
  }
  render() {
    return (
      <div className="PollsCreate">
        <p>PollsCreate page</p>

        {
          this.state ?
          <form>
            <label>Title</label>&nbsp;
            <input
              name="title"
              type="text"
              palceholder="Title"
              onChange={this.onChange}
              value={this.state.title} />&nbsp;
            <br />

          </form> :
            <p>loading...</p>
        }
        <button onClick={this.createPoll}>Create poll</button>
      </div>
    );
  }
}

export default PollsCreate;
