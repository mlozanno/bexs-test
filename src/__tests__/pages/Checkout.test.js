import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Checkout from '~/pages/Checkout';

describe('<Checkout /> page', () => {
	it('should be a function', () => {
		expect(typeof Checkout).toBe('function');
	});

	it('should be render component', () => {
		const { getByTestId } = render(<Checkout />);

		const checkout = getByTestId('checkout-page');

		expect(checkout).toMatchSnapshot();
	});
});
