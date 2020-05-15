import React from 'react';

import CreditCard from '~/components/CreditCard';

import { StyledCardContainer } from './styles';

const Checkout = () => (
	<section data-testid="checkout-page">
		<StyledCardContainer>
			<CreditCard />
		</StyledCardContainer>
	</section>
);

export default Checkout;
