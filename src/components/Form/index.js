import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	TextField,
	InputLabel,
	MenuItem,
	FormHelperText,
	FormControl,
	Select,
} from '@material-ui/core';

import { FaSpinner } from 'react-icons/fa';

import { usePaymentInputs } from 'react-payment-inputs';

import api from '~/services/api';

import SubmitButton from '~/components/Button/Submit';

import { installmentsHelper, dashCaseToCamelCase } from '~/utils';

import useCard from '~/hooks/useCard';
import useDebounce from '~/hooks/useDebounce';

import { StyledForm } from './styles';

const useStyles = makeStyles(() => ({
	formControl: {
		width: '100%',
	},
	menuItem: {
		fontSize: '1.7rem',
	},
}));

const ERROR_MESSAGES = {
	emptyCardNumber: 'Número de cartão obrigatório',
	invalidCardNumber: 'Número de cartão inválido',
	emptyExpiryDate: 'Data obritatória',
	monthOutOfRange: 'Mês inválido',
	yearOutOfRange: 'Ano inválido',
	dateOutOfRange: 'Data inválida',
	invalidExpiryDate: 'Data inválida',
	emptyCVC: 'Códivo obrigatório',
	invalidCVC: 'Código inválido',
	cardHolder: 'Insira seu nome completo',
	installments: 'Insira o número de parcelas',
};

export default function SimpleSelect() {
	const classes = useStyles();
	const [state, dispatch] = useCard();
	const {
		meta,
		getCardNumberProps,
		getExpiryDateProps,
		getCVCProps,
	} = usePaymentInputs({ errorMessages: ERROR_MESSAGES });
	const debounceSetcardInfo = useDebounce(meta.cardType, 500);

	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [loading, setLoading] = useState(false);

	const setCardType = useCallback(() => {
		if (debounceSetcardInfo) {
			dispatch({
				type: 'SET_CARD_TYPE',
				payload: { cardType: meta.cardType },
			});
		}
	}, [debounceSetcardInfo, meta.cardType, dispatch]);

	const flip = useCallback(() => dispatch({ type: 'FLIP' }), [dispatch]);
	const flipBack = useCallback(() => dispatch({ type: 'FLIP_BACK' }), [
		dispatch,
	]);

	const getErrors = useCallback(
		() =>
			Object.entries(errors).reduce((newObj, [key, val]) => {
				delete touched.zip;
				delete errors.zip;

				if (val && touched[key]) {
					Object.assign(newObj, { [key]: val });
				}

				return newObj;
			}, {}),
		[errors, touched]
	);

	const handleChange = useCallback(
		({ target: { value, name } }) => {
			const camelizedName = dashCaseToCamelCase(name);

			dispatch({
				type: 'SET_CARD_DATA',
				payload: { [camelizedName]: value },
			});
		},
		[dispatch]
	);

	const handleInstallments = useCallback(
		({ target: { value } }) => {
			setErrors({ ...errors, installments: undefined });

			dispatch({
				type: 'SET_INSTALLMENTS',
				payload: {
					installments: value,
				},
			});
		},
		[errors, dispatch]
	);

	const handleCardHolderError = useCallback(({ target: { value } }) => {
		const regex = /([A-Za-z]){3,}\s([A-Za-z]){3,}/;

		setTouched(prevTouched => ({ ...prevTouched, cardHolder: true }));

		if (!regex.test(value)) {
			return setErrors(prevErrors => ({
				...prevErrors,
				cardHolder: ERROR_MESSAGES.cardHolder,
			}));
		}

		return setErrors(prevError => ({ ...prevError, cardHolder: undefined }));
	}, []);

	const handleInstallmentsError = useCallback(({ target: { value } }) => {
		if (!value) {
			setTouched(prevTouched => ({ ...prevTouched, installments: true }));
			setErrors(prevErrors => ({
				...prevErrors,
				installments: ERROR_MESSAGES.installments,
			}));
		}
	}, []);

	const hasErrors = useMemo(
		() => Object.keys(errors).some(error => !!errors[error]),
		[errors]
	);

	useEffect(() => {
		setTouched(prevTouched => ({
			...prevTouched,
			cardHolder: false,
			installments: false,
		}));

		setErrors(prevErrors => ({
			...prevErrors,
			cardHolder: ERROR_MESSAGES.cardHolder,
			installments: ERROR_MESSAGES.installments,
		}));
	}, []);

	useEffect(() => {
		setTouched(prevTouched => ({ ...prevTouched, ...meta.touchedInputs }));

		setErrors(prevErrors => ({ ...prevErrors, ...meta.erroredInputs }));
	}, [meta.touchedInputs, meta.erroredInputs]);

	useEffect(() => {
		setCardType();
	}, [setCardType]);

	useEffect(() => {
		getErrors();
	}, [getErrors]);

	const handleSubmit = useCallback(e => {
		e.preventDefault();
		setLoading(true);

		// setTimeout de 1s para simular o delay de tempo de resposta
		setTimeout(async () => {
			try {
				const {
					data: { message },
				} = await api.post('/pagar');

				alert(message);
				setLoading(false);
			} catch (error) {
				alert(`Ops, ocorreu um erro: ${error}`);
				setLoading(false);
			}
		}, 1000);
	}, []);

	return (
		<StyledForm onSubmit={handleSubmit}>
			<TextField
				label="Número do cartão"
				name="card-number"
				data-id="card-number"
				inputProps={{
					...getCardNumberProps({ onChange: handleChange }),
				}}
				type="tel"
				error={!!getErrors().cardNumber}
				helperText={getErrors().cardNumber ? getErrors().cardNumber : null}
			/>

			<TextField
				label="Nome (igual ao cartão)"
				name="card-holder"
				data-id="card-holder"
				inputProps={{
					maxLength: 40,
				}}
				onChange={handleChange}
				onBlur={handleCardHolderError}
				error={!!getErrors().cardHolder}
				helperText={getErrors().cardHolder ? getErrors().cardHolder : null}
			/>

			<TextField
				label="Validade"
				name="card-expiry-date"
				data-id="expiry-date"
				type="tel"
				inputProps={{
					...getExpiryDateProps({ onChange: handleChange }),
				}}
				error={!!getErrors().expiryDate}
				helperText={getErrors().expiryDate ? getErrors().expiryDate : null}
			/>

			<TextField
				label="CVV"
				name="cvc"
				data-id="cvc"
				type="tel"
				inputProps={{
					maxLength: 3,
					...getCVCProps({
						onChange: handleChange,
						onFocus: flip,
						onBlur: flipBack,
					}),
				}}
				error={!!getErrors().cvc}
				helperText={getErrors().cvc ? getErrors().cvc : null}
			/>

			<FormControl
				className={classes.formControl}
				name="installments"
				data-id="installments"
				error={!!getErrors().installments}
			>
				<InputLabel id="installments-label">Número de parcelas</InputLabel>
				<Select
					label="Número de parcelas"
					labelId="installments-label"
					name="installments"
					value={state.installments}
					onChange={handleInstallments}
					onClose={handleInstallmentsError}
				>
					{installmentsHelper({ value: 12000, parcels: 12 }).map(
						installment => (
							<MenuItem
								key={installment.parcel}
								value={`${installment.parcel} ${installment.value}`}
								className={classes.menuItem}
							>
								{`${installment.parcel} ${installment.value}`}
							</MenuItem>
						)
					)}
				</Select>
				{getErrors().installments && (
					<FormHelperText>{getErrors().installments}</FormHelperText>
				)}
			</FormControl>

			<SubmitButton
				label="continuar"
				disabled={hasErrors || loading}
				loading={loading}
				icon={<FaSpinner className="spin" size={20} />}
			/>
		</StyledForm>
	);
}
