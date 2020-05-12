import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
	<section data-testid="layout">{children}</section>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
