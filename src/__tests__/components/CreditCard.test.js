import React from 'react';
import { render } from '@testing-library/react';
import CreditCard from '~/components/CreditCard';

const cardData = {
	cardNumber: '123123123',
	userName: 'MARCUS LOZANO',
	expirationDate: '10/23',
	cvv: '123'
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

	it('should be able to display cvv data', () => {
		const { getByTestId } = render(<CreditCard {...cardData} />);

		const cvv = getByTestId('credit-card-cvv');

		expect(cvv).toHaveTextContent(cardData.cvv);
	});

	it('should be able to display "**** **** **** ****" if cardNumber is missing', () => {
		const { getByTestId } = render(<CreditCard />);

		const cardNumber = getByTestId('credit-card-number');

		expect(cardNumber).toHaveTextContent('**** **** **** ****');
	});

	it('should be able to display "NOME DO TITULAR" if userName is missing', () => {
		const { getByTestId } = render(<CreditCard />);

		const userName = getByTestId('credit-card-user-name');

		expect(userName).toHaveTextContent('NOME DO TITULAR');
	});

	it('should be able to display "00/00" if expirationDate is missing', () => {
		const { getByTestId } = render(<CreditCard />);

		const userName = getByTestId('credit-card-expiration-date');

		expect(userName).toHaveTextContent('00/00');
	});

	it('should be able to display "***" if cvv is missing', () => {
		const { getByTestId } = render(<CreditCard />);

		const userName = getByTestId('credit-card-cvv');

		expect(userName).toHaveTextContent('***');
	});
});
