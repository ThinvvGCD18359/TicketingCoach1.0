import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { Switch, Route } from 'react-router-dom';

function Auth(props) {
   const match = useRouteMatch();
   console.log('Auth: ', { match });

   return (
      <Switch>
         <Route exact path={match.url} component={SignIn} />
         <Route path={`${match.url}/login`} component={SignIn} />
      </Switch>
   );
}

export default Auth;