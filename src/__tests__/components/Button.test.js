import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '~/components/Button';

const buttonData = {
	label: 'test label',
	handleClick: jest.fn(),
};

describe('<Button />', () => {
	it('should be a function', () => {
		expect(typeof Button).toBe('function');
	});

	it('should has a label', () => {
		const { getByTestId } = render(<Button {...buttonData} />);

		const button = getByTestId('button');

		expect(button).toHaveTextContent('test label');
	});

	it('should has an onClick with handleClick function', () => {
		const { getByTestId } = render(<Button {...buttonData} />);

		const button = getByTestId('button');

		fireEvent.click(button);

		expect(buttonData.handleClick).toBeCalledTimes(1);
	});
});
