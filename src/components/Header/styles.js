import styled from 'styled-components';
import { toRem, colors } from '~/styles/theme';

export const StyledHeader = styled.header`
	background-color: ${colors.light};
	border-bottom: 1px solid ${colors.darkGrey};

	img {
		display: block;
		max-height: ${toRem(3)};
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1024px;
	height: ${toRem(7)};
	margin: 0 auto;
	padding: ${toRem(0, 2)};
`;
