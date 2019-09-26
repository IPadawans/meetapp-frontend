import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import Detail from '~/pages/Detail';
import MeetupEditor from '~/pages/MeetupEditor';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/:id/detail" component={Detail} isPrivate />
      <Route path="/meetup/:id/edit" component={MeetupEditor} isPrivate />
      <Route path="/meetup/new" component={MeetupEditor} isPrivate />
    </Switch>
  );
}
