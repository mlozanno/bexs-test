import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Wallet from '~/pages/Wallet';

describe(`<Wallet /> page`, () => {
	it(`should be a function`, () => {
		expect(typeof Wallet).toBe(`function`);
	});

	it(`should be render component`, () => {
		const { getByTestId } = render(<Wallet />);

		const wallet = getByTestId(`wallet-page`);

		expect(wallet).toMatchSnapshot();
	});
});
