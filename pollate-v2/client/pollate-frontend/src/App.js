import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Users from './components/users/Users';
import UsersShow from './components/users/UsersShow';
import Polls from './components/polls/Polls';
import PollsShow from './components/polls/PollsShow';
import PollsEdit from './components/polls/PollsEdit';
import PollsCreate from './components/polls/PollsCreate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/polls'>Polls</Link></li>
          </ul>
          <hr />
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={UsersShow} />
          <Route exact path="/polls" component={Polls} />
          <Route exact path="/polls/create" component={PollsCreate} />
          <Route exact path="/polls/:id" component={PollsShow} />
          <Route exact path="/polls/:id/edit" component={PollsEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
