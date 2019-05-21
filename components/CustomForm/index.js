import { Form, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Alert, Keyboard, StyleSheet } from 'react-native';
import FormBooleanInput from './FormBooleanInput';
import FormButton from './FormButton';
import FormTextInput from './FormTextInput';
import useCustomForm from './hooks/useCustomForm';

/**
 * A component which renders a form based on a given list of fields.
 */
const CustomForm = props => {
	const { formFieldsRows, handleSubmit } = props;

	validate = v => v;
	const {
		fields,
		handleOnChangeValue,
		errors,
		isSubmitting,
		resetForm,
		isValidFormData,
		isDirtyFormData
	} = useCustomForm(formFieldsRows, handleOnClickSubmit, validate);

	/**
	 * Attempt to submit the form if all fields have been
	 * properly filled out.
	 */
	function handleOnClickSubmit() {
		if (!isValidFormData) {
			return Alert.alert('Input error', 'Please input all required fields.');
		}

		return handleSubmit(fields);
	}

	/**
	 * Reset the form and hide the keyboard.
	 */
	handleOnClickReset = () => {
		Keyboard.dismiss();
		resetForm();
	};

	renderTextInput = ({ name, label, inputProps }) => (
		<FormTextInput
			{...inputProps}
			value={fields[name].toString()}
			onChangeText={handleOnChangeValue(name)}
			labelText={label}
			key={name}
		/>
	);

	renderBooleanInput = ({ name, label, inputProps }) => (
		<FormBooleanInput
			{...inputProps}
			value={fields[name]}
			onValueChange={handleOnChangeValue(name)}
			labelText={label}
			key={name}
		/>
	);

	renderButton = ({ label, buttonProps }) => (
		<FormButton
			{...buttonProps}
			onPress={handleOnClickSubmit}
			disabled={!isValidFormData}
			key={label}
		>
			{label}
		</FormButton>
	);

	return (
		<Form behavior={'padding'} autoFocus={false}>
			{formFieldsRows.map((formFieldsRow, i) => (
				<View style={styles.row} key={`f-${i}`}>
					{formFieldsRow.map(field => {
						switch (field.type) {
							case 'boolean':
								return renderBooleanInput(field);

							case 'button':
								return renderButton(field);

							default:
								return renderTextInput(field);
						}
					})}
				</View>
			))}
		</Form>
	);
};

CustomForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	formFieldsRows: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				label: PropTypes.string,
				type: PropTypes.string,
				inputProps: PropTypes.object,
				defaultValue: PropTypes.any
			})
		)
	).isRequired
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
});

export default CustomForm;
