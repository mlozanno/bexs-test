import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FaSpinner } from 'react-icons/fa';

import '@testing-library/jest-dom';

import SubmitButton from '~/components/Button/Submit';

const data = {
	disabled: false,
	loading: false,
	label: `test label`,
	onClick: jest.fn(),
};

describe(`<SubmitButton />`, () => {
	it(`should be a function`, () => {
		expect(typeof SubmitButton).toBe(`function`);
	});

	it(`should be render component`, () => {
		const { getByTestId } = render(<SubmitButton {...data} />);

		const button = getByTestId(`submit-button`);

		expect(button).toMatchSnapshot();
	});

	it(`should be type="submit"`, () => {
		const { getByTestId } = render(<SubmitButton {...data} />);

		const button = getByTestId(`submit-button`);

		expect(button).toHaveAttribute(`type`, `submit`);
	});

	it(`should has a label`, () => {
		const { getByTestId } = render(<SubmitButton {...data} />);

		const button = getByTestId(`submit-button`);

		expect(button).toHaveTextContent(`test label`);
	});

	it(`should be able to execute onClick event`, () => {
		const { getByTestId } = render(<SubmitButton {...data} />);

		const button = getByTestId(`submit-button`);

		fireEvent.click(button);

		expect(data.onClick).toBeCalledTimes(1);
	});

	it(`should be disabled if 'disabled' param is true`, () => {
		const { getByTestId } = render(<SubmitButton {...data} disabled />);

		const button = getByTestId(`submit-button`);

		expect(button).toHaveAttribute(`disabled`);
	});

	it(`should not render icon if 'loading' is missing, but 'icon' is defined`, () => {
		const { container } = render(
			<SubmitButton {...data} icon={<FaSpinner />} />
		);

		const svg = container.getElementsByTagName(`svg`)[0];

		expect(svg).toBeFalsy();
	});

	it(`should be able to render icon if 'loading' and 'icon' is defined`, () => {
		const { container } = render(
			<SubmitButton {...data} icon={<FaSpinner />} loading />
		);

		const svg = container.getElementsByTagName(`svg`)[0];

		expect(svg).toBeTruthy();
	});
});
