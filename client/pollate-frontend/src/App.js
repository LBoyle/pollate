import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Vote from './components/Vote';

import Users from './components/users/Users';
import UsersShow from './components/users/UsersShow';
import UsersEdit from './components/users/UsersEdit';
import UsersCreate from './components/users/UsersCreate';

import Polls from './components/polls/Polls';
import PollsShow from './components/polls/PollsShow';
import PollsEdit from './components/polls/PollsEdit';
import PollsCreate from './components/polls/PollsCreate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/create" component={UsersCreate} />
          <Route exact path="/users/:id" component={UsersShow} />
          <Route exact path="/users/:id/edit" component={UsersEdit} />
          <Route exact path="/polls" component={Polls} />
          <Route exact path="/polls/create" component={PollsCreate} />
          <Route exact path="/polls/:id" component={PollsShow} />
          <Route exact path="/polls/:id/edit" component={PollsEdit} />
          <Route exact path="/polls/:id/vote" component={Vote} />
        </Switch>
      </div>
    );
  }
}

export default App;
