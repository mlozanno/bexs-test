import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useCard from '~/hooks/useCard';

import { formatCardNumber } from '~/utils';

import {
	StyledCreditCard,
	FliperContainer,
	Flipper,
	Front,
	Back,
} from './styles';

const CreditCard = ({ className }) => {
	const [state, dispatch] = useCard();
	const [brand, setBrand] = useState(undefined);

	useEffect(() => {
		if (state.cardType?.type) {
			dispatch({ type: `VALID_CARD` });
			setBrand(state.cardType.type);

			return;
		}

		dispatch({ type: `INVALID_CARD` });
	}, [state.cardType, dispatch]);

	return (
		<StyledCreditCard data-testid="card" className={className}>
			<FliperContainer>
				<Flipper
					flipped={state.flipped}
					onClick={() => dispatch({ type: `TOGGLE_FLIP` })}
				>
					<Front valid={state.isValid} brand={brand}>
						<span data-testid="card-number" data-field="card-number">
							{formatCardNumber(state.cardNumber)}
						</span>

						<span data-testid="card-holder" data-field="card-holder">
							{state.cardHolder.toUpperCase()}
						</span>

						<span data-testid="card-expiry-date" data-field="card-expiry-date">
							{state.expiryDate}
						</span>
					</Front>

					<Back valid={state.isValid}>
						<span data-testid="card-cvc" data-field="card-cvc">
							{state.cvc}
						</span>
					</Back>
				</Flipper>
			</FliperContainer>
		</StyledCreditCard>
	);
};

CreditCard.propTypes = {
	className: PropTypes.string,
};

CreditCard.defaultProps = {
	className: undefined,
};

export default CreditCard;
