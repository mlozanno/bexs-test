import styled from 'styled-components';
import { pxToRem, colors } from '~/styles/theme';

export const StyledHeader = styled.header`
	background-color: ${colors.light};
	border-bottom: ${pxToRem(1)} solid ${colors.darkGrey};

	img {
		display: block;
		max-height: ${pxToRem(30)};
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: ${pxToRem(1024)};
	height: ${pxToRem(70)};
	margin: 0 auto;
	padding: ${pxToRem(0, 20)};
`;
