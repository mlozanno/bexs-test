import styled, { css } from 'styled-components';
import { pxToRem, fontSize, colors } from '~/styles/theme';

import chevron from '~/assets/chevron.svg';
import check from '~/assets/check.svg';

export const ShortSteps = styled.p`
	@media (min-width: 1024px) {
		display: none;
	}
`;

export const ExpandedSteps = styled.ol`
	@media (max-width: 1023px) {
		display: none;
	}

	@media (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
		list-style: none;
	}
`;

export const ExpandedStep = styled.li`
      position: relative;
      display: flex;
      align-items: center;
      width: calc(100% / 3);
			color: ${colors.primary};
			font-size: ${fontSize.small};
			text-align: right;

      &:last-child {
        justify-content: flex-end;
        margin-right: 0;
      }

			&::before {
				display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
				width: ${pxToRem(22)};
				height: ${pxToRem(22)};
        margin-right: ${pxToRem(8)};
        font-weight: bold;
        font-size: ${pxToRem(11)};
        border: ${pxToRem(2)} solid ${colors.primary};
        border-radius: 100%;
				content: '${({ step, isDone }) => !isDone && step}';
        
        ${({ isDone }) =>
					isDone &&
					css`
						background: ${colors.primary} url(${check}) no-repeat;
						background-size: contain;
					`}
			}

      + li {
        &::after {
          position: absolute;
          left: ${pxToRem(-25)};
          display: block;
          width: ${pxToRem(8)};
          height: ${pxToRem(14)};
          background: url(${chevron}) no-repeat;
          background-size: contain;
          content: '';
        }

        &:last-child {
          &::after {
            left: ${pxToRem(-6)};
          }
        }
      }
`;
