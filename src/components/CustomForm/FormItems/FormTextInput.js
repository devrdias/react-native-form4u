import {
  Input, Item, Label, View
} from 'native-base';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
/**
 * A stateless function component which renders a TextInput.
 *
 * @param {obj} props
 */
const FormTextInput = ({
  labelText, multiline, floatingLabel, ...inputProps
}) => {
  const [borderColor, setBorderColor] = useState('#78909C');
  const [borderWidth, setBorderWidth] = useState(2);
  const inputEl = useRef(null);

  const onFocus = () => {
    setBorderColor('#0E80DA');
    setBorderWidth(2);
  };

  const onBlur = () => {
    setBorderColor('#78909C');
    setBorderWidth(1);
  };

  return (
    <View style={styles.inputWrapper}>
      <Item floatingLabel={floatingLabel} style={{ borderColor, borderWidth }}>
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
      </Item>

      {/* {errors.email && <Icon type="AntDesign" name="close" />} */}
      {/* <View> */}
      {/* {errors.email && <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>} */}
      {/* </View> */}
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
    flex: 1
  },
  textInput: {
    fontSize: 15
    // fontFamily: "OpenSans-SemiBold"
  },
  label: {
    fontSize: 16,
    paddingTop: 2
    // fontFamily: "OpenSans"
  },
  textarea: {
    height: 80
  }
});

export default FormTextInput;
