import styled from 'styled-components';
import { spacing, colors } from '~/styles/theme';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: ${spacing(7)};
	padding: ${spacing(0, 2)};
	background-color: ${colors.light};
	border-bottom: 1px solid ${colors.darkGrey};

	img {
		display: block;
		max-height: 3rem;
	}
`;
