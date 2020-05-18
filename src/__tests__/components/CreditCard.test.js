import React from 'react';
import { render } from '@testing-library/react';
import CreditCard from '~/components/CreditCard';

import { CardProvider } from '~/context/card';

import { INITIAL_STATE } from '~/reducers/actions';

import { formatCardNumber } from '~/utils';

describe(`<CreditCard />`, () => {
	it(`should be a function`, () => {
		expect(typeof CreditCard).toBe(`function`);
	});

	describe(`Real data`, () => {
		it(`should be able to display cardNumber data`, () => {
			const { getByTestId } = render(
				<CardProvider>
					<CreditCard />
				</CardProvider>
			);

			const cardNumber = getByTestId(`card-number`);

			expect(cardNumber).toHaveTextContent(
				formatCardNumber(INITIAL_STATE.cardNumber)
			);
		});

		it(`should be able to display cardHolder data`, () => {
			const { getByTestId } = render(
				<CardProvider>
					<CreditCard />
				</CardProvider>
			);

			const cardHolder = getByTestId(`card-holder`);

			expect(cardHolder).toHaveTextContent(INITIAL_STATE.cardHolder);
		});

		it(`should be able to display expiryDate data`, () => {
			const { getByTestId } = render(
				<CardProvider>
					<CreditCard />
				</CardProvider>
			);

			const expiryDate = getByTestId(`card-expiry-date`);

			expect(expiryDate).toHaveTextContent(INITIAL_STATE.expiryDate);
		});

		it(`should be able to display cvc data`, () => {
			const { getByTestId } = render(
				<CardProvider>
					<CreditCard />
				</CardProvider>
			);

			const cvc = getByTestId(`card-cvc`);

			expect(cvc).toHaveTextContent(INITIAL_STATE.cvc);
		});
	});
});
