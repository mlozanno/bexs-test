export const base = 10;

export const colors = {
	primary: '#DE4B4B',
	darkGrey: '#3C3C3C',
	lightGrey: '#F7F7F7',
	light: '#fff',
};

export const fontSize = {
	large: `${22 / base}rem`, // 2.2rem
	regular: `${17 / base}rem`, // 1.6rem
	small: `${13 / base}rem`, // 1.3rem
};

export const zIndex = {
	base: 0,
	floated: base,
};

export const spacing = (...values) =>
	values
		.map(value => (Number(value) ? `${(value * base) / base}rem` : value))
		.join(' ');
