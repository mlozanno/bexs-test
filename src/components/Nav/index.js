import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

import { StyledNav, MenuList, ToggleButton } from './styles';

const Nav = () => {
	const [opened, setOpened] = useState(false);

	const ToggleMenu = !opened ? MdMenu : MdClose;

	const items = [
		{ to: `/`, label: `Home` },
		{ to: `/checkout`, label: `Checkout` },
		{ to: `/carteira`, label: `Carteira` },
	];

	return (
		<>
			<ToggleButton
				data-testid="toggle-button"
				type="button"
				className={opened ? `close` : ``}
				onClick={() => setOpened(!opened)}
			>
				<ToggleMenu size={40} />
			</ToggleButton>

			<StyledNav className={opened ? `opened` : ``}>
				<MenuList data-testid="nav">
					{items.map(item => (
						<li key={item.label}>
							<Link to={item.to} onClick={() => setOpened(false)}>
								{item.label}
							</Link>
						</li>
					))}
				</MenuList>
			</StyledNav>
		</>
	);
};

export default Nav;
