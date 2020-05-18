import styled from 'styled-components';
import { toRem, fontSize } from '~/styles/theme';

export const StyledForm = styled.form`
	display: grid;
	grid-auto-flow: dense;
	grid-gap: ${toRem(1, 2)};
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	max-width: ${toRem(44)};
	margin: 0 auto;
	padding: ${toRem(0, 4, 4)};

	@media (min-width: 1024px) {
		grid-row-gap: ${toRem(4)};
		max-width: 100%;
		margin-top: ${toRem(5)};
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
		font-size: ${toRem(1.1)};
	}
`;
