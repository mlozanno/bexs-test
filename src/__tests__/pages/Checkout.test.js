import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardProvider } from '~/context/card';

import Checkout from '~/pages/Checkout';

describe(`<Checkout /> page`, () => {
	it(`should be a function`, () => {
		expect(typeof Checkout).toBe(`function`);
	});

	it(`should be render component`, () => {
		const { getByTestId } = render(
			<CardProvider>
				<MemoryRouter>
					<Checkout />
				</MemoryRouter>
			</CardProvider>
		);

		const checkout = getByTestId(`checkout-page`);

		expect(checkout).toMatchSnapshot();
	});
});
