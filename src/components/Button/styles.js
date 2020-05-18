import styled from 'styled-components';
import { shade } from 'polished';

import { pxToRem, fontSize, colors } from '~/styles/theme';

export const StyledButton = styled.button`
	display: flex;
	grid-column: span 2;
	align-items: center;
	justify-content: center;
	height: ${pxToRem(50)};
	color: ${colors.light};
	font-weight: normal;
	font-size: ${fontSize.regular};
	text-align: center;
	text-transform: uppercase;
	background-color: ${colors.primary};
	border: none;
	border-radius: ${pxToRem(10)};
	transition: background-color 0.2s;

	> span {
		position: relative;
		transition: 0.5s;

		svg {
			position: absolute;
			top: calc(50% - ${pxToRem(10)});
			left: ${pxToRem(-30)};
		}

		&::after {
			position: absolute;
			top: 0;
			right: -20px;
			opacity: 0;
			transition: 0.5s;
			content: '\\00bb';
		}
	}

	&:hover {
		background-color: ${shade(0.25, colors.primary)};

		span {
			padding-right: 25px;

			&::after {
				right: 0;
				opacity: 1;
			}
		}
	}

	&:disabled {
		background: ${colors.grey};
		cursor: not-allowed;
		user-select: none;
		pointer-events: none;
	}

	.spin {
		animation: spin 2s infinite linear;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(359deg);
		}
	}
`;
