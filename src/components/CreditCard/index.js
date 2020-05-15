import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
	StyledCreditCard,
	FliperContainer,
	Flipper,
	Front,
	Back,
} from './styles';

const CreditCard = ({ cardNumber, userName, expirationDate, cvv }) => {
	const [flipped, setFlipped] = useState(true);
	const [valid, setValid] = useState(false);

	return (
		<StyledCreditCard data-testid="credit-card">
			<FliperContainer>
				<Flipper flipped={flipped}>
					<Front valid={valid}>
						<span data-testid="credit-card-number" data-field="card-number">
							{cardNumber}
						</span>
						<span
							data-testid="credit-card-user-name"
							data-field="card-user-name"
						>
							{userName.toUpperCase()}
						</span>
						<span
							data-testid="credit-card-expiration-date"
							data-field="card-expiration-date"
						>
							{expirationDate}
						</span>
					</Front>

					<Back valid={valid}>
						<span data-testid="credit-card-cvv" data-field="card-cvv">
							{cvv}
						</span>
					</Back>
				</Flipper>
			</FliperContainer>
		</StyledCreditCard>
	);
};

CreditCard.propTypes = {
	cardNumber: PropTypes.string,
	userName: PropTypes.string,
	expirationDate: PropTypes.string,
	cvv: PropTypes.string,
};

CreditCard.defaultProps = {
	cardNumber: '**** **** **** ****',
	userName: 'nome do titular',
	expirationDate: '00/00',
	cvv: '***',
};

export default CreditCard;
