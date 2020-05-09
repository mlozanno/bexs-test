import React from 'react';
import { render } from '@testing-library/react';
import CreditCard from '~/components/CreditCard';

describe('<CreditCard />', () => {
	it('should be a function', () => {
		expect(typeof CreditCard).toBe('function');
	});

	it('should has a card number element', () => {
		const { getByTestId } = render(<CreditCard />);

		const cardNumber = getByTestId('credit-card-number');

		expect(cardNumber).toBeDefined();
	});

	it('should has an user name element', () => {
		const { getByTestId } = render(<CreditCard />);

		const userName = getByTestId('credit-name-number');

		expect(userName).toBeDefined();
	});

	it('should has an expiration date element', () => {
		const { getByTestId } = render(<CreditCard />);

		const expirationDate = getByTestId('credit-expiration-number');

		expect(expirationDate).toBeDefined();
	});
});
