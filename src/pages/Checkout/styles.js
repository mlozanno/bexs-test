import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { pxToRem, colors, fontSize } from '~/styles/theme';

import CreditCard from '~/components/CreditCard';

import titleIcon from '~/assets/new-card-icon.svg';

export const StyledCardContainer = styled.section`
	@media (min-width: 1024px) {
		display: flex;
		height: 100vh;
	}
`;

export const CardContent = styled.aside`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: ${pxToRem(100)};
	padding: ${pxToRem(40, 40, 114)};
	color: ${colors.light};
	font-size: ${fontSize.small};
	background-color: ${colors.primary};

	@media (min-width: 1024px) {
		align-items: flex-start;
		width: ${pxToRem(350)};
		height: 100%;
		margin-bottom: 0;
		padding: ${pxToRem(50, 0, 0, 64)};
	}
`;

export const BackLink = styled(Link)`
	position: absolute;
	top: ${pxToRem(35)};
	left: ${pxToRem(5)};

	> span {
		display: none;
	}

	@media (min-width: 1024px) {
		position: static;
		display: flex;
		align-items: center;

		> span {
			display: inline-block;
			margin-left: ${pxToRem(14)};
			color: ${colors.light};
			font-size: ${fontSize.small};
		}
	}
`;

export const NewCardTitle = styled.h2`
	position: relative;
	max-width: ${pxToRem(220)};
	margin-top: ${pxToRem(30)};
	padding-left: ${pxToRem(55)};
	color: inherit;
	font-size: ${pxToRem(16)};

	@media (min-width: 1024px) {
		margin: ${pxToRem(50, 0, 30)};
	}

	&::before {
		position: absolute;
		top: calc(50% - ${pxToRem(20)});
		left: 0;
		width: ${pxToRem(40)};
		height: ${pxToRem(40)};
		background: url(${titleIcon}) no-repeat;
		background-size: contain;
		content: '';
	}
`;

export const StyledCreditCard = styled(CreditCard)`
	position: absolute;
	top: ${pxToRem(150)};

	@media (min-width: 1024px) {
		position: relative;
		top: auto;
	}
`;

export const FormContent = styled.div`
	background-color: ${colors.light};

	@media (min-width: 1024px) {
		padding: ${pxToRem(53, 64, 0, 168)};
	}
`;
