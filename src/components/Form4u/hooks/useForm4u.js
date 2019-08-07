import { useState, useEffect } from 'react';
import { MaskService } from 'react-native-masked-text';

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
    // filter out fields which does not need to be checked if they are filled out
    const skipFieldType = ['boolean', 'button', 'reactComponent'];
    const filteredFields = formFields.filter(({ type }) => !skipFieldType.includes(type));

    // check if all remaining fields have been filled out
    const isFilled = filteredFields.every(field => !!fields[field.name].value);
    setIsValidFormData(isFilled);

    /**
     * Check if at least one field has been filled out.
     */
    const isDirty = formFields.some((field) => {
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
   * If there are any errors, then prevent of calling the callback function
   */
  useEffect(() => {
    setIsSubmitting(false);
    if (Object.keys(errors).length === 0 && isSubmitting && isValidFormData) {
      return callback(fields);
    }
  }, [errors]);

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
   * Extract our form fields from each row
   * and compose one big list of field objects.
   */
  function getFormFields() {
    const formFields = [];
    formFieldsRows.map(row => formFields.push(...row));
    return formFields;
  }

  /**
   * dynamically construct initial state by using
   * each form field's name as an object property.
   */
  function getInitialFormState() {
    const formFields = getFormFields();

    const formFieldNames = formFields.reduce((obj, field) => {
      const value = getFormFieldDefaultValue(field);
      obj[field.name] = { value };
      return obj;
    }, {});

    return formFieldNames;
  }

  /**
   * Reset Form to its initial state
   */
  const resetForm = () => {
    setErrors({});
    setFields(formInitialState);
  };

  /**
   * Handle callback onChangeValue from inputs and other components
   */
  const handleOnChangeValue = fieldName => (text) => {
    // check if field needs to be masked
    const formFields = getFormFields();
    const toMask = formFields
      .filter(f => f.name === fieldName)
      .reduce(
        (obj, item) => ({
          maskType: item.maskType,
          maskOptions: item.maskOptions,
        }),
        {},
      );

    const masked = toMask.maskType
      ? MaskService.toMask(toMask.maskType, text, toMask.maskOptions)
      : text;

    setFields({ ...fields, [fieldName]: { value: masked, rawValue: text } });
  };

  const handleOnSubmitForm = () => {
    setIsSubmitting(true); // prevents the form from submitting on render
    const returnedErrors = validate(fields);
    setErrors(returnedErrors);
  };

  return {
    fields,
    errors,
    isSubmitting,
    handleOnSubmitForm,
    resetForm,
    handleOnChangeValue,
    isValidFormData,
    isDirtyFormData,
  };
};

export default useCustomForm;
