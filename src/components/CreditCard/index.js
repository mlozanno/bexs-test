import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = ({ cardNumber, userName }) => (
	<div data-testid="credit-card">
		<span data-testid="credit-card-number">{cardNumber}</span>
		<span data-testid="credit-card-user-name">{userName}</span>
		<span data-testid="credit-card-expiration-date" />
		<span data-testid="credit-card-cvv" />
	</div>
);

CreditCard.propTypes = {
	cardNumber: PropTypes.string,
	userName: PropTypes.string,
};

CreditCard.defaultProps = {
	cardNumber: undefined,
	userName: undefined,
};

export default CreditCard;
