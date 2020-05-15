import styled from 'styled-components';
import { rgba } from 'polished';
import { spacing, colors } from '~/styles/theme';

import frontInvalid from '~/assets/front-invalid.svg';
import backInvalid from '~/assets/back-invalid.svg';
import frontValid from '~/assets/front-valid.svg';
import backValid from '~/assets/back-valid.svg';

export const StyledCreditCard = styled.div`
	span {
		font-size: 1.2rem;

		@media (min-width: 768px) {
			font-size: 1.6rem;
		}
	}

	span[data-field='card-number'],
	span[data-field='card-cvv'] {
		font-size: 1.9rem;

		@media (min-width: 768px) {
			font-size: 2.2rem;
		}
	}

	span[data-field='card-cvv'] {
		position: absolute;
		color: ${colors.darkGrey};
		transform: translate(135px, 80px);
	}
`;

export const FliperContainer = styled.div`
	position: relative;
	width: 28rem;
	height: 17.2rem;
	perspective: 100rem;

	&::before {
		position: absolute;
		bottom: -0.5rem;
		left: 50%;
		width: 90%;
		height: 0.5rem;
		background-color: ${rgba(colors.darkGrey, 0.3)};
		border-radius: 50%;
		transform: translateX(-50%);
		filter: blur(5px);
		content: '';
	}

	@media (min-width: 768px) {
		width: 36.4rem;
		height: 22.3rem;
	}
`;

export const Flipper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	transform-style: preserve-3d;
	transition: transform 0.3s ease-in-out;

	${({ flipped }) => flipped && 'transform: rotateY(180deg);'}
`;

export const Front = styled.div`
	position: absolute;
	display: grid;
	grid-auto-flow: dense;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	align-content: space-between;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: ${spacing(3, 2)};
	color: ${colors.light};
	text-shadow: 0px 1px 2px #000000b3;
	background: url(${({ valid }) => (!valid ? frontInvalid : frontValid)});
	background-repeat: no-repeat;
	background-size: cover;
	background-clip: border-box;
	backface-visibility: hidden;
	transition: background 0.1s linear;

	span[data-field='card-number'] {
		grid-column: span 4;
		letter-spacing: 0.14rem;
		white-space: nowrap;

		@media (min-width: 768px) {
			letter-spacing: 0.4rem;
		}
	}

	span[data-field='card-user-name'] {
		grid-column: span 3;
	}

	span[data-field='card-expiration-date'] {
		grid-column: span 1;
		text-align: right;
	}

	&::before {
		grid-column: span 4;
		width: 70px;
		height: 30px;
		background-color: #f90;
		content: '';
	}
`;

export const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	color: ${colors.light};
	text-shadow: 0px 1px 2px #000000b3;
	background: url(${({ valid }) => (!valid ? backInvalid : backValid)});
	background-repeat: no-repeat;
	background-size: cover;
	background-clip: border-box;
	transform: rotateY(180deg);
	backface-visibility: hidden;
	transition: background 0.1s linear;
`;
