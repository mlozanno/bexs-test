import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Shop from '~/pages/Shop';

describe('<Shop /> page', () => {
	it('should be a function', () => {
		expect(typeof Shop).toBe('function');
	});

	it('should be render component', () => {
		const { getByTestId } = render(<Shop />);

		const shop = getByTestId('shop-page');

		expect(shop).toMatchSnapshot();
	});
});
