import React from 'react';
import { Router } from 'react-router-dom';

import history from '~/services/history';

import Routes from '~/routes';

import Nav from '~/components/Nav';

const Layout = () => (
	<Router history={history}>
		<section data-testid="layout">
			<Nav />
			<Routes />
		</section>
	</Router>
);

export default Layout;
