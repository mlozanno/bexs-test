import React from 'react';
import { render } from '@testing-library/react';
import CreditCard from '~/components/CreditCard';

const cardData = {
	cardNumber: '123123123',
};

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

	it('should has a cvv element', () => {
		const { getByTestId } = render(<CreditCard />);

		const cvv = getByTestId('credit-cvv-number');

		expect(cvv).toBeDefined();
	});

	it('should be able to display cardNumber data', () => {
		const { getByTestId } = render(<CreditCard {...cardData} />);

		const cardNumber = getByTestId('credit-card-number');

		expect(cardNumber).toHaveTextContent(cardData.cardNumber);
	});
});
