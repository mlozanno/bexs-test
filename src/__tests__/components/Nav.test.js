import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Nav from '~/components/Nav';

describe('<Nav />', () => {
	it('should be a function', () => {
		expect(typeof Nav).toBe('function');
	});

	it('should be render component', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Nav />
			</MemoryRouter>
		);

		const nav = getByTestId('nav');

		expect(nav).toMatchSnapshot();
	});
});
