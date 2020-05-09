import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = ({ cardNumber, userName, expirationDate, cvv }) => (
	<div data-testid="credit-card">
		<span data-testid="credit-card-number">{cardNumber}</span>
		<span data-testid="credit-card-user-name">{userName.toUpperCase()}</span>
		<span data-testid="credit-card-expiration-date">{expirationDate}</span>
		<span data-testid="credit-card-cvv">{cvv}</span>
	</div>
);

CreditCard.propTypes = {
	cardNumber: PropTypes.string,
	userName: PropTypes.string,
	expirationDate: PropTypes.string,
	cvv: PropTypes.string,
};

CreditCard.defaultProps = {
	cardNumber: '**** **** **** ****',
	userName: 'nome do titular',
	expirationDate: undefined,
	cvv: undefined,
};

export default CreditCard;
