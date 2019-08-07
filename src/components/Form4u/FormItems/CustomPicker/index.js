import { Picker } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container, Error, ErrorMessage, StyledItemPicker, StyledPicker,
} from './styles';

const CustomPicker = ({
  placeholder, pickerItems, error, errorMessage, ...pickerProps
}) => (
  <Container>
    <StyledItemPicker>
      <StyledPicker placeholder={placeholder} {...pickerProps}>
        {pickerItems.map((item, i) => (
          <Picker.Item key={i.toString()} label={item.label} value={item.value.toString()} />
        ))}
      </StyledPicker>
    </StyledItemPicker>
    {error && (
      <Error>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Error>
    )}
  </Container>
);

CustomPicker.propTypes = {
  placeholder: PropTypes.string,
  iosHeader: PropTypes.string,
  pickerItems: PropTypes.array,
  headerBackButtonText: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

CustomPicker.defaultProps = {
  placeholder: ' ',
  iosHeader: ' ',
  pickerItems: [],
  headerBackButtonText: 'Voltar',
  error: false,
  errorMessage: null,
};

export default CustomPicker;
