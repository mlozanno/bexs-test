import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<ul data-testid="nav">
		<li>
			<Link to="/">Home</Link>
		</li>

		<li>
			<Link to="/carteira">Carteira</Link>
		</li>

		<li>
			<Link to="/checkout">Checkout</Link>
		</li>
	</ul>
);

export default Nav;
