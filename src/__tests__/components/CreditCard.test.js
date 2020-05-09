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
});
