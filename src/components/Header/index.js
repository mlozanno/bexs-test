import React from 'react';

import Nav from '~/components/Nav';
import logo from '~/assets/logo.png';
import logo2x from '~/assets/logo@2x.png';

const Header = () => (
	<header data-testid="header">
		<img src={logo} srcSet={`${logo2x} 2x`} alt="Bexs logo" />
		<Nav />
	</header>
);

export default Header;
