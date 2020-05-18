import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { pxToRem, colors } from '~/styles/theme';

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
		font-size: ${pxToRem(12)};

		@media (min-width: 768px) {
			font-size: ${pxToRem(16)};
		}
	}

	span[data-field='card-number'],
	span[data-field='card-cvc'] {
		font-size: ${pxToRem(19)};

		@media (min-width: 768px) {
			font-size: ${pxToRem(22)};
		}
	}

	span[data-field='card-cvc'] {
		position: absolute;
		color: ${colors.darkGrey};
		transform: translate(${pxToRem(135)}, ${pxToRem(80)});
	}
`;

export const FliperContainer = styled.div`
	position: relative;
	width: ${pxToRem(280)};
	height: ${pxToRem(172)};
	perspective: ${pxToRem(1000)};

	&::before {
		position: absolute;
		bottom: ${pxToRem(-5)};
		left: 50%;
		width: 90%;
		height: ${pxToRem(5)};
		background-color: ${rgba(colors.darkGrey, 0.3)};
		border-radius: 50%;
		transform: translateX(-50%);
		filter: blur(5px);
		content: '';
	}

	@media (min-width: 768px) {
		width: ${pxToRem(364)};
		height: ${pxToRem(223)};
	}
`;

export const Flipper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: ${pxToRem(10)};
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
	padding: ${pxToRem(30, 20)};
	color: ${colors.light};
	text-shadow: ${pxToRem(0, 1, 2)} #000000b3;
	background: url(${({ valid }) => (!valid ? frontInvalid : frontValid)});
	background-repeat: no-repeat;
	background-size: cover;
	background-clip: border-box;
	backface-visibility: hidden;
	transition: background 0.1s linear;

	span[data-field='card-number'] {
		grid-column: span 4;
		letter-spacing: ${pxToRem(1.4)};
		white-space: nowrap;

		@media (min-width: 768px) {
			letter-spacing: ${pxToRem(4)};
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
		height: ${pxToRem(30)};
		background: url(${brandsImg}) no-repeat;
		content: '';

		${({ brand, valid }) => {
			if (brand) {
				const brandObj = brandsDimensions.find(item => item.type === brand);

				return css`
					width: ${pxToRem(!valid ? 0 : brandObj.width)};
					background-position-x: ${pxToRem(brandObj.x)};
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
	text-shadow: ${pxToRem(0, 1, 2)} #000000b3;
	background: url(${({ valid }) => (!valid ? backInvalid : backValid)});
	background-repeat: no-repeat;
	background-size: cover;
	background-clip: border-box;
	transform: rotateY(180deg);
	backface-visibility: hidden;
	transition: background 0.1s linear;
`;
