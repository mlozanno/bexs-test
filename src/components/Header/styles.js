import styled from 'styled-components';
import { spacing, colors } from '~/styles/theme';

export const StyledHeader = styled.header`
	background-color: ${colors.light};
	border-bottom: 1px solid ${colors.darkGrey};

	img {
		display: block;
		max-height: 3rem;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1024px;
	height: ${spacing(7)};
	margin: 0 auto;
	padding: ${spacing(0, 2)};
`;
