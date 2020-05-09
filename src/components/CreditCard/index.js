import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = ({ cardNumber, userName, expirationDate }) => (
	<div data-testid="credit-card">
		<span data-testid="credit-card-number">{cardNumber}</span>
		<span data-testid="credit-card-user-name">{userName}</span>
		<span data-testid="credit-card-expiration-date">{expirationDate}</span>
		<span data-testid="credit-card-cvv" />
	</div>
);

CreditCard.propTypes = {
	cardNumber: PropTypes.string,
	userName: PropTypes.string,
	expirationDate: PropTypes.string,
};

CreditCard.defaultProps = {
	cardNumber: undefined,
	userName: undefined,
	expirationDate: undefined,
};

export default CreditCard;
