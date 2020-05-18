import React from 'react';
import PropTypes from 'prop-types';

import { ShortSteps, ExpandedSteps, ExpandedStep } from './styles';

const Steps = ({ version }) => (
	<>
		{version === 'short' ? (
			<ShortSteps>
				<strong>Etapa 2 </strong>
				de 3
			</ShortSteps>
		) : (
			<ExpandedSteps>
				<ExpandedStep step={1} isDone>
					Carrinho
				</ExpandedStep>
				<ExpandedStep step={2}>Pagamento</ExpandedStep>
				<ExpandedStep step={3}>Confirmação</ExpandedStep>
			</ExpandedSteps>
		)}
	</>
);

Steps.propTypes = {
	version: PropTypes.oneOf(['expanded', 'short']),
};

Steps.defaultProps = {
	version: 'short',
};

export default Steps;
