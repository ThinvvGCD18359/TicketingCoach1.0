import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CoachPage from './pages/CoachMain';
import CreateCoach from './pages/CreateCoach';
import CreateRoute from './pages/CreateRoute';

function Coach(props) {
   const match = useRouteMatch();
   console.log('Coach: ', { match });

   return (
      <Switch>
         <Route exact path={match.url} component={CoachPage} />
         <Route exact path={`${match.url}/createcoach`} component={CreateCoach} />
         <Route exact path={`${match.url}/createroute`} component={CreateRoute} />
      </Switch>
   );
}

export default Coach;