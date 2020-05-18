export const installmentsHelper = ({ value, parcels }) => {
	const arr = [];

	for (let i = 1; i <= parcels; i++) {
		arr.push({
			parcel: `${i}x`,
			value: `${(value / i).toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			})} sem juros`,
		});
	}

	return arr;
};

export const dashCaseToCamelCase = string =>
	string.replace(/(-\w)/g, part => part[1].toUpperCase());

export const formatCardNumber = cardNumber => {
	const trimmedCardNumber = cardNumber.replace(/[^0-9*]/g, '');

	if (/^3[47]\d{0,13}$/.test(trimmedCardNumber)) {
		return trimmedCardNumber
			.replace(/(\d{4})/, '$1 ')
			.replace(/(\d{4}) (\d{6})/, '$1 $2 ')
			.trimRight();
	}

	if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(trimmedCardNumber)) {
		return trimmedCardNumber
			.replace(/(\d{4})/, '$1 ')
			.replace(/(\d{4}) (\d{6})/, '$1 $2 ')
			.trimRight();
	}

	if (/^\d{0,16}$/.test(trimmedCardNumber)) {
		return trimmedCardNumber
			.replace(/(\d{4})/, '$1 ')
			.replace(/(\d{4}) (\d{4})/, '$1 $2 ')
			.replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
			.trimRight();
	}

	return trimmedCardNumber
		.replace(/(\*{4})/, '$1 ')
		.replace(/(\*{4}) (\*{4})/, '$1 $2 ')
		.replace(/(\*{4}) (\*{4}) (\*{4})/, '$1 $2 $3 ')
		.trimRight();
};
