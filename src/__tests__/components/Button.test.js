import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '~/components/Button';

describe('<Button />', () => {
	it('should be a function', () => {
		expect(typeof Button).toBe('function');
	});
});
