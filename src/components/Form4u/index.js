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
  formFieldsRows, handleSubmit, validation, Form4uStyle,
}) => {
  const {
    fields,
    handleOnChangeValue,
    errors,
    isSubmitting,
    handleOnSubmitForm,
    resetForm,
    isValidFormData,
    isDirtyFormData,
  } = useForm4u(formFieldsRows, handleSubmit, validation);

  /**
   * Reset the form and hide the keyboard.
   */
  const handleOnClickReset = () => {
    Keyboard.dismiss();
    resetForm();
  };

  const renderTextInput = ({ name, label, inputProps }) => {
    const hasError = !!errors[name];
    const errorMessage = hasError ? errors[name] : ' ';

    return (
      <CustomTextInput
        {...inputProps}
        value={fields[name].value.toString()}
        onChangeText={handleOnChangeValue(name)}
        labelText={label}
        error={hasError}
        errorMessage={errorMessage}
        key={name}
      />
    );
  };

  const renderBooleanInput = ({ name, label, inputProps }) => (
    <CustomSwitch
      {...inputProps}
      value={fields[name].value}
      onValueChange={handleOnChangeValue(name)}
      labelText={label}
      key={name}
    />
  );

  const renderButton = ({ label, buttonProps }) => {
    const disabled = buttonProps && buttonProps.preventSubmitOnDirty ? !isValidFormData : false;

    return label.toUpperCase().includes('RESET') ? (
      <CustomButton {...buttonProps} onPress={handleOnClickReset} disabled={disabled} key={label}>
        {label}
      </CustomButton>
    ) : (
      <CustomButton {...buttonProps} onPress={handleOnSubmitForm} disabled={disabled} key={label}>
        {label}
      </CustomButton>
    );
  };

  const renderReactComponent = ({ children, customStyle }) => (children ? (
    <View
        // style={[{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }, { ...customStyle }]}
      style={styles.row}
      key={children.key}
    >
      {children}
    </View>
  ) : (
    <View />
  ));

  const renderPicker = ({
    name, placeholder, pickerItems, pickerProps,
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
        {...pickerProps}
      />
    );
  };

  const renderLoading = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#482fff" />
    </View>
  );

  return (
    <>
      {isSubmitting && renderLoading()}
      <Form autoFocus={false} style={{ ...Form4uStyle }}>
        {formFieldsRows.map((formFieldsRow, i) => (
          <View style={styles.row} key={`f-${i}`}>
            {formFieldsRow.map((field) => {
              switch (field.type) {
                case 'boolean':
                  return renderBooleanInput(field);

                case 'button':
                  return renderButton(field);

                case 'reactComponent':
                  return renderReactComponent(field);

                case 'input':
                  return renderTextInput(field);

                case 'picker':
                  return renderPicker(field);

                default:
                  return <View />;
              }
            })}
          </View>
        ))}
      </Form>
    </>
  );
};

Form4u.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formFieldsRows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        type: PropTypes.oneOf(['boolean', 'button', 'reactComponent', 'input', 'picker'])
          .isRequired,
        inputProps: PropTypes.object,
        defaultValue: PropTypes.any,
        customStyle: PropTypes.object,
        maskType: PropTypes.oneOf([
          'credit-card',
          'cpf',
          'cnpj',
          'zip-code',
          'only-numbers',
          'money',
          'cel-phone',
          'datetime',
          'custom',
        ]),
        maskOptions: PropTypes.object,
        buttonProps: PropTypes.object,
      }),
    ),
  ).isRequired,
  Form4uStyle: PropTypes.object,
  validation: PropTypes.func,
};

Form4u.defaultProps = {
  Form4uStyle: { flex: 1 },
  validation: () => undefined,
};

const styles = StyleSheet.create({
  row: {
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
