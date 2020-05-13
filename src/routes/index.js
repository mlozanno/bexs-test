import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Shop from '~/pages/Shop';
import Checkout from '~/pages/Checkout';
import Wallet from '~/pages/Wallet';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Shop} />
		<Route path="/checkout" exact component={Checkout} />
		<Route path="/carteira" exact component={Wallet} />
	</Switch>
);

export default Routes;
