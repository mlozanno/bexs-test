import React from 'react';
import PropTypes from 'prop-types';

import Nav from '~/components/Nav';

const Layout = ({ children }) => (
	<section data-testid="layout">
		<Nav />
		{children}
	</section>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
