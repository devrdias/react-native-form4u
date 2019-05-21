import { useState, useEffect } from 'react';

const useCustomForm = (formFieldsRows, callback, validate) => {
	const formInitialState = getInitialFormState();

	const [fields, setFields] = useState({ ...formInitialState });
	const [isValidFormData, setIsValidFormData] = useState();
	const [isDirtyFormData, setIsDirtyFormData] = useState();
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		const formFields = getFormFields();
		/**
		 * Check if all fields have been filled out.
		 */

		const isFilled = formFields
			// filter out Boolean fields because they will always have a value
			.filter(field => field.type !== 'boolean' && field.type !== 'button')
			// check if all remaining fields have been filled out
			.every(field => !!fields[field.name]);
		setIsValidFormData(isFilled);

		/**
		 * Check if at least one field has been filled out.
		 */
		const isDirty = formFields.some(field => {
			switch (field.type) {
				case 'boolean':
					// because Boolean fields will have a default value,
					// we need to check if the current value is not the default one
					return fields[field.name] !== getFormFieldDefaultValue(field);

				default:
					return !!fields[field.name];
			}
		});
		setIsDirtyFormData(isDirty);
	}, [fields]);

	/**
	 * Extract our form fields from each row
	 * and compose one big list of field objects.
	 */
	function getFormFields() {
		const formFields = [];

		formFieldsRows.map(row => {
			formFields.push(...row);
		});

		return formFields;
	}

	/**
	 * dynamically construct initial state by using
	 * each form field's name as an object property.
	 */
	function getInitialFormState() {
		const formFields = getFormFields();

		const formFieldNames = formFields.reduce((obj, field) => {
			obj[field.name] = getFormFieldDefaultValue(field);
			return obj;
		}, {});

		return formFieldNames;
	}

	/**
	 * Determine what should be the default value
	 * for a given field.
	 */
	function getFormFieldDefaultValue({ defaultValue, type }) {
		if (defaultValue !== undefined) {
			return defaultValue;
		}

		switch (type) {
			case 'boolean':
				return false;
			default:
				return '';
		}
	}

	/**
	 * Reset Form to its initial state
	 */
	resetForm = () => {
		setFields(formInitialState);
	};

	/**
	 * Handle callback onChangeValue from inputs and other components
	 */

	handleOnChangeValue = fieldName => text => {
		setFields({ ...fields, [fieldName]: text });
	};

	return {
		fields,
		errors,
		isSubmitting,
		resetForm,
		handleOnChangeValue,
		isValidFormData,
		isDirtyFormData
	};
};

export default useCustomForm;
