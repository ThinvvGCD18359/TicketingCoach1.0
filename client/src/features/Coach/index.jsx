import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CoachPage from './pages/MainPage';

function Coach(props) {
   const match = useRouteMatch();
   console.log('Coach: ', { match });

   return (
      <Switch>
         <Route exact path={match.url} component={CoachPage} />
      </Switch>
   );
}

export default Coach;