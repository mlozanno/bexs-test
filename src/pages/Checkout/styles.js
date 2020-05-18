import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { toRem, colors, fontSize } from '~/styles/theme';

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
	margin-bottom: ${toRem(10)};
	padding: ${toRem(4, 4, 11.4)};
	color: ${colors.light};
	font-size: ${fontSize.small};
	background-color: ${colors.primary};

	@media (min-width: 1024px) {
		align-items: flex-start;
		width: ${toRem(35)};
		height: 100%;
		margin-bottom: 0;
		padding: ${toRem(5, 0, 0, 6.4)};
	}
`;

export const BackLink = styled(Link)`
	position: absolute;
	top: ${toRem(3.5)};
	left: ${toRem(0.5)};

	> span {
		display: none;
	}

	@media (min-width: 1024px) {
		position: static;
		display: flex;
		align-items: center;

		> span {
			display: inline-block;
			margin-left: ${toRem(1.4)};
			color: ${colors.light};
			font-size: ${fontSize.small};
		}
	}
`;

export const NewCardTitle = styled.h2`
	position: relative;
	max-width: ${toRem(22)};
	margin-top: ${toRem(3)};
	padding-left: ${toRem(5.5)};
	color: inherit;
	font-size: ${toRem(1.6)};

	@media (min-width: 1024px) {
		margin: ${toRem(5, 0, 3)};
	}

	&::before {
		position: absolute;
		top: calc(50% - ${toRem(2)});
		left: 0;
		width: ${toRem(4)};
		height: ${toRem(4)};
		background: url(${titleIcon}) no-repeat;
		background-size: contain;
		content: '';
	}
`;

export const StyledCreditCard = styled(CreditCard)`
	position: absolute;
	top: ${toRem(15)};

	@media (min-width: 1024px) {
		position: relative;
		top: auto;
	}
`;

export const FormContent = styled.div`
	background-color: ${colors.light};

	@media (min-width: 1024px) {
		padding: ${toRem(5.3, 6.4, 0, 16.8)};
	}
`;
