import React from 'react';
import { Router } from 'react-router-dom';

import history from '~/services/history';

import Routes from '~/routes';

import Header from '~/components/Header';

import { StyledLayout } from './styles';

const Layout = () => (
	<Router history={history}>
		<Header />
		<StyledLayout data-testid="layout">
			<Routes />
		</StyledLayout>
	</Router>
);

export default Layout;
