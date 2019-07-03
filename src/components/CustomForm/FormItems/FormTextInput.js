import { Input, Item, Label, View, Text } from "native-base";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
/**
 * A stateless function component which renders a TextInput.
 *
 * @param {obj} props
 */
const FormTextInput = ({
  labelText,
  multiline,
  floatingLabel,
  error,
  errorMessage,
  ...inputProps
}) => {
  const [borderColor, setBorderColor] = useState("#78909C");
  const [borderWidth, setBorderWidth] = useState(2);
  const inputEl = useRef(null);

  const onFocus = () => {
    setBorderColor("#0E80DA");
    setBorderWidth(2);
  };

  const onBlur = () => {
    setBorderColor("#78909C");
    setBorderWidth(1);
  };

  return (
    <View style={styles.inputWrapper}>
      <Item
        floatingLabel={floatingLabel}
        style={{ borderColor: error ? "red" : borderColor, borderWidth }}
        error={error}
      >
        {labelText && <Label style={styles.label}>{labelText}</Label>}
        <Input
          ref={inputEl}
          style={[styles.textInput, multiline && styles.textarea]}
          blurOnSubmit
          returnKeyType="next"
          multiline={multiline}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
        />
        {error && <Icon type="AntDesign" name="close" />}
      </Item>
      <View>
        {error && (
          <Text style={{ color: "red", fontSize: 12 }}>{errorMessage}</Text>
        )}
      </View>
    </View>
  );
};

FormTextInput.propTypes = {
  labelText: PropTypes.string,
  multiline: PropTypes.bool,
  inputProps: PropTypes.object
  // maskType: PropTypes.oneOf([
  //   'credit-card',
  //   'cpf',
  //   'cnpj',
  //   'zip-code',
  //   'only-numbers',
  //   'money',
  //   'cel-phone',
  //   'datetime',
  //   'custom',
  // ]),
  // maskOptions: PropTypes.object,
};

FormTextInput.defaultProps = {
  labelText: null,
  multiline: false,
  inputProps: {},
  floatingLabel: true
  // maskType: null,
  // maskOptions: {},
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    padding: 4
  },
  textInput: {
    fontSize: 15
  },
  label: {
    fontSize: 16,
    paddingTop: 2
  },
  textarea: {
    height: 80
  }
});

export default FormTextInput;
