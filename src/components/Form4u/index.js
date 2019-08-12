import { Form, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, Keyboard, StyleSheet } from 'react-native';
import {
  CustomSwitch, CustomButton, CustomPicker, CustomTextInput,
} from './FormItems';
import useForm4u from './hooks/useForm4u';

/**
 * A component which renders a form based on a given list of fields.
 */
const Form4u = ({
  formFields, handleSubmit, submitOnDirty, validation, formStyle,
}) => {
  // initialize the hook
  const {
    fields,
    handleOnChangeValue,
    errors,
    isSubmitting,
    handleOnSubmitForm,
    resetForm,
    isValidFormData,
  } = useForm4u(formFields, handleSubmit, validation);

  /**
   * Reset the form and hide the keyboard.
   */
  const handleOnClickReset = () => {
    Keyboard.dismiss();
    resetForm();
  };

  const renderTextInput = ({
    name, label, fieldProps, type,
  }) => {
    const hasError = !!errors[name];
    const errorMessage = hasError ? errors[name] : ' ';

    return (
      <CustomTextInput
        {...fieldProps}
        value={fields[name].value.toString()}
        onChangeText={handleOnChangeValue(name)}
        labelText={label}
        error={hasError}
        errorMessage={errorMessage}
        key={name}
        type={type}
      />
    );
  };

  const renderBooleanInput = ({ name, label, fieldProps }) => (
    <CustomSwitch
      {...fieldProps}
      value={fields[name].value}
      onValueChange={handleOnChangeValue(name)}
      labelText={label}
      key={name}
    />
  );

  const renderButton = ({ label, fieldProps, type }) => {
    const disabled = !submitOnDirty && !isValidFormData;

    return (
      <CustomButton
        {...fieldProps}
        onPress={type === 'reset' ? handleOnClickReset : handleOnSubmitForm}
        disabled={disabled}
        key={label}
      >
        {label}
      </CustomButton>
    );
  };

  const renderCustomComponent = ({ children }) => (children ? (
    <View style={styles.field} key={children.key}>
      {children}
    </View>
  ) : (
    <View />
  ));

  const renderPicker = ({
    name, placeholder, pickerItems, fieldProps,
  }) => {
    const hasError = !!errors[name];
    const errorMessage = hasError ? errors[name] : ' ';

    return (
      <CustomPicker
        key={name}
        selectedValue={fields[name].value}
        pickerItems={pickerItems}
        placeholder={placeholder}
        onValueChange={handleOnChangeValue(name)}
        error={hasError}
        errorMessage={errorMessage}
        {...fieldProps}
      />
    );
  };

  const renderLoading = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#482fff" />
    </View>
  );

  const renderField = (field) => {
    switch (field.type) {
      case 'boolean':
        return renderBooleanInput(field);

      case 'button':
      case 'reset':
        return renderButton(field);

      case 'customComponent':
        return renderCustomComponent(field);

      case 'text':
      case 'email':
      case 'credit-card':
      case 'cpf':
      case 'cnpj':
      case 'zip-code':
      case 'only-numbers':
      case 'money':
      case 'cel-phone':
      case 'datetime':
        return renderTextInput(field);

      case 'picker':
        return renderPicker(field);

      default:
        return <View />;
    }
  };

  return (
    <>
      {isSubmitting && renderLoading()}
      <Form autoFocus={false} style={[styles.form, { ...formStyle }]}>
        {/* allows more than one field per row  */}
        {formFields.map((rows, i) => (
          <View style={styles.field} key={`f-${i}`}>
            {rows.map((field) => renderField(field))}
          </View>
        ))}
      </Form>
    </>
  );
};

Form4u.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitOnDirty: PropTypes.bool,
  formFields: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        required: PropTypes.bool,
        type: PropTypes.oneOf([
          'boolean',
          'button',
          'reset',
          'customComponent',
          'text',
          'picker',
          'email',
          'credit-card',
          'cpf',
          'cnpj',
          'zip-code',
          'only-numbers',
          'money',
          'cel-phone',
          'datetime',
        ]).isRequired,
        fieldProps: PropTypes.object,
        defaultValue: PropTypes.any,
        fieldStyle: PropTypes.object,
        mask: PropTypes.string,
      }),
    ),
  ),
  formStyle: PropTypes.object,
  validation: PropTypes.func,
};

Form4u.defaultProps = {
  formStyle: {},
  submitOnDirty: false,
  formFields: {
    label: null,
    required: false,
    fieldProps: {},
    defaultValue: null,
    fieldStyle: {},
    mask: null,
  },
  validation: () => undefined,
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10,
  },
  field: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form4u;
