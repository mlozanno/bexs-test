import styled, { css } from 'styled-components';
import { toRem, fontSize, colors } from '~/styles/theme';

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
				width: ${toRem(2.2)};
				height: ${toRem(2.2)};
        margin-right: ${toRem(0.8)};
        font-weight: bold;
        font-size: ${toRem(1.1)};
        border: 2px solid ${colors.primary};
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
          left: ${toRem(-2.5)};
          display: block;
          width: ${toRem(0.8)};
          height: ${toRem(1.4)};
          background: url(${chevron}) no-repeat;
          background-size: contain;
          content: '';
        }

        &:last-child {
          &::after {
            left: ${toRem(-0.6)};
          }
        }
      }
`;
