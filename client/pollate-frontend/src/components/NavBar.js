import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/polls'>Polls</Link></li>
        </ul>
        <hr />
      </nav>
    );
  }
}

export default NavBar;
