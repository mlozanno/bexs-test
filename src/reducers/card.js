import {
	SET_CARD_DATA,
	SET_CARD_TYPE,
	FLIP,
	FLIP_BACK,
	TOGGLE_FLIP,
	VALID_CARD,
	INVALID_CARD,
	SET_INSTALLMENTS,
} from './actions';

export const reducer = (state, action) => {
	const { payload } = action;

	switch (action.type) {
		case SET_CARD_DATA:
			return {
				...state,
				...payload,
			};
		case SET_CARD_TYPE:
			return {
				...state,
				cardType: payload.cardType,
			};
		case FLIP:
			return {
				...state,
				flipped: true,
			};
		case FLIP_BACK:
			return {
				...state,
				flipped: false,
			};
		case TOGGLE_FLIP:
			return {
				...state,
				flipped: !state.flipped,
			};
		case VALID_CARD:
			return {
				...state,
				isValid: true,
			};

		case INVALID_CARD:
			return {
				...state,
				isValid: false,
			};
		case SET_INSTALLMENTS:
			return {
				...state,
				installments: payload.installments,
			};
		default:
			throw new Error(`Unexpected action`);
	}
};
