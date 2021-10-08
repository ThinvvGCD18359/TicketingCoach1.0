import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CheckoutForm from './pages/stripeContainer';

function Checkout() {
   const match = useRouteMatch();
   console.log('Checkout: ', { match });

   return (
      <Switch>
         <Route exact path={match.url} component={CheckoutForm} />
      </Switch>
   );
}

export default Checkout;