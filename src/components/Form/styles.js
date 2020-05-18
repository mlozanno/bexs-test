import styled from 'styled-components';
import { pxToRem, fontSize } from '~/styles/theme';

export const StyledForm = styled.form`
	display: grid;
	grid-auto-flow: dense;
	grid-gap: ${pxToRem(10, 20)};
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	max-width: ${pxToRem(440)};
	margin: 0 auto;
	padding: ${pxToRem(0, 40, 40)};

	@media (min-width: 1024px) {
		grid-row-gap: ${pxToRem(40)};
		max-width: 100%;
		margin-top: ${pxToRem(50)};
		padding: 0;
	}

	[data-id='card-number'] {
		grid-column: span 2;
	}

	[data-id='card-holder'] {
		grid-column: span 2;
	}

	[data-id='card-expiry-date'] {
		grid-column: span 1;
	}

	[data-id='card-cvc'] {
		grid-column: span 1;
	}

	[data-id='installments'] {
		grid-column: span 2;
	}

	.MuiFormLabel-root,
	.MuiInputBase-root,
	.MuiMenuItem-root {
		font-size: ${fontSize.regular};
	}

	.MuiFormHelperText-root {
		font-size: ${pxToRem(11)};
	}
`;
