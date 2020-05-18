import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardProvider } from '~/context/card';

import Layout from '~/components/Layout';

describe(`<Layout />`, () => {
	it(`should be a function`, () => {
		expect(typeof Layout).toBe(`function`);
	});

	it(`should be render component`, () => {
		const { getByTestId } = render(
			<CardProvider>
				<MemoryRouter>
					<Layout />
				</MemoryRouter>
			</CardProvider>
		);

		const layout = getByTestId(`layout`);

		expect(layout).toMatchSnapshot();
	});

	it(`should be able to render Checkout component when click in logo`, () => {
		const { getByTestId, getByAltText, getByText } = render(
			<CardProvider>
				<MemoryRouter>
					<Layout />
				</MemoryRouter>
			</CardProvider>
		);

		fireEvent.click(getByText(/Checkout/i));

		fireEvent.click(getByAltText(`Bexs logo`));

		const shopPage = getByTestId(`checkout-page`);

		expect(shopPage).toBeTruthy();
	});

	it(`should be able to render Shop component when click in Home link`, () => {
		const { getByTestId, getByText } = render(
			<CardProvider>
				<MemoryRouter>
					<Layout />
				</MemoryRouter>
			</CardProvider>
		);

		fireEvent.click(getByText(/Shop/i));

		const shopPage = getByTestId(`shop-page`);

		expect(shopPage).toBeTruthy();
	});

	it(`should be able to render Checkout component when click in Checkout link`, () => {
		const { getByTestId, getByText } = render(
			<CardProvider>
				<MemoryRouter>
					<Layout />
				</MemoryRouter>
			</CardProvider>
		);

		fireEvent.click(getByText(/Checkout/i));

		const checkoutPage = getByTestId(`checkout-page`);

		expect(checkoutPage).toBeTruthy();
	});

	it(`should be able to render Wallet component when click in Carteira link`, () => {
		const { getByTestId, getByText } = render(
			<CardProvider>
				<MemoryRouter>
					<Layout />
				</MemoryRouter>
			</CardProvider>
		);

		fireEvent.click(getByText(/Carteira/i));

		const walletPage = getByTestId(`wallet-page`);

		expect(walletPage).toBeTruthy();
	});
});
