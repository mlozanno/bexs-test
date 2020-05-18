export const base = 10;

export const colors = {
	darkGrey: '#3C3C3C',
	error: '#EB5757',
	grey: '#c9c9c9',
	light: '#fff',
	lightGrey: '#F7F7F7',
	primary: '#DE4B4B',
};

export const fontSize = {
	large: `${22 / base}rem`, // 2.2rem
	regular: `${17 / base}rem`, // 1.7rem
	small: `${13 / base}rem`, // 1.3rem
};

export const zIndex = {
	base: 0,
	floated: base,
	super: 100,
};

export const toRem = (...values) =>
	values
		.map(value => (Number(value) ? `${(value * base) / base}rem` : value))
		.join(' ');
