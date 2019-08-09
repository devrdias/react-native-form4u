import { Input, Label } from "native-base";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import { Container, Error, ErrorMessage, StyledItem } from "./styles";

/**
 * A stateless function component which renders a TextInput.
 *
 * @param {obj} props
 */
const CustomTextInput = ({
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
    <Container>
      <StyledItem
        floatingLabel={floatingLabel}
        borderColor={borderColor}
        borderWidth={borderWidth}
        error={error}
      >
        <Label style={{ fontSize: 16 }}>{labelText}</Label>
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
        {error && (
          <Icon type="AntDesign" style={{ color: "red" }} name="close" />
        )}
      </StyledItem>

      <Error>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Error>
    </Container>
  );
};

CustomTextInput.propTypes = {
  labelText: PropTypes.string,
  multiline: PropTypes.bool,
  inputProps: PropTypes.object,
  floatingLabel: PropTypes.bool,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  error: PropTypes.bool,
  type: PropTypes.string,
  errorMessage: PropTypes.string
};

CustomTextInput.defaultProps = {
  labelText: " ",
  multiline: false,
  inputProps: {},
  floatingLabel: true,
  borderWidth: 0,
  borderColor: "#78909C",
  error: false,
  errorMessage: " "
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15
  },
  textarea: {
    height: 80
  }
});

export default CustomTextInput;
