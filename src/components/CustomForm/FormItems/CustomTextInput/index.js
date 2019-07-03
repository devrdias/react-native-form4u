import { Label } from 'native-base';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container, Error, ErrorMessage, StyledInput, StyledItem,
} from './styles';

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
    <Container>
      <StyledItem
        floatingLabel={floatingLabel}
        borderColor={borderColor}
        borderWidth={borderWidth}
        error={error}
      >
        <Label style={{ fontSize: 16 }}>{labelText}</Label>
        <StyledInput
          ref={inputEl}
          multiline={multiline}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
        />
        {error && <Icon type="AntDesign" name="close" />}
      </StyledItem>

      {error && (
        <Error>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Error>
      )}
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
  errorMessage: PropTypes.string,
};

CustomTextInput.defaultProps = {
  labelText: ' ',
  multiline: false,
  inputProps: {},
  floatingLabel: true,
  borderWidth: 1,
  borderColor: '#78909C',
  error: false,
  errorMessage: ' ',
};

export default CustomTextInput;
