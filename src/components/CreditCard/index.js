import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = ({ cardNumber }) => (
	<div data-testid="credit-card">
		<span data-testid="credit-card-number">{cardNumber}</span>
		<span data-testid="credit-name-number" />
		<span data-testid="credit-expiration-number" />
		<span data-testid="credit-cvv-number" />
	</div>
);

CreditCard.propTypes = {
	cardNumber: PropTypes.string,
};

CreditCard.defaultProps = {
	cardNumber: undefined,
};

export default CreditCard;
