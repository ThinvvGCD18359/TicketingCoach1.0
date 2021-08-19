import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UserProfile from './pages/UserProfile';

Profile.propTypes = {};

function Profile(props) {
   const match = useRouteMatch();
   console.log('Profile: ', { match });

   return (
      <Switch>
         <Route exact path={match.url} component={UserProfile} />
         <Route path={`${match.url}/edit`} component={UserProfile} />
      </Switch>
   );
}

export default Profile;