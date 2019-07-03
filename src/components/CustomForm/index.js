import { Form, View } from "native-base";
import PropTypes from "prop-types";
import React from "react";
import { ActivityIndicator, Keyboard, StyleSheet } from "react-native";
import FormBooleanInput from "./FormItems/FormBooleanInput";
import FormButton from "./FormItems/FormButton";
import FormPicker from "./FormItems/FormPicker";
import FormTextInput from "./FormItems/FormTextInput";
import useCustomForm from "./hooks/useCustomForm";

/**
 * A component which renders a form based on a given list of fields.
 */
const CustomForm = ({
  formFieldsRows,
  handleSubmit,
  validation,
  customFormStyle
}) => {
  const {
    fields,
    handleOnChangeValue,
    errors,
    isSubmitting,
    handleOnSubmitForm,
    resetForm,
    isValidFormData,
    isDirtyFormData
  } = useCustomForm(formFieldsRows, handleSubmit, validation);

  /**
   * Reset the form and hide the keyboard.
   */
  const handleOnClickReset = () => {
    Keyboard.dismiss();
    resetForm();
  };

  const renderTextInput = ({ name, label, inputProps }) => {
    const hasError = !!errors[name];
    const errorMessage = hasError ? errors[name] : " ";

    return (
      <FormTextInput
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
    <FormBooleanInput
      {...inputProps}
      value={fields[name].value}
      onValueChange={handleOnChangeValue(name)}
      labelText={label}
      key={name}
    />
  );

  const renderButton = ({ label, buttonProps }) => {
    const disabled =
      buttonProps && buttonProps.preventSubmitOnDirty
        ? !isValidFormData
        : false;

    return label.toUpperCase().includes("RESET") ? (
      <FormButton
        {...buttonProps}
        onPress={handleOnClickReset}
        disabled={disabled}
        key={label}
      >
        {label}
      </FormButton>
    ) : (
      <FormButton
        {...buttonProps}
        onPress={handleOnSubmitForm}
        disabled={disabled}
        key={label}
      >
        {label}
      </FormButton>
    );
  };

  const renderReactComponent = ({ children, customStyle }) =>
    children ? (
      <View
        style={[
          { flex: 1, flexDirection: "row", justifyContent: "flex-end" },
          { ...customStyle }
        ]}
        key={children.key}
      >
        {children}
      </View>
    ) : (
      <View />
    );

  const renderPicker = ({ name, placeholder, pickerItems, pickerProps }) => (
    <FormPicker
      key={name}
      selectedValue={fields[name].value}
      pickerItems={pickerItems}
      placeholder={placeholder}
      onValueChange={handleOnChangeValue(name)}
      {...pickerProps}
    />
  );

  const renderLoading = () => {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator size="large" color="#482fff" />
      </View>
    );
  };

  return (
    <>
      {isSubmitting && renderLoading()}
      <Form
        autoFocus={false}
        style={[
          {
            flex: 1
            // justifyContent: 'space-between',
            // backgroundColor: 'green',
          },
          { ...customFormStyle }
        ]}
      >
        {formFieldsRows.map((formFieldsRow, i) => (
          <View style={styles.row} key={`f-${i}`}>
            {formFieldsRow.map(field => {
              switch (field.type) {
                case "boolean":
                  return renderBooleanInput(field);

                case "button":
                  return renderButton(field);

                case "reactComponent":
                  return renderReactComponent(field);

                case "input":
                  return renderTextInput(field);

                case "picker":
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

CustomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formFieldsRows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        type: PropTypes.oneOf([
          "boolean",
          "button",
          "reactComponent",
          "input",
          "picker"
        ]).isRequired,
        inputProps: PropTypes.object,
        defaultValue: PropTypes.any,
        customStyle: PropTypes.object,
        maskType: PropTypes.oneOf([
          "credit-card",
          "cpf",
          "cnpj",
          "zip-code",
          "only-numbers",
          "money",
          "cel-phone",
          "datetime",
          "custom"
        ]),
        maskOptions: PropTypes.object,
        buttonProps: PropTypes.object
      })
    )
  ).isRequired,
  customFormStyle: PropTypes.object
};

CustomForm.defaultProps = {
  formFieldsRows: [
    [
      {
        buttonProps: {
          preventSubmitOnDirty: true
        }
      }
    ]
  ]
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingBottom: 15
  }
});

export default CustomForm;
