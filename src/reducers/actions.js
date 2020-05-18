export const INITIAL_STATE = {
	cardNumber: `****************`,
	cardHolder: `NOME DO TITULAR`,
	expiryDate: `00 / 00`,
	cvc: `***`,
	flipped: false,
	isValid: false,
	cardType: {},
	installments: ``,
};

export const SET_CARD_DATA = `SET_CARD_DATA`;
export const SET_CARD_TYPE = `SET_CARD_TYPE`;
export const FLIP = `FLIP`;
export const FLIP_BACK = `FLIP_BACK`;
export const TOGGLE_FLIP = `TOGGLE_FLIP`;
export const VALID_CARD = `VALID_CARD`;
export const INVALID_CARD = `INVALID_CARD`;
export const SET_INSTALLMENTS = `SET_INSTALLMENTS`;
