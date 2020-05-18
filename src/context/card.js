import React, { createContext, useReducer } from 'react';

import PropTypes from 'prop-types';

import { reducer } from '~/reducers/card';
import { INITIAL_STATE } from '~/reducers/actions';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
	const contextValue = useReducer(reducer, INITIAL_STATE);
	return (
		<CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
	);
};

CardProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
