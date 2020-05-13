import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';

import Header from '~/components/Header';

describe('<Header />', () => {
	it('should be a function', () => {
		expect(typeof Header).toBe('function');
	});

	it('should render component', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);

		const header = getByTestId('header');

		expect(header).toMatchSnapshot();
	});
});
