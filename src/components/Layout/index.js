import React from 'react';
import { Router } from 'react-router-dom';

import history from '~/services/history';

import Routes from '~/routes';

import Header from '~/components/Header';

const Layout = () => (
	<Router history={history}>
		<section data-testid="layout">
			<Header />
			<Routes />
		</section>
	</Router>
);

export default Layout;
