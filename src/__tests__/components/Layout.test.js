import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Layout from '~/components/Layout';

describe('<Layout />', () => {
	it('should be a function', () => {
		expect(typeof Layout).toBe('function');
	});

	it('should be render component', () => {
		const { getByTestId } = render(<Layout />);

		const layout = getByTestId('layout');

		expect(layout).toMatchSnapshot();
	});
});
