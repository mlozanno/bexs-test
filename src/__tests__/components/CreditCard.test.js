import React from 'react';
import { render } from '@testing-library/react';
import CreditCard from '~/components/CreditCard';

const cardData = {
	cardNumber: '123123123',
	userName: 'Marcus Lozano',
	expirationDate: '10/23'
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

		const userName = getByTestId('credit-card-user-name');

		expect(userName).toBeDefined();
	});

	it('should has an expiration date element', () => {
		const { getByTestId } = render(<CreditCard />);

		const expirationDate = getByTestId('credit-card-expiration-date');

		expect(expirationDate).toBeDefined();
	});

	it('should has a cvv element', () => {
		const { getByTestId } = render(<CreditCard />);

		const cvv = getByTestId('credit-card-cvv');

		expect(cvv).toBeDefined();
	});

	it('should be able to display cardNumber data', () => {
		const { getByTestId } = render(<CreditCard {...cardData} />);

		const cardNumber = getByTestId('credit-card-number');

		expect(cardNumber).toHaveTextContent(cardData.cardNumber);
	});

	it('should be able to display userName data', () => {
		const { getByTestId } = render(<CreditCard {...cardData} />);

		const userName = getByTestId('credit-card-user-name');

		expect(userName).toHaveTextContent(cardData.userName);
	});

	it('should be able to display expirationDate data', () => {
		const { getByTestId } = render(<CreditCard {...cardData} />);

		const expirationDate = getByTestId('credit-card-expiration-date');

		expect(expirationDate).toHaveTextContent(cardData.expirationDate);
	});
});
