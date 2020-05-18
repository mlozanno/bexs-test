import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import Form from '~/components/Form';
import Steps from '~/components/Steps';

import {
	StyledCardContainer,
	CardContent,
	NewCardTitle,
	BackLink,
	StyledCreditCard,
	FormContent,
} from './styles';

const Checkout = () => (
	<section data-testid="checkout-page">
		<StyledCardContainer>
			<CardContent>
				<BackLink to="/carteira">
					<FiChevronLeft size={30} color="white" />
					<span>Alterar forma de pagamento</span>
				</BackLink>

				<Steps />

				<NewCardTitle>Adicione um novo cartão de crédito</NewCardTitle>

				<StyledCreditCard />
			</CardContent>
			<FormContent>
				<Steps version="expanded" />
				<Form />
			</FormContent>
		</StyledCardContainer>
	</section>
);

export default Checkout;
