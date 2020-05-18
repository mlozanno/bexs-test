import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from '../styles';

const SubmitButton = ({ icon, label, disabled, loading, ...rest }) => (
	<StyledButton
		data-testid="submit-button"
		disabled={disabled}
		{...rest}
		type="submit"
	>
		<span>
			{icon && loading && icon}
			{label}
		</span>
	</StyledButton>
);

SubmitButton.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
};

SubmitButton.defaultProps = {
	icon: undefined,
	disabled: false,
	loading: false,
};

export default SubmitButton;
