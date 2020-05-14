import styled from 'styled-components';
import { spacing, zIndex, colors } from '~/styles/theme';

export const StyledNav = styled.nav`
	@media (max-width: 767px) {
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
	}
`;

export const ToggleButton = styled.button`
	margin: 0;
	padding: 0;
	background: transparent;
	border: none;

	&.close {
		position: absolute;
		top: ${spacing(2)};
		right: ${spacing(2)};
		z-index: ${zIndex.floated};
		color: ${colors.light};
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export const MenuList = styled.ul`
	@media (max-width: 767px) {
		text-align: center;

		> li + li {
			margin-top: ${spacing(2)};
		}
	}

	@media (min-width: 768px) {
		display: flex;

		> li + li {
			margin-left: ${spacing(2)};
		}
	}
`;
