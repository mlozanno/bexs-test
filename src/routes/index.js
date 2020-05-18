import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Shop from '~/pages/Shop';
import Checkout from '~/pages/Checkout';
import Wallet from '~/pages/Wallet';

const Routes = () => (
	<Switch>
		<Route exact path="/" render={() => <Redirect to="/checkout" />} />
		<Route path="/shop" exact component={Shop} />
		<Route path="/checkout" exact component={Checkout} />
		<Route path="/carteira" exact component={Wallet} />
	</Switch>
);

export default Routes;
