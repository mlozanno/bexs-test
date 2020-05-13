import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Layout from '~/components/Layout';

const renderLayout = () => {
	const { getByTestId } = render(
		<Layout>
			<h1>Bexs</h1>
		</Layout>
	);

	return getByTestId('layout');
};

describe('<Layout />', () => {
	it('should be a function', () => {
		expect(typeof Layout).toBe('function');
	});

	it('should be render component', () => {
		expect(renderLayout()).toMatchSnapshot();
	});

	it('should be able to render children', () => {
		expect(renderLayout()).toHaveTextContent(/Bexs/);
	});
});
