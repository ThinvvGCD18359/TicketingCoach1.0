import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Checkout from './pages/index';

CheckOut.propTypes = {};

function CheckOut(props) {
   const match = useRouteMatch();
   console.log('Checkout: ', { match });

   return (
      <Switch>
         <Route exact path={match.url} component={Checkout} />
         <Route path={`${match.url}/checkout`} component={Checkout} />
      </Switch>
   );
}

export default CheckOut;