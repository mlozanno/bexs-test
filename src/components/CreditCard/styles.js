import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { toRem, colors } from '~/styles/theme';

import frontInvalid from '~/assets/front-invalid.svg';
import backInvalid from '~/assets/back-invalid.svg';
import frontValid from '~/assets/front-valid.svg';
import backValid from '~/assets/back-valid.svg';

import brandsImg from '~/assets/card-brands/brands.png';

const brandsDimensions = [
	{ type: `maestro`, width: 50, x: -0 },
	{ type: `amex`, width: 87, x: -64 },
	{ type: `visa`, width: 99, x: -164 },
	{ type: `mastercard`, width: 50, x: -277 },
	{ type: `dinersclub`, width: 44, x: -341 },
	{ type: `jcb`, width: 42, x: -398 },
	{ type: `discover`, width: 42, x: -454 },
];

export const StyledCreditCard = styled.div`
	span {
		font-size: ${toRem(1.2)};

		@media (min-width: 768px) {
			font-size: ${toRem(1.6)};
		}
	}

	span[data-field='card-number'],
	span[data-field='card-cvc'] {
		font-size: ${toRem(1.9)};

		@media (min-width: 768px) {
			font-size: ${toRem(2.2)};
		}
	}

	span[data-field='card-cvc'] {
		position: absolute;
		color: ${colors.darkGrey};
		transform: translate(135px, 80px);
	}
`;

export const FliperContainer = styled.div`
	position: relative;
	width: ${toRem(28)};
	height: ${toRem(17.2)};
	perspective: ${toRem(100)};

	&::before {
		position: absolute;
		bottom: ${toRem(-0.5)};
		left: 50%;
		width: 90%;
		height: ${toRem(0.5)};
		background-color: ${rgba(colors.darkGrey, 0.3)};
		border-radius: 50%;
		transform: translateX(-50%);
		filter: blur(5px);
		content: '';
	}

	@media (min-width: 768px) {
		width: ${toRem(36.4)};
		height: ${toRem(22.3)};
	}
`;

export const Flipper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: ${toRem(1)};
	transform-style: preserve-3d;
	transition: transform 0.3s ease-in-out;

	${({ flipped }) => flipped && `transform: rotateY(180deg);`}
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
	padding: ${toRem(3, 2)};
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
		letter-spacing: ${toRem(0.14)};
		white-space: nowrap;

		@media (min-width: 768px) {
			letter-spacing: ${toRem(0.4)};
		}
	}

	span[data-field='card-holder'] {
		grid-column: span 3;
	}

	span[data-field='card-expiry-date'] {
		grid-column: span 1;
		text-align: right;
	}

	&::before {
		grid-column: span 4;
		width: 0;
		height: ${toRem(3)};
		background: url(${brandsImg}) no-repeat;
		content: '';

		${({ brand, valid }) => {
			if (brand) {
				const brandObj = brandsDimensions.find(item => item.type === brand);

				return css`
					width: ${toRem(!valid ? 0 : brandObj.width / 10)};
					background-position-x: ${toRem(brandObj.x / 10)};
				`;
			}

			return false;
		}};
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
