import React, { createContext, useReducer } from 'react';

import PropTypes from 'prop-types';

import { reducer, initialState } from '~/reducers/card';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
	const contextValue = useReducer(reducer, initialState);
	return (
		<CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
	);
};

CardProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
