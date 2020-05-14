import React from 'react';

import { Link } from 'react-router-dom';

import Nav from '~/components/Nav';
import logo from '~/assets/logo.png';
import logo2x from '~/assets/logo@2x.png';

import { StyledHeader, Content } from './styles';

const Header = () => (
	<StyledHeader data-testid="header">
		<Content>
			<Link to="/">
				<img src={logo} srcSet={`${logo2x} 2x`} alt="Bexs logo" />
			</Link>
			<Nav />
		</Content>
	</StyledHeader>
);

export default Header;
