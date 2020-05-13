import styled from 'styled-components';
import { spacing, zIndex, colors } from '~/styles/theme';

export const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background-color: ${colors.primary};

	a {
		color: white;
	}

	&.opened {
		left: 0;
	}
`;

export const ToggleButton = styled.button`
	&.close {
		position: absolute;
		top: ${spacing(2)};
		right: ${spacing(2)};
		z-index: ${zIndex.floated};
		color: ${colors.light};
	}
`;

export const MenuList = styled.ul`
	text-align: center;

	> li + li {
		margin-top: ${spacing(2)};
	}
`;
